import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

interface SimilarPropertiesProps {
  currentPropertyId: string;
}

export function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const currentProperty = properties.find(p => p.id === currentPropertyId);
  
  // Find similar properties based on location, type, and price range
  const similarProperties = properties
    .filter(p => p.id !== currentPropertyId)
    .filter(p => {
      if (!currentProperty) return true;
      
      // Similar location (same area)
      const currentLocation = currentProperty.location.split(',')[0];
      const propertyLocation = p.location.split(',')[0];
      
      // Similar property type
      const sameType = p.type === currentProperty.type;
      
      // Similar price range (±30%)
      const priceDiff = Math.abs(p.price - currentProperty.price) / currentProperty.price;
      const similarPrice = priceDiff <= 0.3;
      
      const sameLocation = currentLocation === propertyLocation;
      return sameLocation || sameType || similarPrice;
    })
    .slice(0, 6);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Similar Properties</h2>
          <p className="text-gray-600">Discover more options in the same area</p>
        </div>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white">
          View All Properties
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Location Context */}
      {currentProperty && (
        <div className="bg-amber-50 rounded-xl p-4 mb-8">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-amber-600" />
            <div>
              <div className="font-medium text-slate-800">Properties near {currentProperty.location}</div>
              <div className="text-sm text-gray-600">
                {similarProperties.length} similar properties found in this area
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {similarProperties.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No similar properties found</div>
          <Button variant="outline">View All Properties</Button>
        </div>
      )}
    </section>
  );
}