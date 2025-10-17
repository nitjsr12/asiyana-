import { AnimatedHero } from '@/components/AnimatedHero';
import { AnimatedFeaturedProperties } from '@/components/AnimatedFeaturedProperties';
import { AuthorizedPartners } from '@/components/AuthorizedPartners';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="space-y-0">
      <AnimatedHero />
      <AnimatedFeaturedProperties />
      <AuthorizedPartners />
      <Services />
      <Testimonials />
      <Newsletter />
    </div>
  );
}