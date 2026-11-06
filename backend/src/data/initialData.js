export const INITIAL_MENU = [
  {
    id: 'espresso-classic',
    name: 'Classic Espresso',
    category: 'coffee',
    price: '$3.50',
    numericPrice: 3.50,
    rating: 5.0,
    reviewCount: 340,
    description: 'Rich, intense, and aromatic single-origin espresso extracted under optimal pressure for a thick golden crema.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'artisan-cappuccino',
    name: 'Artisan Cappuccino',
    category: 'coffee',
    price: '$4.75',
    numericPrice: 4.75,
    rating: 4.9,
    reviewCount: 480,
    description: 'A harmonious harmony of bold espresso, velvety steamed milk, and a thick cloud of foam dusted with pure cocoa.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    category: 'coffee',
    price: '$5.25',
    numericPrice: 5.25,
    rating: 5.0,
    reviewCount: 610,
    description: 'Smooth, sweet espresso paired with creamy microfoam milk, finished with handcrafted free-pour latte art.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    category: 'coffee',
    price: '$5.50',
    numericPrice: 5.50,
    rating: 4.8,
    reviewCount: 390,
    description: 'Decadent artisanal dark chocolate blended with robust espresso, warm milk, and lightly sweetened whipped cream.',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'matcha-green-tea',
    name: 'Matcha Green Tea',
    category: 'tea',
    price: '$4.50',
    numericPrice: 4.50,
    rating: 4.9,
    reviewCount: 295,
    description: 'Ceremonial-grade Uji Japanese matcha whisked with silky steamed oat milk and a touch of raw organic honey.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'earl-grey-classic',
    name: 'Earl Grey Classic',
    category: 'tea',
    price: '$3.75',
    numericPrice: 3.75,
    rating: 4.8,
    reviewCount: 180,
    description: 'Premium full-leaf Ceylon black tea scented with cold-pressed Calabrian bergamot and delicate cornflower petals.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    category: 'pastries',
    price: '$4.00',
    numericPrice: 4.00,
    rating: 5.0,
    reviewCount: 520,
    description: 'Classic Viennoiserie pastry with 81 delicate layers of flaky, golden dough baked fresh every morning with French butter.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    category: 'pastries',
    price: '$6.50',
    numericPrice: 6.50,
    rating: 4.9,
    reviewCount: 415,
    description: 'Warm, decadent Belgian dark chocolate cake with a rich molten center, lightly dusted with powdered sugar.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    category: 'breakfast',
    price: '$8.50',
    numericPrice: 8.50,
    rating: 4.9,
    reviewCount: 360,
    description: 'Thick toasted artisan sourdough topped with seasoned Hass avocado, cherry tomatoes, microgreens, and chili flakes.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    available: true
  }
];

export const INITIAL_GALLERY = [
  {
    id: 'gallery-1',
    title: 'Café Interior',
    description: 'Our inviting space designed for connection, focus, and quiet moments.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
    wide: true
  },
  {
    id: 'gallery-2',
    title: 'Freshly Prepared Espresso',
    description: 'Precision temperature and grind for maximum rich flavor extraction.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    wide: false
  },
  {
    id: 'gallery-3',
    title: 'Cappuccino',
    description: 'Silky smooth milk microfoam poured to golden perfection.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
    wide: false
  },
  {
    id: 'gallery-4',
    title: 'Latte Art',
    description: 'Every cup is a canvas poured with passion by our resident baristas.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    wide: false
  },
  {
    id: 'gallery-5',
    title: 'Fresh Pastries',
    description: 'Freshly kneaded and oven-baked daily to accompany your morning brew.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    wide: false
  },
  {
    id: 'gallery-6',
    title: 'Coffee-Making Process',
    description: 'Honoring every bean from ethical harvest to the final slow pour.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80',
    wide: true
  }
];

export const INITIAL_REVIEWS = [
  {
    id: 'review-1',
    name: 'Sarah Jenkins',
    role: 'Local Guide',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    comment: 'Brew Haven is hands down my favorite sanctuary in the entire city. The espresso is consistently smooth and never bitter, and the staff treats every single customer like family. Their warm croissants are simply unbeatable!',
    createdAt: new Date().toISOString()
  },
  {
    id: 'review-2',
    name: 'Michael Chen',
    role: 'Regular Customer',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'As someone who works remotely, finding a café with fast Wi-Fi, comfortable seating, and world-class flat whites is rare. Brew Haven nails all of it. The avocado toast is the perfect fuel for my productive mornings.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'review-3',
    name: 'Jessica Robinson',
    role: 'Coffee Enthusiast',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'The attention to detail here is extraordinary. The baristas know the flavor profiles of each origin inside out. Their mocha made with melted Belgian chocolate cake pairing made my weekend unforgettable!',
    createdAt: new Date().toISOString()
  }
];

