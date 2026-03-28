'use client';

import { useState, useRef, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { ALL_CURRENCIES, CURRENCY_FLAGS, CURRENCY_LABELS, SYMBOLS } from '../lib/currency';
import type { Currency } from '../lib/currency';

export const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 bg-white/10 border border-yellow-400/30 hover:border-yellow-400 text-yellow-400 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200"
        aria-label="Switch currency"
      >
        <span>{CURRENCY_FLAGS[currency]}</span>
        <span>{SYMBOLS[currency]}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-blue-950 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
          {ALL_CURRENCIES.map((c: Currency) => (
            <button
              key={c}
              onClick={() => { setCurrency(c); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 ${
                c === currency
                  ? 'bg-yellow-400/20 text-yellow-400 font-semibold'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{CURRENCY_FLAGS[c]}</span>
              <span>{CURRENCY_LABELS[c]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
