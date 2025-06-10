'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'SAR' | 'AED';

interface CurrencyContextProps {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('SAR');

  const symbol = currency === 'SAR' ? 'SAR' : 'AED';

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
};
