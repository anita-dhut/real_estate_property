// DEMO/DUMMY DATA: Replace with actual project information

export const allProjects = [
  {
    id: 1,
    slug: 'aurum-heights',
    name: 'Aurum Heights',
    developer: 'Nivara Developers',
    completionYear: '2028',
    location: 'Kothrud',
    city: 'Pune',
    status: 'Ongoing',
    bhk: '2 & 3 BHK',
    price: '₹1.25 Cr onwards',
    reraNumber: 'P52100000001',
    shortDescription: 'Premium 2 & 3 BHK residences in Kothrud offering a seamless blend of luxury and strategic connectivity.',
    description: 'Experience the pinnacle of luxury living at Aurum Heights. Strategically located in the heart of Kothrud, these premium apartments offer unmatched connectivity to the Pune Metro and major IT hubs. The project features panoramic city views, IGBC Gold Certified sustainable architecture, and state-of-the-art amenities designed for a modern, sophisticated lifestyle.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    ],
    amenities: [
      { name: 'Temperature Controlled Pool', icon: 'Droplets' },
      { name: 'World-Class Gymnasium', icon: 'Dumbbell' },
      { name: 'Exclusive Clubhouse', icon: 'Home' },
      { name: '24/7 Multi-tier Security', icon: 'ShieldCheck' },
      { name: 'Landscaped Zen Gardens', icon: 'TreePine' },
      { name: 'EV Charging', icon: 'BatteryCharging' }
    ],
    specifications: [
      'Imported marble flooring in living & dining areas',
      'Premium modular kitchen with hob and chimney',
      'Concealed copper wiring with home automation readiness',
      'Grohe/Kohler sanitary fittings in all bathrooms',
      'Floor-to-ceiling powder-coated aluminum sliding windows'
    ],
    highlights: [
      'IGBC Gold Certified Green Building',
      'Low Density Project - Only 4 apartments per floor',
      '100% DG Backup for common areas',
      'Rooftop solar panels for common lighting'
    ],
    nearbyPlaces: {
      'Schools & Colleges': ['MIT College (1.5km)', 'Abhinav Vidyalaya (2km)'],
      'Hospitals': ['Deenanath Mangeshkar Hospital (2.5km)'],
      'Transportation': ['Kothrud Metro Station (0.5km)']
    },
    brochure: '#', // Handled by frontend fallback
    latitude: 18.5074,
    longitude: 73.8077,
    featured: true
  },
  {
    id: 2,
    slug: 'vistara-residences',
    name: 'Vistara Residences',
    developer: 'Nivara Developers',
    completionYear: '2029',
    location: 'Baner',
    city: 'Pune',
    status: 'Upcoming',
    bhk: '2, 3 & 4 BHK',
    price: '₹1.10 Cr onwards',
    reraNumber: 'P52100000002',
    shortDescription: 'Modern, expansive living spaces designed for the tech-savvy generation in bustling Baner.',
    description: 'Vistara Residences redefines contemporary living in Baner. Designed keeping in mind the bustling lifestyle of IT professionals, this upcoming project offers smart-home ready apartments, sprawling co-working spaces within the complex, and a spectacular sky lounge. It perfectly balances work and leisure right at your doorstep.',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Co-working Lounge', icon: 'Laptop' },
      { name: 'Sky Deck', icon: 'Cloud' },
      { name: 'Infinity Pool', icon: 'Waves' },
      { name: 'Indoor Games', icon: 'Gamepad2' }
    ],
    specifications: [
      'Smart lock main door entry system',
      'Premium UPVC sound-proof windows',
      'Vitrified tiles across all rooms',
      'Designer bathroom fittings'
    ],
    highlights: [
      'Unobstructed views of Baner Hills',
      'Dedicated work-from-home zones',
      'High-speed Mitsubishi elevators'
    ],
    nearbyPlaces: {
      'Hospitals': ['Jupiter Hospital (2km)'],
      'Transportation': ['Pune-Mumbai Highway (1km)'],
      'Shopping': ['High Street Balewadi (1.5km)']
    },
    brochure: '#',
    latitude: 18.5590,
    longitude: 73.7868,
    featured: true
  },
  {
    id: 3,
    slug: 'elara-grande',
    name: 'Elara Grande',
    developer: 'Nivara Developers',
    completionYear: '2024',
    location: 'Prabhat Road',
    city: 'Pune',
    status: 'Completed',
    bhk: '3 BHK',
    price: '₹3.50 Cr onwards',
    reraNumber: 'P52100000003',
    shortDescription: 'Ultra-luxury boutique apartments nestled in the serene lanes of Prabhat Road.',
    description: 'Elara Grande is an architectural masterpiece set in the heritage-rich lanes of Prabhat Road. Offering ultra-luxury 3 BHK boutique residences, it caters to an exclusive clientele that demands nothing but the best. With only one apartment per floor, residents enjoy 360-degree views, bespoke interior finishes, and absolute privacy.',
    heroImage: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Private Plunge Pool', icon: 'Waves' },
      { name: 'Concierge Desk', icon: 'BellConcierge' },
      { name: 'Automated Parking', icon: 'Car' },
      { name: 'Yoga Deck', icon: 'Flower2' }
    ],
    specifications: [
      'Italian marble throughout',
      'Fully equipped German kitchen',
      'Centralized VRV air conditioning',
      'Biometric & RFID access'
    ],
    highlights: [
      'Exclusive address on Prabhat Road',
      'One apartment per floor',
      'Private elevator lobby'
    ],
    nearbyPlaces: {
      'Education': ['Symbiosis (1km)', 'FTII (0.5km)'],
      'Recreation': ['Kamala Nehru Park (0.5km)']
    },
    brochure: '#',
    latitude: 18.5150,
    longitude: 73.8320,
    featured: false
  },
  {
    id: 4,
    slug: 'serene-72',
    name: 'Serene 72',
    developer: 'Nivara Developers',
    completionYear: '2027',
    location: 'Aundh',
    city: 'Pune',
    status: 'Ongoing',
    bhk: '2 & 3 BHK',
    price: '₹1.40 Cr onwards',
    reraNumber: 'P52100000004',
    shortDescription: 'A perfect sanctuary of peace amidst the vibrant lifestyle of Aundh.',
    description: 'Serene 72 is designed to be a tranquil retreat in the bustling neighborhood of Aundh. Featuring expansive landscaped gardens and a grand central courtyard, the project focuses on community living while offering premium 2 and 3 BHK homes with cross-ventilation and Vastu-compliant layouts.',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Central Courtyard', icon: 'Trees' },
      { name: 'Clubhouse', icon: 'Home' },
      { name: 'Jogging Track', icon: 'Footprints' },
      { name: 'Children\'s Play Area', icon: 'Baby' }
    ],
    specifications: [
      'Solar water heating in master bath',
      'Premium vitrified tiles',
      'Granite kitchen platform',
      'Concealed plumbing'
    ],
    highlights: [
      'Vastu-compliant layouts',
      'Extensive green cover',
      'Proximity to IT parks'
    ],
    nearbyPlaces: {
      'Shopping': ['Westend Mall (1km)'],
      'Hospitals': ['Medipoint Hospital (1.5km)']
    },
    brochure: '#',
    latitude: 18.5626,
    longitude: 73.8077,
    featured: false
  },
  {
    id: 5,
    slug: 'the-orchard',
    name: 'The Orchard',
    developer: 'Nivara Developers',
    completionYear: '2023',
    location: 'Bavdhan',
    city: 'Pune',
    status: 'Completed',
    bhk: '2 & 3 BHK',
    price: '₹95 Lac onwards',
    reraNumber: 'P52100000005',
    shortDescription: 'Eco-friendly homes set against the picturesque backdrop of Bavdhan hills.',
    description: 'The Orchard was designed for nature lovers. Completed in 2023, this project boasts an orchard-themed landscape, rain-water harvesting, and highly efficient 2 & 3 BHK apartments. The community thrives on sustainable practices and offers breathtaking views of the NDA hills.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Orchard Garden', icon: 'TreePine' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Senior Citizen Area', icon: 'Users' }
    ],
    specifications: [
      'Rainwater harvesting',
      'Organic waste converter',
      'Energy efficient lighting'
    ],
    highlights: [
      'Award-winning sustainable design',
      'Active resident community'
    ],
    nearbyPlaces: {
      'Connectivity': ['Mumbai-Bengaluru Highway (1km)']
    },
    brochure: '#',
    latitude: 18.5080,
    longitude: 73.7745,
    featured: false
  },
  {
    id: 6,
    slug: 'ivory-court',
    name: 'Ivory Court',
    developer: 'Nivara Developers',
    completionYear: '2022',
    location: 'Koregaon Park',
    city: 'Pune',
    status: 'Sold Out',
    bhk: '3 & 4 BHK',
    price: 'Sold Out',
    reraNumber: 'P52100000006',
    shortDescription: 'A landmark luxury development in Koregaon Park that set new benchmarks for elegance.',
    description: 'Ivory Court is a sold-out luxury project that redefined premium living in Koregaon Park. Featuring sprawling 3 and 4 BHK residences with private terraces, the project delivered unmatched elegance and attracted Pune\'s elite. The striking ivory facade remains a landmark in the neighborhood.',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Private Terraces', icon: 'Sun' },
      { name: 'Boutique Spa', icon: 'Sparkles' },
      { name: 'Valet Parking', icon: 'Car' }
    ],
    specifications: [
      'Imported fixtures',
      'Smart home integration',
      'Acoustic insulation'
    ],
    highlights: [
      'Iconic architectural facade',
      'Premium elite community'
    ],
    nearbyPlaces: {
      'Recreation': ['Osho Ashram (1km)', 'Koregaon Park Plaza (2km)']
    },
    brochure: '#',
    latitude: 18.5362,
    longitude: 73.8939,
    featured: false
  },
  {
    id: 7,
    slug: 'nova-residences',
    name: 'Nova Residences',
    developer: 'Nivara Developers',
    completionYear: '2028',
    location: 'Wakad',
    city: 'Pune',
    status: 'Ongoing',
    bhk: '2 & 3 BHK',
    price: '₹90 Lac onwards',
    reraNumber: 'P52100000007',
    shortDescription: 'Dynamic and vibrant living spaces perfect for young professionals in Wakad.',
    description: 'Nova Residences is tailored for the energetic, fast-paced lifestyle of Wakad. Located minutes away from Hinjewadi, it offers highly functional 2 & 3 BHK apartments, a multi-sports court, and a 24/7 convenience store within the premises, ensuring all daily needs are met effortlessly.',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Multi-Sports Court', icon: 'Activity' },
      { name: 'Convenience Store', icon: 'ShoppingBag' },
      { name: 'Fitness Centre', icon: 'Dumbbell' }
    ],
    specifications: [
      'Modern modular kitchen',
      'High-speed internet readiness',
      'Durable vitrified flooring'
    ],
    highlights: [
      'Next to Hinjewadi IT Park',
      'High rental yield potential'
    ],
    nearbyPlaces: {
      'Work': ['Hinjewadi Phase 1 (3km)'],
      'Shopping': ['Phoenix Marketcity (Upcoming)']
    },
    brochure: '#',
    latitude: 18.5987,
    longitude: 73.7686,
    featured: false
  },
  {
    id: 8,
    slug: 'verde-one',
    name: 'Verde One',
    developer: 'Nivara Developers',
    completionYear: '2029',
    location: 'Pashan',
    city: 'Pune',
    status: 'Upcoming',
    bhk: '2 & 3 BHK',
    price: '₹1.15 Cr onwards',
    reraNumber: 'P52100000008',
    shortDescription: 'Upcoming eco-luxury residences offering unparalleled views of the Pashan Lake.',
    description: 'Verde One is an upcoming eco-luxury project in Pashan. Designed to blend seamlessly with its natural surroundings, it will offer residents unobstructed views of Pashan Lake. The project focuses heavily on biodiversity, featuring vertical gardens and extensive water recycling systems.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
    ],
    amenities: [
      { name: 'Lake Viewing Deck', icon: 'Eye' },
      { name: 'Vertical Gardens', icon: 'Leaf' },
      { name: 'Bird Watching Tower', icon: 'Binoculars' }
    ],
    specifications: [
      'Low VOC paints',
      'Advanced water recycling',
      'Energy efficient HVAC'
    ],
    highlights: [
      'Unobstructed Pashan Lake views',
      'Biodiversity integrated design'
    ],
    nearbyPlaces: {
      'Nature': ['Pashan Lake (0.5km)', 'ARAI Hills (2km)']
    },
    brochure: '#',
    latitude: 18.5369,
    longitude: 73.7915,
    featured: true
  }
];
