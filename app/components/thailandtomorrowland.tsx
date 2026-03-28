'use client';

import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "../context/CurrencyContext";
import { formatPrice } from "../lib/currency";

interface ThailandTomorrowlandProps {
  eventDate?: string;
  eventLocation?: string;
  packagePriceINR?: number;
  spotsLeft?: number;
}

export const ThailandTomorrowland = ({
  eventDate = "December 2025",
  eventLocation = "Kanchanaburi, Thailand",
  packagePriceINR = 89999,
  spotsLeft = 14,
}: ThailandTomorrowlandProps) => {
  const { currency } = useCurrency();
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[600px] md:h-[680px]">
        <Image
          src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg"
          alt="Tomorrowland Thailand Festival"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-blue-900/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-xl">
              {/* Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Special Event
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-4 py-1.5 rounded-full">
                  🔥 {spotsLeft} spots left
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
                Tomorrowland
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-5">
                Thailand 2025
              </h3>

              {/* Description */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Experience the world&apos;s most magical music festival amidst the breathtaking
                landscapes of Thailand. Dance under the stars at the iconic Tomorrowland stage,
                surrounded by stunning light shows, world-class DJs, and thousands of festival
                lovers from across the globe.
              </p>

              {/* Event Details */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                  <span className="text-yellow-400">📅</span>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wide">Event Date</p>
                    <p className="text-gray-200 text-sm">{eventDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
                  <span className="text-yellow-400">📍</span>
                  <div>
                    <p className="text-white text-xs font-semibold uppercase tracking-wide">Location</p>
                    <p className="text-gray-200 text-sm">{eventLocation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-xl px-4 py-2.5">
                  <span className="text-yellow-400">💰</span>
                  <div>
                    <p className="text-yellow-300 text-xs font-semibold uppercase tracking-wide">Starting From</p>
                    <p className="text-yellow-400 text-sm font-bold">{formatPrice(packagePriceINR, currency)} / person</p>
                  </div>
                </div>
              </div>

              {/* Package Inclusions */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Festival Passes",
                  "Return Flights",
                  "4-Star Hotel",
                  "Airport Transfers",
                  "7 Days / 6 Nights",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book?event=tomorrowland-thailand"
                  className="bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/30"
                >
                  Book This Package
                </Link>
                <Link
                  href="/events/tomorrowland-thailand"
                  className="bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white hover:text-blue-900 border-2 border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
