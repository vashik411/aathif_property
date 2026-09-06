// Property data for the real estate website.
// Each property is a self-contained object used by the listing, details,
// and home pages.  Images use placeholder URLs from picsum.photos so the
// site is fully functional out-of-the-box; swap them with real assets later.

const CITIES = ['Chennai', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Coimbatore']
const PURPOSES = ['Residential Plot', 'Farm Land', 'Commercial Land', 'Farmhouse', 'Villa']
const FACINGS = ['North Facing', 'South Facing', 'East Facing', 'West Facing', 'North East Facing']
const AMENITIES = [
  'Gated Community',
  '24/7 Security',
  'Water Supply',
  'Electricity',
  'Road Access',
  'Drainage',
  'Street Lighting',
  'Bank Finance',
  'Clear Title',
  'Dining Hall',
  'Swimming Pool',
  'Garden',
  'Parking',
]

function image(id, n = 1) {
  return `https://picsum.photos/seed/property-${id}-${n}/800/600`
}

export const PROPERTIES = [
  {
    id: '1',
    title: 'Greenfield Residential Plots',
    location: { city: 'Chennai', district: 'Chengalpattu', locality: 'OMR' },
    price: '₹25L – ₹50L',
    priceValue: 2500000,
    area: '1,200 – 2,400 Sq.ft',
    description:
      'Gated plots with wide roads, clear title, and everyday conveniences nearby. Perfect for building your dream home.',
    purpose: 'Residential Plot',
    facing: 'North Facing',
    amenities: ['Gated Community', '24/7 Security', 'Water Supply', 'Road Access', 'Clear Title'],
    images: [image(1, 1), image(1, 2), image(1, 3), image(1, 4)],
    featured: true,
  },
  {
    id: '2',
    title: 'ECR Coastal Farm Land',
    location: { city: 'Chennai', district: 'Chengalpattu', locality: 'Uthandi' },
    price: '₹50L – ₹1Cr',
    priceValue: 5000000,
    area: '1 – 2 Acre',
    description:
      'Quiet countryside parcels close to the coast, ideal for a weekend retreat or agricultural investment.',
    purpose: 'Farm Land',
    facing: 'East Facing',
    amenities: ['Gated Community', 'Water Supply', 'Electricity', 'Road Access', 'Drainage'],
    images: [image(2, 1), image(2, 2), image(2, 3), image(2, 4)],
    featured: true,
  },
  {
    id: '3',
    title: 'Highway Commercial Land',
    location: { city: 'Chennai', district: 'Chengalpattu', locality: 'Chengalpattu' },
    price: '₹1Cr+',
    priceValue: 10000000,
    area: '1 Ground',
    description:
      'High-visibility commercial land with strong road access and future growth potential.',
    purpose: 'Commercial Land',
    facing: 'North East Facing',
    amenities: ['Road Access', 'Electricity', 'Water Supply', 'Bank Finance', 'Clear Title'],
    images: [image(3, 1), image(3, 2), image(3, 3)],
    featured: false,
  },
  {
    id: '4',
    title: 'Premium Villa Plot',
    location: { city: 'Bengaluru', district: 'Bangalore Urban', locality: 'HSR Layout' },
    price: '₹85L',
    priceValue: 8500000,
    area: '3,200 Sq.ft',
    description:
      'Corner plot in an exclusive gated layout with ready-to-build infrastructure and landscaped avenues.',
    purpose: 'Residential Plot',
    facing: 'North East Facing',
    amenities: ['Gated Community', '24/7 Security', 'Water Supply', 'Drainage', 'Street Lighting'],
        images: [image(4, 1), image(4, 2), image(4, 3)],
    featured: false,
  },
  {
    id: '5',
    title: 'Mediterranean-Style Villa',
    location: { city: 'Mumbai', district: 'Raigad', locality: 'Lonavala' },
    price: '₹2.5Cr',
    priceValue: 25000000,
    area: '4,800 Sq.ft',
    description:
      'Luxury ready-to-move villa with private garden, swimming pool, and panoramic hill views.',
    purpose: 'Villa',
    facing: 'West Facing',
    amenities: ['Swimming Pool', 'Garden', 'Parking', '24/7 Security', 'Dining Hall'],
    images: [image(5, 1), image(5, 2), image(5, 3), image(5, 4)],
    featured: true,
  },
  {
    id: '6',
    title: 'Organic Farm Land',
    location: { city: 'Bengaluru', district: 'Chikkaballapur', locality: 'Hoskote' },
    price: '₹42L',
    priceValue: 4200000,
    area: '5 Acre',
    description:
      'Fertile red-soil farmland with a borewell, compound wall, and scenic background.',
    purpose: 'Farm Land',
    facing: 'South Facing',
    amenities: ['Water Supply', 'Electricity', 'Road Access', 'Drainage', 'Clear Title'],
    images: [image(6, 1), image(6, 2), image(6, 3)],
    featured: false,
  },
  {
    id: '7',
    title: 'City-Centre Commercial Shop',
    location: { city: 'Mumbai', district: 'Mumbai', locality: 'Andheri West' },
    price: '₹1.8Cr',
    priceValue: 18000000,
    area: '600 Sq.ft',
    description:
      'High-footfall retail shop on a premium street with excellent visibility and ready tenants.',
    purpose: 'Commercial Land',
    facing: 'West Facing',
    amenities: ['Road Access', 'Electricity', 'Drainage', '24/7 Security', 'Bank Finance'],
    images: [image(7, 1), image(7, 2), image(7, 3)],
    featured: false,
  },
    {
    id: '8',
    title: 'Lakeside Farmhouse',
    location: { city: 'Hyderabad', district: 'Sangareddy', locality: 'Serilingampalle' },
    price: '₹1.2Cr',
    priceValue: 12000000,
    area: '2,800 Sq.ft',
    description:
      'Custom-built farmhouse with a private lake, orchard, and modern amenities — a rare retreat.',
    purpose: 'Farmhouse',
    facing: 'North Facing',
    amenities: ['Swimming Pool', 'Garden', 'Parking', 'Water Supply', 'Electricity'],
    images: [image(8, 1), image(8, 2), image(8, 3), image(8, 4)],
    featured: true,
  },
]

// Helpers ------------------------------------------------------------------

export const FILTER_OPTIONS = {
  purposes: PURPOSES,
  cities: CITIES,
  facings: FACINGS,
  amenities: AMENITIES,
}

export function getPropertyById(id) {
  return PROPERTIES.find((p) => p.id === id) || null
}

export function filterProperties(filters) {
  return PROPERTIES.filter((property) => {
    const { purpose, city, locality, budget, facing, search, keyword, location, area } = filters

    if (purpose && property.purpose !== purpose) return false
    if (city && property.location.city !== city) return false
    if (facing && property.facing !== facing) return false

    const requestedLocation = location || locality
    if (requestedLocation) {
      const locationText = [
        property.title,
        property.location.locality,
        property.location.city,
        property.location.district,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      if (!locationText.includes(requestedLocation.toLowerCase())) return false
    }

    if (area && !areaMatches(property.area, area)) return false

    if (budget && budget.max && property.priceValue > budget.max) return false
    if (budget && budget.min && property.priceValue < budget.min) return false

    // Keyword search across multiple fields
    const query = keyword || search
    if (query) {
      const q = query.toLowerCase()
      const searchableText = [
        property.title,
        property.description,
        property.location.locality,
        property.location.city,
        property.location.district,
        property.purpose,
        property.facing,
        ...(property.amenities || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      if (!searchableText.includes(q)) return false
    }

    return true
  })
}

function areaMatches(propertyArea, requestedArea) {
  const units = { 'sq ft': 1, sqft: 1, acre: 43560, cent: 435.6, ground: 2400 }
  const requested = requestedArea.toLowerCase().match(/(\d+(?:\.\d+)?)\s*(sq\.?\s*ft|sqft|acre|cent|ground)/)
  if (!requested) return true

  const requestedValue = Number(requested[1]) * (units[requested[2].replace('sq.', 'sq')] || 1)
  const propertyMatch = propertyArea.toLowerCase().match(/(\d+(?:\.\d+)?)\s*(?:–|-)?\s*(\d+(?:\.\d+)?)?\s*(sq\.?\s*ft|sqft|acre|cent|ground)/)
  if (!propertyMatch) return true

  const unit = units[propertyMatch[3].replace('sq.', 'sq')] || 1
  const first = Number(propertyMatch[1]) * unit
  const second = propertyMatch[2] ? Number(propertyMatch[2]) * unit : first
  return requestedValue >= Math.min(first, second) && requestedValue <= Math.max(first, second)
}

export const BUDGET_OPTIONS = [
  { label: '₹10L – ₹25L', min: 1000000, max: 2500000 },
  { label: '₹25L – ₹50L', min: 2500000, max: 5000000 },
  { label: '₹50L – ₹1Cr', min: 5000000, max: 10000000 },
  { label: '₹1Cr+', min: 10000000, max: Infinity },
]