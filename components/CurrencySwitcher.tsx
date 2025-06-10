'use client';

import { useCurrency } from '@/context/CurrencyContext';

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex gap-2 items-center">
      <button
        className={`px-3 py-1 rounded ${
          currency === 'SAR' ? 'bg-black text-white' : 'bg-gray-200'
        }`}
        onClick={() => setCurrency('SAR')}
      >
        SAR
      </button>
      <button
        className={`px-3 py-1 rounded ${
          currency === 'AED' ? 'bg-black text-white' : 'bg-gray-200'
        }`}
        onClick={() => setCurrency('AED')}
      >
        AED
      </button>
    </div>
  );
}
