import { TrendingUp, Users, Chrome as Home, Award } from 'lucide-react';

export function CompanyStats() {
  const stats = [
    {
      icon: Home,
      number: '1500+',
      label: 'Properties Sold',
      description: 'Successfully closed transactions'
    },
    {
      icon: Users,
      number: '1200+',
      label: 'Happy Clients',
      description: 'Satisfied customers served'
    },
    {
      icon: TrendingUp,
      number: '₹1500Cr',
      label: 'Total Sales Volume',
      description: 'In property transactions'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'In real estate industry'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-xl mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
        <p className="text-lg text-gray-600">Numbers that speak to our success and commitment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}