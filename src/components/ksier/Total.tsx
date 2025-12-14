import React, { useState } from 'react';
import { Banknote, QrCode } from 'lucide-react';

import { formatThousandSeparator } from '@/lib/utils';

export const Total = ({
  total,
  onOrder,
  onPaymentMethodChange,
  paymentMethod,
  foodLength,
  drinkLength,
  onCancel,
}: {
  total: number;
  onOrder: () => void;
  onPaymentMethodChange: (method: string) => void;
  paymentMethod: string;
  foodLength: number;
  drinkLength: number;
  onCancel?: () => void;
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>('');

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
    onPaymentMethodChange(method); // Notify parent component of the change
  };

  return (
    <>
      <div
        className={[
          'p-5 space-y-4',
          total > 0
            ? 'bg-green-50/50 border border-green-300'
            : 'bg-gray-50/50 border border-gray-300',
        ].join(' ')}
      >
        <div className="space-y-2">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Total:</span>
              <span className="text-xs opacity-50">Order ID: 0001</span>
            </div>
            <p className="text-4xl font-semibold flex items-start gap-2">
              <span className="text-2xl">Rp.</span>{' '}
              {formatThousandSeparator(total)}
            </p>
          </div>
          <p className="opacity-50 text-sm">
            {foodLength} foods, {drinkLength} drinks
          </p>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-4">
          <p className="opacity-50 text-sm">
            Payment method:{' '}
            <span className="font-semibold">{paymentMethod}</span>
          </p>
          <div className="flex gap-4 justify-end">
            <button
              className={`py-1 px-2 border ${
                paymentMethod === 'Cash'
                  ? 'bg-white border-black'
                  : 'border-white'
              } bg-gray-200`}
              onClick={() => handlePaymentMethodSelect('Cash')}
            >
              <Banknote className="inline-block mr-1" />
              <span className="text-xs font-semibold">Cash</span>
            </button>
            <button
              className={`py-1 px-2 border ${
                paymentMethod === 'QRIS'
                  ? 'bg-white border-black'
                  : 'border-white'
              } bg-gray-200`}
              onClick={() => handlePaymentMethodSelect('QRIS')}
            >
              <QrCode className="inline-block mr-1" />
              <span className="text-xs font-semibold">QRIS</span>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={onOrder}
        disabled={!total || !paymentMethod} // Disable if no total or no payment method selected}
        className={[
          'w-full border border-green-500 shadow-md bg-green-300 btn',
        ].join(' ')}
      >
        Order
      </button>
    </>
  );
};
