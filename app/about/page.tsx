export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream to-white">
      {/* Hero Section */}
      <div className="gradient-dark text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-brand-gold">Aashiyana Habitat</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in building wealth and finding the perfect home
            </p>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-premium p-8 md:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-brand-text-primary prose-p:text-brand-text-secondary prose-strong:text-brand-text-primary">
              <p className="text-xl leading-relaxed mb-6">
                At Aashiyana Habitat, we believe that real estate is more than just a transaction — it&apos;s a gateway to wealth, lifestyle, and legacy.
              </p>
              
              <p className="mb-6">
                Founded with a passion for excellence and a deep understanding of real estate, our firm is dedicated to helping clients build long-term wealth while finding the homes they&apos;ve always envisioned. Whether you&apos;re searching for a refined residence, an investment property, or a statement estate, we specialize in connecting you with properties that align with both your financial goals and personal dreams.
              </p>
              
              <p className="mb-6">
                With a client-first approach, we bring together market expertise, strategic insight, and personalized service to create a seamless and rewarding real estate experience. Our team operates with discretion, integrity, and an unwavering commitment to results — ensuring that every client feels understood, valued, and inspired throughout their journey.
              </p>
              
              <p className="text-xl font-semibold text-brand-text-primary mb-8">
                At the heart of everything we do is a single, clear purpose:
              </p>
              
              <blockquote className="border-l-4 border-brand-gold pl-6 italic text-xl text-brand-text-primary font-medium mb-8">
                To deliver exceptional value and unlock the full potential of real estate for those who expect nothing less than excellence.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-dark text-white rounded-xl shadow-premium p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission Statement</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center">
              <p className="text-xl leading-relaxed text-gray-200">
                Our mission is to empower our clients to achieve maximum wealth appreciation through smart, strategic real estate investments, while helping them find not just a house, but a home that reflects their dreams and aspirations. We are committed to providing expert guidance, personalized service, and trustworthy advice every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="py-16 bg-gradient-to-br from-brand-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-premium p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4">Vision Statement</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center">
              <p className="text-xl leading-relaxed text-brand-text-secondary">
                To be the most trusted and client-focused real estate agency, known for transforming lives by building wealth through property and making dream homes a reality for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-brand-cream rounded-xl">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">Integrity</h3>
              <p className="text-brand-text-secondary">
                We operate with honesty, transparency, and ethical practices in all our dealings.
              </p>
            </div>
            
            <div className="text-center p-6 bg-brand-cream rounded-xl">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">Excellence</h3>
              <p className="text-brand-text-secondary">
                We strive for the highest standards in service delivery and client satisfaction.
              </p>
            </div>
            
            <div className="text-center p-6 bg-brand-cream rounded-xl">
              <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">Results</h3>
              <p className="text-brand-text-secondary">
                We are committed to delivering measurable outcomes and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}