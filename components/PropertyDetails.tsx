'use client';

import { properties } from '@/lib/data';
import { Bed, Bath, Square, Calendar, Car, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PropertyDetailsProps {
  propertyId: string;
}

export function PropertyDetails({ propertyId }: PropertyDetailsProps) {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return <div>Property not found</div>;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
          <Badge className={`${
            property.status === 'for-sale' ? 'bg-green-500' : 
            property.status === 'for-rent' ? 'bg-blue-500' : 'bg-gray-500'
          } text-white`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </Badge>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          {property.location}
        </div>
        
        <div className="text-4xl font-bold text-blue-600 mb-6">
          {formatPrice(property.price)}
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Bed className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-900">{property.bedrooms}</div>
            <div className="text-sm text-gray-600">Bedrooms</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Bath className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-900">{property.bathrooms}</div>
            <div className="text-sm text-gray-600">Bathrooms</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Square className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-900">{property.sqft.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Square Feet</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Car className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-900">{property.parking}</div>
            <div className="text-sm text-gray-600">Parking</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Property</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{property.description}</p>
        
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <span className="font-medium text-gray-900">Property Type:</span>
            <span className="ml-2 text-gray-600 capitalize">{property.type}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Year Built:</span>
            <span className="ml-2 text-gray-600">{property.yearBuilt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}