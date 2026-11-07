export const site = {
  name: 'Daloy',
  tagline: 'Café by day. Table by night.',
  place: 'Puerto Prinsesa, Palawan',
  address: '14 Rizal Avenue, Puerto Prinsesa City, 5300 Palawan',
  phone: '+63 917 555 0142',
  email: 'hello@daloypalawan.ph',
  hours: [
    { day: 'Monday — Friday', open: '07:00', close: '23:00' },
    { day: 'Saturday', open: '08:00', close: '00:00' },
    { day: 'Sunday', open: '08:00', close: '21:00' },
  ],
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
  url: 'https://daloypalawan.ph',
};

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  tags?: ('signature' | 'veg' | 'spicy' | 'new')[];
};

export const menuCategories = [
  { id: 'coffee', label: 'Coffee', note: 'Single-origin Palawan and Cordillera beans' },
  { id: 'all-day', label: 'All Day', note: 'Served from open to close' },
  { id: 'table', label: 'The Table', note: 'After dark, from 18:00' },
  { id: 'drinks', label: 'Drinks', note: 'Pressed, poured and stirred' },
] as const;

export const menu: Record<string, MenuItem[]> = {
  coffee: [
    { name: 'Barako Latte', desc: 'Philippine liberica, muscovado, steamed carabao milk', price: 160, tags: ['signature'] },
    { name: 'Calamansi Cold Brew', desc: '18-hour steep, calamansi syrup, soda, ice', price: 180, tags: ['new'] },
    { name: 'Coconut Cortado', desc: 'Double shot, coconut cream, toasted coco flakes', price: 170 },
    { name: 'Tablea Hot Chocolate', desc: 'Native cacao tablea, your choice of milk', price: 150 },
    { name: 'Matcha & Calamansi', desc: 'Ceremonial matcha, calamansi cordial, oat milk', price: 190 },
    { name: 'Kape Barako, Black', desc: 'Batangas liberica, brewed strong, no sugar', price: 95 },
  ],
  'all-day': [
    { name: 'Kinilaw na Tanigue', desc: 'Vinegar-cured mackerel, coconut, calamansi, bird’s eye chili', price: 320, tags: ['signature', 'spicy'] },
    { name: 'Palawan Sunrise Bowl', desc: 'Mango, banana, adlai granola, coconut yogurt', price: 280, tags: ['veg'] },
    { name: 'Adlai & Mushroom Risotto', desc: 'Job’s tears, native mushrooms, native herbs', price: 340, tags: ['veg'] },
    { name: 'Longganisa Breakfast', desc: 'Vigan-style longganisa, garlic rice, egg, atchara', price: 360, tags: ['signature'] },
    { name: 'Halo-Halo Croissant', desc: 'Ube, leche flan, jackfruit, shaved ice in a croissant', price: 210, tags: ['new'] },
    { name: 'Pandesal Basket', desc: 'Four warm pandesal, kesong puti, butter, coco jam', price: 120 },
  ],
  table: [
    { name: 'Lechon de Leche', desc: 'Slow-roasted native pig, liver sauce, garlic rice', price: 680, tags: ['signature'] },
    { name: 'Sinigang na Lapu-Lapu', desc: 'Tamarind broth, native vegetables, grilled grouper', price: 520 },
    { name: 'Inihaw na Tamilok', desc: 'Bamboo clam, coconut vinegar, chili, calamansi', price: 480, tags: ['spicy'] },
    { name: 'Saging na Saba & Sago', desc: 'Caramelised banana, sago, coconut cream', price: 180, tags: ['veg'] },
    { name: 'Coconut Panna Cotta', desc: 'Coconut cream, calamansi curd, toasted coconut', price: 220, tags: ['veg', 'new'] },
    { name: 'Grilled Corn & Cocobutter', desc: 'Charred sweet corn, coconut butter, sea salt', price: 240, tags: ['veg'] },
  ],
  drinks: [
    { name: 'Daloy Tropical', desc: 'Rum, pineapple, calamansi, coconut, mint', price: 320, tags: ['signature'] },
    { name: 'Dragonfruit Mojito', desc: 'Pitaya, rum, lime, mint, soda', price: 280, tags: ['new'] },
    { name: 'Piña Colada', desc: 'Puerto Prinsesa pineapple, coconut, rum', price: 260 },
    { name: 'Calamansi Soda', desc: 'Fresh calamansi, soda, muscovado', price: 120, tags: ['veg'] },
    { name: 'Palawan Craft Lager', desc: 'Local brewery, 330ml, ice cold', price: 180 },
    { name: 'Barako Negroni', desc: 'Barako coffee, gin, vermouth, orange', price: 340 },
  ],
};

