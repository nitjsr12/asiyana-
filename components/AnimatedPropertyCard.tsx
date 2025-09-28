'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/data';
import { Bed, Bath, Square, MapPin, Heart, Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedPropertyCardProps {
  property: Property;
  index: number;
}

export function AnimatedPropertyCard({ property, index }: AnimatedPropertyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(cardRef.current, 
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations
      const card = cardRef.current;
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <div ref={imageRef} className="relative h-64 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${
            property.status === 'for-sale' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
            property.status === 'for-rent' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-gray-500 to-slate-500'
          } text-white border-0 shadow-lg`}>
            {property.status === 'for-sale' ? 'For Sale' : 
             property.status === 'for-rent' ? 'For Rent' : 'Sold'}
          </Badge>
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 backdrop-blur hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 backdrop-blur hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick view button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="bg-white/90 backdrop-blur text-gray-900 hover:bg-white rounded-full px-6 py-3 font-semibold">
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      <div ref={contentRef} className="p-6">
        <div className="mb-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {formatPrice(property.price)}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1 text-blue-500" />
            {property.location}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {property.title}
        </h3>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1">
              <Bed className="h-4 w-4 mr-1 text-blue-500" />
              <span className="font-medium">{property.bedrooms}</span>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1">
              <Bath className="h-4 w-4 mr-1 text-blue-500" />
              <span className="font-medium">{property.bathrooms}</span>
            </div>
            <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1">
              <Square className="h-4 w-4 mr-1 text-blue-500" />
              <span className="font-medium">{property.sqft.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl py-3 font-semibold transition-all duration-300 transform hover:scale-105">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}