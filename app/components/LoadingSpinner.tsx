import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'black';
  message?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue',
  message 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-600 border-t-blue-600',
    white: 'border-white border-t-white',
    black: 'border-black border-t-black'
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className={`rounded-full border-4 border-opacity-25 animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} />
      {message && (
        <p className="mt-4 text-center text-black">
          {message}
        </p>
      )}
    </div>
  );
}