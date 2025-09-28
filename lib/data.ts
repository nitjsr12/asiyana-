export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo' | 'villa';
  status: 'for-sale' | 'for-rent' | 'sold';
  images: string[];
  description: string;
  features: string[];
  yearBuilt: number;
  parking: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Modern Villa in Whitefield',
    price: 25000000,
    location: 'Whitefield, Bangalore',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    type: 'villa',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning modern villa in the heart of Whitefield with panoramic city views, premium finishes, and state-of-the-art amenities. Located in a gated community with 24/7 security and excellent connectivity to IT parks.',
    features: ['Swimming Pool', 'Home Theater', 'Modular Kitchen', 'Smart Home System', 'Servant Quarter', 'Gym', 'Garden', 'Power Backup', 'Covered Parking', 'Club House'],
    yearBuilt: 2021,
    parking: 3,
    coordinates: { lat: 12.9698, lng: 77.7500 },
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98450 12345',
      email: 'priya@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  },
  {
    id: '2',
    title: 'Premium Apartment in Koramangala',
    price: 12000000,
    location: 'Koramangala 4th Block, Bangalore',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    type: 'apartment',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium high-rise apartment in the vibrant Koramangala area with modern amenities and excellent connectivity to major IT hubs. Close to restaurants, shopping malls, and metro station.',
    features: ['City Views', 'Concierge Service', 'Fitness Center', 'Rooftop Garden', 'In-unit Laundry', 'Intercom', 'Lift', 'Security', 'Visitor Parking', 'Children Play Area'],
    yearBuilt: 2019,
    parking: 2,
    coordinates: { lat: 12.9352, lng: 77.6245 },
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98451 67890',
      email: 'rajesh@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  },
  {
    id: '3',
    title: 'Spacious Family Home in Jayanagar',
    price: 7500000,
    location: 'Jayanagar 7th Block, Bangalore',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful independent house in the prestigious Jayanagar area with traditional architecture and modern amenities. Close to good schools, hospitals, and shopping areas.',
    features: ['Large Courtyard', 'Traditional Design', 'Marble Flooring', 'Car Porch', 'Pooja Room', 'Study Room', 'Terrace Garden', 'Bore Well', 'Solar Water Heater', 'CCTV'],
    yearBuilt: 2015,
    parking: 2,
    coordinates: { lat: 12.9279, lng: 77.5619 },
    agent: {
      name: 'Meera Reddy',
      phone: '+91 98452 34567',
      email: 'meera@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  },
  {
    id: '4',
    title: 'Modern Condo in Electronic City',
    price: 8500000,
    location: 'Electronic City Phase 1, Bangalore',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Modern condominium in Electronic City with excellent connectivity to major IT companies. Features contemporary design and premium amenities for urban living.',
    features: ['IT Hub Proximity', 'Modern Kitchen', 'Balcony', 'Swimming Pool', 'Gym', 'Landscaped Gardens', 'Power Backup', 'Water Treatment Plant', 'Waste Management', 'Metro Connectivity'],
    yearBuilt: 2020,
    parking: 1,
    coordinates: { lat: 12.8456, lng: 77.6603 },
    agent: {
      name: 'Suresh Nair',
      phone: '+91 98453 45678',
      email: 'suresh@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  },
  {
    id: '5',
    title: 'Luxury Villa in Sarjapur Road',
    price: 18000000,
    location: 'Sarjapur Road, Bangalore',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3500,
    type: 'villa',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luxurious villa on Sarjapur Road with contemporary architecture and premium finishes. Located in a gated community with world-class amenities and excellent connectivity.',
    features: ['Gated Community', 'Club House', 'Swimming Pool', 'Tennis Court', 'Jogging Track', 'Children Play Area', 'Multipurpose Hall', 'Landscaped Gardens', '24/7 Security', 'Maintenance Staff'],
    yearBuilt: 2022,
    parking: 2,
    coordinates: { lat: 12.9010, lng: 77.6953 },
    agent: {
      name: 'Anita Joshi',
      phone: '+91 98454 56789',
      email: 'anita@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  },
  {
    id: '6',
    title: 'Cozy Apartment in Indiranagar',
    price: 9500000,
    location: 'Indiranagar 1st Stage, Bangalore',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Cozy apartment in the heart of Indiranagar with easy access to pubs, restaurants, and shopping areas. Perfect for young professionals and couples.',
    features: ['Central Location', 'Pub Street Access', 'Metro Connectivity', 'Shopping Areas', 'Restaurants Nearby', 'Furnished Option', 'Balcony', 'Parking', 'Security', 'Lift'],
    yearBuilt: 2018,
    parking: 1,
    coordinates: { lat: 12.9719, lng: 77.6412 },
    agent: {
      name: 'Vikram Singh',
      phone: '+91 98455 67890',
      email: 'vikram@aashiyanahabitat.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Arjun Patel',
    role: 'Software Engineer',
    content: 'Aashiyana Habitat made our dream home purchase in Whitefield seamless. Their knowledge of Bangalore real estate market is exceptional.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: 2,
    name: 'Kavya Krishnan',
    role: 'Business Owner',
    content: 'Outstanding service and expertise. They helped me find the perfect investment property in Electronic City with great rental potential.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: 3,
    name: 'Rohit Sharma',
    role: 'First-time Buyer',
    content: 'As a first-time buyer in Bangalore, I was nervous, but Aashiyana Habitat guided me through every step with patience and professionalism.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Real Estate Consultant',
    experience: '12+ years',
    specialization: 'Luxury Properties & Villas',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98450 12345',
    email: 'priya@aashiyanahabitat.com'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Commercial Property Specialist',
    experience: '8+ years',
    specialization: 'IT Hub Properties',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98451 67890',
    email: 'rajesh@aashiyanahabitat.com'
  },
  {
    id: 3,
    name: 'Meera Reddy',
    role: 'Residential Sales Consultant',
    experience: '6+ years',
    specialization: 'Family Homes & Apartments',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98452 34567',
    email: 'meera@aashiyanahabitat.com'
  },
  {
    id: 4,
    name: 'Suresh Nair',
    role: 'Property Investment Advisor',
    experience: '10+ years',
    specialization: 'Investment & Rental Properties',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98453 45678',
    email: 'suresh@aashiyanahabitat.com'
  }
];