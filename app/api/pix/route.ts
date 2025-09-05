import { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Configuração do Mercado Pago
const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || '';

// Verificar se o token de acesso foi configurado
console.log('=== DEBUG MERCADO PAGO ===');
console.log('Token configurado:', !!accessToken);
console.log('Token length:', accessToken?.length || 0);
console.log('Token prefix:', accessToken?.substring(0, 20) + '...');
console.log('========================');

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
    const { amount, description, payerEmail } = await request.json();

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

    // Validar email do pagador, se fornecido
    const payer = {
      email: 'user@example.com', // email padrão
    };
    
    if (payerEmail && typeof payerEmail === 'string') {
      payer.email = payerEmail;
    }

    // Criar um pagamento PIX usando o Mercado Pago
    const body = {
      transaction_amount: transactionAmount,
      description: description,
      payment_method_id: 'pix',
      payer: payer
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

    // Log para depuração
    console.log('Usando token de acesso:', accessToken ? 'Token configurado' : 'Token não configurado');
    console.log('Tamanho do token:', accessToken?.length || 0);
    console.log('Corpo da requisição:', JSON.stringify(body));

    const result = await payment.create({ body });
    
    // Verificar se a resposta contém os dados necessários
    if (!result.point_of_interaction?.transaction_data?.qr_code_base64) {
      console.error('Erro na resposta do Mercado Pago:', result);
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
        qr_code: result.point_of_interaction.transaction_data.qr_code,
        qr_code_base64: `data:image/png;base64,${result.point_of_interaction.transaction_data.qr_code_base64}`,
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
    console.error('Detalhes do erro:', {
      message: error.message,
      status: error.status,
      cause: error.cause
    });
    
    // Tratar erros específicos do Mercado Pago
    if (error.status === 401) {
      console.error('Token de acesso atual:', accessToken?.substring(0, 30) + '...');
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