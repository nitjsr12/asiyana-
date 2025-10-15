'use client';

import { properties } from '@/lib/data';
import { MapPin, Navigation, Clock, Car, Bus } from 'lucide-react';

interface LocationMapProps {
  propertyId: string;
}

export function LocationMap({ propertyId }: LocationMapProps) {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return <div className="bg-red-100 p-4 rounded">Property not found</div>;

  // Mock nearby amenities data
  const nearbyAmenities = [
    { name: 'Bangalore International Airport', distance: '45 km', icon: '✈️', type: 'airport' },
    { name: 'Phoenix MarketCity', distance: '2.5 km', icon: '🛍️', type: 'shopping' },
    { name: 'Fortis Hospital', distance: '3.2 km', icon: '🏥', type: 'hospital' },
    { name: 'Whitefield Metro Station', distance: '1.8 km', icon: '🚇', type: 'metro' },
    { name: 'International School of Bangalore', distance: '4.1 km', icon: '🎓', type: 'school' },
    { name: 'ITC Gardenia Hotel', distance: '2.8 km', icon: '🏨', type: 'hotel' }
  ];

  const transportOptions = [
    { type: 'Metro', time: '15 min', distance: '1.8 km', icon: Bus },
    { type: 'Bus', time: '25 min', distance: '3.2 km', icon: Bus },
    { type: 'Car', time: '12 min', distance: '2.1 km', icon: Car }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Location & Connectivity</h2>
      
      {/* Map Placeholder */}
      <div className="relative mb-6">
        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-3" />
            <div className="text-lg font-semibold text-slate-800">{property.location}</div>
            <div className="text-sm text-gray-600">Interactive Map Coming Soon</div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
          <div className="text-xs text-gray-600">Coordinates</div>
          <div className="text-sm font-medium text-slate-800">
            {property.coordinates.lat.toFixed(4)}, {property.coordinates.lng.toFixed(4)}
          </div>
        </div>
      </div>

      {/* Location Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Neighborhood Highlights</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🏢</span>
              </div>
              <div>
                <div className="font-medium text-slate-800">IT Hub Proximity</div>
                <div className="text-sm text-gray-600">Close to major tech parks and offices</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🌳</span>
              </div>
              <div>
                <div className="font-medium text-slate-800">Green Surroundings</div>
                <div className="text-sm text-gray-600">Parks and recreational areas nearby</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-sm">🏫</span>
              </div>
              <div>
                <div className="font-medium text-slate-800">Educational Institutions</div>
                <div className="text-sm text-gray-600">Top schools and colleges in vicinity</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Transportation</h3>
          <div className="space-y-3">
            {transportOptions.map((transport, index) => {
              const IconComponent = transport.icon;
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium text-slate-800">{transport.type}</div>
                      <div className="text-sm text-gray-600">{transport.distance}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-slate-800">{transport.time}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Nearby Amenities */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Nearby Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyAmenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
              <div className="text-lg">{amenity.icon}</div>
              <div className="flex-1">
                <div className="font-medium text-slate-800 text-sm">{amenity.name}</div>
                <div className="text-xs text-gray-600">{amenity.distance} away</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}