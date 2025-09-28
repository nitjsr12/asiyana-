import { TeamSection } from '@/components/TeamSection';
import { CompanyStats } from '@/components/CompanyStats';
import { CompanyHistory } from '@/components/CompanyHistory';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Aashiyana Habitat</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 20 years, we've been connecting people with their perfect homes. Our commitment to excellence 
            and personalized service has made us the trusted choice for luxury real estate.
          </p>
        </div>

        <CompanyStats />
        <CompanyHistory />
        <TeamSection />
      </div>
    </div>
  );
}