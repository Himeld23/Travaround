'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContactSection } from "../components/contactsection";

/* ─── Hero ───────────────────────────────────────────────────── */
const ContactHero = () => (
  <section className="relative h-[300px] sm:h-[380px] flex items-end">
    <Image
      src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
      alt="Contact Travaround"
      fill
      className="object-cover"
      unoptimized
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/65 to-black/30" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
      <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
        We are here for you
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
        Contact Us
      </h1>
      <p className="text-blue-200 text-base sm:text-lg max-w-xl">
        Questions, bookings, or just need advice? Our travel experts are a call, click, or message away.
      </p>
      <div className="flex items-center gap-2 text-xs text-blue-300 mt-4">
        <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-yellow-400">Contact Us</span>
      </div>
    </div>
  </section>
);

/* ─── Quick Contact Cards ─────────────────────────────────────── */
const quickContacts = [
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 98300 XXXXX",
    sub: "Mon–Sat, 9AM–7PM",
    href: "tel:+919830000000",
    cta: "Call Now",
    color: "from-blue-600 to-blue-900",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 98300 XXXXX",
    sub: "Fastest response — usually under 30 mins",
    href: "https://wa.me/919830000000?text=Hi%20Travaround%2C%20I%20want%20to%20enquire%20about%20a%20travel%20package",
    cta: "Chat Now",
    color: "from-green-500 to-green-700",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "info@travaround.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@travaround.com",
    cta: "Send Email",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "📍",
    label: "Visit Office",
    value: "Park Street, Kolkata",
    sub: "West Bengal — 700016",
    href: "https://maps.google.com",
    cta: "Get Directions",
    color: "from-purple-500 to-purple-800",
  },
];

const QuickContactCards = () => (
  <section className="py-14 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Reach Out</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Pick Your Preferred Channel</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickContacts.map((c) => (
          <div
            key={c.label}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
          >
            {/* Gradient top strip */}
            <div className={`h-2 bg-gradient-to-r ${c.color}`} />
            <div className="p-6">
              <div className="text-4xl mb-4">{c.icon}</div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{c.label}</p>
              <p className="font-bold text-gray-900 text-base mb-1 break-all">{c.value}</p>
              <p className="text-gray-500 text-xs mb-5">{c.sub}</p>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 w-full justify-center"
              >
                {c.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Tomorrowland Enquiry Banner ─────────────────────────────── */
const TomorrowlandEnquiry = () => (
  <section className="py-10 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
          alt="Tomorrowland Thailand"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-blue-900/50" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-10 sm:py-8">
          <div>
            <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
              🔥 Limited Spots
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              Tomorrowland Thailand 2025
            </h3>
            <p className="text-blue-200 text-sm max-w-sm">
              Only 14 spots remaining. Enquire now before the package sells out.
            </p>
          </div>
          <a
            href="https://wa.me/919830000000?text=Hi%2C%20I%20want%20to%20enquire%20about%20Tomorrowland%20Thailand%202025%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
          >
            Enquire on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── FAQ ─────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How do I book a package with Travaround?",
    a: "Simply fill in the enquiry form on this page, WhatsApp us, or call our office. Our travel expert will then share a detailed itinerary and payment options within 24 hours. No upfront payment required to enquire.",
  },
  {
    q: "Do your packages include flights?",
    a: "Yes — all our international packages include return flights from major Indian cities (Kolkata, Mumbai, Delhi, etc.). Domestic packages include either train or flight options depending on the route.",
  },
  {
    q: "Is it safe to book the Tomorrowland Thailand package through you?",
    a: "Absolutely. We are an IATA-affiliated, government-registered travel agency. All Tomorrowland Thailand festival passes are sourced directly through authorised channels. Your booking is fully secured and insured.",
  },
  {
    q: "Can I customise a package for my group?",
    a: "Yes, and it is one of our specialties. Whether it is a group of 2 or 20, we can tailor the itinerary, hotel category, and inclusions to match your group size, budget, and travel dates. Contact us to discuss.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Our cancellation policy depends on the package and how far in advance you cancel. We recommend taking travel insurance (which we offer). Our team will walk you through the policy clearly before you make any payment.",
  },
  {
    q: "Do you offer EMI options for expensive packages?",
    a: "Yes. For packages above ₹50,000 per person, we offer easy installment plans with 0% interest through our payment partners. Contact us to set this up for your booking.",
  },
  {
    q: "How quickly will I receive a response after submitting the form?",
    a: "Our team responds to all enquiries within 24 hours on business days (Mon–Sat). For urgent enquiries, WhatsApp is the fastest option — we typically reply within 30 minutes during working hours.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">FAQs</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Can&apos;t find what you are looking for? Just ask us directly.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i ? "border-yellow-400 shadow-md" : "border-gray-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
              >
                <span className={`font-semibold text-base transition-colors duration-300 ${openIndex === i ? "text-blue-900" : "text-gray-900"}`}>
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    openIndex === i
                      ? "bg-yellow-400 text-blue-900 rotate-45"
                      : "bg-gray-100 text-gray-500 group-hover:bg-blue-900 group-hover:text-white"
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Still have questions?{" "}
          <a
            href="https://wa.me/919830000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 font-bold hover:text-yellow-600 transition-colors"
          >
            Chat with us on WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
};

/* ─── Map + Office Info ───────────────────────────────────────── */
const OfficeMap = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

        {/* Office details — 2 cols */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
            Find Us
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Office</h2>

          <div className="space-y-5">
            {[
              { icon: "📍", title: "Address", detail: "Park Street, Kolkata\nWest Bengal — 700016, India" },
              { icon: "📞", title: "Phone", detail: "+91 98300 XXXXX" },
              { icon: "✉️", title: "Email", detail: "info@travaround.com" },
              { icon: "🕐", title: "Hours", detail: "Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: Closed" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border border-blue-100">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-0.5">{item.title}</p>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://maps.google.com/?q=Park+Street+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 w-fit"
          >
            📍 Open in Google Maps →
          </a>
        </div>

        {/* Map — 3 cols */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100 min-h-[320px] relative bg-gray-100">
          {/* Replace src with your actual Google Maps embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.386!2d88.3514!3d22.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b5a7a3e0c1%3A0x0!2sPark+Street%2C+Kolkata%2C+West+Bengal!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ─── Social Strip ────────────────────────────────────────────── */
const SocialStrip = () => (
  <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-black py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Follow Our Travel Stories
          </h3>
          <p className="text-blue-200 text-sm">
            Stay inspired — destinations, tips, deals and festival content daily.
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: "📘", label: "Facebook", href: "#" },
            { icon: "📷", label: "Instagram", href: "#" },
            { icon: "▶️", label: "YouTube", href: "#" },
            { icon: "𝕏", label: "Twitter / X", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-xl hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Page ───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <QuickContactCards />
      <TomorrowlandEnquiry />
      <ContactSection
        title="Send Us a Message"
        subtitle="Fill in the form and our team will get back to you within 24 hours with a tailored travel plan."
      />
      <OfficeMap />
      <FAQ />
      <SocialStrip />
    </>
  );
}
