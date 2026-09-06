export interface LocationSEO {
  city: string;
  slug: string;
  county: string;
  title: string;
  description: string;
  h1: string;
  nearbyAreas: string[];
  localLandmarks: string[];
}

export const localSeoData: LocationSEO[] = [
  {
    city: 'Clevedon',
    slug: 'clevedon',
    county: 'North Somerset',
    title: 'Bookkeeper in Clevedon | Local Accounts & Tax | Ace Bookkeeping',
    description: 'Expert bookkeeping, VAT returns, and payroll services for small businesses in Clevedon. Based locally near Hill Road and The Pier. Get a free consultation.',
    h1: 'Reliable Bookkeeping & Accounting Services in Clevedon',
    nearbyAreas: ['Tickenham', 'Kenn', 'Bindings Gore', 'Wrington'],
    localLandmarks: ['Clevedon Pier', 'Hill Road', 'The Triangle', 'Marine Lake']
  },
  {
    city: 'Portishead',
    slug: 'portishead',
    county: 'North Somerset',
    title: 'Bookkeeper in Portishead | Small Business Accounts | Ace Bookkeeping',
    description: 'Professional bookkeeping, self-assessment tax returns, and management accounts for businesses around Portishead Marina and High Street.',
    h1: 'Chartered-Standard Bookkeeping & Small Business Accounts in Portishead',
    nearbyAreas: ['Clevedon', 'Clapton-in-Gordano', 'Weston-in-Gordano', 'Bristol'],
    localLandmarks: ['Portishead Marina', 'High Street', 'Lake Grounds', 'Royal Portbury Dock']
  },
  {
    city: 'Bristol',
    slug: 'bristol',
    county: 'North Somerset',
    title: 'Bookkeeper Bristol & North Somerset | Cloud Accounting | Ace Bookkeeping',
    description: 'Affordable cloud bookkeeping, Xero/QuickBooks setup, and end-of-year accounts for startups and limited companies across Bristol and surrounding areas.',
    h1: 'Top-Rated Bookkeeping and Accounting Support for Bristol Businesses',
    nearbyAreas: ['Clevedon', 'Portishead', 'Nailsea', 'Long Ashton', 'Failand'],
    localLandmarks: ['Clifton', 'Harbourside', 'Temple Meads', 'Stokes Croft']
  },
  {
    city: 'Nailsea',
    slug: 'nailsea',
    county: 'North Somerset',
    title: 'Bookkeeper in Nailsea | Sole Trader & Ltd Accounts | Ace Bookkeeping',
    description: 'Reliable local bookkeeper in Nailsea offering VAT registration, payroll, cash flow forecasting, and tax planning for local trade and retail.',
    h1: 'Professional Bookkeeping Services for Nailsea Businesses & Sole Traders',
    nearbyAreas: ['Clevedon', 'Backwell', 'Flax Bourton', 'Wraxall'],
    localLandmarks: ['Crown Glass Shopping Centre', 'Nailsea & Backwell Station', 'Trendlewood']
  },
  {
    city: 'Yatton',
    slug: 'yatton',
    county: 'North Somerset',
    title: 'Bookkeeper in Yatton | Small Business Accounting | Ace Bookkeeping',
    description: 'Professional bookkeeping, tax preparation, and ledger management for local businesses and independent traders in Yatton and surrounding rural areas.',
    h1: 'Expert Bookkeeping and Financial Services in Yatton',
    nearbyAreas: ['Clevedon', 'Congresbury', 'Claverham', 'Wrington'],
    localLandmarks: ['Yatton Station', 'High Street', 'Cadbury Hill']
  },
  {
    city: 'Congresbury',
    slug: 'congresbury',
    county: 'North Somerset',
    title: 'Bookkeeper in Congresbury | Accounts & Tax | Ace Bookkeeping',
    description: 'Dedicated bookkeeping and self-assessment services tailored for small businesses, contractors, and rural enterprises around Congresbury.',
    h1: 'Reliable Bookkeeping Support for Congresbury Businesses',
    nearbyAreas: ['Yatton', 'Clevedon', 'Wrington', 'Blagdon'],
    localLandmarks: ['St Andrews Church', 'Main Road', 'The Cross Tree']
  },
  {
    city: 'Backwell',
    slug: 'backwell',
    county: 'North Somerset',
    title: 'Bookkeeper in Backwell | Business Accounts | Ace Bookkeeping',
    description: 'Local accounting and cloud bookkeeping support for businesses and sole traders operating in and around Backwell.',
    h1: 'Professional Bookkeeping & Accounts Services in Backwell',
    nearbyAreas: ['Nailsea', 'Flax Bourton', 'Clevedon', 'Bristol'],
    localLandmarks: ['Backwell Common', 'Station Road', 'West Town']
  },
  {
    city: 'Long Ashton',
    slug: 'long-ashton',
    county: 'North Somerset',
    title: 'Bookkeeper in Long Ashton | Local Tax & Accounts | Ace Bookkeeping',
    description: 'Specialist bookkeeping, VAT returns, and financial administration for companies and sole traders based in Long Ashton.',
    h1: 'Trusted Bookkeeping Solutions for Long Ashton Businesses',
    nearbyAreas: ['Bristol', 'Failand', 'Nailsea', 'Flax Bourton'],
    localLandmarks: ['Collaborative Business Park', 'Keedwell Hill', 'Providence Lane']
  }
];