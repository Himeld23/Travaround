import Image from "next/image";
import Link from "next/link";

export const Aboutsection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Left — Image collage */}
          <div className="relative mb-10 lg:mb-0">
            {/* Main large image */}
            <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Travel experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>

            {/* Small floating image — bottom right */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <Image
                src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Happy travelers"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>

            {/* Experience badge — top left */}
            <div className="absolute -top-5 -left-5 bg-yellow-400 text-blue-900 rounded-2xl px-5 py-4 shadow-xl hidden md:block">
              <p className="text-3xl font-bold leading-none">8+</p>
              <p className="text-xs font-semibold uppercase tracking-wide mt-0.5">Years of<br />Experience</p>
            </div>

            {/* Floating stat card */}
            <div className="absolute bottom-8 left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm">
                10k
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm leading-none">10,000+</p>
                <p className="text-gray-500 text-xs">Happy Travelers</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              Making Travel{" "}
              <span className="text-blue-900 relative inline-block">
                Affordable
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
              </span>{" "}
              & Unforgettable
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              At <span className="font-semibold text-blue-900">Travaround</span>, we believe that
              travel should be exciting, affordable, and accessible to everyone. Based in{" "}
              <span className="font-semibold text-gray-800">Hyderabad</span>, our mission is to help
              travelers explore the world without worrying about expensive costs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of travel experts carefully designs each package to offer the best
              destinations, comfortable stays, and memorable experiences. Whether it&apos;s the
              beaches of Southeast Asia, the cultural cities of Europe, or the scenic beauty of
              India — we make your journey seamless from start to finish.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "✈️", title: "All-Inclusive Deals", desc: "Flights, hotels & tours covered" },
                { icon: "💰", title: "Best Price Promise", desc: "Competitive prices, always" },
                { icon: "🤝", title: "Expert Guidance", desc: "Personalised trip planning" },
                { icon: "🛡️", title: "Safe & Reliable", desc: "Fully insured & trusted" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-yellow-400/50 hover:bg-yellow-50/30 transition-all duration-300">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-blue-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-900 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-blue-900 px-8 py-3.5 rounded-full font-bold border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
