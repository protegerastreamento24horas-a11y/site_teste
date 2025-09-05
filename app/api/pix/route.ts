import { NextRequest } from 'next/server';

// Função para obter token de acesso da HorsePay
async function getHorsePayAccessToken() {
  const clientKey = process.env.HORSEPAY_CLIENT_KEY || '';
  const clientSecret = process.env.HORSEPAY_CLIENT_SECRET || '';

  if (!clientKey || !clientSecret) {
    throw new Error('Credenciais da HorsePay não configuradas');
  }

  const response = await fetch('https://api.horsepay.io/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_key: clientKey,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error(`Erro ao obter token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Função para criar um pedido na HorsePay
async function createHorsePayOrder(accessToken: string, amount: number, description: string, payerName: string) {
  const response = await fetch('https://api.horsepay.io/transaction/neworder', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      payer_name: payerName || 'Cliente',
      amount: amount,
      callback_url: 'https://seu-webhook.com/callback', // Substitua pela sua URL de callback
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao criar pedido: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data;
}

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

    try {
      // Obter token de acesso
      const accessToken = await getHorsePayAccessToken();
      
      // Criar pedido
      const order = await createHorsePayOrder(
        accessToken, 
        transactionAmount, 
        description, 
        payerEmail || 'Cliente'
      );
      
      // Retornar o QR Code e o código PIX
      return new Response(
        JSON.stringify({
          qr_code: order.copy_past,
          qr_code_base64: order.payment,
          id: order.external_id,
          status: order.status,
        }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    } catch (horsePayError: any) {
      console.error('Erro na integração com HorsePay:', horsePayError);
      return new Response(
        JSON.stringify({ 
          error: 'Erro na integração com HorsePay',
          message: horsePayError.message || 'Não foi possível gerar o código PIX',
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
  } catch (error: any) {
    console.error('Erro ao gerar pagamento PIX:', error);
    console.error('Detalhes do erro:', {
      message: error.message,
      status: error.status,
      cause: error.cause,
      stack: error.stack
    });
    
    // Tratar erros específicos do Mercado Pago
    if (error.status === 401) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro de autenticação',
          message: 'Credenciais inválidas ou expiradas',
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