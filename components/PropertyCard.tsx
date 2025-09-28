'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/data';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
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
            property.status === 'for-sale' ? 'bg-green-500' : 
            property.status === 'for-rent' ? 'bg-blue-500' : 'bg-gray-500'
          } text-white`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </Badge>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {formatPrice(property.price)}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
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

        <Link href={`/properties/${property.id}`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}