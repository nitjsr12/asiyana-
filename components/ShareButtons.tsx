'use client';

import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const handleShare = (platform: string) => {
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-brand-text-primary">Share:</span>
      <div className="flex space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleShare('facebook')}
          className="border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleShare('twitter')}
          className="border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleShare('linkedin')}
          className="border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
