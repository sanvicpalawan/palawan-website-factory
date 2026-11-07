export const tours = {
  name: 'Daluyon',
  kind: 'Island Hopping',
  place: 'El Nido & Bacuit Bay, Palawan',
  tagline: 'Every island has an hour. We know which.',
  phone: '+63 917 555 0188',
  email: 'trips@daluyonpalawan.ph',
  address: 'Calle Real, El Nido, 5313 Palawan',
  url: 'https://daluyonpalawan.ph',
  whatsapp: '+63 917 555 0188',
  schedule: [
    { day: 'Island Hopping A', detail: '08:30 – 16:00 · daily' },
    { day: 'Island Hopping B', detail: '08:30 – 16:00 · daily' },
    { day: 'Sunset Cruise', detail: '15:30 – 19:00 · Tuesday, Thursday, Saturday' },
    { day: 'Private Charter', detail: 'By arrangement, any day' },
  ],
};

export const packages = [
  {
    code: 'Tour A',
    name: 'Big Lagoon & Secret Beach',
    duration: '7.5 hrs',
    price: 1450,
    img: '/img/tours/lagoon.jpg',
    desc: 'The postcard lagoon by kayak, a secret beach behind the cliff, and a buffet lunch on a sandbar.',
    highlights: ['Big Lagoon by kayak', 'Secret Lagoon', 'Sandbar lunch', 'Snorkel gear included'],
  },
  {
    code: 'Tour B',
    name: 'Shimizu Island & Cathedral Cave',
    duration: '7.5 hrs',
    price: 1450,
    img: '/img/tours/island-hop.jpg',
    desc: 'A slow loop past limestone cathedrals, a wreck snorkel and the best barbecue on the bay.',
    highlights: ['Cathedral Cave', 'Shimizu Island reef', 'Beach barbecue', 'Turtle spotting'],
  },
  {
    code: 'Tour C',
    name: 'Hidden Beaches & Helicopter Island',
    duration: '8 hrs',
    price: 1750,
    img: '/img/tours/cliff.jpg',
    desc: 'The beaches most boats miss. Matinloc Shrine, a Helicopter Island viewpoint and a quiet cove for lunch.',
    highlights: ['Matinloc Shrine', 'Helicopter Island', 'Hidden Beach', 'Secluded cove lunch'],
  },
  {
    code: 'Sunset',
    name: 'Bacuit Bay Sunset Cruise',
    duration: '3.5 hrs',
    price: 950,
    img: '/img/tours/sunset-boat.jpg',
    desc: 'The bay empties at golden hour. Drinks on deck, a swim at the last light, and the cliffs turning amber.',
    highlights: ['Golden hour on the water', 'Open bar', 'Two swim stops', 'Small group — max 12'],
  },
];

export const days = [
  { time: '08:30', title: 'Pick-up in El Nido', desc: 'We collect from any hotel or hostel in town. Life vests and dry bags are already on board.' },
  { time: '09:15', title: 'First swim', desc: 'A sheltered reef to get comfortable in the water before the lagoon.' },
  { time: '10:30', title: 'Big Lagoon', desc: 'Kayak through the crack in the cliff. No motors inside — just you and the limestone.' },
  { time: '12:30', title: 'Lunch on the sandbar', desc: 'Grilled fish, prawns, fruit and rice, cooked on board by your crew.' },
  { time: '14:00', title: 'Secret Beach', desc: 'A beach you can only reach by swimming through a gap in the rock.' },
  { time: '16:00', title: 'Back to El Nido', desc: 'Cold towels, fresh fruit and a drop at your door.' },
];

export const crew = [
  { name: 'R. “Bong” Navarro', role: 'Lead guide, 14 years', img: '/img/tours/tour-group.jpg' },
  { name: 'M. Sandoval', role: 'Boat captain, Bacuit Bay born', img: '/img/tours/boat.jpg' },
  { name: 'J. Ferrer', role: 'Marine biologist & snorkel guide', img: '/img/tours/snorkel.jpg' },
];

export const faqs = [
  { q: 'What should I bring?', a: 'Swimwear, a hat, reef-safe sunscreen and a dry bag. We provide life vests, snorkel gear, towels and lunch.' },
  { q: 'Is it safe for non-swimmers?', a: 'Yes. Everyone wears a life vest, guides swim with the group, and we choose sheltered sites when the swell is up.' },
  { q: 'Can I book privately?', a: 'Any tour can be chartered for your group. Send us the date and the number of guests for a quote.' },
  { q: 'What if it rains?', a: 'Palawan rain passes quickly. We run tours in light rain and reschedule or refund if the coast guard closes the bay.' },
  { q: 'How do I book?', a: 'WhatsApp us with the tour code, the date and the number of guests. We hold seats for 24 hours.' },
];
