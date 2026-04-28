'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThailandTomorrowland } from "../components/thailandtomorrowland";
import { ContactSection } from "../components/contactsection";

/* ─── Types ─────────────────────────────────────────────────── */
type Category = "All" | "Asia" | "Europe" | "Middle East" | "India" | "Events";

type Destination = {
  id: number;
  name: string;
  country: string;
  tagline: string;
  image: string;
  category: Category;
  packages: number;
  tags: string[];
  badge?: string;
  featured?: boolean;
};

/* ─── Data ───────────────────────────────────────────────────── */
const destinations: Destination[] = [
  // EVENTS
  {
    id: 1,
    name: "Tomorrowland Thailand",
    country: "Kanchanaburi, Thailand",
    tagline: "The world's greatest music festival lands in Southeast Asia",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    category: "Events",
    packages: 4,
    tags: ["Festival Packages", "VIP Passes", "7 Days", "All-Inclusive"],
    badge: "🔥 Selling Fast",
    featured: true,
  },

  // ASIA
  {
    id: 2,
    name: "Bangkok & Phuket",
    country: "Thailand",
    tagline: "Street food, temples, and paradise beaches in one trip",
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
    category: "Asia",
    packages: 5,
    tags: ["Beaches", "Culture", "Food", "Nightlife"],
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Bali",
    country: "Indonesia",
    tagline: "Island of the Gods — rice terraces, temples & surf",
    image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    category: "Asia",
    packages: 4,
    tags: ["Beaches", "Spa", "Adventure", "Honeymoon"],
    badge: "Popular",
  },
  {
    id: 4,
    name: "Singapore",
    country: "Singapore",
    tagline: "The city where futuristic skylines meet lush gardens",
    image: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg",
    category: "Asia",
    packages: 3,
    tags: ["City Break", "Family", "Theme Parks", "Shopping"],
  },
  {
    id: 5,
    name: "Tokyo & Kyoto",
    country: "Japan",
    tagline: "Ancient temples and neon streets in perfect harmony",
    image: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg",
    category: "Asia",
    packages: 3,
    tags: ["Culture", "Food", "Heritage", "Cherry Blossom"],
    badge: "New",
  },
  {
    id: 6,
    name: "Hanoi & Ha Long Bay",
    country: "Vietnam",
    tagline: "Emerald waters, limestone karsts and old-world charm",
    image: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg",
    category: "Asia",
    packages: 2,
    tags: ["Cruise", "Nature", "Culture", "Budget Friendly"],
  },
  {
    id: 7,
    name: "Maldives",
    country: "Maldives",
    tagline: "Overwater villas, crystal lagoons, and pure serenity",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
    category: "Asia",
    packages: 3,
    tags: ["Luxury", "Honeymoon", "Water Sports", "Overwater Villas"],
    badge: "Premium",
  },

  // EUROPE
  {
    id: 8,
    name: "Paris",
    country: "France",
    tagline: "The city of love, lights, and the iconic Eiffel Tower",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    category: "Europe",
    packages: 4,
    tags: ["Romance", "Art", "Fashion", "Food"],
  },
  {
    id: 9,
    name: "Switzerland",
    country: "Switzerland",
    tagline: "Snow-capped Alps, pristine lakes and luxury train rides",
    image: "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg",
    category: "Europe",
    packages: 3,
    tags: ["Mountains", "Adventure", "Scenic Train", "Luxury"],
    badge: "Popular",
  },
  {
    id: 10,
    name: "Rome & Amalfi Coast",
    country: "Italy",
    tagline: "Colosseum by day, pasta by night, cliffs by the sea",
    image: "https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg",
    category: "Europe",
    packages: 3,
    tags: ["Heritage", "Food", "Coastline", "Couples"],
  },
  {
    id: 11,
    name: "Santorini & Athens",
    country: "Greece",
    tagline: "Blue domes, whitewashed walls, and Aegean sunsets",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    category: "Europe",
    packages: 2,
    tags: ["Honeymoon", "Islands", "History", "Sunsets"],
    badge: "Romantic",
  },

  // MIDDLE EAST
  {
    id: 12,
    name: "Dubai",
    country: "UAE",
    tagline: "Skyscrapers, safaris, and world-record everything",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    category: "Middle East",
    packages: 5,
    tags: ["Luxury", "Shopping", "Desert Safari", "Family"],
    badge: "Premium",
  },
  {
    id: 13,
    name: "Abu Dhabi",
    country: "UAE",
    tagline: "The Grand Mosque, Ferrari World and Formula 1 culture",
    image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
    category: "Middle East",
    packages: 2,
    tags: ["Culture", "Theme Parks", "Grand Mosque", "Formula 1"],
  },
  {
    id: 14,
    name: "Istanbul",
    country: "Turkey",
    tagline: "Where East meets West — bazaars, mosques, and the Bosphorus",
    image: "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",
    category: "Middle East",
    packages: 2,
    tags: ["Culture", "Food", "History", "Shopping"],
    badge: "New",
  },

  // INDIA
  {
    id: 15,
    name: "Goa",
    country: "India",
    tagline: "Golden beaches, seafood, and the spirit of fiesta",
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
    category: "India",
    packages: 4,
    tags: ["Beach", "Nightlife", "Budget", "Weekend Getaway"],
    badge: "Budget Pick",
  },
  {
    id: 16,
    name: "Kashmir",
    country: "India",
    tagline: "Heaven on Earth — houseboats, saffron fields and snow peaks",
    image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
    category: "India",
    packages: 3,
    tags: ["Mountains", "Shikara Ride", "Tulip Garden", "Honeymoon"],
    badge: "Must Visit",
  },
  {
    id: 17,
    name: "Rajasthan",
    country: "India",
    tagline: "Palaces, deserts, and the royal legacy of the Maharajas",
    image: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg",
    category: "India",
    packages: 3,
    tags: ["Heritage", "Palaces", "Camel Safari", "Culture"],
  },
  {
    id: 18,
    name: "Kerala",
    country: "India",
    tagline: "God's Own Country — backwaters, spices and Ayurveda",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    category: "India",
    packages: 3,
    tags: ["Backwaters", "Ayurveda", "Wildlife", "Beaches"],
  },
];

