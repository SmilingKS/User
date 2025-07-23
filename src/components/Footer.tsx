import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SmilingKS</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Preserving precious student memories and connecting school communities 
              through beautiful, secure photo sharing platforms.
            </p>
            <div className="flex items-center text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="mx-1 h-4 w-4 text-red-400" />
              <span>for students everywhere</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="/login" className="hover:text-blue-400 transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@smilingks.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Kansas City, KS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 SmilingKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;