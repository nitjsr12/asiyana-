import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 88925 34459', '+91 98450 12345'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aashiyanahabitat@gmail.com', 'aashiyanahabitat@gmail.com'],
      description: 'Send us your inquiries anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['#90/17-1, Ground Floor, 1st Cross', 'Vittal Nagar, Chamarajpet, Bengaluru, Karnataka-560026'],
      description: 'Visit our office for consultations'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'We\'re here to help during business hours'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <detail.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{detail.title}</h4>
                {detail.details.map((item, i) => (
                  <p key={i} className="text-gray-600">{item}</p>
                ))}
                <p className="text-sm text-gray-500 mt-1">{detail.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}