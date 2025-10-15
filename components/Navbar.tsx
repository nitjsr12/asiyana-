'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-premium ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-premium border-b border-brand-gray-100' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-1 sm:py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-8 w-auto sm:h-10 max-w-[180px] sm:max-w-[220px]">
              <Image
                src="/logo.png"
                alt="Aashiyana Habitat Property House"
                width={220}
                height={40}
                className="object-contain object-left transition-all duration-200 group-hover:scale-105 w-full h-full filter drop-shadow-sm"
                priority
                sizes="(max-width: 640px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm xl:text-base font-semibold transition-premium hover:text-brand-gold hover:scale-105 ${
                  pathname === item.href 
                    ? 'text-brand-gold border-b-2 border-brand-gold pb-1' 
                    : 'text-brand-text-primary hover:text-brand-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="gradient-gold hover:opacity-90 text-white font-semibold px-4 xl:px-6 py-2 text-sm xl:text-base rounded-xl shadow-gold hover:shadow-lg transition-premium hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text-primary hover:text-brand-gold p-2 rounded-lg hover:bg-brand-cream transition-premium"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-brand-gray-100 shadow-premium">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {/* Mobile Logo */}
            <div className="flex justify-center py-3 border-b border-brand-gray-100 mb-4">
              <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
                <div className="relative h-8 w-auto sm:h-10 max-w-[160px] sm:max-w-[200px] bg-white rounded-xl px-3 py-2 shadow-premium border border-brand-gray-100">
                  <Image
                    src="/logo.png"
                    alt="Aashiyana Habitat Property House"
                    width={200}
                    height={40}
                    className="object-contain object-center transition-all duration-200 group-hover:scale-105 w-full h-full filter drop-shadow-sm"
                    priority
                    sizes="(max-width: 640px) 160px, 200px"
                  />
                </div>
              </Link>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-premium ${
                  pathname === item.href
                    ? 'text-brand-gold bg-brand-cream border-l-4 border-brand-gold'
                    : 'text-brand-navy hover:text-brand-gold hover:bg-brand-cream hover:border-l-4 hover:border-brand-gold-light'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 pt-4">
              <Button className="w-full gradient-gold hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-gold hover:shadow-lg transition-premium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}