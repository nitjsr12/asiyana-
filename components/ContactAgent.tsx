'use client';

import { useState } from 'react';
import Image from 'next/image';
import { properties } from '@/lib/data';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactAgent() {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Using the first property's agent as default
  const agent = properties[0].agent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiry);
    // Handle form submission
  };

  return (
    <div className="sticky top-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Agent Info */}
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src={agent.image}
                alt={agent.name}
                fill
                className="rounded-full object-cover"
                sizes="80px"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
            <p className="text-gray-600">Real Estate Agent</p>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              {agent.phone}
            </Button>
            <Button variant="outline" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Email Agent
            </Button>
          </div>

          {/* Quick Inquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={inquiry.name}
              onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={inquiry.email}
              onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={inquiry.phone}
              onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
            />
            <Textarea
              rows={3}
              placeholder="I'm interested in this property..."
              value={inquiry.message}
              onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
            />
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Send Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}