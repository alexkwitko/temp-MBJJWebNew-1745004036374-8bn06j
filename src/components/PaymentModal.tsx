import React from 'react';
import { X, CreditCard, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  productName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, productName }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      alert('Payment processed successfully!');
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/50 z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-50 rounded-lg shadow-xl z-50"
          >
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900">Secure Payment</h3>
              <button 
                onClick={onClose}
                className="text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-medium text-neutral-700 mb-2">Order Summary</h4>
                <div className="bg-neutral-100 p-4 rounded-md">
                  <p className="text-neutral-900 font-medium">{productName}</p>
                  <p className="text-2xl font-bold text-secondary-500 mt-2">
                    ${amount.toFixed(2)}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 pl-10"
                      />
                      <CreditCard size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary-500 text-neutral-50 py-3 rounded-md hover:bg-secondary-600 transition-colors flex items-center justify-center font-bold"
                  >
                    <Lock size={20} className="mr-2" />
                    Pay ${amount.toFixed(2)}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-neutral-500">
                <p className="flex items-center justify-center">
                  <Lock size={16} className="mr-1" />
                  Secured by Stripe
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;