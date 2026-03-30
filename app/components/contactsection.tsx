"use client";

import { useState } from "react";
import { sendEmail, TEMPLATES } from "../lib/emailjs";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export const ContactSection = ({
  title = "Get In Touch",
  subtitle = "Have a trip in mind? Let our experts plan the perfect journey for you — reach out today!",
}: ContactSectionProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await sendEmail(TEMPLATES.contact, {
        from_name:   form.name,
        from_email:  form.email,
        phone:       form.phone,
        destination: form.destination,
        message:     form.message,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try WhatsApp or call us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-black" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">{title}</h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">We&apos;d love to hear from you</h3>

            <div className="space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  detail: "Park Street, Kolkata, West Bengal — 700016",
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  detail: "+91 98300 XXXXX",
                },
                {
                  icon: "✉️",
                  title: "Email Us",
                  detail: "info@travaround.com",
                },
                {
                  icon: "🕐",
                  title: "Working Hours",
                  detail: "Mon – Sat: 9:00 AM – 7:00 PM",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-gray-300">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-white font-semibold mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "f", title: "Facebook" },
                  { label: "𝕏", title: "Twitter" },
                  { label: "📷", title: "Instagram" },
                  { label: "in", title: "LinkedIn" },
                ].map((s, i) => (
                  <button
                    key={i}
                    title={s.title}
                    className="w-11 h-11 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 hover:-translate-y-1"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Thanks for Submitting!
                </h4>
                <p className="text-blue-200 text-base leading-relaxed">
                  Our team has received your message and will contact you shortly. We typically respond within <span className="text-yellow-400 font-semibold">24 hours</span>.
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  In the meantime, feel free to WhatsApp or call us directly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", destination: "", message: "" });
                  }}
                  className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-full font-bold hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-1.5">
                    Preferred Destination
                  </label>
                  <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full bg-blue-900 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  >
                    <option value="">Select a destination...</option>
                    <option value="thailand">Thailand</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="singapore">Singapore</option>
                    <option value="dubai">Dubai, UAE</option>
                    <option value="paris">Paris, France</option>
                    <option value="goa">Goa, India</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your travel plans, group size, budget, dates..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-yellow-400 text-blue-900 py-4 rounded-xl font-bold text-lg hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-yellow-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
