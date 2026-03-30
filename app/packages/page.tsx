import { PackagesSection } from "../components/packagesection";
import { ThailandTomorrowland } from "../components/thailandtomorrowland";
import { ContactSection } from "../components/contactsection";
import Link from "next/link";

export const metadata = {
  title: "Travel Packages | Travaround",
  description:
    "Explore our handcrafted travel packages — Thailand, Bali, Dubai, Paris, Singapore, Goa and exclusive Tomorrowland Thailand event packages.",
};

export default function PackagesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-black overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Our Packages
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Journeys Crafted{" "}
            <span className="text-yellow-400">Just for You</span>
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            From tropical escapes to world-class music festivals — browse our
            most loved travel packages and find your perfect adventure.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "40+", label: "Packages" },
              { value: "18+", label: "Destinations" },
              { value: "5000+", label: "Happy Travellers" },
              { value: "4.9★", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-yellow-400">
                  {stat.value}
                </p>
                <p className="text-blue-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Packages Grid */}
      <PackagesSection
        title="All Travel Packages"
        subtitle="Handcrafted journeys at unbeatable prices — every package includes flights, stays & guided experiences"
      />

      {/* Thailand Tomorrowland Feature Section */}
      <ThailandTomorrowland />

      {/* Extra Tomorrowland detail section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
              Featured Event Package
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Thailand Tomorrowland — Everything Included
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The world&apos;s most iconic music festival meets Thailand&apos;s stunning
              landscapes. Our exclusive all-in-one package takes care of every
              detail so you can just dance.
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎟️",
                title: "Full Madness Festival Pass",
                desc: "3-day Tomorrowland Thailand pass covering all stages, including the iconic main stage. No queue, no stress.",
              },
              {
                icon: "✈️",
                title: "Return Flights",
                desc: "Economy class return flights from major Indian cities included. Arrive and depart with your group.",
              },
              {
                icon: "🏨",
                title: "5-Star Hotel Stay",
                desc: "Luxurious beachfront resort accommodation for the full trip duration with daily breakfast.",
              },
              {
                icon: "🚌",
                title: "Airport & Shuttle Transfers",
                desc: "Seamless airport pickups and festival shuttle service included throughout your stay.",
              },
              {
                icon: "🌴",
                title: "Pattaya Day Tour",
                desc: "Explore Thailand beyond the festival — a guided Pattaya and island excursion on a rest day.",
              },
              {
                icon: "🛡️",
                title: "Travel Insurance",
                desc: "Comprehensive travel insurance coverage for the full duration of the trip for your peace of mind.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Enquire About Tomorrowland Package
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Enquiry */}
      <ContactSection
        title="Need a Custom Package?"
        subtitle="Can't find exactly what you're looking for? Our travel experts will build your perfect trip from scratch."
      />
    </main>
  );
}