export const featured = [
  {
    name: 'Kinilaw na Tanigue',
    category: 'All Day',
    price: 320,
    img: '/img/kinilaw.jpg',
    desc: 'The island’s raw fish cure — coconut vinegar, chili, and coconut cream pulled together with calamansi.',
  },
  {
    name: 'Lechon de Leche',
    category: 'The Table',
    price: 680,
    img: '/img/lechon.jpg',
    desc: 'Native pig roasted over wood until the skin glass-shatters. Served with liver sauce and garlic rice.',
  },
  {
    name: 'Daloy Tropical',
    category: 'Drinks',
    price: 320,
    img: '/img/cocktail.jpg',
    desc: 'Pineapple, calamansi, coconut and mint — built for the hour when the heat finally breaks.',
  },
  {
    name: 'Coconut Panna Cotta',
    category: 'The Table',
    price: 220,
    img: '/img/panna-cotta.jpg',
    desc: 'Set with coconut cream, finished with a sharp calamansi curd and toasted coconut.',
  },
];

export const gallery = [
  { img: '/img/cafe-interior.jpg', alt: 'The café floor in the morning' },
  { img: '/img/latte-art.jpg', alt: 'Latte art poured by the head barista' },
  { img: '/img/restaurant-table.jpg', alt: 'The dining room set for the evening service' },
  { img: '/img/coffee-pour.jpg', alt: 'A slow pour over at the bar' },
  { img: '/img/bar.jpg', alt: 'The back bar at night' },
  { img: '/img/pastry.jpg', alt: 'Pastries from the morning bake' },
  { img: '/img/fine-dish.jpg', alt: 'A plated course from the evening menu' },
  { img: '/img/wine.jpg', alt: 'Wine and coffee at the window bar' },
];

export const promotions = [
  {
    title: 'Merienda Club',
    when: 'Weekdays · 14:00 – 17:00',
    desc: 'Any coffee and a pastry from the morning bake for ₱195. Show this page at the counter.',
    tag: 'Daily',
  },
  {
    title: 'Twilight Table',
    when: 'Tuesday — Thursday · 18:00 – 20:00',
    desc: 'Four courses from The Table for ₱1,450, with a calamansi soda on arrival.',
    tag: 'Limited',
  },
  {
    title: 'Barako Sundays',
    when: 'Every Sunday · all day',
    desc: 'Bottomless barako for ₱250. Stay as long as you like; the paper is provided.',
    tag: 'Weekly',
  },
];

export const reviews = [
  {
    quote: 'The kinilaw is the best I have eaten outside my grandmother’s kitchen. The room is beautiful without ever trying too hard.',
    name: 'M. Ocampo',
    meta: 'Puerto Prinsesa',
  },
  {
    quote: 'Comes for the coffee, stays for dinner. The barako negroni should be illegal it is so good.',
    name: 'J. Dela Cruz',
    meta: 'Manila',
  },
  {
    quote: 'A café that actually turns into a restaurant at night — and does both properly. The lechon is worth the flight.',
    name: 'A. Mercado',
    meta: 'Cebu',
  },
];

export const nfcActions = [
  { title: 'View the menu', desc: 'No app, no sign-up. The menu opens in the browser.' },
  { title: 'Order & pay', desc: 'Send your order to the kitchen and settle at the table.' },
  { title: 'Join the loyalty', desc: 'Six stamps on a card that lives on your phone.' },
  { title: 'Leave a review', desc: 'Thirty seconds, straight to the manager’s inbox.' },
];
