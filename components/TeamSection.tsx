import Image from 'next/image';
import { teamMembers } from '@/lib/data';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our experienced professionals are dedicated to providing exceptional service and expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
              <p className="text-sm text-gray-500 mb-4">{member.specialization}</p>
              
              <div className="flex justify-center space-x-2">
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}