import Link from 'next/link';
import { Chrome as Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-gold text-white p-2 rounded-xl shadow-gold">
                <Home className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Aashiyana Habitat</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding the perfect home. Excellence in real estate since 2004.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-brand-text-secondary hover:text-brand-gold cursor-pointer transition-premium" />
              <Twitter className="h-5 w-5 text-brand-text-secondary hover:text-brand-gold cursor-pointer transition-premium" />
              <Instagram className="h-5 w-5 text-brand-text-secondary hover:text-brand-gold cursor-pointer transition-premium" />
              <Linkedin className="h-5 w-5 text-brand-text-secondary hover:text-brand-gold cursor-pointer transition-premium" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/properties" className="block text-brand-text-secondary hover:text-brand-gold transition-premium">
                Properties
              </Link>
              <Link href="/about" className="block text-brand-text-secondary hover:text-brand-gold transition-premium">
                About Us
              </Link>
              <Link href="/contact" className="block text-brand-text-secondary hover:text-brand-gold transition-premium">
                Contact
              </Link>
              <Link href="#" className="block text-brand-text-secondary hover:text-brand-gold transition-premium">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-brand-text-secondary">Buying</div>
              <div className="text-brand-text-secondary">Selling</div>
              <div className="text-brand-text-secondary">Renting</div>
              <div className="text-brand-text-secondary">Property Management</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-text-secondary" />
                <span className="text-brand-text-secondary">Brigade Road, MG Road, Bangalore 560001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-text-secondary" />
                <span className="text-brand-text-secondary">+91 80 4567 8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-text-secondary" />
                <span className="text-brand-text-secondary">aashiyanahabitat@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-text-secondary mt-8 pt-8 text-center">
          <p className="text-brand-text-secondary">
            © 2024 Aashiyana Habitat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}