// Data types and interfaces
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  constructionStatus: 'under-construction' | 'ready-to-move';
  images: string[];
  description: string;
  features: string[];
  yearBuilt?: number;
  parking?: number;
  coordinates?: { lat: number; lng: number };
  agent?: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  projectArea?: string;
  launchDate?: string;
  configurations?: string;
  sizeRange?: string;
  avgPricePerSqft?: number;
  projectSize?: string;
  possessionDate?: string;
  reraId?: string;
  floorPlans?: {
    type: string;
    area: number;
    price: number;
    rooms: {
      name: string;
      dimensions: string;
      position: { x: number; y: number; width: number; height: number };
    }[];
  }[];
  brochure?: {
    pdf?: string;
    doc?: string;
    title?: string;
  };
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// SATTVA Properties Data
export const properties: Property[] = [
  {
    id: '1',
    title: 'SATTVA HAMLET',
    location: 'Whitefield, Bangalore',
    price: 12500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1450,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Hamlet offers luxurious 2, 3 & 4 BHK apartments in Whitefield, Bangalore. Experience modern living with world-class amenities and excellent connectivity.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Jogging Track'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 12.9698, lng: 77.7500 },
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98450 12345',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '15 Acres',
    launchDate: 'Jan, 2024',
    configurations: '2, 3, 4 BHK Apartments',
    sizeRange: '1100 - 1800 sq.ft.',
    avgPricePerSqft: 9500,
    projectSize: '4 Towers - 480 units',
    possessionDate: 'Dec, 2026',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000234',
    floorPlans: [
      {
        type: '2 BHK Apartment',
        area: 1100,
        price: 10450000,
        rooms: [
          { name: 'MASTER BEDROOM', dimensions: '12\'0" X 14\'0"', position: { x: 5, y: 5, width: 12, height: 14 } },
          { name: 'BEDROOM 2', dimensions: '10\'0" X 12\'0"', position: { x: 20, y: 5, width: 10, height: 12 } },
          { name: 'LIVING', dimensions: '15\'0" X 18\'0"', position: { x: 5, y: 20, width: 15, height: 18 } },
          { name: 'KITCHEN', dimensions: '10\'0" X 12\'0"', position: { x: 25, y: 20, width: 10, height: 12 } },
          { name: 'BATHROOM', dimensions: '6\'0" X 8\'0"', position: { x: 15, y: 30, width: 6, height: 8 } }
        ]
      },
      {
        type: '3 BHK Apartment',
        area: 1450,
        price: 13775000,
        rooms: [
          { name: 'MASTER BEDROOM', dimensions: '14\'0" X 16\'0"', position: { x: 5, y: 5, width: 14, height: 16 } },
          { name: 'BEDROOM 2', dimensions: '12\'0" X 14\'0"', position: { x: 22, y: 5, width: 12, height: 14 } },
          { name: 'BEDROOM 3', dimensions: '10\'0" X 12\'0"', position: { x: 37, y: 5, width: 10, height: 12 } },
          { name: 'LIVING', dimensions: '18\'0" X 20\'0"', position: { x: 5, y: 24, width: 18, height: 20 } },
          { name: 'KITCHEN', dimensions: '12\'0" X 14\'0"', position: { x: 26, y: 24, width: 12, height: 14 } },
          { name: 'DINING', dimensions: '10\'0" X 12\'0"', position: { x: 26, y: 41, width: 10, height: 12 } },
          { name: 'BATHROOM', dimensions: '8\'0" X 10\'0"', position: { x: 15, y: 41, width: 8, height: 10 } }
        ]
      }
    ],
    images: [
      '/SATTVAHAMLET/Club-Elevation_fold-3-opt.webp',
      '/SATTVAHAMLET/Guest-Bedroom.webp',
      '/SATTVAHAMLET/fold-1-3.webp',
      '/SATTVAHAMLET/fold-1-4.webp',
    ],
    brochure: {
      pdf: '/SATTVA HAMLET/HAMLET_BROCHURE.pdf',
      title: 'SATTVA HAMLET Brochure'
    }
  },
  {
    id: '2',
    title: 'SATTVA SIMPLICITY',
    location: 'Sarjapur Road, Bangalore',
    price: 9500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1250,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Contemporary 3 BHK apartment in Sarjapur Road with modern amenities and excellent connectivity to IT parks.',
    features: ['Swimming Pool', 'Gym', 'Garden', 'Power Backup', 'Covered Parking', 'Club House', 'Children Play Area'],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 12.9352, lng: 77.6245 },
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98451 67890',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '12 Acres',
    launchDate: 'Mar, 2024',
    configurations: '2, 3 BHK Apartments',
    sizeRange: '1000 - 1400 sq.ft.',
    avgPricePerSqft: 8500,
    projectSize: '3 Towers - 360 units',
    possessionDate: 'Mar, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000235',
    images: [
      '/ SATTVASIMPLICITY/main-banner-1.webp',
      '/ SATTVASIMPLICITY/Bedroom_f1-1.webp',
      '/ SATTVASIMPLICITY/Living_f1-1.webp',
      '/ SATTVASIMPLICITY/Plaza_f1.webp',
      '/ SATTVASIMPLICITY/River-view.0400_f1-1.webp'
    ],
    brochure: {
      pdf: '/SATTVA SIMPLICITY/Simplicity_big_brochure_30x30_24725.pdf',
      doc: '/SATTVA SIMPLICITY/simplicity.docx',
      title: 'SATTVA SIMPLICITY Brochure'
    }
  },
  {
    id: '3',
    title: 'SATTVA PARK CUBIX II',
    location: '10 mins from Kempegowda International Airport, Devanahalli Town',
    price: 11500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1350,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Park Cubix II offers premium Studio, 1, 2 & 3 BHK apartments near Kempegowda International Airport. Experience modern living with excellent connectivity and world-class amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Jogging Track'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 12.9279, lng: 77.5619 },
    agent: {
      name: 'Meera Reddy',
      phone: '+91 98452 34567',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '18 Acres',
    launchDate: 'Feb, 2024',
    configurations: 'Studio, 1, 2 & 3 BHK Apartments',
    sizeRange: '1200 - 1600 sq.ft.',
    avgPricePerSqft: 9200,
    projectSize: '5 Towers - 600 units',
    possessionDate: 'Feb, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000236',
    images: [
      '/SATTVAPARKCUBIX II/Updated-View-Gold-LEaf_f1.webp',
      '/SATTVAPARKCUBIX II/Aerial_f1.webp',
      '/SATTVAPARKCUBIX II/Commercial-View_f1.webp',
      '/SATTVAPARKCUBIX II/Swimming-Pool-Night-View_edited.webp'
    ],
    brochure: {
      pdf: '/SATTVA PARK CUBIX II/CUBIX.pdf',
      doc: '/SATTVA PARK CUBIX II/CUBIX.docx',
      title: 'SATTVA PARK CUBIX II Brochure'
    }
  },
  {
    id: '4',
    title: 'SATTVA SONGBIRD',
    location: 'Budigere Road, Bangalore',
    price: 8500000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1050,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Songbird offers elegant Studio, 1, 2, 2.5 & 3 BHK apartments and Villa & Row Houses on Budigere Road, Bangalore. Experience modern living with premium amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Multipurpose Hall'
    ],
    yearBuilt: 2024,
    parking: 1,
    coordinates: { lat: 12.8456, lng: 77.6603 },
    agent: {
      name: 'Suresh Nair',
      phone: '+91 98453 45678',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '8 Acres',
    launchDate: 'Apr, 2024',
    configurations: 'Studio, 1, 2, 2.5 & 3 BHK Apartments, Villa & Row Houses',
    sizeRange: '950 - 1200 sq.ft.',
    avgPricePerSqft: 8800,
    projectSize: '2 Towers - 240 units',
    possessionDate: 'Apr, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000237',
    images: [
      '/sattva-songbird/banner-songbird.webp',
      '/sattva-songbird/Badminton-Court_WM.webp',
      '/sattva-songbird/outdoor-patio-with-table-chair-songbird.webp',
      '/sattva-songbird/row1.webp'
    ],
    brochure: {
      pdf: '/SATTVA SONGBIRD/SONGBIRD_BROCHURE.pdf',
      title: 'SATTVA SONGBIRD Brochure'
    }
  },
  {
    id: '5',
    title: 'SATTVA LUMINA',
    location: 'Yelahanka, Bangalore',
    price: 14500000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1650,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Lumina offers premium Studio, 1, 2, 2.5 & 3 BHK apartments in Yelahanka, Bangalore. Experience luxury living with world-class amenities and excellent connectivity.',
    features: [
      'Swimming Pool', 
      'Home Theater', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      '24/7 Security',
      'Intercom'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 12.9010, lng: 77.6953 },
    agent: {
      name: 'Anita Joshi',
      phone: '+91 98454 56789',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '20 Acres',
    launchDate: 'May, 2024',
    configurations: 'Studio, 1, 2, 2.5 & 3 BHK Apartments',
    sizeRange: '1400 - 1800 sq.ft.',
    avgPricePerSqft: 10500,
    projectSize: '6 Towers - 720 units',
    possessionDate: 'May, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000238',
    images: [
      '/SATTVA LUMINA/banner-3.webp',
      '/SATTVA LUMINA/Balcony-Cam_WM.webp',
      '/SATTVA LUMINA/Cafe-_WM-1.webp',
      '/SATTVA LUMINA/club.webp',
      '/SATTVA LUMINA/Clubhouse-Terrace_Cam_WM.webp'
    ],
    brochure: {
      pdf: '/SATTVA LUMINA/lumina brochure.pdf',
      doc: '/SATTVA LUMINA/Sattva Lumina.docx',
      title: 'SATTVA LUMINA Brochure'
    }
  },
  {
    id: '6',
    title: 'SATTVA DIVINITY',
    location: 'Whitefield, Bangalore',
    price: 9800000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1200,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'ready-to-move',
    description: 'Sattva Divinity offers ready-to-move-in premium apartments in Whitefield, Bangalore. Experience luxury living with immediate possession and world-class amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      '24/7 Security'
    ],
    yearBuilt: 2023,
    parking: 2,
    coordinates: { lat: 12.9698, lng: 77.7500 },
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98450 12345',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '12 Acres',
    launchDate: 'Jan, 2022',
    configurations: '2, 3 BHK Apartments',
    sizeRange: '1000 - 1400 sq.ft.',
    avgPricePerSqft: 8200,
    projectSize: '3 Towers - 360 units',
    possessionDate: 'Ready to Move',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000239',
    images: [
      '/SATTVA HAMLET/1BHK.jpg',
      '/SATTVA HAMLET/2-bhk.jpg',
      '/SATTVA HAMLET/3-bhk.jpg',
      '/SATTVA HAMLET/4-bhk.jpg'
    ],
    brochure: {
      pdf: '/SATTVA HAMLET/HAMLET_BROCHURE.pdf',
      title: 'SATTVA DIVINITY Brochure'
    }
  },
  {
    id: '7',
    title: 'SATTVA ANUGHRAHA',
    location: 'Off Magadi Road, Bangalore',
    price: 8800000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'ready-to-move',
    description: 'Sattva Anughraha offers ready-to-move-in 2, 2.5 & 3 BHK apartments off Magadi Road, Bangalore. Experience modern living with immediate possession and premium amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting'
    ],
    yearBuilt: 2023,
    parking: 1,
    coordinates: { lat: 12.9352, lng: 77.6245 },
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98451 67890',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '10 Acres',
    launchDate: 'Mar, 2022',
    configurations: '2, 2.5 & 3 BHK Apartments',
    sizeRange: '950 - 1300 sq.ft.',
    avgPricePerSqft: 8000,
    projectSize: '2 Towers - 240 units',
    possessionDate: 'Ready to Move',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000240',
    images: [
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp'
    ],
    brochure: {
      pdf: '/SATTVA SIMPLICITY/Simplicity_big_brochure_30x30_24725.pdf',
      doc: '/SATTVA SIMPLICITY/simplicity.docx',
      title: 'SATTVA ANUGHRAHA Brochure'
    }
  },
  {
    id: '8',
    title: 'SATTVA ASHRAYA',
    location: 'Bangalore Mysore Expressway, Bidadi',
    price: 9200000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1150,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'ready-to-move',
    description: 'Sattva Ashraya offers ready-to-move-in 1.5, 2 & 3 BHK apartments on Bangalore Mysore Expressway, Bidadi. Experience modern living with immediate possession and premium amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Multipurpose Hall',
      '24/7 Security'
    ],
    yearBuilt: 2023,
    parking: 2,
    coordinates: { lat: 12.8456, lng: 77.6603 },
    agent: {
      name: 'Suresh Nair',
      phone: '+91 98453 45678',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '8 Acres',
    launchDate: 'Apr, 2022',
    configurations: '1.5, 2 & 3 BHK Apartments',
    sizeRange: '1000 - 1250 sq.ft.',
    avgPricePerSqft: 8000,
    projectSize: '2 Towers - 240 units',
    possessionDate: 'Ready to Move',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000241',
    images: [
      '/sattva-songbird/banner-songbird.webp',
      '/sattva-songbird/Badminton-Court_WM.webp',
      '/sattva-songbird/outdoor-patio-with-table-chair-songbird.webp',
      '/sattva-songbird/row1.webp'
    ],
    brochure: {
      pdf: '/SATTVA SONGBIRD/SONGBIRD_BROCHURE.pdf',
      title: 'SATTVA ASHRAYA Brochure'
    }
  },
  {
    id: '9',
    title: 'SATTVA AEROPOLIS',
    location: '5 mins from Bengaluru International Airport, Bengaluru',
    price: 13500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1300,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Aeropolis offers premium 1, 2 & 3 BHK apartments just 5 minutes from Bengaluru International Airport. Experience modern living with excellent connectivity and world-class amenities.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Airport Connectivity'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 13.1986, lng: 77.7063 },
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 98451 67890',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '15 Acres',
    launchDate: 'Jun, 2024',
    configurations: '1, 2 & 3 BHK Apartments',
    sizeRange: '1100 - 1400 sq.ft.',
    avgPricePerSqft: 9800,
    projectSize: '4 Towers - 480 units',
    possessionDate: 'Jun, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000242',
    images: [
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp',
      '/SATTVA SIMPLICITY/Simplicity Masterplan.webp'
    ],
    brochure: {
      pdf: '/SATTVA SIMPLICITY/Simplicity_big_brochure_30x30_24725.pdf',
      doc: '/SATTVA SIMPLICITY/simplicity.docx',
      title: 'SATTVA AEROPOLIS Brochure'
    }
  },
  {
    id: '10',
    title: 'SATTVA VASANTA SKYE',
    location: '5 mins from Bengaluru International Airport, Bengaluru',
    price: 15500000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1600,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Vasanta Skye offers luxurious Studio, 1, 2, 3 & 4 BHK apartments just 5 minutes from Bengaluru International Airport. Experience premium living with world-class amenities and excellent connectivity.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Sky Lounge',
      'Airport Connectivity'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 13.1986, lng: 77.7063 },
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98450 12345',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '20 Acres',
    launchDate: 'Jul, 2024',
    configurations: 'Studio, 1, 2, 3 & 4 BHK Apartments',
    sizeRange: '1200 - 1800 sq.ft.',
    avgPricePerSqft: 10500,
    projectSize: '5 Towers - 600 units',
    possessionDate: 'Jul, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000243',
    images: [
      '/SATTVA HAMLET/1BHK.jpg',
      '/SATTVA HAMLET/2-bhk.jpg',
      '/SATTVA HAMLET/3-bhk.jpg',
      '/SATTVA HAMLET/4-bhk.jpg'
    ],
    brochure: {
      pdf: '/SATTVA HAMLET/HAMLET_BROCHURE.pdf',
      title: 'SATTVA VASANTA SKYE Brochure'
    }
  },
  {
    id: '11',
    title: 'SATTVA TRINITY',
    location: 'Whitefield, Bangalore',
    price: 12500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    type: 'apartment',
    status: 'for-sale',
    constructionStatus: 'under-construction',
    description: 'Sattva Trinity offers premium 2, 3 & 4 BHK apartments in Whitefield, Bangalore. Experience modern living with world-class amenities and excellent connectivity to IT parks.',
    features: [
      'Swimming Pool', 
      'Fitness Center', 
      'Landscaped Gardens', 
      'Power Backup', 
      'Covered Parking', 
      'Club House', 
      'Children Play Area',
      'Security System',
      'Lift Access',
      'Water Supply',
      'Waste Management',
      'Rainwater Harvesting',
      'Business Center',
      'Concierge Service'
    ],
    yearBuilt: 2024,
    parking: 2,
    coordinates: { lat: 12.9698, lng: 77.7500 },
    agent: {
      name: 'Meera Reddy',
      phone: '+91 98452 34567',
      email: 'aashiyanahabitat@gmail.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    projectArea: '18 Acres',
    launchDate: 'Aug, 2024',
    configurations: '2, 3 & 4 BHK Apartments',
    sizeRange: '1200 - 1600 sq.ft.',
    avgPricePerSqft: 9500,
    projectSize: '4 Towers - 480 units',
    possessionDate: 'Aug, 2027',
    reraId: 'PRM/KA/RERA/1251/30/PR/220815/000244',
    images: [
      '/sattva-songbird/banner-songbird.webp',
      '/sattva-songbird/Badminton-Court_WM.webp',
      '/sattva-songbird/outdoor-patio-with-table-chair-songbird.webp',
      '/sattva-songbird/row1.webp'
    ],
    brochure: {
      pdf: '/SATTVA SONGBIRD/SONGBIRD_BROCHURE.pdf',
      title: 'SATTVA TRINITY Brochure'
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Arjun Patel',
    role: 'Software Engineer',
    content: 'Aashiyana Habitat made our dream home purchase in Whitefield seamless. Their knowledge of Bangalore real estate market is exceptional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Priya Reddy',
    role: 'Marketing Manager',
    content: 'Found the perfect apartment in Koramangala through Aashiyana Habitat. The team was professional and guided us through every step.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    role: 'Business Owner',
    content: 'Excellent service and genuine advice. They helped us find a great investment property in Sarjapur Road.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Real Estate Consultant',
    experience: '12+ years',
    specialization: 'Luxury Properties & Villas',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98450 12345',
    email: 'aashiyanahabitat@gmail.com'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Commercial Property Specialist',
    experience: '8+ years',
    specialization: 'IT Hub Properties',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98451 67890',
    email: 'aashiyanahabitat@gmail.com'
  },
  {
    id: 3,
    name: 'Meera Reddy',
    role: 'Residential Sales Consultant',
    experience: '6+ years',
    specialization: 'Family Homes & Apartments',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98452 34567',
    email: 'aashiyanahabitat@gmail.com'
  },
  {
    id: 4,
    name: 'Suresh Nair',
    role: 'Property Investment Advisor',
    experience: '10+ years',
    specialization: 'Investment & Rental Properties',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    phone: '+91 98453 45678',
    email: 'aashiyanahabitat@gmail.com'
  }
];

// Helper functions
export function getProperty(id: string): Property | undefined {
  return properties.find(property => property.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.slice(0, 3);
}

export function getPropertiesByType(type: string): Property[] {
  return properties.filter(property => property.type.toLowerCase() === type.toLowerCase());
}

export function getPropertiesByLocation(location: string): Property[] {
  return properties.filter(property => 
    property.location.toLowerCase().includes(location.toLowerCase())
  );
}

export function getPropertiesByPriceRange(minPrice: number, maxPrice: number): Property[] {
  return properties.filter(property => 
    property.price >= minPrice && property.price <= maxPrice
  );
}

export function getSimilarProperties(currentPropertyId: string, limit: number = 3): Property[] {
  const currentProperty = getProperty(currentPropertyId);
  if (!currentProperty) return [];

  return properties
    .filter(property => property.id !== currentPropertyId)
    .filter(property => {
      // Find similar properties based on location, type, or price range
      const sameLocation = property.location.toLowerCase().includes(
        currentProperty.location.toLowerCase().split(',')[0]
      );
      const sameType = property.type === currentProperty.type;
      const similarPrice = Math.abs(property.price - currentProperty.price) <= currentProperty.price * 0.3;
      
      return sameLocation || sameType || similarPrice;
    })
    .slice(0, limit);
}