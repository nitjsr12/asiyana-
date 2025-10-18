'use client';

import { properties, Property } from '@/lib/data';
import { PropertyCard } from '@/components/PropertyCard';

interface PropertyGridProps {
  properties?: Property[];
}

export function PropertyGrid({ properties: props = properties }: PropertyGridProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-brand-text-secondary">Showing {props.length} properties</p>
        <select className="border border-brand-gray-100 rounded-lg px-4 py-2 text-brand-text-primary focus:border-brand-gold transition-premium">
          <option>Sort by: Price (Low to High)</option>
          <option>Sort by: Price (High to Low)</option>
          <option>Sort by: Newest</option>
          <option>Sort by: Square Feet</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {props.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}