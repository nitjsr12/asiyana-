'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';

export function PropertyFilters() {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: ''
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
    if (value && !activeFilters.includes(key)) {
      setActiveFilters([...activeFilters, key]);
    } else if (!value) {
      setActiveFilters(activeFilters.filter(f => f !== key));
    }
  };

  const clearFilter = (key: string) => {
    setFilters({ ...filters, [key]: '' });
    setActiveFilters(activeFilters.filter(f => f !== key));
  };

  const clearAllFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      priceMin: '',
      priceMax: '',
      bedrooms: '',
      bathrooms: ''
    });
    setActiveFilters([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h3>
        {activeFilters.length > 0 && (
          <Button
            variant="ghost"
            onClick={clearAllFilters}
            className="text-blue-600 hover:text-blue-700"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <Input
          placeholder="Location"
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />

        <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange('propertyType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Min Price (₹)"
          value={filters.priceMin}
          onChange={(e) => handleFilterChange('priceMin', e.target.value)}
        />

        <Input
          placeholder="Max Price (₹)"
          value={filters.priceMax}
          onChange={(e) => handleFilterChange('priceMax', e.target.value)}
        />

        <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange('bedrooms', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+ Bed</SelectItem>
            <SelectItem value="2">2+ Beds</SelectItem>
            <SelectItem value="3">3+ Beds</SelectItem>
            <SelectItem value="4">4+ Beds</SelectItem>
            <SelectItem value="5">5+ Beds</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.bathrooms} onValueChange={(value) => handleFilterChange('bathrooms', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Bathrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+ Bath</SelectItem>
            <SelectItem value="2">2+ Baths</SelectItem>
            <SelectItem value="3">3+ Baths</SelectItem>
            <SelectItem value="4">4+ Baths</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filterKey) => (
            <Badge
              key={filterKey}
              variant="secondary"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              {filterKey}: {filters[filterKey as keyof typeof filters]}
              <button
                onClick={() => clearFilter(filterKey)}
                className="ml-2 hover:bg-blue-300 rounded-full p-1"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}