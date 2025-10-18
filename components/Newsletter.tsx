'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Mail className="h-12 w-12 text-brand-gold mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with Market Trends
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest property listings, market insights, and exclusive deals
          </p>

          {subscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg inline-block">
              Thank you for subscribing! You'll receive our latest updates soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-brand-text-primary border-brand-gold focus:border-brand-gold"
              />
              <Button 
                type="submit"
                className="gradient-gold hover:opacity-90 text-white h-12 px-8 font-semibold shadow-gold"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}