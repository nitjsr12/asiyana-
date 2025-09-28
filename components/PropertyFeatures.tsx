import { properties } from '@/lib/data';
import { Check } from 'lucide-react';

interface PropertyFeaturesProps {
  propertyId: string;
}

export function PropertyFeatures({ propertyId }: PropertyFeaturesProps) {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return <div>Property not found</div>;

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {property.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-green-100 p-1 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}