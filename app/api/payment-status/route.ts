import { NextRequest } from 'next/server';
import { getPaymentStatus } from '../webhook/route';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('paymentId');

    if (!paymentId) {
      return new Response(
        JSON.stringify({ error: 'ID do pagamento é obrigatório' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const status = getPaymentStatus(paymentId);
    
    if (status === null) {
      return new Response(
        JSON.stringify({ error: 'Pagamento não encontrado' }),
        { 
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Mapear status numérico para texto
    let statusText = 'pending';
    if (status === 1) {
      statusText = 'paid';
    } else if (status === 2) {
      statusText = 'failed';
    } else if (status === 3) {
      statusText = 'refunded';
    }

    return new Response(
      JSON.stringify({ 
        status: statusText,
        numericStatus: status
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Erro ao verificar status do pagamento:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao verificar status do pagamento' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}