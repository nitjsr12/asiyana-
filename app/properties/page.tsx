'use client';

import { useState, useEffect } from 'react';
import { PropertyFilters } from '@/components/PropertyFilters';
import { PropertyGrid } from '@/components/PropertyGrid';
import { PropertyMap } from '@/components/PropertyMap';
import { properties, Property } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Building, Home, Filter, Grid, Map } from 'lucide-react';

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'under-construction' | 'ready-to-move'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  useEffect(() => {
    let filtered = properties;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(property => property.constructionStatus === selectedCategory);
    }
    
    setFilteredProperties(filtered);
  }, [selectedCategory]);

  const underConstructionCount = properties.filter(p => p.constructionStatus === 'under-construction').length;
  const readyToMoveCount = properties.filter(p => p.constructionStatus === 'ready-to-move').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white">
      {/* Hero Banner */}
      <div className="gradient-dark text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-gold">Properties</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect home from our exclusive collection of premium Sattva properties across Bangalore
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">{properties.length}</div>
                <div className="text-gray-300">Total Properties</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">{underConstructionCount}</div>
                <div className="text-gray-300">Under Construction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-brand-gold mb-2">{readyToMoveCount}</div>
                <div className="text-gray-300">Ready to Move-In</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                All Properties
                <Badge variant="secondary" className="ml-2">{properties.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="under-construction" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Under Construction
                <Badge variant="secondary" className="ml-2">{underConstructionCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="ready-to-move" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Ready to Move-In
                <Badge variant="secondary" className="ml-2">{readyToMoveCount}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">All Properties</h3>
                <p className="text-brand-text-secondary">Explore our complete collection of premium Sattva properties</p>
              </div>
            </TabsContent>

            <TabsContent value="under-construction" className="mt-6">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Under Construction Properties</h3>
                <p className="text-brand-text-secondary">Pre-launch and under-construction properties with attractive pricing</p>
              </div>
            </TabsContent>

            <TabsContent value="ready-to-move" className="mt-6">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Ready to Move-In Properties</h3>
                <p className="text-brand-text-secondary">Immediate possession available with premium finishes</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <PropertyFilters />
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'gradient-gold text-white' : 'text-brand-text-primary hover:bg-brand-cream'}
            >
              <Grid className="h-4 w-4 mr-2" />
              Grid View
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('map')}
              className={viewMode === 'map' ? 'gradient-gold text-white' : 'text-brand-text-primary hover:bg-brand-cream'}
            >
              <Map className="h-4 w-4 mr-2" />
              Map View
            </Button>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PropertyGrid properties={filteredProperties} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <PropertyMap properties={filteredProperties} />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <PropertyMap properties={filteredProperties} height="600px" />
            <PropertyGrid properties={filteredProperties} />
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-dark text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Our expert team can help you find the perfect property that matches your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-gold hover:opacity-90 text-white font-semibold shadow-gold transition-premium">
              Schedule Site Visit
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-text-primary">
              Contact Our Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}