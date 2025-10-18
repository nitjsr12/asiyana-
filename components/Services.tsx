'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chrome as Home, TrendingUp, Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Home,
      title: 'Buy a Home',
      description: 'Find your perfect home with our extensive listings and expert guidance throughout the buying process.'
    },
    {
      icon: TrendingUp,
      title: 'Sell a Home',
      description: 'Maximize your property value with our proven marketing strategies and market expertise.'
    },
    {
      icon: Users,
      title: 'Property Management',
      description: 'Professional property management services to maximize your investment returns.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(servicesRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-brand-dark rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-text-primary via-brand-dark to-brand-gold bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate services tailored to meet all your property needs
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur rounded-2xl p-8 shadow-premium hover:shadow-xl border border-brand-cream w-full max-w-sm"
            >
              <div className="bg-gradient-to-br from-brand-cream to-brand-gold/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-brand-gold group-hover:to-brand-dark transition-all duration-300 shadow-gold">
                <service.icon className="h-10 w-10 text-brand-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text-primary mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-brand-text-secondary leading-relaxed group-hover:text-brand-text-primary transition-colors">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}