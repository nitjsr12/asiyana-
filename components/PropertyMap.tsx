'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { properties, Property } from '@/lib/data';
import { MapPin, Loader } from 'lucide-react';

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface PropertyMapProps {
  properties?: Property[];
  height?: string;
}

export function PropertyMap({ properties: props = properties, height = '400px' }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    link.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==';
    link.crossOrigin = '';
    document.head.appendChild(link);
    
    // Fix for default markers
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });

    return () => {
      // Cleanup: remove the CSS link when component unmounts
      const existingLink = document.querySelector('link[href*="leaflet.css"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const bangaloreCenter: [number, number] = [12.9716, 77.5946];

  return (
    <div className="bg-white rounded-xl shadow-premium overflow-hidden">
      <div className="p-4 border-b bg-gradient-to-r from-brand-cream to-white">
        <h3 className="text-lg font-semibold text-brand-text-primary flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-brand-gold" />
          Property Locations in Bangalore
        </h3>
        <p className="text-sm text-brand-text-secondary mt-1">
          {props.filter(p => p.coordinates).length} properties with location data
        </p>
      </div>
      
      <div ref={mapRef} className="relative" style={{ height }}>
        <MapContainer
          center={bangaloreCenter}
          zoom={11}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {props.filter(property => property.coordinates).map((property) => (
            <Marker
              key={property.id}
              position={[property.coordinates!.lat, property.coordinates!.lng]}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-semibold text-gray-900 mb-1">{property.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                  <p className="text-lg font-bold text-blue-600">
                    ₹{property.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{property.bedrooms} bed</span>
                    <span className="mx-1">•</span>
                    <span>{property.bathrooms} bath</span>
                    <span className="mx-1">•</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}