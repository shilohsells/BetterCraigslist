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
  keywords?: string[];
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
  Communities: ['activities', 'artist', 'childcare', 'pets'],
  Services: ['home', 'education', 'automotive', 'tech', 'personal'],
  Discussion: ['politics', 'lifestyle', 'entertainment', 'local'],
  Housing: ['apartments', 'rooms', 'houses', 'sublets'],
  'For Sale': ['furniture', 'electronics', 'vehicles', 'other'],
  Jobs: ['tech', 'food', 'healthcare', 'creative', 'labor'],
  Gigs: ['events', 'labor', 'creative', 'domestic'],
  Resumes: ['tech', 'trades', 'creative', 'professional']
};

const generateDate = (daysAgo: number) => {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const listings: Listing[] = [
// Communities
{
  id: 101,
  title: 'Vintage LPS Collectibles',
  description:
    'Looking to trade and discuss vintage littlest pet shop toys and collectibles. We meet every other Sunday.',
  image: 'https://i.redd.it/jics0jfeduy51.jpg',
  location: 'Downtown',
  date: generateDate(1),
  category: 'Communities',
  subcategory: 'activities',
  keywords: ['lps', 'littlest pet shop', 'collectibles', 'toys', 'vintage', 'trade', 'pets']
},
{
  id: 102,
  title: 'Pet Meetup',
  description:
    'Weekly dog walking group at the local park. All friendly dogs welcome!',
  image: 'https://i.pinimg.com/736x/f1/a2/f9/f1a2f997cbb56510f53e35e9b80322dd.jpg',
  location: 'South Lakes Park',
  date: generateDate(2),
  category: 'Communities',
  subcategory: 'pets',
  keywords: ['pet', 'pets', 'dog', 'dogs', 'meetup', 'walking', 'park', 'group']
},
{
  id: 103,
  title: 'Art Workshop',
  description:
    'Open studio time for local artists. Bring your own supplies. Easels provided.',
  image: 'https://i.pinimg.com/736x/76/df/56/76df56ade07baafc7ed4266fbe88f4f1.jpg',
  location: 'Arts District',
  date: generateDate(2),
  category: 'Communities',
  subcategory: 'artist',
  keywords: ['art', 'artist', 'artists', 'studio', 'workshop', 'painting', 'drawing', 'creative']
},
{
  id: 104,
  title: 'Book Club',
  description:
    'Currently reading sci-fi classics. We meet at the local coffee shop on Thursdays.',
  image: 'https://i.pinimg.com/1200x/25/dd/92/25dd926ed097182cfc62d71b1bf5cd11.jpg',
  location: 'Westside',
  date: generateDate(3),
  category: 'Communities',
  subcategory: 'activities',
  keywords: ['book', 'books', 'book club', 'reading', 'sci-fi', 'classics', 'coffee shop', 'club']
},
{
  id: 105,
  title: 'Garden Share',
  description:
    'Trade seeds, plant clippings, and gardening tips. Great for beginners!',
  image: 'https://i.pinimg.com/736x/35/b6/46/35b646335402e3fbb77aa806e03a0d99.jpg',
  location: 'Community Center',
  date: generateDate(4),
  category: 'Communities',
  subcategory: 'activities',
  keywords: ['garden', 'gardening', 'plants', 'seeds', 'clippings', 'share', 'beginners', 'trade']
},
{
  id: 106,
  title: 'Music Jam',
  description:
    'Acoustic jam session. All skill levels welcome. Mostly folk and bluegrass.',
  image: 'https://i.pinimg.com/1200x/eb/5f/92/eb5f92f7e700064f9a3481dcba37c00e.jpg',
  location: 'Northside',
  date: generateDate(5),
  category: 'Communities',
  subcategory: 'artist',
  keywords: ['music', 'jam', 'jam session', 'acoustic', 'folk', 'bluegrass', 'band', 'musicians']
},
{
  id: 107,
  title: 'Yoga Group',
  description:
    'Free outdoor yoga sessions on Saturday mornings. Bring your own mat.',
  image: 'https://i.pinimg.com/736x/5b/11/6c/5b116c1cc743451a3aba4f3cfe6f34d6.jpg',
  location: 'Riverfront',
  date: generateDate(5),
  category: 'Communities',
  subcategory: 'activities',
  keywords: ['yoga', 'group', 'outdoor', 'wellness', 'exercise', 'fitness', 'mat', 'sessions']
},
{
  id: 108,
  title: 'Cooking Class',
  description:
    'Learn to make authentic pasta from scratch. Ingredients included in small fee.',
  image: 'https://i.pinimg.com/736x/dd/77/0f/dd770ff7a1119e40ec2781d2a148e5bc.jpg',
  location: 'Eastside Kitchen',
  date: generateDate(6),
  category: 'Communities',
  subcategory: 'activities',
  keywords: ['cooking', 'class', 'pasta', 'food', 'kitchen', 'learn', 'ingredients', 'authentic']
},
{
  id: 109,
  title: 'Babysitter Co-op',
  description:
    "Parents taking turns watching each other's kids. Join our trusted network!",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqwq12clgsR_dA39Q3WSh-q2TIpAektb_mQ&s',
  location: 'Suburbs',
  date: generateDate(3),
  category: 'Communities',
  subcategory: 'childcare',
  keywords: ['babysitter', 'babysitting', 'childcare', 'kids', 'children', 'parents', 'co-op', 'network']
},
{
  id: 110,
  title: 'Cat Lovers Club',
  description:
    'Share photos, tips, and stories about your feline friends. Monthly meetups too.',
  image: 'https://i.pinimg.com/736x/40/9c/f5/409cf5b69a74200ab5a1e63b29c82c9f.jpg',
  location: 'Midtown',
  date: generateDate(4),
  category: 'Communities',
  subcategory: 'pets',
  keywords: ['cat', 'cats', 'feline', 'pet', 'pets', 'club', 'meetup', 'cat lovers']
},

// SERVICES
{
  id: 201,
  title: 'Plumbing Repair',
  description:
    'Licensed plumber with 15 years of experience. Available for emergency calls 24/7.',
  image: 'https://i.pinimg.com/736x/c4/36/65/c436656b64c3748515657197edd25d7c.jpg',
  price: '$80/hr',
  location: 'All Areas',
  date: generateDate(0),
  category: 'Services',
  subcategory: 'home',
  keywords: ['plumbing', 'plumber', 'repair', 'pipes', 'emergency', 'home repair', 'licensed', '24/7']
},
{
  id: 202,
  title: 'Math Tutoring',
  description:
    'High school and college level math tutoring. Algebra, Calculus, Statistics.',
  image: 'https://i.pinimg.com/736x/9b/7e/38/9b7e3862105f0c7e21e27a6e7e57eb23.jpg',
  price: '$40/hr',
  location: 'University Area',
  date: generateDate(1),
  category: 'Services',
  subcategory: 'education',
  keywords: ['math', 'tutoring', 'tutor', 'algebra', 'calculus', 'statistics', 'college', 'high school']
},
{
  id: 203,
  title: 'House Cleaning',
  description:
    'Deep cleaning, move-in/move-out, and regular maintenance. Eco-friendly products used.',
  image: 'https://i.pinimg.com/736x/84/15/4a/84154a83ad87b71af5d8b19830606b55.jpg',
  price: '$120/flat',
  location: 'Metro Area',
  date: generateDate(1),
  category: 'Services',
  subcategory: 'home',
  keywords: ['cleaning', 'house cleaning', 'deep cleaning', 'move in', 'move out', 'maintenance', 'home', 'eco-friendly']
},
{
  id: 204,
  title: 'Landscaping',
  description:
    'Lawn mowing, tree trimming, and garden design. Free estimates.',
  image: 'https://i.pinimg.com/1200x/38/be/ab/38beabe1bb219b97d8803bc64280b3e3.jpg',
  price: 'Varies',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'Services',
  subcategory: 'home',
  keywords: ['landscaping', 'lawn', 'mowing', 'tree trimming', 'garden design', 'yard work', 'outdoor', 'estimates']
},
{
  id: 205,
  title: 'Tax Preparation',
  description:
    'Certified CPA available for personal and small business tax prep.',
  image: 'https://i.pinimg.com/736x/0c/1a/ee/0c1aee86c4108ad9fe0ef0589b271f7e.jpg',
  price: '$150+',
  location: 'Downtown Office',
  date: generateDate(3),
  category: 'Services',
  subcategory: 'personal',
  keywords: ['tax', 'taxes', 'tax prep', 'preparation', 'cpa', 'accounting', 'business', 'personal finance']
},
{
  id: 206,
  title: 'Dog Walking',
  description:
    'Reliable dog walker. 30 or 60 minute walks available. Pet CPR certified.',
  image: 'https://i.pinimg.com/1200x/8f/eb/7e/8feb7e2f408abc61c0a12e016fded765.jpg',
  price: '$20/walk',
  location: 'Midtown',
  date: generateDate(3),
  category: 'Services',
  subcategory: 'personal',
  keywords: ['dog', 'dogs', 'dog walking', 'walker', 'pet', 'pets', 'walks', 'pet care']
},
{
  id: 207,
  title: 'Web Design',
  description:
    'Custom websites for small businesses. React, WordPress, Shopify.',
  image: 'https://i.pinimg.com/736x/f8/0b/09/f80b098eaa0d4fb2195b0dcd994bc4ef.jpg',
  price: '$500+',
  location: 'Remote',
  date: generateDate(4),
  category: 'Services',
  subcategory: 'tech',
  keywords: ['web design', 'website', 'websites', 'react', 'wordpress', 'shopify', 'small business', 'developer']
},
{
  id: 208,
  title: 'Moving Help',
  description:
    'Two strong movers with a box truck. We handle your items with care.',
  image: 'https://i.pinimg.com/736x/80/88/d0/8088d0a4ae88d291c5b9795387a86e6a.jpg',
  price: '$90/hr',
  location: 'Citywide',
  date: generateDate(5),
  category: 'Services',
  subcategory: 'home',
  keywords: ['moving', 'movers', 'box truck', 'moving help', '搬家', 'truck', 'furniture', 'citywide']
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
  category: 'Services',
  subcategory: 'automotive',
  keywords: ['auto detailing', 'car detailing', 'car wash', 'interior', 'exterior', 'mobile service', 'vehicle', 'automotive']
},
{
  id: 210,
  title: 'Piano Lessons',
  description:
    'Experienced piano teacher for all ages. Classical and contemporary styles.',
  image: 'https://i.pinimg.com/736x/19/ee/cf/19eecf836b6bba7915a66c85c9baf909.jpg',
  price: '$50/hr',
  location: 'Westside',
  date: generateDate(4),
  category: 'Services',
  subcategory: 'education',
  keywords: ['piano', 'lessons', 'music lessons', 'teacher', 'classical', 'contemporary', 'instrument', 'all ages']
},

// DISCUSSION
{
  id: 301,
  title: 'Local Politics Forum: Upcoming City Council Election',
  description:
    'Discussing the candidates for the upcoming District 4 city council seat. Who are you voting for and why?',
  location: 'Local',
  date: generateDate(0),
  category: 'Discussion',
  subcategory: 'politics',
  keywords: ['politics', 'city council', 'election', 'candidates', 'district 4', 'voting', 'forum', 'local government'],
  metadata: { replies: 45 }
},
{
  id: 302,
  title: 'Philosophy Circle: Determinism vs Free Will',
  description:
    'A deep dive into modern compatibilism. Recommended reading linked inside.',
  location: 'Global',
  date: generateDate(1),
  category: 'Discussion',
  subcategory: 'lifestyle',
  keywords: ['philosophy', 'determinism', 'free will', 'compatibilism', 'reading', 'Discussion', 'circle', 'ideas'],
  metadata: { replies: 112 }
},
{
  id: 303,
  title: 'Tech Talk: The future of AI in web development',
  description:
    'How are you using AI tools in your daily workflow? Are we going to be replaced?',
  location: 'Global',
  date: generateDate(1),
  category: 'Discussion',
  subcategory: 'lifestyle',
  keywords: ['ai', 'web development', 'tech', 'workflow', 'developers', 'automation', 'future', 'tools'],
  metadata: { replies: 89 }
},
{
  id: 304,
  title: 'Parenting Advice: Toddler sleep regression',
  description:
    'My 2-year-old suddenly refuses to sleep through the night. Any tips from veteran parents?',
  location: 'Local',
  date: generateDate(2),
  category: 'Discussion',
  subcategory: 'lifestyle',
  keywords: ['parenting', 'toddler', 'sleep', 'sleep regression', 'parents', 'advice', 'kids', '2-year-old'],
  metadata: { replies: 34 }
},
{
  id: 305,
  title: 'Neighborhood Watch: Recent car break-ins',
  description:
    'Just a heads up, there have been several car break-ins on Elm St. Make sure to lock your doors!',
  location: 'Northside',
  date: generateDate(2),
  category: 'Discussion',
  subcategory: 'local',
  keywords: ['neighborhood watch', 'car break-ins', 'crime', 'elm street', 'safety', 'local', 'cars', 'northside'],
  metadata: { replies: 56 }
},
{
  id: 306,
  title: 'Food & Recipes: Best local pizza?',
  description:
    'I just moved here and need to know the absolute best pizza place in town. No chains please.',
  location: 'Local',
  date: generateDate(3),
  category: 'Discussion',
  subcategory: 'local',
  keywords: ['pizza', 'food', 'recipes', 'local food', 'restaurant', 'best pizza', 'town', 'no chains'],
  metadata: { replies: 120 }
},
{
  id: 307,
  title: 'Movie Reviews: That new sci-fi thriller',
  description:
    "Did anyone else find the ending completely confusing? Let's discuss (spoilers inside).",
  location: 'Global',
  date: generateDate(4),
  category: 'Discussion',
  subcategory: 'entertainment',
  keywords: ['movie', 'movies', 'reviews', 'sci-fi', 'thriller', 'spoilers', 'ending', 'film Discussion'],
  metadata: { replies: 77 }
},
{
  id: 308,
  title: 'Music Discussion: Best albums of the 90s',
  description:
    "Let's settle this once and for all. What is the definitive 90s album?",
  location: 'Global',
  date: generateDate(5),
  category: 'Discussion',
  subcategory: 'entertainment',
  keywords: ['music', 'albums', '90s', '1990s', 'best album', 'Discussion', 'songs', 'entertainment'],
  metadata: { replies: 210 }
},
{
  id: 309,
  title: 'School Board Meeting Recap',
  description:
    "Summary of last night's school board meeting. Big changes coming to the district.",
  location: 'Local',
  date: generateDate(1),
  category: 'Discussion',
  subcategory: 'politics',
  keywords: ['school board', 'meeting', 'recap', 'district', 'education', 'local politics', 'changes', 'schools'],
  metadata: { replies: 28 }
},

// HOUSING
{
  id: 401,
  title: '2BR Apartment Downtown',
  description:
    'Spacious 2 bedroom apartment in the heart of downtown. In-unit washer/dryer, gym in building.',
  image: 'https://i.pinimg.com/1200x/98/da/8f/98da8fc091557000a27cfbd33d346d56.jpg',
  price: '$1,800/mo',
  location: 'Downtown',
  date: generateDate(0),
  category: 'Housing',
  subcategory: 'apartments',
  keywords: ['2br', '2 bedroom', 'apartment', 'downtown', 'washer', 'dryer', 'gym', 'rental'],
  metadata: { bedrooms: 2 }
},
{
  id: 402,
  title: 'Cozy Studio Near Campus',
  description:
    'Perfect for students. 5 minute walk to the main library. Utilities included.',
  image: 'https://i.pinimg.com/736x/08/c8/3b/08c83b2981104a4d6ace2b1b8a6c76d4.jpg',
  price: '$950/mo',
  location: 'University Area',
  date: generateDate(1),
  category: 'Housing',
  subcategory: 'apartments',
  keywords: ['studio', 'campus', 'students', 'library', 'utilities included', 'apartment', 'university', 'rental'],
  metadata: { bedrooms: 0 }
},
{
  id: 403,
  title: 'Room in Shared House',
  description:
    'Looking for a clean, quiet roommate to share a 3BR house. Big backyard, dogs okay.',
  image: 'https://i.pinimg.com/736x/f1/30/ce/f130ceeee754548f4588f90613daace2.jpg',
  price: '$600/mo',
  location: 'Eastside',
  date: generateDate(2),
  category: 'Housing',
  subcategory: 'rooms',
  keywords: ['room', 'shared house', 'roommate', '3br', 'backyard', 'dogs okay', 'rent', 'Housing'],
  metadata: { bedrooms: 1 }
},
{
  id: 404,
  title: '3BR Family Home',
  description:
    'Beautiful updated home in a great school district. 2 car garage, fenced yard.',
  image: 'https://i.pinimg.com/1200x/aa/30/a4/aa30a4c0fa4157c065c7de6f99ca52d8.jpg',
  price: '$2,400/mo',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'Housing',
  subcategory: 'houses',
  keywords: ['3br', 'family home', 'house', 'school district', 'garage', 'fenced yard', 'suburbs', 'rental'],
  metadata: { bedrooms: 3 }
},
{
  id: 405,
  title: 'Loft Space Available',
  description:
    'Industrial style loft with exposed brick and high ceilings. Great natural light.',
  image: 'https://i.pinimg.com/736x/5a/dd/da/5addda6443d5b98add5dc44772a22295.jpg',
  price: '$1,600/mo',
  location: 'Arts District',
  date: generateDate(3),
  category: 'Housing',
  subcategory: 'apartments',
  keywords: ['loft', 'industrial', 'exposed brick', 'high ceilings', 'natural light', 'arts district', 'apartment', 'space'],
  metadata: { bedrooms: 1 }
},
{
  id: 406,
  title: 'Furnished Room',
  description:
    'Fully furnished room for rent month-to-month. Perfect for traveling nurses or professionals.',
  image: 'https://i.pinimg.com/736x/e0/a9/a6/e0a9a648bb0dc0456b8ad2ceb121a835.jpg',
  price: '$800/mo',
  location: 'Midtown',
  date: generateDate(4),
  category: 'Housing',
  subcategory: 'rooms',
  keywords: ['furnished room', 'room', 'month-to-month', 'traveling nurses', 'professionals', 'rent', 'midtown', 'Housing'],
  metadata: { bedrooms: 1 }
},
{
  id: 407,
  title: 'Sublet Available',
  description:
    'Subletting my 1BR for the summer (June-August). Discounted rent!',
  image: 'https://i.pinimg.com/1200x/85/40/81/85408112f2cf280c7fe92cc06fd71739.jpg',
  price: '$1,100/mo',
  location: 'Westside',
  date: generateDate(5),
  category: 'Housing',
  subcategory: 'sublets',
  keywords: ['sublet', 'subletting', '1br', 'summer', 'june', 'august', 'discounted rent', 'westside'],
  metadata: { bedrooms: 1 }
},
{
  id: 408,
  title: 'Townhouse for Rent',
  description: 'Modern 2-story townhouse. 2.5 baths, community pool access.',
  image: 'https://i.pinimg.com/736x/1b/78/fa/1b78fadec746282e0c3e4dd4ffeac35e.jpg',
  price: '$2,100/mo',
  location: 'Northside',
  date: generateDate(6),
  category: 'Housing',
  subcategory: 'houses',
  keywords: ['townhouse', 'rent', '2-story', '2.5 baths', 'pool', 'community pool', 'northside', 'Housing'],
  metadata: { bedrooms: 2 }
},

// FOR SALE
{
  id: 501,
  title: 'Vintage Leather Couch',
  description:
    'Mid-century modern leather sofa. Great condition, minor wear. Must pick up.',
  image: 'https://i.pinimg.com/736x/5c/1c/7a/5c1c7a7e03e6656c6aa60efacf6822bb.jpg',
  price: '$450',
  location: 'Midtown',
  date: generateDate(0),
  category: 'For Sale',
  subcategory: 'furniture',
  keywords: ['couch', 'sofa', 'leather', 'vintage', 'mid-century', 'furniture', 'pickup', 'living room']
},
{
  id: 502,
  title: 'Mountain Bike',
  description:
    'Trek Marlin 7, frame size L. Ridden less than 50 miles. Like new.',
  image: 'https://i.ebayimg.com/images/g/b4YAAeSwKptn6xHA/s-l1200.jpg',
  price: '$600',
  location: 'Westside',
  date: generateDate(1),
  category: 'For Sale',
  subcategory: 'other',
  keywords: ['bike', 'bicycle', 'mountain bike', 'trek', 'marlin 7', 'frame size l', 'like new', 'cycling']
},
{
  id: 503,
  title: 'iPhone 14 Pro',
  description:
    'Unlocked, 256GB, Space Black. Battery health 95%. Comes with case and charger.',
  image: 'https://i.pinimg.com/736x/dd/12/6a/dd126a5e1ccc061c346354d188a89daf.jpg',
  price: '$750',
  location: 'Downtown',
  date: generateDate(1),
  category: 'For Sale',
  subcategory: 'electronics',
  keywords: ['iphone', 'iphone 14 pro', 'apple', 'phone', '256gb', 'space black', 'charger', 'electronics']
},
{
  id: 504,
  title: 'Dining Table Set',
  description:
    'Solid oak dining table with 6 matching chairs. Has a leaf extension.',
  image: 'https://i.pinimg.com/736x/94/44/f5/9444f529000136ee8c7fab6b771aecd9.jpg',
  price: '$300',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'For Sale',
  subcategory: 'furniture',
  keywords: ['dining table', 'table set', 'chairs', 'oak', 'leaf extension', 'furniture', 'dining room', 'wood']
},
{
  id: 505,
  title: 'Electric Guitar',
  description:
    'Fender Stratocaster, Mexican made. Includes gig bag and small practice amp.',
  image: 'https://i.pinimg.com/1200x/81/71/33/817133a66ae57bcfbcf7d5fd39bdc5d3.jpg',
  price: '$400',
  location: 'Eastside',
  date: generateDate(3),
  category: 'For Sale',
  subcategory: 'other',
  keywords: ['guitar', 'electric guitar', 'fender', 'stratocaster', 'gig bag', 'amp', 'instrument', 'music']
},
{
  id: 506,
  title: 'Bookshelf Collection',
  description:
    'Two matching IKEA Billy bookcases. Black-brown color. Fully assembled.',
  image: 'https://www.ikea.com/us/en/images/products/billy-bookcase-combination-dark-brown-oak-effect__1266282_pe928092_s5.jpg?f=s',
  price: '$80',
  location: 'University Area',
  date: generateDate(4),
  category: 'For Sale',
  subcategory: 'furniture',
  keywords: ['bookshelf', 'bookcase', 'ikea', 'billy', 'furniture', 'black-brown', 'assembled', 'storage']
},
{
  id: 507,
  title: 'Gaming PC',
  description:
    'Custom built PC. RTX 3070, Ryzen 5 5600X, 16GB RAM, 1TB NVMe SSD.',
  image: 'https://879a0cd993b93bf42216-fac92dd43971ff47cecfeefad717658e.ssl.cf2.rackcdn.com/5bbaa0b6-8164-4ca1-8841-c71281f56122.jpg',
  price: '$900',
  location: 'Northside',
  date: generateDate(5),
  category: 'For Sale',
  subcategory: 'electronics',
  keywords: ['gaming pc', 'pc', 'computer', 'rtx 3070', 'ryzen 5', '16gb ram', '1tb ssd', 'custom built']
},
{
  id: 508,
  title: 'Vintage Record Player',
  description:
    'Restored Pioneer PL-12D turntable. Sounds fantastic. New belt installed.',
  image: 'https://preview.redd.it/picked-up-this-pioneer-pl-12d-yesterday-v0-dh80pcukjsj81.jpg?width=1080&crop=smart&auto=webp&s=a0d57daee25458eeaaed7d18dc7ae71c3926324b',
  price: '$300',
  location: 'Arts District',
  date: generateDate(6),
  category: 'For Sale',
  subcategory: 'electronics',
  keywords: ['record player', 'turntable', 'pioneer', 'pl-12d', 'vinyl', 'restored', 'music', 'vintage']
},
{
  id: 509,
  title: 'Honda Civic 2018',
  description:
    'Well maintained, 45k miles, clean title. New tires and brakes.',
  image: 'https://preview.redd.it/good-deal-for-a-2018-ex-hatchback-v0-bls11tnkd5he1.jpg?width=640&crop=smart&auto=webp&s=06dcb49e97821c42748639bbb6233f22631f2b63',
  price: '$16,500',
  location: 'Eastside',
  date: generateDate(1),
  category: 'For Sale',
  subcategory: 'vehicles',
  keywords: ['honda civic', '2018', 'car', 'vehicle', '45k miles', 'clean title', 'new tires', 'brakes']
},

// JOBS
{
  id: 601,
  title: 'Software Developer',
  description:
    'Looking for a full-stack developer with React and Node.js experience. Remote flexibility.',
  image: 'https://i.pinimg.com/736x/bb/47/16/bb4716949f167109ae14e6463cf90e0e.jpg',
  location: 'Downtown / Hybrid',
  date: generateDate(0),
  category: 'Jobs',
  subcategory: 'tech',
  keywords: ['software developer', 'developer', 'full-stack', 'react', 'node.js', 'tech', 'remote', 'hybrid'],
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
  image: 'https://i.pinimg.com/736x/7f/be/30/7fbe307323eb6706ac56a60262758627.jpg',
  location: 'Downtown',
  date: generateDate(1),
  category: 'Jobs',
  subcategory: 'food',
  keywords: ['restaurant manager', 'manager', 'restaurant', 'food', 'downtown', 'benefits', 'hospitality', 'full-time'],
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
  image: 'https://i.pinimg.com/736x/d8/60/54/d86054ef8321cc79f9d4d90b53d8d0de.jpg',
  location: 'Metro Area',
  date: generateDate(1),
  category: 'Jobs',
  subcategory: 'labor',
  keywords: ['delivery driver', 'driver', 'delivery', 'driving record', 'lift 50lbs', 'route', 'labor', 'job'],
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
  image: 'https://i.pinimg.com/736x/f9/10/d1/f910d16a6d88c94924d2a302298c1da9.jpg',
  location: 'Midtown',
  date: generateDate(2),
  category: 'Jobs',
  subcategory: 'creative',
  keywords: ['marketing', 'marketing coordinator', 'social media', 'email campaigns', 'event planning', 'creative', 'midtown', 'job'],
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
  image: 'https://i.pinimg.com/736x/c6/14/12/c6141292a8634672a5c7acad8c7b5709.jpg',
  location: 'Westside Clinic',
  date: generateDate(3),
  category: 'Jobs',
  subcategory: 'healthcare',
  keywords: ['nurse practitioner', 'nurse', 'healthcare', 'clinic', 'family practice', 'medical', 'westside', 'full-time'],
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
  image: 'https://i.pinimg.com/736x/c6/7b/f5/c67bf5b8a530da2bef87e4cc818cd7b2.jpg',
  location: 'Remote',
  date: generateDate(4),
  category: 'Jobs',
  subcategory: 'creative',
  keywords: ['graphic designer', 'designer', 'print', 'digital assets', 'portfolio', 'creative', 'remote', 'design'],
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
  image: 'https://i.pinimg.com/1200x/17/1d/71/171d71cb6a810f5b77eeb06e4978cce0.jpg',
  location: 'Industrial Park',
  date: generateDate(5),
  category: 'Jobs',
  subcategory: 'labor',
  keywords: ['warehouse', 'warehouse associate', 'packing', 'shipping', 'orders', 'industrial', 'labor', 'fast-paced'],
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
  image: 'https://i.pinimg.com/736x/1a/ae/92/1aae9297c0f937d03cf32b34fe0cf1fb.jpg',
  location: 'Call Center',
  date: generateDate(6),
  category: 'Jobs',
  subcategory: 'labor',
  keywords: ['customer service', 'rep', 'calls', 'emails', 'paid training', 'call center', 'support', 'part-time'],
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
  image: 'https://i.pinimg.com/736x/82/dd/9b/82dd9b008c20603744c399c96f908683.jpg',
  price: '$300 flat',
  location: 'Downtown Hotel',
  date: generateDate(0),
  category: 'Gigs',
  subcategory: 'events',
  keywords: ['event photography', 'photographer', 'corporate event', 'camera', 'equipment', '4-hour', 'downtown hotel', 'gig']
},
{
  id: 702,
  title: 'Moving Help Needed',
  description:
    'Need 2 people to help load a U-Haul truck for 3 hours on Sunday morning.',
  image: 'https://i.pinimg.com/1200x/6a/1d/98/6a1d98e9e3238176d84f01038cdfcbe8.jpg',
  price: '$25/hr',
  location: 'Eastside',
  date: generateDate(1),
  category: 'Gigs',
  subcategory: 'labor',
  keywords: ['moving help', 'u-haul', 'truck', 'load', 'labor', '2 people', 'sunday', 'gig']
},
{
  id: 703,
  title: 'Yard Work Weekend',
  description:
    'Raking leaves, pulling weeds, and laying mulch. Probably a full day of work.',
  image: 'https://i.pinimg.com/1200x/fd/f9/30/fdf930a7be78ae096bc5157574be3a43.jpg',
  price: '$150 flat',
  location: 'Suburbs',
  date: generateDate(2),
  category: 'Gigs',
  subcategory: 'labor',
  keywords: ['yard work', 'raking', 'weeds', 'mulch', 'outdoor work', 'labor', 'weekend', 'full day']
},
{
  id: 704,
  title: 'Band Needs Drummer',
  description:
    'Indie rock band looking for a fill-in drummer for a gig next Friday.',
  image: 'https://i.pinimg.com/1200x/f9/46/d1/f946d1cf0e4713914772e726a09f3184.jpg',
  price: '$30',
  location: 'The Blue Note',
  date: generateDate(2),
  category: 'Gigs',
  subcategory: 'creative',
  keywords: ['band', 'drummer', 'music', 'gig', 'indie rock', 'fill-in', 'blue note', 'creative']
},
{
  id: 705,
  title: 'Dog Sitting',
  description:
    'Need someone to watch my golden retriever at their house for the weekend.',
  image: 'https://images.prismic.io/trustedhousesitters/ZsSzb0aF0TcGJHvp_dogsittingtips.jpg?auto=format,compress&rect=0,0,1920,800&w=960&h=400',
  price: '$100 total',
  location: 'Drop off',
  date: generateDate(3),
  category: 'Gigs',
  subcategory: 'domestic',
  keywords: ['dog sitting', 'pet sitting', 'golden retriever', 'weekend', 'pet care', 'dogs', 'drop off', 'domestic']
},
{
  id: 706,
  title: 'Flyer Distribution',
  description: 'Hand out flyers for a new restaurant opening. 4 hour shift.',
  image: 'https://i.pinimg.com/736x/17/ed/77/17ed77740626d16949c4cc29c2e9e133.jpg',
  price: '$15/hr',
  location: 'University Area',
  date: generateDate(4),
  category: 'Gigs',
  subcategory: 'events',
  keywords: ['flyer distribution', 'flyers', 'restaurant opening', 'promotion', '4 hour shift', 'events', 'university area', 'gig']
},
{
  id: 707,
  title: 'House Painting',
  description:
    'Need help painting two bedrooms. Paint and supplies provided.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcU6FgnkxVIZSUCbwj30-d6IPgvL0ugJcjxw&s',
  price: '$20/hr',
  location: 'Northside',
  date: generateDate(5),
  category: 'Gigs',
  subcategory: 'labor',
  keywords: ['painting', 'house painting', 'bedrooms', 'paint', 'supplies provided', 'labor', 'northside', 'gig']
},
{
  id: 708,
  title: 'Focus Group',
  description:
    'Participate in a 1-hour consumer research focus group about snacks.',
  image: 'https://www.aihr.com/wp-content/uploads/Employee-Focus-Groups-cover-1000x553-1.png',
  price: '$50 gift card',
  location: 'Downtown Office',
  date: generateDate(6),
  category: 'Gigs',
  subcategory: 'events',
  keywords: ['focus group', 'consumer research', 'snacks', '1-hour', 'gift card', 'downtown office', 'participants', 'study']
},

// RESUMES
{
  id: 801,
  title: 'Experienced Web Developer',
  description:
    '5 years experience building scalable web applications. Proficient in React, Node, Python. Looking for full-time remote work.',
  image: 'https://i.pinimg.com/1200x/93/bb/f4/93bbf4f713b8f03493ad480eb5abed48.jpg',
  location: 'Remote',
  date: generateDate(0),
  category: 'resumes',
  subcategory: 'tech',
  keywords: ['web developer', 'developer', 'react', 'node', 'python', 'web applications', 'remote', 'full-time'],
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
  keywords: ['marketing', 'digital marketing', 'seo', 'content strategy', 'engagement', 'professional', 'resume', 'metro area'],
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
  keywords: ['electrician', 'licensed', 'journeyman', 'residential', 'commercial', 'insured', 'trades', 'projects'],
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
  keywords: ['teacher', 'certified teacher', 'elementary education', 'tutoring', 'private pod', 'teaching', 'education', 'resume'],
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
  keywords: ['graphic designer', 'freelance', 'branding', 'logos', 'print materials', 'design', 'creative', 'remote'],
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
  keywords: ['bookkeeper', 'quickbooks', 'small business', 'finances', 'tax season', 'accounting', 'hybrid', 'professional'],
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
  keywords: ['personal chef', 'chef', 'meal prep', 'dinner parties', 'special events', 'culinary', 'food', 'resume'],
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
  keywords: ['handyman', 'carpentry', 'plumbing', 'drywall repair', 'home maintenance', 'trades', 'Services', 'all areas'],
  metadata: { experience: '15 Years' }
}];