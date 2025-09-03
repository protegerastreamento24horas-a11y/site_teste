import { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Configuração do Mercado Pago
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
  publicKey: process.env.MERCADO_PAGO_PUBLIC_KEY || '',
  options: { timeout: 5000 }
});

const payment = new Payment(client);

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    // Validar campos obrigatórios
    if (!amount || !description) {
      return new Response(
        JSON.stringify({ error: 'Valor e descrição são obrigatórios' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Criar um pagamento PIX usando o Mercado Pago
    const body = {
      transaction_amount: Number(amount),
      description: description,
      payment_method_id: 'pix',
      payer: {
        email: 'user@example.com',
      }
    };

    const result = await payment.create({ body });
    
    // Retornar o QR Code e o código PIX
    return new Response(
      JSON.stringify({
        qr_code: result.point_of_interaction?.transaction_data?.qr_code,
        qr_code_base64: result.point_of_interaction?.transaction_data?.qr_code_base64,
        id: result.id,
        status: result.status,
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error: any) {
    console.error('Erro ao gerar pagamento PIX:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erro ao gerar pagamento PIX',
        message: error.message || 'Erro desconhecido',
        status: error.status || 500
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}