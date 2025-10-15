import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data';
import { BlogCard } from '@/components/BlogCard';
import { ShareButtons } from '@/components/ShareButtons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.id);
  const relatedPosts = getRelatedPosts(params.id, 3);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white">
      {/* Back Button */}
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-brand-text-primary hover:text-brand-gold transition-premium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-premium overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              priority
            />
            <div className="absolute top-6 left-6">
              <Badge className="bg-brand-gold text-white shadow-gold">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-brand-text-secondary mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-text-secondary mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                By {post.author.name}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-6 p-4 bg-brand-cream rounded-lg">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="font-semibold text-brand-text-primary">
                  {post.author.name}
                </div>
                <div className="text-sm text-brand-text-secondary">
                  {post.author.role}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-brand-cream text-brand-text-secondary px-3 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <ShareButtons 
              url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'}/blog/${post.id}`}
              title={post.title}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-premium p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-brand-text-primary prose-p:text-brand-text-secondary prose-strong:text-brand-text-primary prose-ul:text-brand-text-secondary prose-li:text-brand-text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-text-primary mb-4">
                Related Articles
              </h2>
              <p className="text-brand-text-secondary">
                Continue exploring more insights from our real estate experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest real estate insights, market updates, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-brand-text-primary border-0 focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
