import { NextRequest } from 'next/server';

// Função para verificar se o webhook é válido (opcional, se a HorsePay fornecer um método de verificação)
function verifyWebhookSignature(request: NextRequest, body: any): boolean {
  // Se a HorsePay fornecer um método de verificação, implemente aqui
  // Por enquanto, vamos assumir que o webhook é válido
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Obter o corpo da requisição
    const body = await request.json();
    
    // Verificar se o webhook é válido (se aplicável)
    if (!verifyWebhookSignature(request, body)) {
      return new Response(
        JSON.stringify({ error: 'Webhook inválido' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
    // Processar diferentes tipos de webhooks
    if (body.hasOwnProperty('external_id') && body.hasOwnProperty('status') && body.hasOwnProperty('amount')) {
      // Este é um callback de depósito
      console.log('Webhook de depósito recebido:', body);
      
      // Aqui você pode atualizar o status do pagamento no seu banco de dados
      // Por exemplo:
      // await updatePaymentStatus(body.external_id, body.status);
      
      // Retornar sucesso
      return new Response(
        JSON.stringify({ message: 'Webhook de depósito processado com sucesso' }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    } else if (body.hasOwnProperty('external_id') && body.hasOwnProperty('end_to_end_id')) {
      // Este é um callback de saque
      console.log('Webhook de saque recebido:', body);
      
      // Aqui você pode atualizar o status do saque no seu banco de dados
      // Por exemplo:
      // await updateWithdrawalStatus(body.external_id, body.status);
      
      // Retornar sucesso
      return new Response(
        JSON.stringify({ message: 'Webhook de saque processado com sucesso' }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    } else {
      // Webhook desconhecido
      console.log('Webhook desconhecido recebido:', body);
      
      return new Response(
        JSON.stringify({ message: 'Webhook recebido mas não processado' }),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao processar webhook' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}

// A HorsePay provavelmente não usa GET para webhooks, mas vamos implementar para testes
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Endpoint de webhook da HorsePay' }),
    { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
}