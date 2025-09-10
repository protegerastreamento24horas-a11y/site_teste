import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    
    // Registrar o payload do webhook para debugging
    console.log('Webhook recebido:', payload);
    
    // Verificar se é um webhook de pagamento
    if (payload.hasOwnProperty('external_id') && payload.hasOwnProperty('status')) {
      // Processar webhook de pagamento
      console.log(`Pagamento ${payload.external_id} atualizado para status: ${payload.status}`);
      
      // Aqui você pode:
      // 1. Atualizar o status do pagamento no seu banco de dados
      // 2. Enviar notificações por e-mail ou WhatsApp
      // 3. Liberar o produto/serviço para o cliente
      
      // Exemplo de processamento:
      // if (payload.status === 1) {
      //   // Pagamento confirmado
      //   await updatePaymentStatus(payload.external_id, 'confirmed');
      // } else if (payload.status === 0) {
      //   // Pagamento pendente
      //   await updatePaymentStatus(payload.external_id, 'pending');
      // }
    }
    
    // Verificar se é um webhook de saque
    if (payload.hasOwnProperty('end_to_end_id') && payload.hasOwnProperty('status')) {
      // Processar webhook de saque
      console.log(`Saque ${payload.external_id} atualizado para status: ${payload.status}`);
      
      // Aqui você pode:
      // 1. Atualizar o status do saque no seu banco de dados
      // 2. Enviar notificações sobre o status do saque
      
      // Exemplo de processamento:
      // if (payload.status === 1) {
      //   // Saque concluído
      //   await updateWithdrawalStatus(payload.external_id, 'completed');
      // } else if (payload.status === 0) {
      //   // Saque pendente
      //   await updateWithdrawalStatus(payload.external_id, 'pending');
      // } else if (payload.status === 'refunded') {
      //   // Saque reembolsado/falhou
      //   await updateWithdrawalStatus(payload.external_id, 'refunded');
      // }
    }
    
    // Retornar sucesso
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Webhook processado com sucesso'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error: any) {
    console.error('Erro ao processar webhook:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Erro desconhecido ao processar webhook'
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

// Endpoint para verificar o estado de depósitos bloqueados
export async function GET(request: NextRequest) {
  try {
    // Extrair o ID do parâmetro de consulta
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return new Response(
        JSON.stringify({ 
          error: 'ID é obrigatório',
          message: 'Por favor, forneça o ID do depósito bloqueado'
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
    
    // Aqui você faria uma chamada para verificar o estado do depósito bloqueado
    // Esta é uma implementação de exemplo
    const blockedDepositStatus = {
      external_id: id,
      status: 'pending', // ou 'rejected' ou 'accepted'
      defense: false,
      defense_text: ''
    };
    
    return new Response(
      JSON.stringify(blockedDepositStatus),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error: any) {
    console.error('Erro ao verificar estado do depósito bloqueado:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Erro ao verificar estado do depósito',
        message: error.message || 'Erro desconhecido'
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