'use client';

import { useState, useRef, useEffect } from 'react';
import { properties } from '@/lib/data';
import { 
  Square, 
  FileText, 
  Building, 
  ChevronRight,
  ChevronLeft,
  Home,
  Bed,
  Car
} from 'lucide-react';

interface PriceAndFloorPlanProps {
  propertyId: string;
}

export function PriceAndFloorPlan({ propertyId }: PriceAndFloorPlanProps) {
  const property = properties.find(p => p.id === propertyId);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!property) return <div className="bg-red-100 p-4 rounded">Property not found for ID: {propertyId}</div>;

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(0)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const formatPriceRange = (min: number, max: number) => {
    const minFormatted = formatPrice(min);
    const maxFormatted = formatPrice(max);
    return `${minFormatted} - ${maxFormatted}`;
  };

  // Slider navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Generate floor plan data if not available
  const floorPlans = property.floorPlans || [
    {
      type: '1 BHK Apartment',
      area: property.sqft,
      price: property.price,
      rooms: [
        { name: 'LIVING', dimensions: '12\'0" X 10\'0"', position: { x: 5, y: 5, width: 12, height: 10 } },
        { name: 'KITCHEN', dimensions: '8\'0" X 8\'0"', position: { x: 5, y: 15, width: 8, height: 8 } },
        { name: 'BEDROOM', dimensions: '10\'0" X 10\'0"', position: { x: 13, y: 15, width: 10, height: 10 } },
        { name: 'BATHROOM', dimensions: '6\'0" X 6\'0"', position: { x: 23, y: 15, width: 6, height: 6 } }
      ]
    }
  ];

  const currentPlan = floorPlans[selectedPlan];

  return (
    <div className="bg-white rounded-xl shadow-premium p-6 mb-8">
      {/* Header */}
      <h2 className="text-2xl font-bold text-brand-text-primary mb-6">Price & Floor Plan</h2>

      {/* Apartment Type Selection with Slider */}
      <div className="mb-6">
        <div className="relative">
          {/* Left Arrow */}
          {scrollPosition > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 text-brand-gold hover:bg-brand-cream transition-premium"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Right Arrow */}
          {scrollContainerRef.current && 
           scrollPosition < (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 text-brand-gold hover:bg-brand-cream transition-premium"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Slider Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {floorPlans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setSelectedPlan(index)}
              className={`flex-shrink-0 px-4 py-3 rounded-lg border transition-premium min-w-[140px] ${
                selectedPlan === index
                  ? 'bg-brand-cream border-brand-gold text-brand-text-primary shadow-lg'
                  : 'bg-white border-gray-300 text-gray-600 hover:border-brand-gold hover:shadow-md'
              }`}
              >
                <div className="text-sm font-medium text-center">{plan.type}</div>
                <div className="text-xs mt-1 text-gray-500 text-center">
                  {formatPrice(plan.price)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Apartment Details */}
      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-brand-text-primary">
              {currentPlan.area} SQ.FT
            </div>
            <div className="text-lg font-semibold text-brand-gold mt-1">
              {formatPrice(currentPlan.price)}
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="mb-6">
        <div className="bg-gray-50 rounded-xl p-6 overflow-auto">
          <div className="relative" style={{ minHeight: '400px', minWidth: '600px' }}>
            {/* Floor Plan Container */}
            <div className="relative bg-white border-2 border-gray-300 rounded-lg shadow-inner" style={{ width: '100%', height: '400px' }}>
              {/* Entry Point */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="text-xs font-medium text-brand-text-primary">ENTRY</div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-amber-500"></div>
              </div>

              {/* Rooms */}
              {currentPlan.rooms.map((room, index) => (
                <div
                  key={index}
                  className="absolute border-2 border-gray-400 bg-white hover:bg-brand-cream transition-premium"
                  style={{
                    left: `${room.position.x}px`,
                    top: `${room.position.y}px`,
                    width: `${room.position.width * 8}px`,
                    height: `${room.position.height * 8}px`,
                  }}
                >
                  {/* Room Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-medium text-brand-text-primary">{room.name}</div>
                      <div className="text-xs text-gray-600">{room.dimensions}</div>
                    </div>
                  </div>

                  {/* Room Fixtures */}
                  {room.name.includes('BEDROOM') && (
                    <>
                      {/* Bed */}
                      <div 
                        className="absolute bg-brand-cream border border-brand-gold rounded"
                        style={{ 
                          width: '20px', 
                          height: '30px', 
                          right: '8px', 
                          bottom: '8px' 
                        }}
                      />
                      {/* Wardrobe */}
                      <div 
                        className="absolute bg-gray-300"
                        style={{ 
                          width: '15px', 
                          height: '25px', 
                          left: '8px', 
                          bottom: '8px' 
                        }}
                      />
                    </>
                  )}

                  {room.name.includes('STUDY') && (
                    <>
                      {/* Desk */}
                      <div 
                        className="absolute bg-brand-cream border border-brand-gold rounded"
                        style={{ 
                          width: '25px', 
                          height: '15px', 
                          left: '8px', 
                          bottom: '8px' 
                        }}
                      />
                      {/* Chair */}
                      <div 
                        className="absolute bg-gray-300 rounded-full"
                        style={{ 
                          width: '12px', 
                          height: '12px', 
                          right: '8px', 
                          bottom: '8px' 
                        }}
                      />
                    </>
                  )}

                  {room.name.includes('WALK-IN-WARDROBE') && (
                    <>
                      {/* Hanging Rods */}
                      <div 
                        className="absolute bg-gray-300"
                        style={{ 
                          width: '25px', 
                          height: '3px', 
                          left: '8px', 
                          top: '8px' 
                        }}
                      />
                      <div 
                        className="absolute bg-gray-300"
                        style={{ 
                          width: '25px', 
                          height: '3px', 
                          left: '8px', 
                          top: '15px' 
                        }}
                      />
                      {/* Shelves */}
                      <div 
                        className="absolute bg-gray-300"
                        style={{ 
                          width: '3px', 
                          height: '25px', 
                          right: '8px', 
                          top: '8px' 
                        }}
                      />
                    </>
                  )}
                  
                  {room.name.includes('KITCHEN') && (
                    <>
                      {/* Kitchen Counter */}
                      <div 
                        className="absolute bg-gray-300"
                        style={{ 
                          width: '25px', 
                          height: '8px', 
                          left: '8px', 
                          bottom: '8px' 
                        }}
                      />
                      {/* Sink */}
                      <div 
                        className="absolute bg-brand-cream0 rounded-full"
                        style={{ 
                          width: '8px', 
                          height: '8px', 
                          right: '8px', 
                          bottom: '8px' 
                        }}
                      />
                    </>
                  )}

                  {room.name.includes('TOILET') && (
                    <>
                      {/* Toilet */}
                      <div 
                        className="absolute bg-gray-300 rounded"
                        style={{ 
                          width: '12px', 
                          height: '15px', 
                          right: '8px', 
                          bottom: '8px' 
                        }}
                      />
                      {/* Sink */}
                      <div 
                        className="absolute bg-brand-cream0 rounded-full"
                        style={{ 
                          width: '6px', 
                          height: '6px', 
                          left: '8px', 
                          bottom: '8px' 
                        }}
                      />
                    </>
                  )}

                  {room.name.includes('DINING') && (
                    <>
                      {/* Dining Table */}
                      <div 
                        className="absolute bg-brand-cream border border-brand-gold rounded"
                        style={{ 
                          width: '20px', 
                          height: '20px', 
                          left: '50%', 
                          top: '50%', 
                          transform: 'translate(-50%, -50%)' 
                        }}
                      />
                    </>
                  )}

                  {room.name.includes('LIVING') && (
                    <>
                      {/* Sofa */}
                      <div 
                        className="absolute bg-brand-cream border border-brand-gold rounded"
                        style={{ 
                          width: '30px', 
                          height: '12px', 
                          bottom: '8px', 
                          left: '50%', 
                          transform: 'translateX(-50%)' 
                        }}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        {/* Super Builtup Area */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center">
              <Square className="h-5 w-5 text-brand-gold" />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Super Builtup Area</div>
            <div className="text-brand-text-primary font-medium">{currentPlan.area} sq.ft</div>
          </div>
        </div>

        {/* RERA ID */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-brand-gold" />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Rera ID</div>
            <div className="text-brand-text-primary font-medium text-xs">
              {property.reraId || 'PRM/KA/RERA/1251/...'}
            </div>
          </div>
        </div>

        {/* Possession Status */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-brand-cream rounded-lg flex items-center justify-center">
              <Building className="h-5 w-5 text-brand-gold" />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Possession Status</div>
            <div className="text-brand-text-primary font-medium">
              {property.possessionDate || 'Ready to Move'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
