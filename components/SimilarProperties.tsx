import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/PropertyCard';

interface SimilarPropertiesProps {
  currentPropertyId: string;
}

export function SimilarProperties({ currentPropertyId }: SimilarPropertiesProps) {
  const similarProperties = properties
    .filter(p => p.id !== currentPropertyId)
    .slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}