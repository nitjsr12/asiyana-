import { PropertyDetails } from '@/components/PropertyDetails';
import { PropertyGallery } from '@/components/PropertyGallery';
import { PropertyFeatures } from '@/components/PropertyFeatures';
import { PropertyOverview } from '@/components/PropertyOverview';
import { PriceAndFloorPlan } from '@/components/PriceAndFloorPlan';
import { LocationMap } from '@/components/LocationMap';
import { ContactAgent } from '@/components/ContactAgent';
import { SimilarProperties } from '@/components/SimilarProperties';
import { properties } from '@/lib/data';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all property IDs
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyPage({ params }: PropertyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyGallery propertyId={params.id} />
        
        {/* Property Overview Section */}
        <PropertyOverview propertyId={params.id} />
        
        {/* Price & Floor Plan Section */}
        <PriceAndFloorPlan propertyId={params.id} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyDetails propertyId={params.id} />
            <PropertyFeatures propertyId={params.id} />
            <LocationMap propertyId={params.id} />
          </div>
          
          <div className="lg:col-span-1">
            <ContactAgent propertyId={params.id} />
          </div>
        </div>
        
        <SimilarProperties currentPropertyId={params.id} />
      </div>
    </div>
  );
}