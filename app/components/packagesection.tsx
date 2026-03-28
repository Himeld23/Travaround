'use client';

import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "../context/CurrencyContext";
import { formatPrice } from "../lib/currency";

export type TravelPackage = {
  id: number;
  title: string;
  destination: string;
  duration: string;
  priceINR: number;
  originalPriceINR?: number;
  image: string;
  highlights: string[];
  badge?: string;
};

const defaultPackages: TravelPackage[] = [
  {
    id: 1,
    title: "Thailand Explorer",
    destination: "Bangkok & Phuket",
    duration: "6D / 5N",
    priceINR: 45999,
    originalPriceINR: 55000,
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
    highlights: ["Flight Included", "4-Star Hotel", "Daily Breakfast", "Guided Tours"],
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Bali Bliss",
    destination: "Bali, Indonesia",
    duration: "5D / 4N",
    priceINR: 38999,
    originalPriceINR: 48000,
    image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    highlights: ["Flight Included", "Resort Stay", "Spa Treatment", "Water Sports"],
    badge: "Popular",
  },
  {
    id: 3,
    title: "Singapore Glitter",
    destination: "Singapore",
    duration: "4D / 3N",
    priceINR: 52999,
    image: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg",
    highlights: ["Flight Included", "City Hotel", "Universal Studios", "Night Safari"],
  },
  {
    id: 4,
    title: "Dubai Luxury",
    destination: "Dubai, UAE",
    duration: "5D / 4N",
    priceINR: 65999,
    originalPriceINR: 78000,
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    highlights: ["Flight Included", "5-Star Hotel", "Desert Safari", "Burj Khalifa"],
    badge: "Premium",
  },
  {
    id: 5,
    title: "Paris Romance",
    destination: "Paris, France",
    duration: "7D / 6N",
    priceINR: 110999,
    originalPriceINR: 135000,
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    highlights: ["Flight Included", "Boutique Hotel", "Eiffel Tower", "Seine Cruise"],
  },
  {
    id: 6,
    title: "Goa Getaway",
    destination: "Goa, India",
    duration: "4D / 3N",
    priceINR: 15999,
    originalPriceINR: 20000,
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
    highlights: ["Hotel Stay", "Beach Activities", "Spice Tour", "Sunset Cruise"],
    badge: "Budget Pick",
  },
];

interface PackagesSectionProps {
  packages?: TravelPackage[];
  title?: string;
  subtitle?: string;
}

export const PackagesSection = ({
  packages = defaultPackages,
  title = "Our Travel Packages",
  subtitle = "Handcrafted journeys at unbeatable prices — explore our most loved packages",
}: PackagesSectionProps) => {
  const { currency } = useCurrency();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                {pkg.badge && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
                    {pkg.badge}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-3 left-4 text-white text-sm font-medium">
                  📍 {pkg.destination}
                </p>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                    {pkg.duration}
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full border border-blue-100"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-blue-900">
                      {formatPrice(pkg.priceINR, currency)}
                    </p>
                    {pkg.originalPriceINR && (
                      <p className="text-sm text-gray-400 line-through">
                        {formatPrice(pkg.originalPriceINR, currency)}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Link
                    href="/book"
                    className="bg-yellow-400 text-blue-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-900 hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 shadow"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};
