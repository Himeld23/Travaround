export type Currency = 'INR' | 'USD' | 'GBP' | 'EUR';

// Approximate exchange rates relative to 1 INR
export const RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,   // ~83 INR = 1 USD
  GBP: 0.0096,  // ~105 INR = 1 GBP
  EUR: 0.011,   // ~90 INR = 1 EUR
};

export const SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  GBP: '£',
  EUR: '€',
};

export const CURRENCY_LABELS: Record<Currency, string> = {
  INR: 'INR ₹',
  USD: 'USD $',
  GBP: 'GBP £',
  EUR: 'EUR €',
};

export const CURRENCY_FLAGS: Record<Currency, string> = {
  INR: '🇮🇳',
  USD: '🇺🇸',
  GBP: '🇬🇧',
  EUR: '🇪🇺',
};

export const ALL_CURRENCIES: Currency[] = ['INR', 'USD', 'GBP', 'EUR'];

/**
 * Convert an INR amount to the target currency and return a formatted string.
 * e.g. formatPrice(45999, 'USD') → '$553'
 */
export function formatPrice(amountINR: number, currency: Currency): string {
  const converted = Math.round(amountINR * RATES[currency]);
  const symbol = SYMBOLS[currency];

  if (currency === 'INR') {
    return `₹${converted.toLocaleString('en-IN')}`;
  }

  return `${symbol}${converted.toLocaleString('en-US')}`;
}

/**
 * Validate that a string is a valid Currency code.
 */
export function isValidCurrency(value: string): value is Currency {
  return ALL_CURRENCIES.includes(value as Currency);
}
