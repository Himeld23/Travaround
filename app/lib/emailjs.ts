import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────
//  EmailJS config
//  1. Sign up at https://www.emailjs.com (free — 200 emails/month)
//  2. Add Email Service  → copy Service ID   → EMAILJS_SERVICE_ID
//  3. Create Templates   → copy Template IDs → see below
//  4. Account → API Keys → copy Public Key   → EMAILJS_PUBLIC_KEY
// ─────────────────────────────────────────────────────────────

export const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
export const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'user_XYZ...'

// One template per form — create these in your EmailJS dashboard
export const TEMPLATES = {
  contact:         'YOUR_CONTACT_TEMPLATE_ID',      // ContactSection form
  tomorrowland:    'YOUR_TOMORROWLAND_TEMPLATE_ID', // Banner lead-capture form
} as const;

// ─────────────────────────────────────────────────────────────
//  Generic send helper
//  templateParams keys must match the {{variables}} in your
//  EmailJS template exactly.
// ─────────────────────────────────────────────────────────────
export async function sendEmail(
  templateId: string,
  templateParams: Record<string, string>
): Promise<void> {
  await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, {
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}
