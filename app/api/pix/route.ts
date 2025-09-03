import { NextRequest } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Configuração do Mercado Pago
// Substitua 'YOUR_ACCESS_TOKEN' pelo seu token real do Mercado Pago
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN',
  options: { timeout: 5000 }
});

const payment = new Payment(client);

export async function POST(request: NextRequest) {
  try {
    const { amount, description } = await request.json();

    // Criar um pagamento PIX usando o Mercado Pago
    const body = {
      transaction_amount: amount,
      description: description,
      payment_method_id: 'pix',
      payer: {
        email: 'user@example.com', // Em uma aplicação real, você obteria isso do usuário
      }
    };

    const result = await payment.create({ body });
    
    // Retornar o QR Code e o código PIX
    return new Response(
      JSON.stringify({
        qr_code: result.point_of_interaction?.transaction_data?.qr_code_base64,
        qr_code_base64: result.point_of_interaction?.transaction_data?.qr_code,
        id: result.id,
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Erro ao gerar pagamento PIX:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao gerar pagamento PIX' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}