import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">About Travaround</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are your trusted travel companion, dedicated to making your adventures memorable and hassle-free. Explore the world with confidence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                f
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                𝕏
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                📷
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                in
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Travel Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hotels" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Guided Tours
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all duration-300">
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">📍</span>
                <span>Balanagar, Hyderabad - 500018</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">📞</span>
                <a href="tel:+917093196599" className="hover:text-yellow-400 transition-colors duration-300">+91 7093196599</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✉️</span>
                <span>info@travaround.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">🕐</span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Travaround. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;