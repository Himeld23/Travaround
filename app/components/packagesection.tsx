'use client';

import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "../context/CurrencyContext";
import { formatPrice } from "../lib/currency";

export type TravelPackage = {
  id: number;
  title: string;
  itinerary: string;
  nights: number;
  days: number;
  priceINR: number;
  originalPriceINR?: number;
  image: string;
  badge?: string;
};

const defaultPackages: TravelPackage[] = [
  {
    id: 1,
    title: "Enjoy 4 Days in Thailand in Style",
    itinerary: "Bangkok 1N, Pattaya 2N",
    nights: 3,
    days: 4,
    priceINR: 17999,
    originalPriceINR: 20999,
    image: "https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg",
  },
  {
    id: 2,
    title: "Couple Special Krabi & Phuket",
    itinerary: "Krabi 2N, Phuket 2N",
    nights: 4,
    days: 5,
    priceINR: 23599,
    originalPriceINR: 29999,
    image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
  },
  {
    id: 3,
    title: "Dream Thailand Holiday",
    itinerary: "Phuket 2N, Krabi 2N, Bangkok 1N",
    nights: 5,
    days: 6,
    priceINR: 67027,
    originalPriceINR: 72799,
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
    badge: "Off-Season Discount",
  },
  {
    id: 4,
    title: "Perfect Thailand Vacation",
    itinerary: "Phuket 2N, Pattaya 2N, Bangkok 1N, Chiang Mai 1N",
    nights: 6,
    days: 7,
    priceINR: 33499,
    originalPriceINR: 38999,
    image: "https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={`${pkg.image}?auto=compress&cs=tinysrgb&w=800`}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {pkg.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                    🔥 {pkg.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-500 text-sm mb-1">
                  {String(pkg.nights).padStart(2, "0")} Nights /{" "}
                  {String(pkg.days).padStart(2, "0")} Days
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{pkg.itinerary}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1 text-xs text-gray-600">
                    🏨 Hotels
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-600">
                    🚖 Cabs
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-600">
                    🍽️ Meals
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-600">
                    🔭 Sightseeing
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5 mb-5 mt-auto">
                  {pkg.originalPriceINR && (
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(pkg.originalPriceINR, currency)}
                    </span>
                  )}
                  <span className="text-green-600 font-bold text-lg">
                    {formatPrice(pkg.priceINR, currency)}
                  </span>
                  <span className="text-gray-500 text-xs">(Per Person)</span>
                </div>

                {/* Send Enquiry Button */}
                <a
                  href={`https://wa.me/917093196599?text=Hi%20Travaround%2C%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-900 text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow"
                >
                  Send Enquiry
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA — shown only when fewer than all packages are displayed */}
        {packages.length < defaultPackages.length && (
          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              View All Packages
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
