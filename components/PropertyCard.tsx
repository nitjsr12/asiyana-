'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/data';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DownloadBrochureSimple } from '@/components/DownloadBrochure';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

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
        <div className="absolute top-4 left-4">
          <Badge className={`${
            property.status === 'for-sale' ? 'gradient-gold' : 
            property.status === 'for-rent' ? 'bg-brand-dark' : 'bg-brand-text-secondary'
          } text-white shadow-gold`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
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
        <div className="mb-2">
          <div className="text-2xl font-bold text-brand-gold mb-1">
            {formatPrice(property.price)}
          </div>
          <div className="flex items-center text-brand-text-secondary text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-brand-text-primary mb-3 group-hover:text-brand-gold transition-premium">
          {property.title}
        </h3>

        <div className="flex items-center justify-between text-brand-text-secondary text-sm mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {property.sqft.toLocaleString()} sqft
            </div>
          </div>
        </div>

        <div className="space-y-2">
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