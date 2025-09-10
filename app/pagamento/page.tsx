'use client';

import { Suspense } from 'react';
import PaymentContent from './payment-content';

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando página de pagamento...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
