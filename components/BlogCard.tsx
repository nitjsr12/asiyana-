'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-xl transition-premium group">
      {/* Featured Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-brand-gold text-white shadow-gold">
            {post.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.publishedAt)}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-gold transition-premium line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-brand-text-secondary mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-brand-text-primary">
              {post.author.name}
            </div>
            <div className="text-xs text-brand-text-secondary">
              {post.author.role}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-brand-cream text-brand-text-secondary px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark font-medium transition-premium group/btn"
        >
          Read More
          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