const categories: Category[] = ["All", "Events", "Asia", "Europe", "Middle East", "India"];

const categoryIcons: Record<Category, string> = {
  All: "🌐",
  Events: "🎵",
  Asia: "🌏",
  Europe: "🗼",
  "Middle East": "🕌",
  India: "🇮🇳",
};

/* ─── Components ─────────────────────────────────────────────── */
const DestinationCard = ({ dest }: { dest: Destination }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <Image
        src={`${dest.image}?auto=compress&cs=tinysrgb&w=800`}
        alt={dest.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {dest.badge && (
        <span className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
          {dest.badge}
        </span>
      )}
      <div className="absolute top-4 right-4 bg-blue-900/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
        {dest.packages} packages
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <p className="absolute bottom-3 left-4 text-white text-sm font-semibold">
        📍 {dest.country}
      </p>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 mb-1.5">{dest.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{dest.tagline}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {dest.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 text-blue-800 border border-blue-100 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/packages?destination=${encodeURIComponent(dest.name)}`}
        className="flex items-center justify-between w-full bg-blue-900 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 group/btn"
      >
        <span>Explore Packages</span>
        <span className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
      </Link>
    </div>
  </div>
);

/* ─── Tomorrowland Spotlight Banner ─────────────────────────── */
const TomorrowlandSpotlight = () => (
  <section className="py-10 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow">
          🎵 Featured Event
        </span>
        <span className="text-gray-600 text-sm">Our flagship offering for 2025 — limited spots</span>
      </div>
    </div>
    <ThailandTomorrowland
      eventDate="December 2025"
      eventLocation="Kanchanaburi, Thailand"
      packagePriceINR={89999}
      spotsLeft={14}
    />
  </section>
);

/* ─── Page ───────────────────────────────────────────────────── */
export default function DestinationsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[340px] sm:h-[420px] flex items-end">
        <Image
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Destinations"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
            Explore the World
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            Our Destinations
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-xl">
            From the beaches of Bali to the stages of Tomorrowland Thailand — find your next adventure.
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-blue-300 mt-4">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-yellow-400">Destinations</span>
          </div>
        </div>
      </section>

      {/* ── Tomorrowland Spotlight ── */}
      <TomorrowlandSpotlight />

      {/* ── Quick Stats ── */}
      <section className="bg-blue-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "18+", label: "Destinations", icon: "🌍" },
              { val: "40+", label: "Active Packages", icon: "✈️" },
              { val: "5", label: "Continents", icon: "🗺️" },
              { val: "4.9★", label: "Avg Rating", icon: "⭐" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="text-3xl font-bold text-yellow-400">{s.val}</p>
                <p className="text-blue-200 text-xs uppercase tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destination Grid ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
              Explore by Region
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Where Would You Like to Go?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse all our destinations or filter by region — every one comes with curated packages, transparent pricing, and expert guidance.
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                  active === cat
                    ? "bg-blue-900 text-white border-blue-900 shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-900 hover:text-blue-900"
                }`}
              >
                <span>{categoryIcons[cat]}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-gray-500 text-sm mb-8 text-center">
            Showing{" "}
            <span className="font-bold text-blue-900">{filtered.length}</span>{" "}
            destination{filtered.length !== 1 ? "s" : ""}
            {active !== "All" ? ` in ${active}` : ""}
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Book with Us strip ── */}
      <section className="bg-white py-14 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Every Destination. Zero Stress.
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              No matter where you pick, Travaround handles every detail end-to-end.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "✈️", title: "Flights Included", desc: "Return flights arranged for all international packages" },
              { icon: "🏨", title: "Curated Hotels", desc: "Hand-picked 3-star to 5-star stays in every city" },
              { icon: "🚌", title: "All Transfers", desc: "Airport pickups, shuttle services, and local transport" },
              { icon: "🤝", title: "Expert Guides", desc: "Local experts for sightseeing, tours, and experiences" },
            ].map((f) => (
              <div key={f.title} className="text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:bg-blue-900 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Can&apos;t Decide? Let Us Help.
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Our travel experts will recommend the perfect destination based on your budget, travel dates, and interests. 100% free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-base hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/packages"
              className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-base border-2 border-white/30 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
