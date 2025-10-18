'use client';

import { testimonials } from '@/lib/data';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-premium hover:shadow-xl transition-shadow duration-300 border border-brand-cream"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-brand-gold mb-4" />
              
              <p className="text-brand-text-secondary mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-brand-gold"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-brand-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}