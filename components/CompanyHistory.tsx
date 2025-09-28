import { CircleCheck as CheckCircle } from 'lucide-react';

export function CompanyHistory() {
  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Aashiyana Habitat was established in Bangalore with a vision to provide quality real estate services.'
    },
    {
      year: '2013',
      title: 'Bangalore Expansion',
      description: 'Expanded operations across all major areas of Bangalore with growing success.'
    },
    {
      year: '2017',
      title: 'Digital Innovation',
      description: 'Launched cutting-edge online platform for enhanced customer experience.'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Awarded "Best Real Estate Company in Bangalore" by Karnataka Realty Association.'
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'Leading Bangalore real estate market with innovative solutions and exceptional service.'
    }
  ];

  return (
    <section className="py-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Two decades of excellence, innovation, and commitment to our clients
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}