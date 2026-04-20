export interface Listing {
  id: number;
  title: string;
  description: string;
  image?: string;
  price?: string;
  location: string;
  date: string;
  category: string;
  subcategory?: string;
  metadata?: {
    salary?: string;
    jobType?: string;
    company?: string;
    bedrooms?: number;
    experience?: string;
    replies?: number;
  };
}

export const categorySubcategories: Record<string, string[]> = {
  communities: ['activities', 'artist', 'childcare', 'pets'],
  services: ['home', 'education', 'automotive', 'tech', 'personal'],
  discussion: ['politics', 'lifestyle', 'entertainment', 'local'],
  housing: ['apartments', 'rooms', 'houses', 'sublets'],
  'for sell': ['furniture', 'electronics', 'vehicles', 'other'],
  jobs: ['tech', 'food', 'healthcare', 'creative', 'labor'],
  gigs: ['events', 'labor', 'creative', 'domestic'],
  resumes: ['tech', 'trades', 'creative', 'professional']
};

const generateDate = (daysAgo: number) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const listings: Listing[] = [
// COMMUNITIES
{
  id: 101,
  title: 'Vintage Collectibles',
  description:
  'Looking to trade and discuss vintage toys and collectibles. We meet every other Sunday.',
  image: 'https://picsum.photos/seed/101/400/400',
  location: 'Downtown',
  date: generateDate(1),
  category: 'communities',
  subcategory: 'activities'
},
{
  id: 102,
  title: 'Pet Meetup',
  description:
  'Weekly dog walking group at the local park. All friendly dogs welcome!',
  image: 'https://picsum.photos/seed/102/400/400',
  location: 'Centennial Park',
  date: generateDate(2),
  category: 'communities',
  subcategory: 'pets'
},
{
  id: 103,
  title: 'Art Workshop',
  description:
  'Open studio time for local artists. Bring your own supplies. Easels provided.',
  image: 'https://picsum.photos/seed/103/400/400',
  location: 'Arts District',
  date: generateDate(2),
  category: 'communities',
  subcategory: 'artist'
},
{
  id: 104,
  title: 'Book Club',
  description:
  'Currently reading sci-fi classics. We meet at the local coffee shop on Thursdays.',
  image: 'https://picsum.photos/seed/104/400/400',
  location: 'Westside',
  date: generateDate(3),
  category: 'communities',
  subcategory: 'activities'
},
{
  id: 105,
  title: 'Garden Share',
  description:
  'Trade seeds, plant clippings, and gardening tips. Great for beginners!',
  image: 'https://picsum.photos/seed/105/400/400',
  location: 'Community Center',
  date: generateDate(4),
  category: 'communities',
  subcategory: 'activities'
},
{
  id: 106,
  title: 'Music Jam',
  description:
  'Acoustic jam session. All skill levels welcome. Mostly folk and bluegrass.',
  image: 'https://picsum.photos/seed/106/400/400',
  location: 'Northside',
  date: generateDate(5),
  category: 'communities',
  subcategory: 'artist'
},
{
  id: 107,
  title: 'Yoga Group',
  description:
  'Free outdoor yoga sessions on Saturday mornings. Bring your own mat.',
  image: 'https://picsum.photos/seed/107/400/400',
  location: 'Riverfront',
  date: generateDate(5),
  category: 'communities',
  subcategory: 'activities'
},
{
  id: 108,
  title: 'Cooking Class',
  description:
  'Learn to make authentic pasta from scratch. Ingredients included in small fee.',
  image: 'https://picsum.photos/seed/108/400/400',
  location: 'Eastside Kitchen',
  date: generateDate(6),
  category: 'communities',
  subcategory: 'activities'
},
{
  id: 109,
  title: 'Babysitter Co-op',
  description:
  "Parents taking turns watching each other's kids. Join our trusted network!",
  image: 'https://picsum.photos/seed/109/400/400',
  location: 'Suburbs',
  date: generateDate(3),
  category: 'communities',
  subcategory: 'childcare'
},
{
  id: 110,
  title: 'Cat Lovers Club',
  description:
  'Share photos, tips, and stories about your feline friends. Monthly meetups too.',
  image: 'https://picsum.photos/seed/110/400/400',
  location: 'Midtown',
  date: generateDate(4),
  category: 'communities',
  subcategory: 'pets'
},

// SERVICES
{
  id: 201,
  title: 'Plumbing Repair',
  description:
  'Licensed plumber with 15 years of experience. Available for emergency calls 24/7.',
  image: 'https://picsum.photos/seed/201/400/400',
  price: '$80/hr',
  location: 'All Areas',
  date: generateDate(0),
  category: 'services',
  subcategory: 'home'
},
{
  id: 202,
  title: 'Math Tutoring',
  description:
  'High school and college level math tutoring. Algebra, Calculus, Statistics.',
  image: 'https://picsum.photos/seed/202/400/400',
  price: '$40/hr',
  location: 'University Area',
  date: generateDate(1),
  category: 'services',
  subcategory: 'education'
},
{
  id: 203,
  title: 'House Cleaning',
  description:
  'Deep cleaning, move-in/move-out, and regular maintenance. Eco-friendly products used.',
  image: 'https://picsum.photos/seed/203/400/400',
  price: '$120/flat',
  location: 'Metro Area',
  date: generateDate(1),
  category: 'services',
  subcategory: 'home'
},
{
  id: 204,
  title: 'Landscaping',
  description:
  'Lawn mowing, tree trimming, and garden design. Free estimates.',
  image: 'https://picsum.photos/seed/204/400/400',
  price: 'Varies',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'services',
  subcategory: 'home'
},
{
  id: 205,
  title: 'Tax Preparation',
  description:
  'Certified CPA available for personal and small business tax prep.',
  image: 'https://picsum.photos/seed/205/400/400',
  price: '$150+',
  location: 'Downtown Office',
  date: generateDate(3),
  category: 'services',
  subcategory: 'personal'
},
{
  id: 206,
  title: 'Dog Walking',
  description:
  'Reliable dog walker. 30 or 60 minute walks available. Pet CPR certified.',
  image: 'https://picsum.photos/seed/206/400/400',
  price: '$20/walk',
  location: 'Midtown',
  date: generateDate(3),
  category: 'services',
  subcategory: 'personal'
},
{
  id: 207,
  title: 'Web Design',
  description:
  'Custom websites for small businesses. React, WordPress, Shopify.',
  image: 'https://picsum.photos/seed/207/400/400',
  price: '$500+',
  location: 'Remote',
  date: generateDate(4),
  category: 'services',
  subcategory: 'tech'
},
{
  id: 208,
  title: 'Moving Help',
  description:
  'Two strong movers with a box truck. We handle your items with care.',
  image: 'https://picsum.photos/seed/208/400/400',
  price: '$90/hr',
  location: 'Citywide',
  date: generateDate(5),
  category: 'services',
  subcategory: 'home'
},
{
  id: 209,
  title: 'Auto Detailing',
  description:
  'Full interior and exterior detailing. Mobile service — we come to you.',
  image: 'https://picsum.photos/seed/209/400/400',
  price: '$150+',
  location: 'Metro Area',
  date: generateDate(2),
  category: 'services',
  subcategory: 'automotive'
},
{
  id: 210,
  title: 'Piano Lessons',
  description:
  'Experienced piano teacher for all ages. Classical and contemporary styles.',
  image: 'https://picsum.photos/seed/210/400/400',
  price: '$50/hr',
  location: 'Westside',
  date: generateDate(4),
  category: 'services',
  subcategory: 'education'
},

// DISCUSSION
{
  id: 301,
  title: 'Local Politics Forum: Upcoming City Council Election',
  description:
  'Discussing the candidates for the upcoming District 4 city council seat. Who are you voting for and why?',
  location: 'Local',
  date: generateDate(0),
  category: 'discussion',
  subcategory: 'politics',
  metadata: { replies: 45 }
},
{
  id: 302,
  title: 'Philosophy Circle: Determinism vs Free Will',
  description:
  'A deep dive into modern compatibilism. Recommended reading linked inside.',
  location: 'Global',
  date: generateDate(1),
  category: 'discussion',
  subcategory: 'lifestyle',
  metadata: { replies: 112 }
},
{
  id: 303,
  title: 'Tech Talk: The future of AI in web development',
  description:
  'How are you using AI tools in your daily workflow? Are we going to be replaced?',
  location: 'Global',
  date: generateDate(1),
  category: 'discussion',
  subcategory: 'lifestyle',
  metadata: { replies: 89 }
},
{
  id: 304,
  title: 'Parenting Advice: Toddler sleep regression',
  description:
  'My 2-year-old suddenly refuses to sleep through the night. Any tips from veteran parents?',
  location: 'Local',
  date: generateDate(2),
  category: 'discussion',
  subcategory: 'lifestyle',
  metadata: { replies: 34 }
},
{
  id: 305,
  title: 'Neighborhood Watch: Recent car break-ins',
  description:
  'Just a heads up, there have been several car break-ins on Elm St. Make sure to lock your doors!',
  location: 'Northside',
  date: generateDate(2),
  category: 'discussion',
  subcategory: 'local',
  metadata: { replies: 56 }
},
{
  id: 306,
  title: 'Food & Recipes: Best local pizza?',
  description:
  'I just moved here and need to know the absolute best pizza place in town. No chains please.',
  location: 'Local',
  date: generateDate(3),
  category: 'discussion',
  subcategory: 'local',
  metadata: { replies: 120 }
},
{
  id: 307,
  title: 'Movie Reviews: That new sci-fi thriller',
  description:
  "Did anyone else find the ending completely confusing? Let's discuss (spoilers inside).",
  location: 'Global',
  date: generateDate(4),
  category: 'discussion',
  subcategory: 'entertainment',
  metadata: { replies: 77 }
},
{
  id: 308,
  title: 'Music Discussion: Best albums of the 90s',
  description:
  "Let's settle this once and for all. What is the definitive 90s album?",
  location: 'Global',
  date: generateDate(5),
  category: 'discussion',
  subcategory: 'entertainment',
  metadata: { replies: 210 }
},
{
  id: 309,
  title: 'School Board Meeting Recap',
  description:
  "Summary of last night's school board meeting. Big changes coming to the district.",
  location: 'Local',
  date: generateDate(1),
  category: 'discussion',
  subcategory: 'politics',
  metadata: { replies: 28 }
},

// HOUSING
{
  id: 401,
  title: '2BR Apartment Downtown',
  description:
  'Spacious 2 bedroom apartment in the heart of downtown. In-unit washer/dryer, gym in building.',
  image: 'https://picsum.photos/seed/401/400/400',
  price: '$1,800/mo',
  location: 'Downtown',
  date: generateDate(0),
  category: 'housing',
  subcategory: 'apartments',
  metadata: { bedrooms: 2 }
},
{
  id: 402,
  title: 'Cozy Studio Near Campus',
  description:
  'Perfect for students. 5 minute walk to the main library. Utilities included.',
  image: 'https://picsum.photos/seed/402/400/400',
  price: '$950/mo',
  location: 'University Area',
  date: generateDate(1),
  category: 'housing',
  subcategory: 'apartments',
  metadata: { bedrooms: 0 }
},
{
  id: 403,
  title: 'Room in Shared House',
  description:
  'Looking for a clean, quiet roommate to share a 3BR house. Big backyard, dogs okay.',
  image: 'https://picsum.photos/seed/403/400/400',
  price: '$600/mo',
  location: 'Eastside',
  date: generateDate(2),
  category: 'housing',
  subcategory: 'rooms',
  metadata: { bedrooms: 1 }
},
{
  id: 404,
  title: '3BR Family Home',
  description:
  'Beautiful updated home in a great school district. 2 car garage, fenced yard.',
  image: 'https://picsum.photos/seed/404/400/400',
  price: '$2,400/mo',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'housing',
  subcategory: 'houses',
  metadata: { bedrooms: 3 }
},
{
  id: 405,
  title: 'Loft Space Available',
  description:
  'Industrial style loft with exposed brick and high ceilings. Great natural light.',
  image: 'https://picsum.photos/seed/405/400/400',
  price: '$1,600/mo',
  location: 'Arts District',
  date: generateDate(3),
  category: 'housing',
  subcategory: 'apartments',
  metadata: { bedrooms: 1 }
},
{
  id: 406,
  title: 'Furnished Room',
  description:
  'Fully furnished room for rent month-to-month. Perfect for traveling nurses or professionals.',
  image: 'https://picsum.photos/seed/406/400/400',
  price: '$800/mo',
  location: 'Midtown',
  date: generateDate(4),
  category: 'housing',
  subcategory: 'rooms',
  metadata: { bedrooms: 1 }
},
{
  id: 407,
  title: 'Sublet Available',
  description:
  'Subletting my 1BR for the summer (June-August). Discounted rent!',
  image: 'https://picsum.photos/seed/407/400/400',
  price: '$1,100/mo',
  location: 'Westside',
  date: generateDate(5),
  category: 'housing',
  subcategory: 'sublets',
  metadata: { bedrooms: 1 }
},
{
  id: 408,
  title: 'Townhouse for Rent',
  description: 'Modern 2-story townhouse. 2.5 baths, community pool access.',
  image: 'https://picsum.photos/seed/408/400/400',
  price: '$2,100/mo',
  location: 'Northside',
  date: generateDate(6),
  category: 'housing',
  subcategory: 'houses',
  metadata: { bedrooms: 2 }
},

// FOR SELL
{
  id: 501,
  title: 'Vintage Leather Couch',
  description:
  'Mid-century modern leather sofa. Great condition, minor wear. Must pick up.',
  image: 'https://picsum.photos/seed/501/400/400',
  price: '$450',
  location: 'Midtown',
  date: generateDate(0),
  category: 'for sell',
  subcategory: 'furniture'
},
{
  id: 502,
  title: 'Mountain Bike',
  description:
  'Trek Marlin 7, frame size L. Ridden less than 50 miles. Like new.',
  image: 'https://picsum.photos/seed/502/400/400',
  price: '$600',
  location: 'Westside',
  date: generateDate(1),
  category: 'for sell',
  subcategory: 'other'
},
{
  id: 503,
  title: 'iPhone 14 Pro',
  description:
  'Unlocked, 256GB, Space Black. Battery health 95%. Comes with case and charger.',
  image: 'https://picsum.photos/seed/503/400/400',
  price: '$750',
  location: 'Downtown',
  date: generateDate(1),
  category: 'for sell',
  subcategory: 'electronics'
},
{
  id: 504,
  title: 'Dining Table Set',
  description:
  'Solid oak dining table with 6 matching chairs. Has a leaf extension.',
  image: 'https://picsum.photos/seed/504/400/400',
  price: '$300',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'for sell',
  subcategory: 'furniture'
},
{
  id: 505,
  title: 'Electric Guitar',
  description:
  'Fender Stratocaster, Mexican made. Includes gig bag and small practice amp.',
  image: 'https://picsum.photos/seed/505/400/400',
  price: '$400',
  location: 'Eastside',
  date: generateDate(3),
  category: 'for sell',
  subcategory: 'other'
},
{
  id: 506,
  title: 'Bookshelf Collection',
  description:
  'Two matching IKEA Billy bookcases. Black-brown color. Fully assembled.',
  image: 'https://picsum.photos/seed/506/400/400',
  price: '$80',
  location: 'University Area',
  date: generateDate(4),
  category: 'for sell',
  subcategory: 'furniture'
},
{
  id: 507,
  title: 'Gaming PC',
  description:
  'Custom built PC. RTX 3070, Ryzen 5 5600X, 16GB RAM, 1TB NVMe SSD.',
  image: 'https://picsum.photos/seed/507/400/400',
  price: '$900',
  location: 'Northside',
  date: generateDate(5),
  category: 'for sell',
  subcategory: 'electronics'
},
{
  id: 508,
  title: 'Vintage Record Player',
  description:
  'Restored Pioneer PL-12D turntable. Sounds fantastic. New belt installed.',
  image: 'https://picsum.photos/seed/508/400/400',
  price: '$250',
  location: 'Arts District',
  date: generateDate(6),
  category: 'for sell',
  subcategory: 'electronics'
},
{
  id: 509,
  title: 'Honda Civic 2018',
  description:
  'Well maintained, 45k miles, clean title. New tires and brakes.',
  image: 'https://picsum.photos/seed/509/400/400',
  price: '$16,500',
  location: 'Eastside',
  date: generateDate(1),
  category: 'for sell',
  subcategory: 'vehicles'
},

// JOBS
{
  id: 601,
  title: 'Software Developer',
  description:
  'Looking for a full-stack developer with React and Node.js experience. Remote flexibility.',
  image: 'https://picsum.photos/seed/601/400/400',
  location: 'Downtown / Hybrid',
  date: generateDate(0),
  category: 'jobs',
  subcategory: 'tech',
  metadata: {
    salary: '$90k - $120k',
    company: 'TechCorp',
    jobType: 'Full-time'
  }
},
{
  id: 602,
  title: 'Restaurant Manager',
  description:
  'Experienced manager needed for high-volume downtown restaurant. Great benefits.',
  image: 'https://picsum.photos/seed/602/400/400',
  location: 'Downtown',
  date: generateDate(1),
  category: 'jobs',
  subcategory: 'food',
  metadata: {
    salary: '$65k + Bonus',
    company: 'The Local Eatery',
    jobType: 'Full-time'
  }
},
{
  id: 603,
  title: 'Delivery Driver',
  description:
  'Local delivery route. Must have clean driving record and be able to lift 50lbs.',
  image: 'https://picsum.photos/seed/603/400/400',
  location: 'Metro Area',
  date: generateDate(1),
  category: 'jobs',
  subcategory: 'labor',
  metadata: {
    salary: '$20/hr',
    company: 'FastShip Logistics',
    jobType: 'Full-time'
  }
},
{
  id: 604,
  title: 'Marketing Coordinator',
  description:
  'Manage social media accounts, create email campaigns, and assist with event planning.',
  image: 'https://picsum.photos/seed/604/400/400',
  location: 'Midtown',
  date: generateDate(2),
  category: 'jobs',
  subcategory: 'creative',
  metadata: {
    salary: '$50k - $60k',
    company: 'Creative Solutions',
    jobType: 'Full-time'
  }
},
{
  id: 605,
  title: 'Nurse Practitioner',
  description:
  'Join our growing family practice clinic. Excellent work-life balance.',
  image: 'https://picsum.photos/seed/605/400/400',
  location: 'Westside Clinic',
  date: generateDate(3),
  category: 'jobs',
  subcategory: 'healthcare',
  metadata: {
    salary: '$110k+',
    company: 'HealthFirst Medical',
    jobType: 'Full-time'
  }
},
{
  id: 606,
  title: 'Graphic Designer',
  description:
  'Create print and digital assets for various clients. Portfolio required.',
  image: 'https://picsum.photos/seed/606/400/400',
  location: 'Remote',
  date: generateDate(4),
  category: 'jobs',
  subcategory: 'creative',
  metadata: {
    salary: '$30/hr',
    company: 'Design Studio',
    jobType: 'Contract'
  }
},
{
  id: 607,
  title: 'Warehouse Associate',
  description:
  'Picking, packing, and shipping orders. Fast-paced environment.',
  image: 'https://picsum.photos/seed/607/400/400',
  location: 'Industrial Park',
  date: generateDate(5),
  category: 'jobs',
  subcategory: 'labor',
  metadata: {
    salary: '$18/hr',
    company: 'Global Supply',
    jobType: 'Full-time'
  }
},
{
  id: 608,
  title: 'Customer Service Rep',
  description: 'Handle inbound calls and emails. Paid training provided.',
  image: 'https://picsum.photos/seed/608/400/400',
  location: 'Call Center',
  date: generateDate(6),
  category: 'jobs',
  subcategory: 'labor',
  metadata: {
    salary: '$16/hr',
    company: 'Support Solutions',
    jobType: 'Part-time'
  }
},

// GIGS
{
  id: 701,
  title: 'Event Photography',
  description:
  'Need a photographer for a 4-hour corporate event this Saturday. Must have own equipment.',
  image: 'https://picsum.photos/seed/701/400/400',
  price: '$300 flat',
  location: 'Downtown Hotel',
  date: generateDate(0),
  category: 'gigs',
  subcategory: 'events'
},
{
  id: 702,
  title: 'Moving Help Needed',
  description:
  'Need 2 people to help load a U-Haul truck for 3 hours on Sunday morning.',
  image: 'https://picsum.photos/seed/702/400/400',
  price: '$25/hr',
  location: 'Eastside',
  date: generateDate(1),
  category: 'gigs',
  subcategory: 'labor'
},
{
  id: 703,
  title: 'Yard Work Weekend',
  description:
  'Raking leaves, pulling weeds, and laying mulch. Probably a full day of work.',
  image: 'https://picsum.photos/seed/703/400/400',
  price: '$150 flat',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'gigs',
  subcategory: 'labor'
},
{
  id: 704,
  title: 'Band Needs Drummer',
  description:
  'Indie rock band looking for a fill-in drummer for a gig next Friday.',
  image: 'https://picsum.photos/seed/704/400/400',
  price: 'Cut of door',
  location: 'The Blue Note',
  date: generateDate(2),
  category: 'gigs',
  subcategory: 'creative'
},
{
  id: 705,
  title: 'Dog Sitting',
  description:
  'Need someone to watch my golden retriever at their house for the weekend.',
  image: 'https://picsum.photos/seed/705/400/400',
  price: '$100 total',
  location: 'Drop off',
  date: generateDate(3),
  category: 'gigs',
  subcategory: 'domestic'
},
{
  id: 706,
  title: 'Flyer Distribution',
  description: 'Hand out flyers for a new restaurant opening. 4 hour shift.',
  image: 'https://picsum.photos/seed/706/400/400',
  price: '$15/hr',
  location: 'University Area',
  date: generateDate(4),
  category: 'gigs',
  subcategory: 'events'
},
{
  id: 707,
  title: 'House Painting',
  description:
  'Need help painting two bedrooms. Paint and supplies provided.',
  image: 'https://picsum.photos/seed/707/400/400',
  price: '$20/hr',
  location: 'Northside',
  date: generateDate(5),
  category: 'gigs',
  subcategory: 'labor'
},
{
  id: 708,
  title: 'Focus Group',
  description:
  'Participate in a 1-hour consumer research focus group about snacks.',
  image: 'https://picsum.photos/seed/708/400/400',
  price: '$50 gift card',
  location: 'Downtown Office',
  date: generateDate(6),
  category: 'gigs',
  subcategory: 'events'
},

// RESUMES
{
  id: 801,
  title: 'Experienced Web Developer',
  description:
  '5 years experience building scalable web applications. Proficient in React, Node, Python. Looking for full-time remote work.',
  image: 'https://picsum.photos/seed/801/400/400',
  location: 'Remote',
  date: generateDate(0),
  category: 'resumes',
  subcategory: 'tech',
  metadata: { experience: '5 Years' }
},
{
  id: 802,
  title: 'Marketing Professional',
  description:
  'Specializing in digital marketing, SEO, and content strategy. Proven track record of increasing engagement.',
  image: 'https://picsum.photos/seed/802/400/400',
  location: 'Metro Area',
  date: generateDate(1),
  category: 'resumes',
  subcategory: 'professional',
  metadata: { experience: '8 Years' }
},
{
  id: 803,
  title: 'Licensed Electrician',
  description:
  'Journeyman electrician available for residential and commercial projects. Fully insured.',
  image: 'https://picsum.photos/seed/803/400/400',
  location: 'Citywide',
  date: generateDate(2),
  category: 'resumes',
  subcategory: 'trades',
  metadata: { experience: '12 Years' }
},
{
  id: 804,
  title: 'Certified Teacher',
  description:
  'Elementary education teacher looking for tutoring opportunities or private pod teaching.',
  image: 'https://picsum.photos/seed/804/400/400',
  location: 'Suburbs',
  date: generateDate(3),
  category: 'resumes',
  subcategory: 'professional',
  metadata: { experience: '6 Years' }
},
{
  id: 805,
  title: 'Graphic Designer Available',
  description:
  'Freelance designer specializing in branding, logos, and print materials. Fast turnaround.',
  image: 'https://picsum.photos/seed/805/400/400',
  location: 'Remote',
  date: generateDate(4),
  category: 'resumes',
  subcategory: 'creative',
  metadata: { experience: '4 Years' }
},
{
  id: 806,
  title: 'Bookkeeper',
  description:
  'QuickBooks certified. Available to help small businesses organize their finances and prep for tax season.',
  image: 'https://picsum.photos/seed/806/400/400',
  location: 'Hybrid',
  date: generateDate(5),
  category: 'resumes',
  subcategory: 'professional',
  metadata: { experience: '10 Years' }
},
{
  id: 807,
  title: 'Personal Chef',
  description:
  'Culinary trained chef available for weekly meal prep, dinner parties, and special events.',
  image: 'https://picsum.photos/seed/807/400/400',
  location: 'Metro Area',
  date: generateDate(6),
  category: 'resumes',
  subcategory: 'creative',
  metadata: { experience: '7 Years' }
},
{
  id: 808,
  title: 'Handyman Services',
  description:
  'Jack of all trades. Carpentry, minor plumbing, drywall repair, and general home maintenance.',
  image: 'https://picsum.photos/seed/808/400/400',
  location: 'All Areas',
  date: generateDate(7),
  category: 'resumes',
  subcategory: 'trades',
  metadata: { experience: '15 Years' }
}];