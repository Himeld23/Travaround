import Image from "next/image";
import Link from "next/link";
import { WhyChooseUs } from "../components/whychooseus";
import { Testimonials } from "../components/testimonials";
import { ContactSection } from "../components/contactsection";

/* ─── Page Hero ─────────────────────────────────────────────── */
const AboutHero = () => (
  <section className="relative h-[340px] sm:h-[420px] flex items-end">
    <Image
      src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
      alt="About Travaround"
      fill
      className="object-cover"
      unoptimized
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-black/30" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
      <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-2 block">
        Who We Are
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
        About Travaround
      </h1>
      <p className="text-blue-200 text-base sm:text-lg max-w-xl">
        Born in Kolkata. Built for travelers. Trusted by thousands across India and beyond.
      </p>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-blue-300 mt-4">
        <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-yellow-400">About Us</span>
      </div>
    </div>
  </section>
);

/* ─── Our Story ─────────────────────────────────────────────── */
const OurStory = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        {/* Image collage */}
        <div className="relative mb-10 lg:mb-0 order-2 lg:order-1">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
              alt="Our team planning travel"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
          </div>

          {/* Floating badge — years */}
          <div className="absolute -top-5 -left-5 bg-yellow-400 text-blue-900 rounded-2xl px-5 py-4 shadow-2xl hidden md:block">
            <p className="text-4xl font-bold leading-none">8+</p>
            <p className="text-xs font-bold uppercase tracking-wide mt-1">Years of<br />Excellence</p>
          </div>

          {/* Floating stat — travelers */}
          <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white rounded-2xl px-6 py-4 shadow-2xl hidden md:block">
            <p className="text-3xl font-bold text-yellow-400 leading-none">10k+</p>
            <p className="text-xs font-semibold uppercase tracking-wide mt-1 text-blue-200">Happy Travelers</p>
          </div>

          {/* Small overlay card */}
          <div className="absolute bottom-10 left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100 hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm">4.9</div>
            <div>
              <p className="text-gray-900 font-bold text-sm leading-none">Rated 4.9 / 5</p>
              <p className="text-gray-500 text-xs">from 2,400+ reviews</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="order-1 lg:order-2">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            We Started With One Simple{" "}
            <span className="text-blue-900 relative inline-block">
              Belief
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full" />
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5 text-base">
            Travel should not be a luxury reserved for the few. It should be accessible, exciting, and
            worry-free for everyone. That belief is what led <span className="font-semibold text-blue-900">Travaround</span> to
            be founded right here in <span className="font-semibold text-gray-900">Kolkata</span> — a city that has
            always had an adventurous spirit.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5 text-base">
            What started as a small team of passionate travel enthusiasts has grown into one of Eastern
            India&apos;s most trusted travel agencies. Over <span className="font-semibold text-gray-900">8 years</span>,
            we have helped more than <span className="font-semibold text-gray-900">10,000 travelers</span> explore
            destinations across Asia, Europe, and the Middle East — without the stress and without
            overspending.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            Today, we are known for our all-inclusive packages, transparent pricing, and a genuine
            commitment to making every trip a memory worth keeping. From a weekend in Goa to a
            Tomorrowland adventure in Thailand — we handle every detail so you can focus on the experience.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-3">
            {[
              "✅ IATA Affiliated",
              "🔒 Secure Payments",
              "🛡️ 100% Insured",
              "⭐ Google Verified",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-blue-50 border border-blue-100 text-blue-900 text-xs font-semibold px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Stats Strip ────────────────────────────────────────────── */
const StatsStrip = () => (
  <section className="bg-blue-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "10,000+", label: "Happy Travelers", icon: "😊" },
          { value: "50+", label: "Destinations Covered", icon: "🌍" },
          { value: "8+", label: "Years of Experience", icon: "🏆" },
          { value: "4.9 ★", label: "Average Rating", icon: "⭐" },
        ].map((s) => (
          <div key={s.label} className="group">
            <div className="text-3xl mb-1">{s.icon}</div>
            <p className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-1">{s.value}</p>
            <p className="text-blue-200 text-xs sm:text-sm uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Mission & Vision ───────────────────────────────────────── */
const MissionVision = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Our Mission &amp; Vision</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {/* Mission */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:border-yellow-400/40 hover:shadow-xl transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
            🎯
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To make world-class travel accessible to every Indian traveler — by offering thoughtfully
            curated packages that combine quality, affordability, and complete peace of mind. We remove
            the hassle of trip planning so our clients can focus entirely on the joy of travel.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
          <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl mb-6">
            🔭
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-blue-200 leading-relaxed">
            To become India&apos;s most loved travel partner — a company synonymous with trust,
            transparency, and transformative travel experiences. We envision a world where every dream
            destination is within reach, no matter your budget.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: "🤝", title: "Trust", desc: "We are honest, transparent, and always put you first." },
          { icon: "💡", title: "Innovation", desc: "We constantly evolve our packages and services." },
          { icon: "❤️", title: "Passion", desc: "We love travel as much as our clients do." },
          { icon: "🌱", title: "Responsibility", desc: "We promote sustainable and respectful tourism." },
        ].map((v) => (
          <div
            key={v.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-yellow-400/50 hover:shadow-md transition-all duration-300 text-center group"
          >
            <div className="text-3xl mb-3">{v.icon}</div>
            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">{v.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Meet the Team ──────────────────────────────────────────── */
const team = [
  {
    name: "Arjun Chatterjee",
    role: "Founder & CEO",
    bio: "A seasoned traveler himself, Arjun founded Travaround with the vision of making international travel affordable for middle-class India. With 15+ years of industry experience, he personally curates every signature package.",
    initials: "AC",
    color: "from-blue-600 to-blue-900",
    speciality: "International Packages & Strategy",
  },
  {
    name: "Shreya Bose",
    role: "Head of Travel Operations",
    bio: "Shreya ensures every booking is flawless. With deep relationships with hotel chains and airlines across 30+ countries, she secures the best deals and makes sure no detail is ever missed.",
    initials: "SB",
    color: "from-purple-500 to-purple-800",
    speciality: "Hotel & Airline Relations",
  },
  {
    name: "Rayan Malhotra",
    role: "Festival & Events Specialist",
    bio: "Rayan is the brain behind Travaround's exclusive music festival packages. He has attended Tomorrowland in Belgium twice and brings insider knowledge to every Tomorrowland Thailand package we offer.",
    initials: "RM",
    color: "from-yellow-500 to-orange-600",
    speciality: "Tomorrowland & Festival Travel",
  },
  {
    name: "Meghna Roy",
    role: "Customer Experience Lead",
    bio: "Meghna and her team are your 24/7 support backbone. From last-minute hotel changes to mid-trip emergencies, she ensures every traveler feels safe, supported, and heard at all times.",
    initials: "MR",
    color: "from-green-500 to-teal-700",
    speciality: "Client Support & Relations",
  },
];

const MeetTheTeam = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-14">
        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-widest">The People Behind</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Meet the Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A passionate group of travel lovers, logistics experts, and customer champions — united by one goal: your perfect trip.
        </p>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-400/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Avatar */}
            <div className={`h-36 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
              <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {member.initials}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-0.5">{member.name}</h3>
              <p className="text-yellow-600 font-semibold text-xs uppercase tracking-wide mb-1">{member.role}</p>
              <span className="inline-block bg-blue-50 text-blue-800 text-xs px-2 py-0.5 rounded-full border border-blue-100 mb-3">
                {member.speciality}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Trust & Accreditations ─────────────────────────────────── */
const TrustSection = () => (
  <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">Credentials</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">Why You Can Trust Us</h2>
        <p className="text-blue-200 max-w-xl mx-auto">
          We are not just a website — we are a registered, insured, and verified travel company with real offices and real people.
        </p>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "🏛️",
            title: "Government Registered",
            desc: "Travaround is a fully registered travel agency operating under the Ministry of Tourism, Government of India.",
          },
          {
            icon: "✈️",
            title: "IATA Affiliated",
            desc: "We are affiliated with the International Air Transport Association, ensuring legitimate, secure airline ticketing for all clients.",
          },
          {
            icon: "🔒",
            title: "Secure & Encrypted Payments",
            desc: "All transactions are SSL-encrypted and processed through RBI-approved payment gateways. Your financial data is always safe.",
          },
          {
            icon: "🛡️",
            title: "Travel Insurance Partners",
            desc: "Every package comes with the option for comprehensive travel insurance through our trusted partners — covering medical, trip cancellations, and baggage loss.",
          },
          {
            icon: "⭐",
            title: "Google Verified Business",
            desc: "Rated 4.9/5 on Google with over 2,400 genuine reviews. Our reputation is built on real experiences, not fake testimonials.",
          },
          {
            icon: "📞",
            title: "24/7 Dedicated Support",
            desc: "We have a dedicated support team available around the clock. Real humans, not bots — always ready to assist you mid-trip.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:border-yellow-400/40 transition-all duration-300 group"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-white/5 border border-white/10 rounded-2xl py-10 px-6">
        <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h3>
        <p className="text-blue-200 mb-7 max-w-lg mx-auto">
          Talk to one of our travel experts today. We will find you the perfect package for your budget and dream destination.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/packages"
            className="bg-yellow-400 text-blue-900 px-8 py-3.5 rounded-full font-bold hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="bg-transparent text-white px-8 py-3.5 rounded-full font-bold border-2 border-white/30 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Page ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StatsStrip />
      <MissionVision />
      <MeetTheTeam />
      <WhyChooseUs
        title="How We Make Every Trip Perfect"
        subtitle="Our process is built around one thing — giving you a holiday that exceeds every expectation"
      />
      <TrustSection />
      <Testimonials
        title="Stories from Our Travelers"
        subtitle="10,000+ happy travelers can&apos;t be wrong — here is what they have to say about Travaround"
      />
      <ContactSection />
    </>
  );
}
