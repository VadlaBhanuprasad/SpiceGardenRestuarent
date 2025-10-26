import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Spice Garden
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience authentic Indian cuisine in an atmosphere of warmth and tradition. 
              Where every dish tells a story of heritage, spices, and culinary mastery.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 p-3 rounded-lg transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 p-3 rounded-lg transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 p-3 rounded-lg transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>123 Spice Street</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300 text-sm">info@spicegarden.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Spice Garden Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;