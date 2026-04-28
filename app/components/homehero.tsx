'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Destination {
  id: number;
  name: string;
  country: string;
  tagline: string;
  image: string;
  backgroundImage: string;
  rating: number;
  packages: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Thailand',
    country: 'Southeast Asia',
    tagline: 'Land of golden temples & paradise beaches',
    image: 'https://images.pexels.com/photos/2108831/pexels-photo-2108831.jpeg',
    backgroundImage: 'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg',
    rating: 4.8,
    packages: 12,
  },
  {
    id: 2,
    name: 'Singapore',
    country: 'Southeast Asia',
    tagline: 'A dazzling city where nature meets luxury',
    image: 'https://images.pexels.com/photos/1682794/pexels-photo-1682794.jpeg',
    backgroundImage: 'https://images.pexels.com/photos/867092/pexels-photo-867092.jpeg',
    rating: 4.9,
    packages: 7,
  },
  {
    id: 3,
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Tropical bliss and spiritual serenity',
    image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg',
    backgroundImage: 'https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg',
    rating: 4.7,
    packages: 9,
  },
  {
    id: 4,
    name: 'Goa',
    country: 'India',
    tagline: 'Sun, sand, and soulful sunsets',
    image: 'https://images.pexels.com/photos/4429334/pexels-photo-4429334.jpeg',
    backgroundImage: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg',
    rating: 4.9,
    packages: 14,
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % destinations.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);

  const getVisibleCards = () => {
    return [0, 1, 2].map((i) => destinations[(currentIndex + i) % destinations.length]);
  };

  const current = destinations[currentIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-black">

      {/* Background image */}
      <div className="absolute inset-0 transition-all duration-1000">
        <Image
          src={`${current.backgroundImage}?auto=compress&cs=tinysrgb&w=1920`}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/40 to-black/70" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* ── Left: Text ── */}
          <div className="text-white space-y-5 z-10 text-center lg:text-left">
            <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-widest">
              Discover the World
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-none">
              {current.name.toUpperCase()}
            </h1>

            <p className="text-yellow-400/80 text-base sm:text-lg font-medium italic">
              {current.country}
            </p>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {current.tagline}. Travaround brings you handcrafted packages at unbeatable prices — so you travel more and worry less.
            </p>

            {/* Stats row */}
            <div className="flex justify-center lg:justify-start gap-6 pt-2">
              <div>
                <p className="text-2xl font-bold text-yellow-400">{current.rating}★</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Rating</p>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">{current.packages}+</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Packages</p>
              </div>
              <div className="w-px bg-white/20"></div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">10k+</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Travelers</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <Link
                href="/packages"
                className="bg-yellow-400 text-blue-900 px-7 py-3.5 rounded-full font-bold text-base hover:bg-transparent hover:text-yellow-400 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-yellow-400/40"
              >
                Explore Packages →
              </Link>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-white/10 backdrop-blur-sm text-white px-5 py-3.5 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30 text-sm"
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 pt-4 justify-center lg:justify-start">
              {destinations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-10 bg-yellow-400' : 'w-5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Card stack (hidden on mobile, visible md+) ── */}
          <div className="relative h-[480px] md:h-[540px] items-center justify-center hidden md:flex">

            {/* Prev/Next buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 border border-white/30"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Stacked cards */}
            <div className="relative w-full max-w-xs h-full flex items-center justify-center mx-12">
              {getVisibleCards().map((dest, idx) => (
                <div
                  key={dest.id}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    idx === 0
                      ? 'z-30 scale-100 opacity-100'
                      : idx === 1
                      ? 'z-20 scale-90 opacity-60 translate-x-10 translate-y-8'
                      : 'z-10 scale-75 opacity-30 translate-x-20 translate-y-16'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl w-72 h-[380px]">
                    <div className="relative h-full">
                      <Image
                        src={`${dest.image}?auto=compress&cs=tinysrgb&w=400`}
                        alt={dest.name}
                        fill
                        sizes="288px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* Top badge */}
                      <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                        {dest.packages}+ Packages
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <p className="text-xs text-yellow-400 uppercase tracking-widest mb-1">{dest.country}</p>
                        <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(dest.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-gray-300 text-sm ml-1">{dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 border border-white/30"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* ── Mobile only: single card below text ── */}
          <div className="md:hidden flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={`${current.image}?auto=compress&cs=tinysrgb&w=400`}
                alt={current.name}
                fill
                sizes="288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-xs text-yellow-400 uppercase tracking-widest mb-0.5">{current.country}</p>
                <h3 className="text-lg font-bold">{current.name}</h3>
              </div>
              <div className="absolute top-3 left-3 bg-yellow-400 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full">
                {current.packages}+ Packages
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;
