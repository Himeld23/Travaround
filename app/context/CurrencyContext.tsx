'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Currency } from '../lib/currency';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'INR',
  setCurrency: () => {},
});

function writeCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/;samesite=lax`;
}

export function CurrencyProvider({
  children,
  initialCurrency,
}: {
  children: ReactNode;
  initialCurrency: Currency;
}) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    // Persist choice; flag it as manual so middleware won't override
    writeCookie('currency', c, 1);
    writeCookie('currency_manual', '1', 1);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
