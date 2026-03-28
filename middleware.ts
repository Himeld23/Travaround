import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const VALID_CURRENCIES = new Set(['INR', 'USD', 'GBP', 'EUR']);

// Euro-zone countries
const EU_COUNTRIES = new Set([
  'AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI',
  'FR','GR','HR','HU','IE','IT','LT','LU','LV','MT',
  'NL','PL','PT','RO','SE','SI','SK',
]);

function detectCurrency(country: string | null): string {
  if (!country) return 'INR';
  if (country === 'US' || country === 'CA' || country === 'AU') return 'USD';
  if (country === 'GB') return 'GBP';
  if (EU_COUNTRIES.has(country)) return 'EUR';
  if (country === 'IN') return 'INR';
  return 'INR';
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ── DEV ONLY: ?_currency=USD overrides detection for local testing ──
  if (process.env.NODE_ENV === 'development') {
    const param = request.nextUrl.searchParams.get('_currency')?.toUpperCase();
    if (param && VALID_CURRENCIES.has(param)) {
      response.cookies.set('currency', param, { maxAge: 60 * 60, path: '/', sameSite: 'lax' });
      // Clear the manual flag so geo-detect still works in prod
      response.cookies.delete('currency_manual');
      return response;
    }
  }

  // Don't override if user already has a cookie set
  if (request.cookies.has('currency')) {
    return response;
  }

  // Vercel sets x-vercel-ip-country; Cloudflare sets cf-ipcountry
  const country =
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('cf-ipcountry') ??
    null;

  // On shared hosting neither header exists — skip setting the cookie so the
  // client-side GeoIpInit component can detect via ip-api.com instead.
  if (!country) return response;

  const currency = detectCurrency(country);

  response.cookies.set('currency', currency, {
    maxAge: 60 * 60 * 24,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt).*)'],
};
