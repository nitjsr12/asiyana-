import { AnimatedHero } from '@/components/AnimatedHero';
import { AnimatedFeaturedProperties } from '@/components/AnimatedFeaturedProperties';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="space-y-0">
      <AnimatedHero />
      <AnimatedFeaturedProperties />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
}