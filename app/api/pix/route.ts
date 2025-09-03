import { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Configuração do Mercado Pago
const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || '';

// Verificar se o token de acesso foi configurado
if (!accessToken) {
  console.error('MERCADO_PAGO_ACCESS_TOKEN não está configurado');
}

const client = new MercadoPagoConfig({ 
  accessToken: accessToken,
  options: { timeout: 5000 }
});

const payment = new Payment(client);

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    // Validar campos obrigatórios
    if (!amount || !description) {
      return new Response(
        JSON.stringify({ 
          error: 'Valor e descrição são obrigatórios',
          message: 'Por favor, preencha todos os campos obrigatórios'
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Validar se o valor é um número positivo
    const transactionAmount = Number(amount);
    if (isNaN(transactionAmount) || transactionAmount <= 0) {
      return new Response(
        JSON.stringify({ 
          error: 'Valor inválido',
          message: 'O valor deve ser um número positivo'
        }),
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
      transaction_amount: transactionAmount,
      description: description,
      payment_method_id: 'pix',
      payer: {
        email: 'user@example.com',
      }
    };

    // Verificar se o token de acesso está configurado antes de fazer a chamada
    if (!accessToken) {
      return new Response(
        JSON.stringify({ 
          error: 'Configuração incompleta',
          message: 'Token de acesso do Mercado Pago não configurado'
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const result = await payment.create({ body });
    
    // Verificar se a resposta contém os dados necessários
    if (!result.point_of_interaction?.transaction_data?.qr_code_base64) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro na resposta do Mercado Pago',
          message: 'Não foi possível gerar o código PIX',
          details: result
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
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
    
    // Tratar erros específicos do Mercado Pago
    if (error.status === 401) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro de autenticação',
          message: 'Token de acesso inválido ou expirado',
          status: error.status
        }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
    if (error.status === 400) {
      return new Response(
        JSON.stringify({ 
          error: 'Dados inválidos',
          message: 'Dados enviados estão incorretos',
          details: error.message,
          status: error.status
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
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