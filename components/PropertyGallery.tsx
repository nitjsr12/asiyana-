'use client';

import { useState } from 'react';
import Image from 'next/image';
import { properties } from '@/lib/data';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyGalleryProps {
  propertyId: string;
}

export function PropertyGallery({ propertyId }: PropertyGalleryProps) {
  const property = properties.find(p => p.id === propertyId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  if (!property) return <div>Property not found</div>;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={property.images[selectedImage]}
          alt={property.title}
          fill
          className="object-cover cursor-pointer"
          onClick={() => setShowLightbox(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        
        {/* Navigation Arrows */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage + 1} / {property.images.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2">
        {property.images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
              selectedImage === index ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`${property.title} ${index + 1}`}
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20"
            onClick={() => setShowLightbox(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
            <Image
              src={property.images[selectedImage]}
              alt={property.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </div>
  );
}