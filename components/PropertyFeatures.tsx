import { properties } from '@/lib/data';
import { Check, Wifi, Car, Shield, TreePine, Dumbbell, Waves, Coffee, Utensils, Tv } from 'lucide-react';

interface PropertyFeaturesProps {
  propertyId: string;
}

export function PropertyFeatures({ propertyId }: PropertyFeaturesProps) {
  const property = properties.find(p => p.id === propertyId);

  if (!property) return <div className="bg-red-100 p-4 rounded">Property not found</div>;

  // Categorize features
  const categorizeFeatures = (features: string[]) => {
    const categories: { [key: string]: string[] } = {
      'Security & Safety': [],
      'Recreation & Wellness': [],
      'Lifestyle & Convenience': [],
      'Technology & Connectivity': [],
      'Other Amenities': []
    };

    features.forEach(feature => {
      const lowerFeature = feature.toLowerCase();
      if (lowerFeature.includes('security') || lowerFeature.includes('cctv') || lowerFeature.includes('backup')) {
        categories['Security & Safety'].push(feature);
      } else if (lowerFeature.includes('pool') || lowerFeature.includes('gym') || lowerFeature.includes('garden') || lowerFeature.includes('play') || lowerFeature.includes('tennis') || lowerFeature.includes('jogging')) {
        categories['Recreation & Wellness'].push(feature);
      } else if (lowerFeature.includes('club') || lowerFeature.includes('concierge') || lowerFeature.includes('maintenance') || lowerFeature.includes('service')) {
        categories['Lifestyle & Convenience'].push(feature);
      } else if (lowerFeature.includes('internet') || lowerFeature.includes('wifi') || lowerFeature.includes('smart') || lowerFeature.includes('system')) {
        categories['Technology & Connectivity'].push(feature);
      } else {
        categories['Other Amenities'].push(feature);
      }
    });

    return categories;
  };

  const categorizedFeatures = categorizeFeatures(property.features);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Security & Safety': return Shield;
      case 'Recreation & Wellness': return Dumbbell;
      case 'Lifestyle & Convenience': return Coffee;
      case 'Technology & Connectivity': return Wifi;
      default: return Check;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Features & Amenities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(categorizedFeatures).map(([category, features]) => {
            if (features.length === 0) return null;
            const IconComponent = getIcon(category);
            
            return (
              <div key={category} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <IconComponent className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
                </div>
                
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Property Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Waves className="h-6 w-6 text-amber-600" />
            </div>
            <div className="font-medium text-slate-800">Premium Location</div>
            <div className="text-sm text-gray-600">Prime neighborhood with excellent connectivity</div>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TreePine className="h-6 w-6 text-amber-600" />
            </div>
            <div className="font-medium text-slate-800">Green Living</div>
            <div className="text-sm text-gray-600">Eco-friendly features and landscaped gardens</div>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Tv className="h-6 w-6 text-amber-600" />
            </div>
            <div className="font-medium text-slate-800">Modern Living</div>
            <div className="text-sm text-gray-600">Contemporary design with smart home features</div>
          </div>
        </div>
      </div>
    </div>
  );
}