export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  package: string;
  initials: string;
  avatarColor: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Kolkata",
    rating: 5,
    review:
      "Travaround made our Thailand trip absolutely magical! The package was so affordable yet we stayed in a beautiful 4-star resort. Every single detail was perfectly planned — can't wait to book again!",
    package: "Thailand Explorer",
    initials: "PS",
    avatarColor: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    location: "Mumbai",
    rating: 5,
    review:
      "I was skeptical about budget travel, but Travaround completely changed my perspective. Our Bali trip was luxurious, fun, and well within budget. The team handled everything flawlessly!",
    package: "Bali Bliss",
    initials: "RM",
    avatarColor: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    name: "Anjali Das",
    location: "Delhi",
    rating: 5,
    review:
      "The Dubai package was worth every rupee. Five-star hotel, desert safari, and the Burj Khalifa visit — all included at such a great price. Travaround is genuinely the best travel company!",
    package: "Dubai Luxury",
    initials: "AD",
    avatarColor: "from-yellow-500 to-orange-600",
  },
  {
    id: 4,
    name: "Suresh Patel",
    location: "Ahmedabad",
    rating: 5,
    review:
      "Booked the Singapore package for my family and it was perfect for kids too! Universal Studios, the cable car, Gardens by the Bay — everything was covered. Highly recommend Travaround!",
    package: "Singapore Glitter",
    initials: "SP",
    avatarColor: "from-green-500 to-teal-600",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Pune",
    rating: 5,
    review:
      "Paris was always my dream destination and Travaround made it a reality at an unbelievable price. The hotel was charming, the tour guide was wonderful, and the entire trip was seamless.",
    package: "Paris Romance",
    initials: "MJ",
    avatarColor: "from-pink-500 to-rose-600",
  },
  {
    id: 6,
    name: "Vikram Bose",
    location: "Kolkata",
    rating: 5,
    review:
      "My Goa trip with Travaround was simply amazing. Even as a budget package, the quality was top-notch. The sunset cruise was an unforgettable highlight. Will definitely travel with them again!",
    package: "Goa Getaway",
    initials: "VB",
    avatarColor: "from-cyan-500 to-blue-600",
  },
];

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export const Testimonials = ({
  testimonials = defaultTestimonials,
  title = "What Our Travelers Say",
  subtitle =
    "Real stories from real travelers — see why thousands trust Travaround for their adventures",
}: TestimonialsProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 text-6xl text-yellow-400/20 font-serif leading-none select-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">&ldquo;{t.review}&rdquo;</p>

              {/* Package badge */}
              <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-100 mb-5">
                ✈️ {t.package}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">📍 {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
