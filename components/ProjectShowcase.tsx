'use client';

import { useState } from 'react';
import { Property } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Building, 
  Calendar, 
  Users, 
  Home, 
  Star,
  Shield,
  Car,
  Trees,
  Wifi,
  Dumbbell,
  Waves,
  PlayCircle,
  Camera,
  Download,
  Share2,
  Heart
} from 'lucide-react';

interface ProjectShowcaseProps {
  property: Property;
}

export function ProjectShowcase({ property }: ProjectShowcaseProps) {
  const [selectedTab, setSelectedTab] = useState('overview');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: any } = {
      'Swimming Pool': Waves,
      'Gym': Dumbbell,
      'Fitness Center': Dumbbell,
      'Garden': Trees,
      'Landscaped Gardens': Trees,
      'Power Backup': Shield,
      'Covered Parking': Car,
      'Parking': Car,
      'Security System': Shield,
      '24/7 Security': Shield,
      'Club House': Building,
      'Children Play Area': PlayCircle,
      'Lift Access': Building,
      'Water Supply': Shield,
      'Waste Management': Shield,
      'Rainwater Harvesting': Trees,
    };
    return iconMap[amenity] || Home;
  };

  return (
    <div className="space-y-6">
      {/* Project Hero Section */}
      <Card className="overflow-hidden shadow-premium">
        <div className="relative h-96 bg-gradient-to-br from-brand-dark via-brand-dark-light to-brand-dark">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="gradient-gold text-white shadow-gold">
                      {property.constructionStatus === 'under-construction' ? 'Under Construction' : 'Ready to Move-In'}
                    </Badge>
                    <Badge variant="outline" className="border-white text-white">
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center text-lg text-gray-300 mb-6">
                    <MapPin className="h-5 w-5 mr-2 text-brand-gold" />
                    {property.location}
                  </div>
                  
                  <div className="text-2xl font-bold text-brand-gold mb-6">
                    Starting from {formatPrice(property.price)}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="gradient-gold hover:opacity-90 text-white font-semibold shadow-gold transition-premium">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Site Visit
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-text-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-6 text-center bg-white shadow-premium">
          <div className="text-3xl font-bold text-brand-gold mb-2">
            {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} BHK`}
          </div>
          <div className="text-sm text-brand-text-secondary">Configuration</div>
        </Card>
        <Card className="p-6 text-center bg-white shadow-premium">
          <div className="text-3xl font-bold text-brand-gold mb-2">
            {property.sqft.toLocaleString()}
          </div>
          <div className="text-sm text-brand-text-secondary">Sq. Ft.</div>
        </Card>
        <Card className="p-6 text-center bg-white shadow-premium">
          <div className="text-3xl font-bold text-brand-gold mb-2">
            {property.projectArea}
          </div>
          <div className="text-sm text-brand-text-secondary">Project Area</div>
        </Card>
        <Card className="p-6 text-center bg-white shadow-premium">
          <div className="text-3xl font-bold text-brand-gold mb-2">
            {property.possessionDate}
          </div>
          <div className="text-sm text-brand-text-secondary">Possession</div>
        </Card>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="amenities" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            Amenities
          </TabsTrigger>
          <TabsTrigger value="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Location
          </TabsTrigger>
          <TabsTrigger value="gallery" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <Card className="p-6 bg-white shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Project Overview</h3>
                <p className="text-brand-text-secondary leading-relaxed mb-6">
                  {property.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-brand-gray-100">
                    <span className="text-brand-text-secondary">Launch Date</span>
                    <span className="font-semibold text-brand-text-primary">{property.launchDate}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-gray-100">
                    <span className="text-brand-text-secondary">Configurations</span>
                    <span className="font-semibold text-brand-text-primary">{property.configurations}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-gray-100">
                    <span className="text-brand-text-secondary">Size Range</span>
                    <span className="font-semibold text-brand-text-primary">{property.sizeRange}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-gray-100">
                    <span className="text-brand-text-secondary">Avg. Price per Sq. Ft.</span>
                    <span className="font-semibold text-brand-gold">₹{property.avgPricePerSqft?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-brand-gray-100">
                    <span className="text-brand-text-secondary">Project Size</span>
                    <span className="font-semibold text-brand-text-primary">{property.projectSize}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-brand-text-secondary">RERA ID</span>
                    <span className="font-semibold text-brand-text-primary text-sm">{property.reraId}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-brand-cream rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-brand-text-primary font-medium">Prime Location</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-brand-cream rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                      <Building className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-brand-text-primary font-medium">Modern Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-brand-cream rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-brand-text-primary font-medium">24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-brand-cream rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                      <Trees className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-brand-text-primary font-medium">Green Living</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="mt-4">
          <Card className="p-6 bg-white shadow-premium">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-6">Amenities & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.features.map((feature, index) => {
                const IconComponent = getAmenityIcon(feature);
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-brand-cream rounded-lg hover:bg-brand-cream-dark transition-premium">
                    <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-brand-text-primary font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="mt-4">
          <Card className="p-6 bg-white shadow-premium">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-6">Location & Connectivity</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-brand-text-primary mb-4">Nearby Landmarks</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span className="text-brand-text-secondary">Mysore Road Metro Station - 2 km</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span className="text-brand-text-secondary">Rajarajeshwari Nagar Market - 1 km</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span className="text-brand-text-secondary">Bangalore City Railway Station - 8 km</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                    <span className="text-brand-text-secondary">Kempegowda International Airport - 45 km</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-brand-text-primary mb-4">Coordinates</h4>
                {property.coordinates && (
                  <div className="bg-brand-cream p-4 rounded-lg">
                    <div className="text-sm text-brand-text-secondary mb-2">Latitude</div>
                    <div className="font-semibold text-brand-text-primary">{property.coordinates.lat}</div>
                    <div className="text-sm text-brand-text-secondary mb-2 mt-3">Longitude</div>
                    <div className="font-semibold text-brand-text-primary">{property.coordinates.lng}</div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-4">
          <Card className="p-6 bg-white shadow-premium">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.images.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-premium group">
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-brand-text-primary hover:bg-white">
                      <Camera className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
