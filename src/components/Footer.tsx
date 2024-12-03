import React from 'react';
import { Link } from 'react-router-dom';
import { Music2, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Music2 className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl">BeatBox Events</span>
            </Link>
            <p className="text-gray-400">
              Creating unforgettable experiences through world-class event management
              and entertainment services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-400 hover:text-purple-500">
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-gray-400 hover:text-purple-500">
                  Artists
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-purple-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 99994 40706</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@beatboxevents.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Keshav Puram, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} BeatBox Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};