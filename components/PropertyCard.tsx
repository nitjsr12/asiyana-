'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/data';
import { Bed, Bath, Square, MapPin, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DownloadBrochureSimple } from '@/components/DownloadBrochure';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(price);
    }
  };

  const formatPricePerSqft = (price: number, sqft: number) => {
    const pricePerSqft = Math.round(price / sqft);
    return `₹${pricePerSqft.toLocaleString()}`;
  };

  // Generate random rating between 4.5 and 5.0
  const rating = (4.5 + Math.random() * 0.5).toFixed(2);
  const reviewCount = Math.floor(Math.random() * 100) + 20;

  return (
    <div className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-xl transition-premium group">
      <div className="relative">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className={`${
            property.status === 'for-sale' ? 'gradient-gold' : 
            property.status === 'for-rent' ? 'bg-brand-dark' : 'bg-brand-text-secondary'
          } text-white shadow-gold`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </Badge>
          <Badge className={`${
            property.constructionStatus === 'under-construction' ? 'bg-orange-500' : 'bg-green-500'
          } text-white shadow-gold`}>
            {property.constructionStatus === 'under-construction' ? 'Under Construction' : 'Ready to Move-In'}
          </Badge>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-brand-text-primary hover:text-brand-gold transition-premium"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6">
        {/* Property Name with Rating */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-brand-text-primary group-hover:text-brand-gold transition-premium leading-tight">
            {property.title}
          </h3>
          <div className="flex items-center ml-2">
            <Star className="h-4 w-4 fill-black text-black" />
            <span className="text-sm font-semibold text-brand-text-primary ml-1">{rating}</span>
            <span className="text-sm text-brand-text-secondary ml-1">({reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-brand-text-secondary text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {property.location}
        </div>

        {/* Starting Price */}
        <div className="text-lg font-semibold text-brand-text-primary mb-4">
          Price starts from {formatPrice(property.price)}
        </div>

        {/* Bottom Row: Price per sqft with status and Configurations */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <span className="font-semibold text-brand-text-primary underline">
              {formatPricePerSqft(property.price, property.sqft)} /sqft - {property.constructionStatus === 'under-construction' ? 'Under Construction' : 'Ready to Move'}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-brand-text-secondary">•</span>
            <span className="text-brand-text-primary ml-1 font-medium">
              {property.configurations?.split(',').map(config => config.trim()).slice(0, 3).join(', ') || `${property.bedrooms === 0 ? 'Studio' : property.bedrooms} BHK`}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          <Link href={`/properties/${property.id}`}>
            <Button className="w-full gradient-gold hover:opacity-90 text-white shadow-gold transition-premium">
              View Details
            </Button>
          </Link>
          <DownloadBrochureSimple 
            brochure={property.brochure} 
            propertyTitle={property.title}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}