import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function LocationMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Our Location</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 bg-gray-200 relative overflow-hidden rounded-b-lg">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 p-3 rounded-lg">
            <p className="font-semibold text-gray-900">Aashiyana Habitat Office</p>
            <p className="text-sm text-gray-600">Brigade Road, MG Road, Bangalore 560001</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}