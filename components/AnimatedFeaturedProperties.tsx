'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { properties } from '@/lib/data';
import { AnimatedPropertyCard } from '@/components/AnimatedPropertyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimatedFeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const featuredProperties = properties.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(buttonRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-brand-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-dark rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-brand-gold mr-2" />
            <span className="text-brand-gold font-semibold text-lg">Premium Collection</span>
          </div>
          
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-text-primary via-brand-dark to-brand-gold bg-clip-text text-transparent">
              Featured Properties
            </span>
          </h2>
          
          <p ref={subtitleRef} className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties in Bangalore's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <AnimatedPropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <div ref={buttonRef} className="text-center">
          <Link href="/properties">
            <Button className="gradient-gold hover:opacity-90 text-white px-12 py-4 text-lg rounded-2xl shadow-gold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <span className="mr-3">Explore All Properties</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}