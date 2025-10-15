'use client';

import { useState } from 'react';
import { Search, MapPin, Chrome as Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function Hero() {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="text-brand-gold block">Dream Home</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
          Discover luxury properties and exclusive listings in the most desirable neighborhoods
        </p>

        {/* Search Form */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-premium max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-brand-text-secondary" />
              <Input
                placeholder="Location"
                className="pl-10 h-12 text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium"
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
              />
            </div>
            
            <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}>
              <SelectTrigger className="h-12 text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium">
                <Home className="h-5 w-5 text-brand-text-secondary mr-2" />
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({ ...searchData, priceRange: value })}>
              <SelectTrigger className="h-12 text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium">
                <DollarSign className="h-5 w-5 text-brand-text-secondary mr-2" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-5000000">₹0 - ₹50L</SelectItem>
                <SelectItem value="5000000-10000000">₹50L - ₹1Cr</SelectItem>
                <SelectItem value="10000000-20000000">₹1Cr - ₹2Cr</SelectItem>
                <SelectItem value="20000000+">₹2Cr+</SelectItem>
              </SelectContent>
            </Select>

            <Button className="h-12 gradient-gold hover:opacity-90 text-white font-semibold shadow-gold transition-premium">
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">1500+</div>
            <div className="text-gray-200">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">98%</div>
            <div className="text-gray-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">15+</div>
            <div className="text-gray-200">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}