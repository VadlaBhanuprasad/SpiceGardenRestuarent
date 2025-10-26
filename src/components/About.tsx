import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Awards Won', value: '12' },
    { icon: Users, label: 'Happy Customers', value: '15K+' },
    { icon: Clock, label: 'Years of Excellence', value: '30' },
    { icon: Heart, label: 'Signature Dishes', value: '200+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
              Our Heritage
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Founded in 1994, Spice Garden has been serving authentic Indian cuisine for over three decades. 
              Our journey began with a simple vision: to bring the rich flavors and traditions of India 
              to food lovers everywhere.
            </p>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Led by Master Chef Rajesh Kumar, our culinary team is passionate about preserving traditional 
              recipes while creating innovative dishes. Every spice is carefully selected, every dish is 
              prepared with love, and every meal tells a story of our heritage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                  <div className="text-secondary-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Explore Menu
              </a>
              <a
                href="#contact"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Indian chef preparing food"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Restaurant interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/5560777/pexels-photo-5560777.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Indian spices and ingredients"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Traditional cooking"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;