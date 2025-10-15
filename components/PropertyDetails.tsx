'use client';

import { properties } from '@/lib/data';
import { Bed, Bath, Square, Calendar, Car, MapPin, Home, Users, Clock, Shield, Wifi, ParkingCircle } from 'lucide-react';
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
          <h1 className="text-3xl font-bold text-brand-navy">{property.title}</h1>
          <Badge className={`${
            property.status === 'for-sale' ? 'gradient-gold' : 
            property.status === 'for-rent' ? 'bg-brand-navy' : 'bg-brand-slate'
          } text-white shadow-gold`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </Badge>
        </div>
        
        <div className="flex items-center text-brand-slate mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          {property.location}
        </div>
        
        <div className="text-4xl font-bold text-brand-gold mb-6">
          {formatPrice(property.price)}
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 bg-amber-50 rounded-xl shadow-lg">
            <Bed className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-slate-800">{property.bedrooms}</div>
            <div className="text-sm text-gray-600">Bedrooms</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-xl shadow-lg">
            <Bath className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-slate-800">{property.bathrooms}</div>
            <div className="text-sm text-gray-600">Bathrooms</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-xl shadow-lg">
            <Square className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-slate-800">{property.sqft.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Square Feet</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-xl shadow-lg">
            <Car className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-xl font-semibold text-slate-800">{property.parking}</div>
            <div className="text-sm text-gray-600">Parking</div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Property</h2>
        <p className="text-gray-600 leading-relaxed mb-6">{property.description}</p>
        
        {/* Property Specifications */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Property Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">Property Type</div>
                <div className="font-medium text-slate-800 capitalize">{property.type}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">Year Built</div>
                <div className="font-medium text-slate-800">{property.yearBuilt}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">Suitable For</div>
                <div className="font-medium text-slate-800">
                  {property.bedrooms === 1 ? 'Single/Couple' : 
                   property.bedrooms === 2 ? 'Small Family' :
                   property.bedrooms === 3 ? 'Family' : 'Large Family'}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ParkingCircle className="h-5 w-5 text-amber-600" />
              <div>
                <div className="text-sm text-gray-600">Parking Type</div>
                <div className="font-medium text-slate-800">Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-amber-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">24/7 Security & CCTV</span>
            </div>
            <div className="flex items-center space-x-3">
              <Wifi className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">High-Speed Internet Ready</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">Power Backup Available</span>
            </div>
            <div className="flex items-center space-x-3">
              <Car className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">Valet Parking Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}