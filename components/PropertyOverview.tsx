'use client';

import { properties } from '@/lib/data';
import { 
  Square, 
  Calendar, 
  Key, 
  Layout, 
  Building, 
  IndianRupee, 
  Construction, 
  FileText,
  Download,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PropertyOverviewProps {
  propertyId: string;
}

export function PropertyOverview({ propertyId }: PropertyOverviewProps) {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return <div className="bg-red-100 p-4 rounded">Property not found for ID: {propertyId}</div>;

  const formatPricePerSqft = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price).replace('₹', '₹');
  };

  return (
    <div className="bg-white rounded-xl shadow-premium p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-text-primary">
          {property.title} Overview
        </h2>
        <Button className="gradient-gold hover:opacity-90 text-white shadow-gold transition-premium">
          <Download className="h-4 w-4 mr-2" />
          Download Brochure
        </Button>
      </div>

      {/* Property Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Column 1 */}
        <div className="space-y-4">
          {/* Project Area */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Square className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Project Area</div>
              <div className="text-brand-text-primary font-medium">
                {property.projectArea || 'N/A'}
              </div>
            </div>
          </div>

          {/* Launch Date */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Calendar className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Launch Date</div>
              <div className="text-brand-text-primary font-medium">
                {property.launchDate || 'N/A'}
              </div>
            </div>
          </div>

          {/* Configurations */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Layout className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Configurations</div>
              <div className="text-brand-text-primary font-medium">
                {property.configurations || `${property.bedrooms} BHK ${property.type}`}
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          {/* Sizes */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Square className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Sizes</div>
              <div className="text-brand-text-primary font-medium">
                {property.sizeRange || `${property.sqft} sq.ft.`}
              </div>
            </div>
          </div>

          {/* Avg. Price */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <IndianRupee className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Avg. Price</div>
              <div className="text-brand-text-primary font-medium">
                {property.avgPricePerSqft 
                  ? formatPricePerSqft(property.avgPricePerSqft) + '/sq.ft'
                  : formatPricePerSqft(Math.round(property.price / property.sqft)) + '/sq.ft'
                }
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          {/* Project Size */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Building className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Project Size</div>
              <div className="text-brand-text-primary font-medium">
                {property.projectSize || '1 Unit'}
              </div>
            </div>
          </div>

          {/* Possession Starts */}
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                <Construction className="h-4 w-4 text-brand-text-secondary" />
              </div>
            </div>
            <div>
              <div className="text-sm text-brand-text-secondary mb-1">Possession Starts</div>
              <div className="text-brand-text-primary font-medium">
                {property.possessionDate || 'Ready to Move'}
              </div>
            </div>
          </div>

          {/* RERA ID */}
          {property.reraId && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-brand-cream rounded-lg flex items-center justify-center">
                  <FileText className="h-4 w-4 text-brand-text-secondary" />
                </div>
              </div>
              <div>
                <div className="text-sm text-brand-text-secondary mb-1">RERA ID</div>
                <div className="text-brand-text-primary font-medium underline">
                  {property.reraId}
                </div>
                <button className="text-xs text-brand-gold hover:underline transition-premium">
                  Check RERA Status
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-6 border-t border-brand-slate-light">
        <Button 
          variant="outline" 
          className="bg-brand-cream hover:bg-brand-cream-dark border-brand-slate-light text-brand-text-primary hover:text-brand-text-primary transition-premium"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        
        <Button 
          variant="outline" 
          className="bg-brand-cream hover:bg-brand-cream-dark border-brand-slate-light text-brand-text-primary hover:text-brand-text-primary transition-premium"
        >
          <Heart className="h-4 w-4 mr-2" />
          Save
        </Button>
        
        <Button className="gradient-gold hover:opacity-90 text-white shadow-gold transition-premium ml-auto">
          <MessageCircle className="h-4 w-4 mr-2" />
          Ask For Details
        </Button>
      </div>
    </div>
  );
}
