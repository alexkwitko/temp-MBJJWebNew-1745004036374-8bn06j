import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold text-neutral-50 tracking-wider">MBJJ</span>
            </div>
            <p className="text-neutral-300 mb-4">
              MBJJ provides world-class Brazilian Jiu-Jitsu training for all ages and skill levels. 
              Join our community and transform your life through martial arts.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Classes', path: '/classes' },
                { name: 'Schedule', path: '/schedule' },
                { name: 'Instructors', path: '/instructors' },
                { name: 'Shop', path: '/shop' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-neutral-300 hover:text-secondary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-500 mt-1 mr-2" />
                <span className="text-neutral-300">
                  1234 Martial Arts Blvd<br />
                  Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-500 mr-2" />
                <a href="tel:+12125551234" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-500 mr-2" />
                <a href="mailto:info@mbjj.com" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  info@mbjj.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              {[
                { day: 'Monday - Friday', hours: '6:00 AM - 9:00 PM' },
                { day: 'Saturday', hours: '8:00 AM - 5:00 PM' },
                { day: 'Sunday', hours: '9:00 AM - 2:00 PM' },
              ].map((schedule, index) => (
                <li key={index} className="flex items-start">
                  <Clock size={20} className="text-secondary-500 mt-1 mr-2" />
                  <div>
                    <span className="text-neutral-200 font-medium">{schedule.day}</span><br />
                    <span className="text-neutral-300">{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MBJJ. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-neutral-400">
              <a href="#" className="hover:text-secondary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;