import Image from "next/image";
import Link from "next/link";

export type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  tagline: string;
  packages: number;
};

const defaultDestinations: Destination[] = [
  {
    id: 1,
    name: "Thailand",
    country: "Southeast Asia",
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
    tagline: "Land of Smiles",
    packages: 12,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    tagline: "Island of the Gods",
    packages: 9,
  },
  {
    id: 3,
    name: "Singapore",
    country: "Southeast Asia",
    image: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg",
    tagline: "City in a Garden",
    packages: 7,
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg",
    tagline: "City of Gold",
    packages: 10,
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    tagline: "City of Love",
    packages: 6,
  },
  {
    id: 6,
    name: "Goa",
    country: "India",
    image: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
    tagline: "Pearl of the Orient",
    packages: 14,
  },
];

interface PopularDestinationsProps {
  destinations?: Destination[];
  title?: string;
  subtitle?: string;
}

export const PopularDestinations = ({
  destinations = defaultDestinations,
  title = "Popular Destinations",
  subtitle = "Discover the world's most breathtaking places — handpicked for every kind of traveler",
}: PopularDestinationsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Explore The World
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.name.toLowerCase()}`}
              className="relative h-72 rounded-2xl overflow-hidden group block shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`${dest.image}?auto=compress&cs=tinysrgb&w=800`}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-blue-900/80 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  {dest.country}
                </p>
                <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                <p className="text-gray-300 text-sm italic mb-3">{dest.tagline}</p>
                <span className="inline-block bg-yellow-400/20 border border-yellow-400/50 text-yellow-400 text-xs px-3 py-1 rounded-full">
                  {dest.packages} packages available
                </span>
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-lg">
                <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};
