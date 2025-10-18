'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, Building2, Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AuthorizedPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-brand-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4"
          >
            Authorized Channel Partners
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
            We are proud to be the authorized channel partners of leading real estate developers, 
            bringing you the finest properties with guaranteed quality and authenticity.
          </p>
        </div>

        {/* Partner Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* SATTVA Partner */}
          <div className="bg-white rounded-xl shadow-premium p-8 border border-brand-gray-100 hover:shadow-gold transition-all duration-300 group">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-2">SATTVA</h3>
                <p className="text-brand-text-secondary text-sm">Premium Real Estate Developer</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-brand-gold fill-current" />
                <span className="text-sm font-medium text-brand-text-primary">5.0</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-brand-text-primary font-medium">Authorized Channel Partner</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-brand-gold" />
                <span className="text-brand-text-secondary">Premium Properties in Bangalore</span>
              </div>
              
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                We are the official authorized channel partner for SATTVA's premium residential projects 
                including SATTVA HAMLET, SATTVA SIMPLICITY, SATTVA PARK CUBIX II, SATTVA SONGBIRD, 
                and SATTVA LUMINA across prime locations in Bangalore.
              </p>
              
              <div className="pt-4 border-t border-brand-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Whitefield
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Sarjapur Road
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Hebbal
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Koramangala
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Indiranagar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KNS Candril Partner */}
          <div className="bg-white rounded-xl shadow-premium p-8 border border-brand-gray-100 hover:shadow-gold transition-all duration-300 group">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-dark to-brand-dark-light rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-text-primary mb-2">KNS Candril</h3>
                <p className="text-brand-text-secondary text-sm">Trusted Real Estate Developer</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-brand-gold fill-current" />
                <span className="text-sm font-medium text-brand-text-primary">4.8</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-brand-text-primary font-medium">Authorized Channel Partner</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-brand-gold" />
                <span className="text-brand-text-secondary">Quality Residential Projects</span>
              </div>
              
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                As authorized channel partners of KNS Candril, we offer access to their 
                meticulously planned residential projects with modern amenities, strategic 
                locations, and commitment to quality construction and timely delivery.
              </p>
              
              <div className="pt-4 border-t border-brand-gray-100">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Quality Construction
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Timely Delivery
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Modern Amenities
                  </span>
                  <span className="px-3 py-1 bg-brand-cream text-brand-text-primary text-xs font-medium rounded-full">
                    Strategic Locations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-dark rounded-xl p-8 text-center shadow-premium">
          <h3 className="text-2xl font-bold mb-4 text-brand-gold">Why Choose Our Authorized Partnership?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-brand-text-primary">Authentic Properties</h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed">Direct access to genuine projects with official documentation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-brand-text-secondary" />
              </div>
              <h4 className="font-semibold mb-2 text-brand-text-primary">Best Prices</h4>
              <p className="text-brand-text-secondary-300 text-sm leading-relaxed">Exclusive pricing and offers available only through authorized partners</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-brand-text-secondary" />
              </div>
              <h4 className="font-semibold mb-2 text-brand-text-primary">Priority Support</h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed">Dedicated support team for seamless property transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
