export type Reason = {
  icon: string;
  title: string;
  description: string;
};

const defaultReasons: Reason[] = [
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description:
      "We offer the most competitive prices in the market. Find a lower price anywhere? We will match it — no questions asked.",
  },
  {
    icon: "🛡️",
    title: "100% Safe & Secure",
    description:
      "Travel with complete peace of mind. Every booking is fully insured and protected by our trusted partners.",
  },
  {
    icon: "✈️",
    title: "All-Inclusive Packages",
    description:
      "From flights and hotels to guided tours and transfers — every detail is handled so you just enjoy the trip.",
  },
  {
    icon: "🌍",
    title: "50+ Destinations",
    description:
      "Explore a world of possibilities. Exotic beaches, historic cities, mountain retreats — we cover it all.",
  },
  {
    icon: "🤝",
    title: "24/7 Expert Support",
    description:
      "Our dedicated travel experts are available around the clock to assist you before, during, and after your journey.",
  },
  {
    icon: "⭐",
    title: "Trusted by Thousands",
    description:
      "Over 10,000+ happy travelers have trusted Travaround to turn their dream vacations into lifelong memories.",
  },
];

interface WhyChooseUsProps {
  reasons?: Reason[];
  title?: string;
  subtitle?: string;
}

export const WhyChooseUs = ({
  reasons = defaultReasons,
  title = "Why Choose Travaround?",
  subtitle =
    "We go beyond just booking — we craft unforgettable experiences tailored just for you",
}: WhyChooseUsProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
            Why Us
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">{title}</h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">{subtitle}</p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-blue-200 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-14">
          {[
            { value: "10,000+", label: "Happy Travelers" },
            { value: "50+", label: "Destinations" },
            { value: "8+", label: "Years of Experience" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</p>
              <p className="text-blue-200 text-xs md:text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
