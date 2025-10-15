import { blogPosts } from '@/lib/blog-data';
import { BlogCard } from '@/components/BlogCard';
import { BlogFilters } from '@/components/BlogFilters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Get unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white">
      {/* Hero Section */}
      <div className="gradient-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Estate <span className="text-brand-gold">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest trends, tips, and insights from the world of real estate. 
              Expert advice for buyers, sellers, and investors.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Filters and Posts */}
      <BlogFilters categories={categories} />

      {/* Newsletter Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text-primary mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-brand-text-secondary mb-8">
            Get the latest real estate insights, market updates, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium"
            />
            <Button className="gradient-gold hover:opacity-90 text-white shadow-gold transition-premium">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
