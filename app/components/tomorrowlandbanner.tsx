'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { sendEmail, TEMPLATES } from '../lib/emailjs';

const COOKIE_KEY = 'tml_banner_dismissed';

function setCookie(name: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=1;expires=${expires};path=/;samesite=lax`;
}

function hasCookie(name: string): boolean {
  return document.cookie.includes(`${name}=`);
}

// Live countdown to December 5, 2025
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  });
  return time;
}

type Step = 'promo' | 'form' | 'done';

export const TomorrowlandBanner = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('promo');
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const eventDate = new Date('2025-12-05T00:00:00');
  const countdown = useCountdown(eventDate);

  // Rotate strategy headlines every 6 seconds on the promo step
  useEffect(() => {
    if (step !== 'promo') return;
    const t = setInterval(() => setActiveStrategy((p) => (p + 1) % 3), 6000);
    return () => clearInterval(t);
  }, [step]);

  // Show after 3s, only if not dismissed before
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasCookie(COOKIE_KEY)) setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setCookie(COOKIE_KEY, 7); // don't show again for 7 days
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSendError('');
    try {
      await sendEmail(TEMPLATES.tomorrowland, {
        from_name:  form.name,
        from_email: form.email,
        phone:      form.phone,
        interest:   'Tomorrowland Thailand 2025',
      });
      setCookie(COOKIE_KEY, 30);
      setStep('done');
    } catch {
      setSendError('Something went wrong. Please WhatsApp us directly.');
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  const strategies = [
    {
      tag: '🎟️ Exclusive Package',
      headline: 'Tomorrowland Thailand\n2026: Sorted.',
      bullets: [
        { icon: '❌', text: 'Forget the Worldwide Ticket Queue' },
        { icon: '❌', text: 'No Stress Finding a Hotel' },
        { icon: '✅', text: 'We Handle Everything — Flights, Pass, Hotel, Transfers' },
      ],
      cta: 'Show Me the Packages',
      sub: 'Full Madness Ticket · Luxury Hotel · Shuttle · Airport Transfer',
    },
    {
      tag: '🔥 Limited Availability',
      headline: 'Missed the Official\nSale? We Can Still\nGet You In.',
      bullets: [
        { icon: '🎫', text: 'Festival is SOLD OUT — but our exclusive packages are not' },
        { icon: '🏨', text: 'Comfort Pass (VIP) Packages — 90% sold' },
        { icon: '⚡', text: "Lock in your spot before it's gone forever" },
      ],
      cta: 'Guarantee My Experience',
      sub: 'Only a handful of exclusive spots remain',
    },
    {
      tag: '🌴 7-Day Adventure',
      headline: 'The Ultimate\n7-Day Thailand\nTakeover.',
      bullets: [
        { icon: '🎟️', text: '3-Day Tomorrowland Thailand Full Madness Pass' },
        { icon: '🏨', text: '5-Star Beachfront Resort in Pattaya' },
        { icon: '🛶', text: 'Pattaya & Island Exploration Tours included' },
      ],
      cta: 'Start My Thailand Adventure',
      sub: 'Consciencia awaits — and so does Pattaya',
    },
  ];

  const s = strategies[activeStrategy];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col lg:flex-row">

        {/* ── Left: Image Panel ── */}
        <div className="relative h-56 sm:h-72 lg:h-auto lg:w-[45%] flex-shrink-0 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Tomorrowland Thailand"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />

          {/* Overlay content on image */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Countdown */}
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
              Event Countdown
            </p>
            <div className="flex gap-3">
              {[
                { v: countdown.days, l: 'Days' },
                { v: countdown.hours, l: 'Hrs' },
                { v: countdown.mins, l: 'Min' },
                { v: countdown.secs, l: 'Sec' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-3 py-2 min-w-[52px]">
                  <p className="text-yellow-400 text-xl font-bold leading-none">
                    {String(v).padStart(2, '0')}
                  </p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wide mt-0.5">{l}</p>
                </div>
              ))}
            </div>

            {/* Spots left pill */}
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-white text-xs font-semibold">Only 14 spots remaining</span>
            </div>
          </div>
        </div>

        {/* ── Right: Content Panel ── */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-900 to-black flex-1 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none p-6 sm:p-8 flex flex-col">

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-20"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {step === 'promo' && (
            <>
              {/* Strategy dots */}
              <div className="flex gap-1.5 mb-5">
                {strategies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStrategy(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStrategy ? 'w-8 bg-yellow-400' : 'w-3 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Tag */}
              <span className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                {s.tag}
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5 whitespace-pre-line transition-all duration-500">
                {s.headline}
              </h2>

              {/* Bullets */}
              <ul className="space-y-3 mb-6">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                    <span className="text-base mt-0.5 flex-shrink-0">{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 text-xs italic mb-6 border-t border-white/10 pt-4">
                {s.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <button
                  onClick={() => setStep('form')}
                  className="flex-1 bg-yellow-400 text-blue-900 py-3.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-yellow-400/30"
                >
                  {s.cta} →
                </button>
                <button
                  onClick={dismiss}
                  className="flex-1 sm:flex-none bg-white/10 border border-white/20 text-white py-3.5 px-5 rounded-full font-medium text-sm hover:bg-white/15 transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </>
          )}

          {step === 'form' && (
            <>
              <div className="mb-6">
                <span className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  🔔 Get Notified
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                  Secure Your Spot<br />in Wisdom Valley
                </h3>
                <p className="text-blue-200 text-sm">
                  Drop your details — our travel expert will call/WhatsApp you with the full package details and pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <div>
                  <label className="block text-blue-200 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-200 text-xs font-semibold uppercase tracking-wide mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 text-xs font-semibold uppercase tracking-wide mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <p className="text-gray-500 text-xs">
                  🔒 We&apos;ll never spam you. One callback, full details.
                </p>

                {sendError && (
                  <p className="text-red-400 text-xs text-center">{sendError}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 bg-yellow-400 text-blue-900 py-3.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all duration-300 hover:-translate-y-0.5 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Notify Me →'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep('promo')}
                    className="text-gray-400 text-sm hover:text-white transition-colors py-3.5 px-4"
                  >
                    ← Back
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 'done' && (
            <div className="flex flex-col items-center justify-center flex-1 text-center py-8">
              <div className="text-6xl mb-5">✅</div>
              <h3 className="text-2xl font-bold text-white mb-3">Thanks for Submitting!</h3>
              <p className="text-blue-200 text-sm max-w-xs leading-relaxed mb-2">
                Our team will contact you at <span className="text-yellow-400 font-semibold">{form.email}</span> within 24 hours with full package details and pricing.
              </p>
              {form.phone && (
                <p className="text-blue-300 text-xs mb-8">
                  We&apos;ll also reach out on WhatsApp: <span className="text-yellow-400">{form.phone}</span>
                </p>
              )}
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4 text-left w-full max-w-xs mb-8">
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-wide mb-2">What&apos;s included</p>
                {['Full Madness Festival Pass', 'Return Flights', '5-Star Hotel Stay', 'Airport Transfers', 'Pattaya Day Tour'].map((item, i) => (
                  <p key={i} className="text-gray-300 text-xs py-1 border-b border-white/5 last:border-0">
                    ✓ {item}
                  </p>
                ))}
              </div>
              <button
                onClick={dismiss}
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all duration-300"
              >
                Explore the Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
