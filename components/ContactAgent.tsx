'use client';

import { useState } from 'react';
import Image from 'next/image';
import { properties } from '@/lib/data';
import { Phone, Mail, MessageCircle, Star, Clock, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactAgentProps {
  propertyId?: string;
}

export function ContactAgent({ propertyId }: ContactAgentProps) {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get agent from the specific property or default to first property's agent
  const property = properties.find(p => p.id === propertyId) || properties[0];
  const agent = property.agent;
  
  // Return early if no agent is found
  if (!agent) {
    return (
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-slate-800">Agent Information Not Available</CardTitle>
            <p className="text-slate-600">Please contact us directly for assistance.</p>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiry);
    setIsSubmitted(true);
    // Handle form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Agent Card */}
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="rounded-full object-cover border-4 border-amber-200"
              sizes="96px"
            />
          </div>
          <CardTitle className="text-xl text-slate-800">{agent.name}</CardTitle>
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
          </div>
          <p className="text-amber-600 font-medium">Senior Real Estate Consultant</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Agent Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <div className="text-lg font-bold text-slate-800">150+</div>
              <div className="text-xs text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <div className="text-lg font-bold text-slate-800">8+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: {agent.phone}
            </Button>
            <Button variant="outline" className="w-full border-amber-300 text-amber-600 hover:bg-amber-50">
              <Mail className="h-4 w-4 mr-2" />
              Email Agent
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full border-green-300 text-green-600 hover:bg-green-50">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
              <Clock className="h-4 w-4 mr-2" />
              Schedule Visit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Inquiry Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-slate-800">Send Inquiry</CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-600 mb-2">Inquiry Sent!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={inquiry.name}
                onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                className="border-gray-300 focus:border-amber-500"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={inquiry.email}
                onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                className="border-gray-300 focus:border-amber-500"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={inquiry.phone}
                onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                className="border-gray-300 focus:border-amber-500"
              />
              <Textarea
                rows={3}
                placeholder="I'm interested in this property. Please provide more details..."
                value={inquiry.message}
                onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                className="border-gray-300 focus:border-amber-500"
              />
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg">
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Inquiry
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Award className="h-5 w-5 text-green-600" />
          <span className="font-semibold text-slate-800">Trusted & Verified</span>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Licensed Real Estate Professional</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>24/7 Customer Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Free Property Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
}