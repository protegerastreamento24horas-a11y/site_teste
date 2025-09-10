import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  message?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  message 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  const colorClasses = {
    primary: 'border-green-500',
    secondary: 'border-blue-500',
    white: 'border-white'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={`animate-spin rounded-full border-b-2 ${sizeClasses[size]} ${colorClasses[color]}`}
        role="status"
        aria-label="Carregando"
      >
        <span className="sr-only">Carregando...</span>
      </div>
      {message && (
        <p className="mt-3 text-gray-600 text-center">{message}</p>
      )}
    </div>
  );
}