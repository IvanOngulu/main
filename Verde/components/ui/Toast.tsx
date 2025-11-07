
import React from 'react';
import { CheckCircleIcon, XCircleIcon } from './Icons';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`flex items-center text-white px-4 py-3 rounded-md shadow-lg ${bgColor} animate-fade-in-right`}>
      {type === 'success' ? <CheckCircleIcon className="w-5 h-5 mr-2" /> : <XCircleIcon className="w-5 h-5 mr-2" />}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">
        &times;
      </button>
    </div>
  );
};

export default Toast;
