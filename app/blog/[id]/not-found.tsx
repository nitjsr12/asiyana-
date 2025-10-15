import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-brand-gold mb-4">404</h1>
          <h2 className="text-2xl font-bold text-brand-text-primary mb-4">
            Article Not Found
          </h2>
          <p className="text-brand-text-secondary mb-8">
            Sorry, the blog article you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/blog">
            <Button className="gradient-gold hover:opacity-90 text-white shadow-gold transition-premium w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary text-brand-text-primary w-full"
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
