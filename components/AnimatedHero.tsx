'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, MapPin, Chrome as Home, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchFormRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(searchFormRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .from(statsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4");

      // Removed floating animation for search form

      // Stats counter animation
      const statsElements = statsRef.current?.querySelectorAll('.stat-number');
      statsElements?.forEach((element) => {
        const finalValue = element.textContent || '0';
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        gsap.fromTo(element, 
          { textContent: 0 },
          {
            textContent: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              const current = Math.round(this.targets()[0].textContent);
              if (finalValue.includes('+')) {
                element.textContent = current + '+';
              } else if (finalValue.includes('%')) {
                element.textContent = current + '%';
              } else {
                element.textContent = current.toString();
              }
            }
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white  pt-10  px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6x pt-10 lg:text-7xl font-bold mb-6 leading-tight"
        >
          Find Your Perfect 
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dream Home
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-4xl mx-auto"
        >
          Discover luxury properties and exclusive listings in Bangalore&apos;s most prestigious neighborhoods
        </p>

        {/* Enhanced Search Form */}
        <div 
          ref={searchFormRef}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl max-w-4xl mx-auto border border-white/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative group">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <Input
                placeholder="Location in Bangalore"
                className="pl-10 h-12 text-gray-900 bg-white/90 backdrop-blur border-0 rounded-lg text-base"
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              />
            </div>
            
            <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}>
              <SelectTrigger className="h-12 text-gray-900 bg-white/90 backdrop-blur border-0 rounded-lg text-base">
                <Home className="h-4 w-4 text-gray-400 mr-2" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">Independent House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({ ...searchData, priceRange: value })}>
              <SelectTrigger className="h-12 text-gray-900 bg-white/90 backdrop-blur border-0 rounded-lg text-base">
                <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-5000000">₹50L - ₹1Cr</SelectItem>
                <SelectItem value="5000000-10000000">₹1Cr - ₹1.5Cr</SelectItem>
                <SelectItem value="10000000-20000000">₹1.5Cr - ₹2Cr</SelectItem>
                <SelectItem value="20000000+">₹2Cr+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Search className="h-4 w-4 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="text-center group">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">1500+</div>
            <div className="text-gray-200 text-base sm:text-lg group-hover:text-white transition-colors">Properties Sold</div>
          </div>
          <div className="text-center group">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-200 text-base sm:text-lg group-hover:text-white transition-colors">Client Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-200 text-base sm:text-lg group-hover:text-white transition-colors">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}