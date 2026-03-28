'use client';

import { useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import type { Currency } from '../lib/currency';

const EU_COUNTRIES = new Set([
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI',
  'FR','GR','HR','HU','IE','IT','LT','LU','LV','MT',
  'NL','PL','PT','RO','SE','SI','SK',
]);

function countryToCurrency(code: string): Currency {
  if (code === 'US' || code === 'CA' || code === 'AU') return 'USD';
  if (code === 'GB') return 'GBP';
  if (EU_COUNTRIES.has(code)) return 'EUR';
  return 'INR';
}

function hasCurrencyCookie(): boolean {
  return document.cookie.split(';').some((c) => c.trim().startsWith('currency='));
}

// Renders nothing — just runs geo-IP detection on first load
// when no currency cookie exists (i.e. shared hosting where middleware
// cannot inject x-vercel-ip-country or cf-ipcountry headers).
export const GeoIpInit = () => {
  const { setCurrency } = useCurrency();

  useEffect(() => {
    if (hasCurrencyCookie()) return; // already set by middleware or user

    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        const code = data.country_code ?? '';
        const currency = countryToCurrency(code);
        setCurrency(currency); // updates context + writes cookie
      })
      .catch(() => {
        // silently fall back to INR (already the default)
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};
