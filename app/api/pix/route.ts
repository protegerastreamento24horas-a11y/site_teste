import { NextRequest } from 'next/server';

// Configuração do HorsePay
const HORSEPAY_API_URL = 'https://api.horsepay.com.br';
const HORSEPAY_API_KEY = process.env.HORSEPAY_API_KEY || '';

// Verificar se a chave de API foi configurada
console.log('=== DEBUG HORSEPAY ===');
console.log('API Key configurada:', !!HORSEPAY_API_KEY);
console.log('API Key length:', HORSEPAY_API_KEY?.length || 0);
console.log('======================');

if (!HORSEPAY_API_KEY) {
  console.error('HORSEPAY_API_KEY não está configurado');
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

    // Validar email do pagador, se fornecido
    const payer = {
      email: 'user@example.com', // email padrão
    };
    
    if (payerEmail && typeof payerEmail === 'string') {
      payer.email = payerEmail;
    }

    // Verificar se a chave de API está configurada antes de fazer a chamada
    if (!HORSEPAY_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: 'Configuração incompleta',
          message: 'Chave de API do HorsePay não configurada'
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Criar um pagamento PIX usando o HorsePay
    const response = await fetch(`${HORSEPAY_API_URL}/v1/pix/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HORSEPAY_API_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        amount: transactionAmount,
        description: description,
        payer: payer,
        currency: 'BRL'
      }),
    });

    const result = await response.json();

    // Verificar se houve erro na resposta
    if (!response.ok) {
      console.error('Erro na resposta do HorsePay:', result);
      return new Response(
        JSON.stringify({ 
          error: 'Erro na resposta do HorsePay',
          message: result.message || 'Não foi possível gerar o código PIX',
          details: result
        }),
        { 
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
    // Verificar se a resposta contém os dados necessários
    if (!result.qrCode || !result.pixCode) {
      return new Response(
        JSON.stringify({ 
          error: 'Erro na resposta do HorsePay',
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
        qr_code: result.pixCode,
        qr_code_base64: result.qrCode,
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