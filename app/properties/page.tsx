import { PropertyFilters } from '@/components/PropertyFilters';
import { PropertyGrid } from '@/components/PropertyGrid';
import { PropertyMap } from '@/components/PropertyMap';

export default function Properties() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Properties</h1>
          <p className="text-lg text-gray-600">Discover your perfect home from our exclusive collection</p>
        </div>
        
        <PropertyFilters />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <PropertyGrid />
          </div>
          <div className="lg:col-span-1">
            <PropertyMap />
          </div>
        </div>
      </div>
    </div>
  );
}