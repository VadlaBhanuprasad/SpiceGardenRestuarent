import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-4">
            Visit Spice Garden
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            We're located in the heart of the city, ready to serve you authentic Indian cuisine with warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Address</h4>
                    <p className="text-secondary-600">
                      123 Spice Street<br />
                      Little India, Downtown<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Phone</h4>
                    <p className="text-secondary-600">
                      Main: +91 98765 43210<br />
                      Reservations: +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Email</h4>
                    <p className="text-secondary-600">
                      info@spicegarden.com<br />
                      reservations@spicegarden.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Hours</h4>
                    <div className="text-secondary-600">
                      <p>Monday - Thursday: 11:00 AM - 10:30 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 11:00 AM - 10:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <p className="mt-6 text-orange-100">
                Stay updated with our latest dishes, festival specials, and cooking tips by following us on social media.
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-[600px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-secondary-600 max-w-sm">
                  In a real implementation, this would be an interactive Google Maps embed showing our exact location in Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-serif font-bold text-xl text-secondary-900 mb-2">Parking</h4>
            <p className="text-secondary-600">
              Complimentary valet parking available. Street parking also available with 2-hour limits.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-serif font-bold text-xl text-secondary-900 mb-2">Accessibility</h4>
            <p className="text-secondary-600">
              Wheelchair accessible entrance and restrooms. Please let us know of any special requirements.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="font-serif font-bold text-xl text-secondary-900 mb-2">Dress Code</h4>
            <p className="text-secondary-600">
              Casual to smart casual attire welcome. Traditional Indian wear is always appreciated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;