import Link from "next/link";
import { Facebook, Instagram, Github, Mail, Phone, MapPin, Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-white">
              <Sun className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">SunCart</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your ultimate destination for quality summer essentials. We bring you the heat, you bring the style.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/jubayer.info360" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/jubayer.info360" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://github.com/jubayer2019" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/login" className="hover:text-orange-500 transition-colors">Account Login</Link></li>
              <li><Link href="/register" className="hover:text-orange-500 transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Summer Apparel</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Beach Gear</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Skincare</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Ambikapur, Faridpur Sadar, Faridpur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+880 19356-15672</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>jubayer.prodesigner@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© 2024 SunCart Store. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
