import { PriceAndFloorPlan } from '@/components/PriceAndFloorPlan';
import { LocationMap } from '@/components/LocationMap';
import { ContactAgent } from '@/components/ContactAgent';
import { SimilarProperties } from '@/components/SimilarProperties';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { properties } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Calendar, Users, Home, Star } from 'lucide-react';

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
  const property = properties.find(p => p.id === params.id);
  
  if (!property) {
    return <div>Property not found</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white">
      {/* Hero Banner */}
      <div className="gradient-dark text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="gradient-gold text-white shadow-gold">
                  {property.constructionStatus === 'under-construction' ? 'Under Construction' : 'Ready to Move-In'}
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {property.title}
              </h1>
              
              <div className="flex items-center text-xl text-gray-300 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-brand-gold" />
                {property.location}
              </div>
              
              <div className="text-3xl font-bold text-brand-gold mb-8">
                Starting from {formatPrice(property.price)}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">
                    {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} BHK`}
                  </div>
                  <div className="text-sm text-gray-300">Configuration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">
                    {property.sqft.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-300">Sq. Ft.</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">
                    {property.projectArea}
                  </div>
                  <div className="text-sm text-gray-300">Project Area</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand-gold mb-1">
                    {property.possessionDate}
                  </div>
                  <div className="text-sm text-gray-300">Possession</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-gold hover:opacity-90 text-white font-semibold shadow-gold transition-premium">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Site Visit
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-text-primary">
                  <Users className="h-4 w-4 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">Starting Price</div>
                  <div className="text-2xl font-bold">{formatPrice(property.price)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Project Showcase */}
        <div className="mb-12">
          <ProjectShowcase property={property} />
        </div>
        
        {/* Price & Floor Plan Section */}
        <div className="mb-12">
          <PriceAndFloorPlan propertyId={params.id} />
        </div>
        
        {/* Location and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <LocationMap propertyId={params.id} />
          </div>
          
          <div className="lg:col-span-1">
            <ContactAgent propertyId={params.id} />
          </div>
        </div>
        
        {/* Similar Properties */}
        <SimilarProperties currentPropertyId={params.id} />
      </div>
    </div>
  );
}