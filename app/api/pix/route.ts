import { NextRequest } from 'next/server';

// Configuração do HorsePay
const HORSEPAY_API_URL = 'https://api.horsepay.io';
const HORSEPAY_CLIENT_KEY = process.env.HORSEPAY_CLIENT_KEY || '';
const HORSEPAY_CLIENT_SECRET = process.env.HORSEPAY_CLIENT_SECRET || '';

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

    // Verificar se as credenciais estão configuradas
    if (!HORSEPAY_CLIENT_KEY || !HORSEPAY_CLIENT_SECRET) {
      return new Response(
        JSON.stringify({ 
          error: 'Configuração incompleta',
          message: 'Credenciais do HorsePay não configuradas'
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // 1. Obter token de acesso
    const authResponse = await fetch(`${HORSEPAY_API_URL}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_key: HORSEPAY_CLIENT_KEY,
        client_secret: HORSEPAY_CLIENT_SECRET
      }),
    });

    const authData = await authResponse.json();
    
    if (!authResponse.ok) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro de autenticação',
          message: authData.message || 'Não foi possível autenticar com o HorsePay',
          details: authData
        }),
        { 
          status: authResponse.status,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const accessToken = authData.access_token;

    // 2. Criar pedido de pagamento
    const orderResponse = await fetch(`${HORSEPAY_API_URL}/transaction/neworder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        payer_name: payerEmail || 'Cliente',
        amount: transactionAmount,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook`,
        description: description
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro ao criar pedido',
          message: orderData.message || 'Não foi possível criar o pedido de pagamento',
          details: orderData
        }),
        { 
          status: orderResponse.status,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Retornar o QR Code e o código PIX
    return new Response(
      JSON.stringify({
        qr_code: orderData.copy_past,
        qr_code_base64: orderData.payment,
        id: orderData.external_id,
        status: orderData.status,
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