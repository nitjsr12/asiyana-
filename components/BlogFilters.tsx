'use client';

import { useState, useMemo } from 'react';
import { blogPosts } from '@/lib/blog-data';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

interface BlogFiltersProps {
  categories: string[];
}

export function BlogFilters({ categories }: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      {/* Search and Filter Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-premium p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-brand-text-secondary" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-brand-text-secondary" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 pl-10 text-brand-text-primary border-brand-gray-100 focus:border-brand-gold transition-premium">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="h-12 border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary text-brand-text-primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-brand-text-secondary">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-brand-text-secondary text-lg mb-4">
                No articles found matching your criteria.
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="border-brand-gray-100 hover:bg-brand-cream hover:text-brand-text-primary text-brand-text-primary"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
