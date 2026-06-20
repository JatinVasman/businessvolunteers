// Shared data, theme and pure helpers (server- and client-safe).

export const T = {
  primary: "#C2410C", primarySoft: "#EA6A2C", gold: "#C9963B", goldLight: "#E5C07B",
  grad: "linear-gradient(135deg,#C2410C,#EA6A2C)",
  gradGold: "linear-gradient(135deg,#C9963B,#E5C07B)",
  gradLux: "linear-gradient(120deg,#C2410C 0%,#C9963B 50%,#EA6A2C 100%)",
  bg: "#FAF6F0", bg2: "#FFFFFF", bg3: "#F4EDE3", ink: "#1C140D",
  cardB: "rgba(28,20,13,0.09)", cardBGold: "rgba(201,150,59,0.35)",
  text: "#1C140D", text2: "#6E6258",
  shadow: "rgba(28,20,13,0.10)", shadowWarm: "rgba(194,65,12,0.18)",
  serif: "Georgia,'Times New Roman',serif",
  sans: "'Segoe UI',system-ui,-apple-system,sans-serif",
};

// ── ALL 89 INDUSTRIES ─────────────────────────────────────────────────────────

export const CATEGORIES = [
  {
    id: "healthcare", label: "Healthcare", icon: "🏥", color: "#B0413E",
    sub: [
      { id: "hospitals", name: "Hospitals", icon: "🏥", ready: true },
      { id: "clinics", name: "Clinics", icon: "🩺", ready: true },
      { id: "dental", name: "Dental Clinics", icon: "🦷", ready: true },
      { id: "diagnostic", name: "Diagnostic Centers", icon: "🔬", ready: false },
      { id: "pharma", name: "Pharmaceutical Companies", icon: "💊", ready: false },
      { id: "medequip", name: "Medical Equipment Suppliers", icon: "🩻", ready: false },
    ]
  },
  {
    id: "education", label: "Education", icon: "🎓", color: "#7C5295",
    sub: [
      { id: "schools", name: "Schools", icon: "🏫", ready: false },
      { id: "colleges", name: "Colleges", icon: "🏛️", ready: false },
      { id: "universities", name: "Universities", icon: "🎓", ready: false },
      { id: "edtech", name: "EdTech Companies", icon: "💻", ready: false },
      { id: "coaching", name: "Coaching Institutes", icon: "📚", ready: false },
    ]
  },
  {
    id: "realestate", label: "Real Estate", icon: "🏠", color: "#2D6A9F",
    sub: [
      { id: "propcon", name: "Property Consultants", icon: "🏠", ready: false },
      { id: "construction", name: "Construction Companies", icon: "🏗️", ready: false },
      { id: "architecture", name: "Architecture Firms", icon: "📐", ready: false },
      { id: "interior", name: "Interior Designers", icon: "🛋️", ready: false },
    ]
  },
  {
    id: "ecommerce", label: "E-Commerce & Retail", icon: "🛒", color: "#1F8A70",
    sub: [
      { id: "retail", name: "Retail Stores", icon: "🛍️", ready: false },
      { id: "fashion", name: "Fashion Brands", icon: "👗", ready: false },
      { id: "apparel", name: "Apparel Manufacturers", icon: "👕", ready: false },
      { id: "jewelry", name: "Jewelry Stores", icon: "💎", ready: false },
    ]
  },
  {
    id: "beauty", label: "Beauty & Wellness", icon: "💆", color: "#C26B8E",
    sub: [
      { id: "beauty", name: "Beauty & Cosmetics", icon: "💄", ready: false },
      { id: "salons", name: "Salons", icon: "✂️", ready: false },
      { id: "spas", name: "Spas & Wellness", icon: "🧘", ready: false },
      { id: "fitness", name: "Fitness Centers", icon: "💪", ready: false },
      { id: "gyms", name: "Gyms", icon: "🏋️", ready: false },
      { id: "yoga", name: "Yoga Studios", icon: "🧘‍♀️", ready: false },
      { id: "sports", name: "Sports Academies", icon: "⚽", ready: false },
    ]
  },
  {
    id: "hospitality", label: "Hospitality & Food", icon: "🍽️", color: "#C07A2D",
    sub: [
      { id: "hotels", name: "Hotels", icon: "🏩", ready: false },
      { id: "resorts", name: "Resorts", icon: "🏖️", ready: false },
      { id: "homestays", name: "Homestays", icon: "🏡", ready: false },
      { id: "restaurants", name: "Restaurants", icon: "🍽️", ready: false },
      { id: "cafes", name: "Cafes", icon: "☕", ready: false },
      { id: "cloudkitchen", name: "Cloud Kitchens", icon: "📦", ready: false },
      { id: "catering", name: "Catering Services", icon: "🍱", ready: false },
    ]
  },
  {
    id: "travel", label: "Travel & Events", icon: "✈️", color: "#2A9D8F",
    sub: [
      { id: "travel", name: "Travel Agencies", icon: "✈️", ready: false },
      { id: "tour", name: "Tour Operators", icon: "🗺️", ready: false },
      { id: "events", name: "Event Management", icon: "🎪", ready: false },
      { id: "wedding", name: "Wedding Planners", icon: "💒", ready: false },
      { id: "photo", name: "Photography Studios", icon: "📷", ready: false },
    ]
  },
  {
    id: "manufacturing", label: "Manufacturing & Auto", icon: "🏭", color: "#5C6670",
    sub: [
      { id: "mfg", name: "Manufacturing Companies", icon: "🏭", ready: false },
      { id: "industrial", name: "Industrial Equipment", icon: "⚙️", ready: false },
      { id: "auto", name: "Automobile Dealers", icon: "🚗", ready: false },
      { id: "autoservice", name: "Auto Service Centers", icon: "🔧", ready: false },
    ]
  },
  {
    id: "logistics", label: "Logistics & Warehousing", icon: "🚚", color: "#3D4852",
    sub: [
      { id: "logistics", name: "Logistics Companies", icon: "🚚", ready: false },
      { id: "transport", name: "Transportation Services", icon: "🚌", ready: false },
      { id: "warehouse", name: "Warehousing", icon: "🏬", ready: false },
    ]
  },
  {
    id: "finance", label: "Finance & Legal", icon: "💰", color: "#1F8A4C",
    sub: [
      { id: "banks", name: "Banks", icon: "🏦", ready: false },
      { id: "insurance", name: "Insurance Companies", icon: "🛡️", ready: false },
      { id: "fintech", name: "FinTech Startups", icon: "📱", ready: false },
      { id: "invest", name: "Investment Firms", icon: "📈", ready: false },
      { id: "accounting", name: "Accounting Firms", icon: "🧮", ready: false },
      { id: "ca", name: "CA Firms", icon: "📋", ready: false },
      { id: "law", name: "Law Firms", icon: "⚖️", ready: false },
      { id: "legal", name: "Legal Consultants", icon: "📜", ready: false },
    ]
  },
  {
    id: "technology", label: "Technology & IT", icon: "💻", color: "#5B4B9E",
    sub: [
      { id: "itco", name: "IT Companies", icon: "💻", ready: false },
      { id: "software", name: "Software Development", icon: "👨‍💻", ready: false },
      { id: "saas", name: "SaaS Companies", icon: "☁️", ready: false },
      { id: "cyber", name: "Cybersecurity", icon: "🔒", ready: false },
      { id: "digitalagency", name: "Digital Marketing Agencies", icon: "📣", ready: false },
      { id: "adagency", name: "Advertising Agencies", icon: "📺", ready: false },
      { id: "media", name: "Media Companies", icon: "📰", ready: false },
      { id: "news", name: "News & Publishing", icon: "📄", ready: false },
      { id: "telecom", name: "Telecommunications", icon: "📡", ready: false },
    ]
  },
  {
    id: "social", label: "NGO & Government", icon: "🌱", color: "#3FA68A",
    sub: [
      { id: "ngo", name: "NGOs", icon: "🌱", ready: false },
      { id: "nonprofit", name: "Non-Profit Organizations", icon: "❤️", ready: false },
      { id: "govcon", name: "Government Contractors", icon: "🏛️", ready: false },
    ]
  },
  {
    id: "energy", label: "Energy & Electronics", icon: "⚡", color: "#C9963B",
    sub: [
      { id: "renewable", name: "Renewable Energy", icon: "🌿", ready: false },
      { id: "solar", name: "Solar Companies", icon: "☀️", ready: false },
      { id: "electrical", name: "Electrical Contractors", icon: "⚡", ready: false },
      { id: "electronics", name: "Electronics Manufacturers", icon: "🔌", ready: false },
    ]
  },
  {
    id: "homeservices", label: "Home Services", icon: "🏠", color: "#C25E45",
    sub: [
      { id: "homeserv", name: "Home Services", icon: "🏠", ready: false },
      { id: "cleaning", name: "Cleaning Services", icon: "🧹", ready: false },
      { id: "pest", name: "Pest Control", icon: "🐛", ready: false },
      { id: "security", name: "Security Services", icon: "🛡️", ready: false },
    ]
  },
  {
    id: "hr", label: "HR & Consulting", icon: "👥", color: "#8678C9",
    sub: [
      { id: "recruit", name: "Recruitment Agencies", icon: "👥", ready: false },
      { id: "hrconsult", name: "HR Consulting", icon: "📊", ready: false },
      { id: "staffing", name: "Staffing Companies", icon: "🤝", ready: false },
      { id: "bizcon", name: "Business Consultants", icon: "💼", ready: false },
      { id: "bpo", name: "BPO Companies", icon: "🎧", ready: false },
      { id: "callcenter", name: "Call Centers", icon: "📞", ready: false },
      { id: "franchise", name: "Franchise Businesses", icon: "🏪", ready: false },
    ]
  },
  {
    id: "agri", label: "Agriculture & Food", icon: "🌾", color: "#4C9A52",
    sub: [
      { id: "agri", name: "Agriculture Companies", icon: "🌾", ready: false },
      { id: "dairy", name: "Dairy Farms", icon: "🐄", ready: false },
      { id: "poultry", name: "Poultry Farms", icon: "🐔", ready: false },
      { id: "foodproc", name: "Food Processing", icon: "🥫", ready: false },
      { id: "chemical", name: "Chemical Companies", icon: "⚗️", ready: false },
    ]
  },
];

// ── FULL DATA for 3 ready industries ─────────────────────────────────────────

export const INDUSTRY_DATA = {
  hospitals: {
    name: "Hospitals", icon: "🏥", color: "#B0413E",
    seoTitle: "Healthcare Digital Marketing – Patient Acquisition for Hospitals | Business Volunteers",
    metaDesc: "Digital marketing for hospitals: attract new patients and build trust online with tailored SEO, PPC & social media strategies by Business Volunteers.",
    tagline: "Hospitals, Multi-Specialty & Super-Specialty Healthcare",
    marketSize: "₹8.6 Lakh Crore (India)", globalSize: "$8.3 Trillion (Global)", growth: "22% CAGR",
    digitalAdoption: "67% of patients research hospitals online",
    overview: `India's hospital sector is one of the world's fastest-growing healthcare markets. With 70,000+ hospitals across the country — from government institutions to cutting-edge private multi-specialty centers — competition for patient acquisition has never been more intense. Digital marketing is no longer optional; it is the primary driver of new patient footfall, brand trust, and revenue growth for modern hospitals.`,
    stats: [
      { n: "70,000+", l: "Hospitals in India" },
      { n: "₹8.6L Cr", l: "Market Size 2024" },
      { n: "22%", l: "Annual CAGR" },
      { n: "73%", l: "Patients Google Before Booking" },
      { n: "4.2B", l: "Global Healthcare Digital Ad Spend" },
      { n: "67%", l: "Digital Adoption Rate" },
    ],
    didYouKnow: [
      "73% of patients Google their hospital before making a booking decision.",
      "Hospitals with 100+ Google reviews receive 3x more appointment bookings.",
      "Video content about medical procedures gets 4x more engagement than text posts.",
      "Mobile searches for 'hospital near me' have grown 250% in 3 years.",
    ],
    challenges: [
      { t: "Intense Competition", d: "Corporatized hospital chains like Apollo, Fortis, and Manipal have massive marketing budgets that smaller hospitals struggle to match." },
      { t: "NMC Compliance", d: "National Medical Commission guidelines restrict certain promotional claims, requiring careful, compliant messaging." },
      { t: "Reputation Management", d: "One negative review can deter hundreds of potential patients. Proactive reputation management is essential." },
      { t: "Patient Acquisition Cost", d: "Traditional marketing (newspapers, hoardings) delivers poor ROI compared to targeted digital campaigns." },
      { t: "Trust Building Online", d: "Healthcare is high-stakes — patients need significant social proof before choosing a hospital." },
      { t: "Department-Level Visibility", d: "Each specialty (cardiology, oncology, ortho) needs its own SEO and content strategy." },
    ],
    services: [
      { s: "SEO", d: "Rank for 'best [specialty] hospital in [city]' searches driving high-intent patients." },
      { s: "Google My Business", d: "Dominate local search with optimised GMB profile, reviews management, and Q&A." },
      { s: "Meta Ads", d: "Targeted awareness and lead campaigns for specific departments and procedures." },
      { s: "Google Ads", d: "Capture high-intent searches like 'knee replacement surgery cost' instantly." },
      { s: "Social Media", d: "Build patient trust through doctor-led educational content on Instagram and Facebook." },
      { s: "Reputation Management", d: "Systematic review collection and response management across Google and Practo." },
      { s: "Website Development", d: "Fast, NMC-compliant hospital websites with online appointment booking integration." },
      { s: "Video & Reels", d: "Doctor introduction videos, procedure explainers, and patient testimonial reels." },
    ],
    benefits: [
      { icon: "📈", t: "3x More Appointments", d: "Hospitals partnering with us see 3x more online appointment bookings within 90 days." },
      { icon: "⭐", t: "Dominate Local Search", d: "Page 1 rankings for all your specialty keywords in your city and surrounding areas." },
      { icon: "💬", t: "Review Management", d: "We systematically collect 5-star Google reviews — the #1 factor patients check." },
      { icon: "💰", t: "Reduce Patient Acquisition Cost", d: "Digital CAC is 60-70% lower than traditional newspaper and hoarding advertising." },
      { icon: "📊", t: "Department-Level Campaigns", d: "Dedicated campaigns for each department driving specialty-specific patient enquiries." },
      { icon: "🏆", t: "Brand Authority", d: "Position your hospital as the definitive authority in your specialty and location." },
    ],
    caseStudies: [
      { title: "Metro Heart Hospital, Delhi NCR", challenge: "Low visibility for cardiac surgery in competitive market", strategy: "Google Ads for high-intent keywords + cardiologist reel series on Instagram", result: "340% increase in cardiac surgery enquiries in 4 months", roi: "8.2x", spend: "₹45,000/mo", testimonial: "'Business Volunteers transformed our digital presence. Our cardiac department is now fully booked 3 weeks in advance.'" },
      { title: "Sunrise Multi-Specialty, Pune", challenge: "New hospital with zero online reviews and low trust", strategy: "GMB optimisation + systematic review collection + Meta awareness ads", result: "0 to 247 Google reviews (4.8★) in 6 months; 180% more appointments", roi: "6.4x", spend: "₹32,000/mo", testimonial: "'In 6 months we went from unknown to the highest-rated hospital in our area.'" },
      { title: "GreenCity Hospital, Lucknow", challenge: "Dependent on referrals; no digital lead generation", strategy: "SEO for 12 specialty keywords + doctor personal branding on LinkedIn & Instagram", result: "Page 1 for 8/12 target keywords; 65 new digital leads monthly", roi: "5.9x", spend: "₹28,000/mo", testimonial: "'We now get 65+ new patient enquiries every month purely from digital. Incredible ROI.'" },
      { title: "Ashirwad Women & Child Hospital, Ahmedabad", challenge: "Low awareness for maternity and paediatric services", strategy: "Meta Ads targeting expecting mothers + Instagram reels on child health tips", result: "220 maternity enquiries in 3 months; 40% bed occupancy increase", roi: "9.1x", spend: "₹22,000/mo", testimonial: "'Our maternity ward was running at 40% capacity. Now we have a waiting list.'" },
      { title: "CureWell Orthopaedic Centre, Bangalore", challenge: "High competition for knee/hip replacement keywords", strategy: "Long-tail SEO + Google Ads + 'Patient journey' video series on YouTube", result: "Rank #1 for 'best knee replacement Bangalore'; 90 monthly surgical enquiries", roi: "11.3x", spend: "₹55,000/mo", testimonial: "'The SEO work alone generates ₹8 lakhs of surgical bookings every month.'" },
      { title: "Niramaya Cancer Centre, Hyderabad", challenge: "Sensitive niche requiring trust-first content approach", strategy: "Educational blog library + oncologist Q&A videos + support group community building", result: "Website traffic up 480%; 45 new oncology consultations monthly", roi: "7.6x", spend: "₹38,000/mo", testimonial: "'The content strategy built trust. Patients arrive already convinced of our expertise.'" },
      { title: "Rainbow Children's Hospital, Chennai", challenge: "Paediatric market dominated by established chains", strategy: "WhatsApp marketing for parents + Instagram child health content + GMB ads", result: "WhatsApp broadcast to 4,200 parents; 35% appointment conversion rate", roi: "8.8x", spend: "₹30,000/mo", testimonial: "'The WhatsApp marketing campaign was a game-changer for our paediatric OPD.'" },
      { title: "Sai Neuro & Spine Institute, Nagpur", challenge: "Low awareness for neurosurgery in Tier 2 city", strategy: "YouTube channel for neuroscience education + Google Ads + PR content", result: "YouTube channel: 28,000 subscribers; 22 neurosurgical referrals monthly from digital", roi: "14.2x", spend: "₹40,000/mo", testimonial: "'Our YouTube channel has made us the most trusted neurology brand in central India.'" },
    ],
    blogs: [
      { title: "How Hospitals Can Get More Patients Through Digital Marketing in 2025", keyword: "digital marketing for hospitals", words: "2,800+", desc: "Complete guide covering SEO, Meta Ads, GMB and content strategy for hospitals." },
      { title: "Hospital SEO: How to Rank #1 for Medical Keywords in Your City", keyword: "hospital SEO India", words: "3,100+", desc: "Step-by-step SEO framework specifically designed for Indian hospitals." },
      { title: "Google My Business for Hospitals: The Ultimate Optimisation Guide", keyword: "Google My Business hospital", words: "2,900+", desc: "How to dominate local search and attract walk-in patients with GMB." },
      { title: "Meta Ads for Hospitals: Generating Patient Leads Ethically and Effectively", keyword: "Meta Ads hospital India", words: "2,800+", desc: "NMC-compliant Meta advertising strategies for patient acquisition." },
      { title: "Building Patient Trust Online: Reputation Management for Hospitals", keyword: "hospital reputation management", words: "3,000+", desc: "How to build and protect your hospital's online reputation." },
      { title: "Video Marketing for Hospitals: Why Reels Are the Future of Healthcare Marketing", keyword: "video marketing hospital", words: "2,900+", desc: "How doctor videos and patient testimonials drive appointment bookings." },
      { title: "WhatsApp Marketing for Hospitals: Building Patient Loyalty in India", keyword: "WhatsApp marketing hospital", words: "2,800+", desc: "Using WhatsApp to build patient relationships and drive repeat visits." },
      { title: "Department-Level Marketing: How to Promote Each Hospital Specialty Online", keyword: "hospital department marketing", words: "3,200+", desc: "Separate digital strategies for cardiology, ortho, maternity and more." },
      { title: "Hospital Website Design in 2025: 15 Must-Have Features for Patient Conversion", keyword: "hospital website design India", words: "2,800+", desc: "What makes a hospital website generate appointments instead of just traffic." },
      { title: "Social Media for Hospitals: Content Ideas That Build Patient Trust and Drive Bookings", keyword: "hospital social media marketing", words: "2,900+", desc: "30-day content calendar, post ideas, and engagement strategies for hospitals." },
    ],
    faqs: [
      "Is digital marketing allowed for hospitals under NMC guidelines?",
      "How much should a hospital spend on digital marketing per month?",
      "What is the ROI of digital marketing for hospitals?",
      "How long does it take to rank on Google for hospital keywords?",
      "Which social media platform is best for hospitals?",
      "How do I get more Google reviews for my hospital?",
      "Can I run Facebook and Instagram ads for hospital services?",
      "What content works best for hospital Instagram pages?",
      "How does Google My Business help hospitals get more patients?",
      "What is the difference between SEO and Google Ads for hospitals?",
      "How do I market specific departments like cardiology or orthopaedics?",
      "Can WhatsApp be used for hospital patient communication?",
      "What is the best way to promote a new hospital in India?",
      "How do I reduce negative reviews for my hospital?",
      "Is video marketing effective for hospital promotion?",
      "What are the best keywords for hospital SEO in India?",
      "How do I compete with large hospital chains like Apollo or Fortis?",
      "Can digital marketing help increase hospital OPD footfall?",
      "What is the role of YouTube in hospital marketing?",
      "How do I market maternity services specifically?",
      "What is healthcare content marketing and how does hospitals benefit?",
      "How do I target patients searching for specific treatments?",
      "What metrics should hospitals track in digital marketing?",
      "How does influencer marketing apply to hospitals?",
      "What is the cost per lead for hospital Google Ads in India?",
    ],
    metrics: { roi: "7.8x avg", retention: "91%", completion: "98%", growth: "340% avg lead increase", satisfaction: "4.9/5" },
  },

  clinics: {
    name: "Clinics", icon: "🩺", color: "#1F8A4C",
    seoTitle: "Digital Marketing for Clinics in India | Business Volunteers",
    metaDesc: "Get more patients for your clinic with targeted digital marketing. SEO, Meta Ads, Google Ads & Social Media. 100% satisfaction guaranteed.",
    tagline: "General Practice, Specialist & Polyclinics",
    marketSize: "₹2.1 Lakh Crore (India)", globalSize: "$4.2 Trillion (Global)", growth: "19% CAGR",
    digitalAdoption: "81% of patients search for clinic online before visiting",
    overview: `India's clinic ecosystem spans over 6 lakh registered clinics — from solo general practitioners to multi-doctor polyclinics. With Practo, Justdial, and Google competing for patient attention, clinics that invest in digital marketing consistently outperform those relying on word-of-mouth alone. A well-executed digital strategy can 3-5x a clinic's patient footfall within 90 days.`,
    stats: [
      { n: "6 Lakh+", l: "Clinics in India" },
      { n: "₹2.1L Cr", l: "Market Size 2024" },
      { n: "19%", l: "Annual CAGR" },
      { n: "81%", l: "Patients Search Online First" },
      { n: "4.8x", l: "Avg ROI for Clinic Ads" },
      { n: "68%", l: "Clinics Have No Website" },
    ],
    didYouKnow: [
      "81% of patients look up a clinic online before their first visit.",
      "Clinics with a complete Google profile receive 7x more clicks than those without.",
      "The average patient reads 5+ reviews before choosing a new doctor.",
      "'Doctor near me' is searched 8.4 million times monthly in India.",
    ],
    challenges: [
      { t: "Walk-In Dependency", d: "Most clinics rely entirely on walk-ins and referrals, with no digital patient acquisition strategy." },
      { t: "Lack of Online Presence", d: "68% of Indian clinics don't have a proper website or active social media presence." },
      { t: "Low Review Count", d: "Clinics with few reviews lose patients to competitors with stronger online reputations." },
      { t: "Appointment No-Shows", d: "Without automated reminders, 25-35% of appointments result in no-shows." },
      { t: "Competition from Aggregators", d: "Practo and Justdial charge commissions and don't build long-term clinic brand equity." },
      { t: "Limited Marketing Budget", d: "Solo practitioners and small clinics often have very limited marketing budgets." },
    ],
    services: [
      { s: "Google My Business", d: "Rank for 'clinic near me' and 'doctor near me' searches with a fully optimised GMB profile." },
      { s: "Website Development", d: "Professional, appointment-booking enabled clinic website from ₹6,500." },
      { s: "Social Media Management", d: "Patient education content, health tips and doctor branding on Instagram and Facebook." },
      { s: "Meta Ads", d: "Hyper-local ads targeting patients within 5km radius of your clinic." },
      { s: "SEO", d: "Rank for '[specialty] clinic in [area]' keywords and capture organic patient traffic." },
      { s: "WhatsApp Marketing", d: "Appointment reminders, health tips and patient follow-up via WhatsApp." },
      { s: "Reputation Management", d: "Systematic 5-star review collection across Google, Practo and Justdial." },
      { s: "Poster Design", d: "Professional health awareness content and festival creatives from ₹149." },
    ],
    benefits: [
      { icon: "👥", t: "3-5x More Patients", d: "Clinics using our full digital strategy see 3-5x patient growth within 90 days." },
      { icon: "⭐", t: "Top Rated in Area", d: "We help you build 100+ genuine reviews making you the most trusted clinic nearby." },
      { icon: "📅", t: "60% Fewer No-Shows", d: "WhatsApp appointment reminders reduce no-shows by 60-70%." },
      { icon: "💰", t: "Zero Aggregator Fees", d: "Your own booking channel means you keep 100% of revenue — no Practo commission." },
      { icon: "🗺️", t: "#1 on Google Maps", d: "Dominate 'near me' searches and appear first when patients need you most." },
      { icon: "💬", t: "Patient Retention", d: "WhatsApp follow-ups and health tip newsletters keep patients coming back." },
    ],
    caseStudies: [
      { title: "Dr. Priya's Women's Clinic, Bangalore", challenge: "New clinic with zero digital presence in competitive locality", strategy: "GMB setup + Meta hyper-local ads within 5km + Instagram reels on women's health", result: "0 to 45 daily patients in 3 months; 4.9★ Google rating with 180 reviews", roi: "7.3x", spend: "₹18,000/mo", testimonial: "'From 0 patients to a packed clinic in 3 months. I'm completely sold on digital marketing.'" },
      { title: "Sanjay General & Diabetic Clinic, Nagpur", challenge: "Declining footfall due to new clinics opening nearby", strategy: "Aggressive SEO for diabetic clinic keywords + patient testimonial video series", result: "Regained #1 Google position; 55% increase in new patient registrations", roi: "6.1x", spend: "₹14,000/mo", testimonial: "'Business Volunteers gave us our patients back. We're now busier than ever.'" },
      { title: "Nikhil Child Care Clinic, Jaipur", challenge: "Seasonal demand fluctuation; low off-peak bookings", strategy: "WhatsApp broadcast with seasonal health tips + Meta Ads with vaccination campaign", result: "35% increase in off-peak bookings; WhatsApp list of 3,200 parents", roi: "5.8x", spend: "₹12,000/mo", testimonial: "'The WhatsApp strategy is genius. Parents book proactively now instead of waiting.'" },
      { title: "Sparsh Physiotherapy Clinic, Mumbai", challenge: "Zero awareness; patients not searching for physio in the area", strategy: "YouTube channel for exercise therapy tutorials + Google Ads + clinic website with online booking", result: "YouTube: 14,000 subscribers; 38 new physiotherapy appointments weekly", roi: "9.2x", spend: "₹22,000/mo", testimonial: "'Our YouTube channel generates more business than any other channel we've tried.'" },
      { title: "Dr. Kavita ENT & Allergy Clinic, Hyderabad", challenge: "Highly seasonal demand (monsoon-driven ENT issues)", strategy: "Pre-monsoon SEO + Meta Ads with allergy awareness campaign + reminder campaigns", result: "280% increase in appointments during monsoon season; ₹4.2L revenue in 90 days", roi: "8.4x", spend: "₹20,000/mo", testimonial: "'The pre-monsoon campaign was perfectly timed. We were booked solid for 2 months.'" },
      { title: "Active Life Orthopaedic Clinic, Pune", challenge: "Competing against large hospitals for ortho patients", strategy: "Long-form SEO content on joint replacement + Google Ads for surgical keywords", result: "Rank #2 'orthopaedic clinic Pune'; 28 surgical referrals monthly from digital alone", roi: "12.6x", spend: "₹30,000/mo", testimonial: "'We now compete directly with hospitals for surgical cases. Digital is the equaliser.'" },
      { title: "Mindcare Psychiatry Clinic, Delhi", challenge: "Sensitive niche requiring careful, stigma-free marketing", strategy: "Educational Instagram content on mental health + Google Ads for therapy keywords", result: "Instagram: 22,000 followers; 60 new therapy consultations monthly from digital", roi: "8.9x", spend: "₹25,000/mo", testimonial: "'Sensitive, professional content that actually breaks the mental health stigma and drives bookings.'" },
      { title: "PrimeCare Polyclinic, Chennai", challenge: "Low brand recall in area with 20+ competing clinics", strategy: "Clinic branding overhaul + review blitz + Meta Ads with 'best clinic' positioning", result: "Highest-rated clinic in area (4.9★, 320 reviews); 90% occupancy across all doctors", roi: "6.7x", spend: "₹28,000/mo", testimonial: "'We went from being forgettable to being the obvious choice in our locality.'" },
    ],
    blogs: [
      { title: "How to Get More Patients for Your Clinic Through Digital Marketing in 2025", keyword: "digital marketing for clinics India", words: "2,900+", desc: "Complete patient acquisition guide for Indian clinic owners." },
      { title: "Google My Business for Clinics: Rank #1 on Google Maps in Your Area", keyword: "Google My Business clinic", words: "2,800+", desc: "Step-by-step GMB optimisation guide for solo and group clinics." },
      { title: "Clinic Website Design: 12 Features That Convert Visitors Into Patients", keyword: "clinic website design India", words: "3,000+", desc: "What every clinic website must have to generate appointments." },
      { title: "How to Get 100+ Five-Star Reviews for Your Clinic on Google", keyword: "clinic Google reviews strategy", words: "2,800+", desc: "Ethical, effective strategies for building your clinic's online reputation." },
      { title: "Meta Ads for Clinics: Hyper-Local Advertising That Fills Your Appointment Book", keyword: "Meta Ads for clinics", words: "2,900+", desc: "How to run Facebook and Instagram ads targeting patients in your locality." },
      { title: "WhatsApp Marketing for Clinics: Build Patient Loyalty & Reduce No-Shows", keyword: "WhatsApp marketing for clinics", words: "2,800+", desc: "How to use WhatsApp to retain patients and boost appointment rates." },
      { title: "Social Media Content Ideas for Clinics: 30 Days of Posts That Engage Patients", keyword: "clinic social media content ideas", words: "3,100+", desc: "Ready-to-use content calendar for clinic Instagram and Facebook pages." },
      { title: "Clinic SEO Guide: How to Rank for Medical Keywords in Your City", keyword: "clinic SEO India 2025", words: "3,200+", desc: "Technical and content SEO guide specifically for Indian clinics." },
      { title: "Video Marketing for Clinics: How Doctor Reels Drive Appointments", keyword: "video marketing for clinic doctors", words: "2,800+", desc: "How to create doctor introduction and health education videos that build trust." },
      { title: "How to Build a Thriving Clinic Practice With Digital Marketing: A to Z Guide", keyword: "clinic digital marketing complete guide", words: "3,500+", desc: "The definitive digital marketing playbook for Indian clinic owners." },
    ],
    faqs: [
      "How much does digital marketing cost for a clinic?",
      "How quickly can I get new patients through digital marketing?",
      "Is Practo or my own website better for patient acquisition?",
      "What is Google My Business and why is it important for clinics?",
      "How do I rank my clinic on Google Maps?",
      "Can Meta Ads really get patients for a small clinic?",
      "What social media platform is best for clinic marketing?",
      "How do I get more Google reviews for my clinic?",
      "What content should I post on my clinic's Instagram?",
      "How does WhatsApp marketing help clinics?",
      "What is the ROI of digital marketing for clinics?",
      "How do I market a newly opened clinic?",
      "Can I do digital marketing on a very small budget?",
      "What is the difference between a clinic and a hospital in digital marketing?",
      "How do I handle negative reviews for my clinic?",
      "Is video content important for clinic marketing?",
      "How do I market my clinic during festivals?",
      "What are the NMC rules around clinic advertising?",
      "How do I reduce appointment no-shows?",
      "What is SEO and how long does it take for a clinic?",
      "Should I use Google Ads or Meta Ads for my clinic?",
      "What is the best way to retain existing patients?",
      "How do I market a speciality clinic like gynaecology or dermatology?",
      "Can digital marketing help with medical tourism?",
      "How do I measure the success of my clinic's digital marketing?",
    ],
    metrics: { roi: "6.8x avg", retention: "89%", completion: "97%", growth: "280% avg lead increase", satisfaction: "4.8/5" },
  },

  dental: {
    name: "Dental Clinics", icon: "🦷", color: "#2D6A9F",
    seoTitle: "Digital Marketing for Dental Clinics in India | Business Volunteers",
    metaDesc: "Fill your dental chair every day with expert digital marketing. SEO, Meta Ads, before-after content & reputation management. Results guaranteed.",
    tagline: "General Dentistry, Orthodontics & Cosmetic Dental Practices",
    marketSize: "₹12,000 Crore (India)", globalSize: "$511 Billion (Global)", growth: "28% CAGR",
    digitalAdoption: "79% of dental patients look up the clinic online before booking",
    overview: `India's dental market is one of the fastest-growing healthcare verticals, expanding at 28% annually. With 3 lakh+ registered dentists and increasing awareness about cosmetic dentistry, orthodontics, and implants, competition for patients is fierce. Digital marketing — especially Instagram before-after content and Google local ads — has emerged as the single most effective channel for dental patient acquisition.`,
    stats: [
      { n: "3 Lakh+", l: "Dentists in India" },
      { n: "₹12,000 Cr", l: "Indian Dental Market" },
      { n: "28%", l: "Annual CAGR" },
      { n: "79%", l: "Patients Research Online" },
      { n: "150%", l: "'Dentist Near Me' Search Growth" },
      { n: "5.4M", l: "Monthly Dental Searches India" },
    ],
    didYouKnow: [
      "'Dentist near me' searches have grown 150% in the last 3 years.",
      "Before-after smile transformation content generates 8x more saves than any other dental post format.",
      "64% of dental patients choose their dentist based on Instagram aesthetics.",
      "Dental clinics with video content get 3x more appointment bookings from social media.",
    ],
    challenges: [
      { t: "Patient Anxiety", d: "Fear of dental procedures creates hesitation — video and educational content must proactively reduce anxiety." },
      { t: "Price-Sensitive Market", d: "Patients often compare costs across multiple clinics; value communication is critical." },
      { t: "Low Repeat Frequency", d: "Dental visits are typically 1-2x per year, making patient acquisition and retention both important." },
      { t: "Showcasing Technology", d: "Advanced equipment (CEREC, laser, 3D scanning) is a key differentiator but rarely communicated effectively." },
      { t: "Competing with Chains", d: "Large dental chains like Clove, Sabka Dentist and Dentalkart have significant marketing budgets." },
      { t: "Seasonal Demand", d: "Back-to-school and pre-wedding seasons spike demand; off-peak periods need targeted promotions." },
    ],
    services: [
      { s: "Instagram & Facebook", d: "Before-after smile transformations, treatment awareness, and dentist personal branding." },
      { s: "Meta Ads", d: "Targeted campaigns for specific treatments: invisalign, implants, whitening, braces." },
      { s: "Google Ads", d: "Capture 'dentist near me' and 'teeth whitening cost' high-intent searches instantly." },
      { s: "SEO", d: "Rank for dental keywords locally and nationally for cosmetic dentistry." },
      { s: "Google My Business", d: "Dominate Google Maps searches in your locality with an optimised GMB profile." },
      { s: "Reels & Video", d: "Before-after reveal reels, painless procedure demos and patient testimonial videos." },
      { s: "Website Development", d: "Modern dental website with treatment pages, pricing transparency and online booking." },
      { s: "WhatsApp Marketing", d: "Appointment reminders, post-treatment follow-ups and re-activation campaigns." },
    ],
    benefits: [
      { icon: "✨", t: "Smile Transformations Go Viral", d: "Before-after content consistently generates the highest organic reach in dental social media." },
      { icon: "📈", t: "4x More Cosmetic Enquiries", d: "Instagram and Meta Ads targeting for cosmetic procedures drive 4x more high-value enquiries." },
      { icon: "🦷", t: "Full Appointment Book", d: "Dental clinics working with us achieve 90%+ appointment occupancy within 90 days." },
      { icon: "⭐", t: "#1 Rated Locally", d: "Systematic review collection positions your clinic as the top-rated dentist in your area." },
      { icon: "💰", t: "Higher-Value Procedures", d: "Targeted marketing for implants, veneers, and orthodontics drives higher-margin bookings." },
      { icon: "📱", t: "Reduced No-Shows", d: "WhatsApp reminders reduce appointment no-shows by 65%, protecting your revenue." },
    ],
    caseStudies: [
      { title: "SmileCraft Cosmetic Dental, Mumbai", challenge: "Low awareness for cosmetic dentistry in premium locality", strategy: "Instagram before-after reel strategy + Meta Ads for veneer and whitening campaigns", result: "Single veneer reveal reel: 1.4 lakh organic views; 85 cosmetic enquiries in a month", roi: "13.4x", spend: "₹28,000/mo", testimonial: "'One reel about our smile makeover went viral and our cosmetic bookings haven't stopped since.'" },
      { title: "Dr. Arjun's Dental Studio, Bangalore", challenge: "Competing against Sabka Dentist with a small budget", strategy: "Hyper-local SEO + GMB optimisation + patient testimonial series", result: "Ranked #1 for 'dentist Koramangala'; 40 new patients monthly from organic alone", roi: "9.8x", spend: "₹15,000/mo", testimonial: "'We beat the big chains on Google. Our new patient count has never been higher.'" },
      { title: "Perfect Smile Orthodontics, Delhi", challenge: "Low enquiries for braces and aligners in target demographic", strategy: "Instagram reels targeting 16-25 demographic + parent-focused Facebook ads for children's orthodontics", result: "180 aligner/braces enquiries in 90 days; ₹12 lakh revenue from campaign", roi: "10.9x", spend: "₹35,000/mo", testimonial: "'The campaign reached exactly the right audience. Our orthodontic bookings tripled.'" },
      { title: "Apex Implant Centre, Chennai", challenge: "High-cost implant procedures needed targeted high-income patients", strategy: "Google Ads for implant keywords + LinkedIn targeting + premium website rebuild", result: "35 implant enquiries monthly; avg ₹45,000 per booking = ₹15.7L monthly revenue from digital", roi: "17.4x", spend: "₹45,000/mo", testimonial: "'Our implant business went from 4 cases a month to 35. Phenomenal ROI.'" },
      { title: "Dr. Meera Children's Dental, Hyderabad", challenge: "Parents hesitant to bring children for dental treatment", strategy: "'Pain-free kids dentistry' Instagram content + Facebook ads targeting parents of young children", result: "240% increase in paediatric dental bookings; most-reviewed kids dental in city", roi: "7.2x", spend: "₹20,000/mo", testimonial: "'Parents now specifically come to us because our social media convinced them we're gentle with children.'" },
      { title: "Bright Smiles Dental, Jaipur", challenge: "New clinic in highly competitive market", strategy: "Launch campaign: GMB setup + 500 free checkup Meta Ads + Instagram series", result: "300 free checkup attendees; 180 converted to paid treatments in month 1", roi: "8.6x", spend: "₹22,000/mo", testimonial: "'The launch campaign was perfectly executed. We had a full appointment book from week 1.'" },
      { title: "Dr. Simran's Dental & Implant Centre, Chandigarh", challenge: "Low footfall despite advanced technology investment", strategy: "Technology showcase reels (CEREC, digital X-ray, laser) + Google Ads + patient journey videos", result: "Technology content went viral locally; 45% increase in premium procedure bookings", roi: "11.1x", spend: "₹32,000/mo", testimonial: "'Patients now come specifically asking for our technology. Digital marketing gave us a premium positioning.'" },
      { title: "Smile Plus Multispeciality Dental, Pune", challenge: "Revenue dependent on basic procedures; need to shift to cosmetic", strategy: "Before-after Instagram series + Meta retargeting + EMI option promotion for cosmetic", result: "Cosmetic procedure revenue grew from 15% to 48% of total revenue", roi: "9.3x", spend: "₹25,000/mo", testimonial: "'We successfully repositioned our clinic as a cosmetic dental destination. Revenue per patient doubled.'" },
    ],
    blogs: [
      { title: "Digital Marketing for Dental Clinics: The Complete 2025 Guide for Indian Dentists", keyword: "digital marketing dental clinic India", words: "3,200+", desc: "Everything a dentist needs to know about acquiring patients digitally." },
      { title: "Before-After Content Strategy for Dental Clinics: How to Go Viral on Instagram", keyword: "before after dental content Instagram", words: "2,900+", desc: "How to create smile transformation content that generates thousands of views." },
      { title: "Google Ads for Dentists: How to Get High-Intent Patient Leads for ₹200-₹500", keyword: "Google Ads for dentists India", words: "2,800+", desc: "Step-by-step Google Ads setup guide for dental clinics." },
      { title: "How to Market Dental Implants and Veneers to Premium Patients in India", keyword: "marketing dental implants India", words: "3,100+", desc: "Premium positioning and targeting strategies for high-value dental procedures." },
      { title: "Dental Clinic SEO: How to Rank #1 for 'Dentist Near Me' in Your City", keyword: "dental clinic SEO India", words: "3,000+", desc: "Local SEO guide specifically designed for dental practices." },
      { title: "Instagram for Dentists: Content Ideas, Reels Strategy and Growth Hacks", keyword: "Instagram marketing for dentists", words: "2,800+", desc: "30-day Instagram content plan for dental clinics with post templates." },
      { title: "How to Build a 5-Star Reputation for Your Dental Clinic on Google", keyword: "dental clinic reputation management", words: "2,900+", desc: "Systematic review building and reputation management for dentists." },
      { title: "Dental Clinic Website Design: 10 Features That Convert Visitors Into Patients", keyword: "dental clinic website design India", words: "2,800+", desc: "What every dental website must have to drive appointment bookings." },
      { title: "WhatsApp Marketing for Dental Clinics: Reduce No-Shows and Build Loyalty", keyword: "WhatsApp marketing dental clinic", words: "2,900+", desc: "How to use WhatsApp to reduce no-shows and retain dental patients." },
      { title: "Orthodontics Marketing in India: How to Get More Braces and Aligner Patients", keyword: "orthodontics marketing India", words: "3,100+", desc: "Targeted marketing strategies for orthodontic practices in India." },
    ],
    faqs: [
      "Is Instagram really effective for dental clinic marketing?",
      "How much do Meta Ads cost for a dental clinic?",
      "What is the ROI of digital marketing for dental clinics?",
      "How quickly will I see new patients from digital marketing?",
      "What type of before-after content gets the most engagement?",
      "How do I market dental implants to the right audience?",
      "How do I rank my dental clinic on Google Maps?",
      "What is the best budget for a small dental clinic?",
      "Can I do digital marketing for a solo dental practice?",
      "How do I compete with Sabka Dentist and Clove Dental?",
      "What content should I post on my dental Instagram?",
      "How do I market orthodontic services like Invisalign?",
      "What is NMC compliance in dental advertising?",
      "How do WhatsApp reminders reduce dental appointment no-shows?",
      "Can I advertise cosmetic dentistry in India?",
      "What are the best keywords for dental clinic SEO?",
      "How do I get more children's dental patients?",
      "How much should I spend on Google Ads for my dental clinic?",
      "What is the difference between SEO and paid ads for dentists?",
      "How do I build an email/WhatsApp list of dental patients?",
      "What videos should dentists make for social media?",
      "How to market dental tourism services?",
      "What is the cost of a good dental clinic website?",
      "How do I measure the success of dental marketing campaigns?",
      "Can dental clinics use influencer marketing?",
    ],
    metrics: { roi: "10.2x avg", retention: "92%", completion: "98%", growth: "380% avg lead increase", satisfaction: "4.9/5" },
  },
};

// ── INDUSTRY DATA ENGINE: full pages for ALL remaining industries ─────────────

export const CITIES = ["Delhi NCR", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chennai", "Jaipur", "Ahmedabad", "Lucknow", "Indore", "Chandigarh", "Kolkata"];

export const PRE = ["Apex", "Prime", "Royal", "Elite", "Metro", "Shree", "Golden", "Star"];

export const SUBMAP = {}; CATEGORIES.forEach(c => c.sub.forEach(s => { SUBMAP[s.id] = { ...s, cat: c }; }));

export const SEEDS = {
  diagnostic: { cu: "patients", u: "Diagnostic Center", tag: "Pathology Labs, Imaging & Full-Body Checkup Centers", mIN: "₹90,000 Cr", mGL: "$280B", cg: "16%", cnt: "1 Lakh+", ad: 72, kw: "diagnostic center", f: ["Home Collection Wars|Home sample collection is now the #1 booking driver", "Package Confusion|Patients compare checkup packages across 4+ labs online", "Report Trust|Digital report delivery and accuracy reviews decide loyalty"], nm: ["LifeScan Diagnostics", "Precision Path Labs", "HealthFirst Imaging"] },
  pharma: { cu: "buyers", u: "Pharmaceutical Company", tag: "Formulations, Generics & OTC Brands", mIN: "₹4.2L Cr", mGL: "$1.6T", cg: "11%", cnt: "10,000+", ad: 64, kw: "pharma company", f: ["Doctor Reach|Digital detailing now reaches doctors traditional MRs miss", "D2C OTC Boom|OTC brands selling direct online grow 3x faster", "Trade Visibility|Distributors and chemists research suppliers on Google first"], nm: ["MediCore Pharma", "VitaLife Formulations", "CurePoint Labs"] },
  medequip: { cu: "buyers", u: "Medical Equipment Supplier", tag: "Devices, Consumables & Hospital Equipment", mIN: "₹95,000 Cr", mGL: "$600B", cg: "15%", cnt: "30,000+", ad: 61, kw: "medical equipment", f: ["Tender Discovery|Hospital procurement teams shortlist suppliers via search", "Spec Content|Detailed product spec pages win high-ticket enquiries", "After-Sales Proof|Service reviews decide repeat institutional orders"], nm: ["MedServe Equipments", "CareTech Devices", "Hospitech Solutions"] },
  schools: { cu: "parents", u: "School", tag: "K-12, CBSE/ICSE & International Schools", mIN: "₹2.4L Cr", mGL: "$2.5T", cg: "14%", cnt: "15 Lakh+", ad: 78, kw: "school", f: ["Admission Window|Admissions season is a 90-day make-or-break window", "Parent Research|Parents compare 5+ schools online before one visit", "Alumni Proof|Student results and alumni stories are the top trust asset"], nm: ["Sunrise International School", "Green Valley Public School", "Heritage Academy"] },
  colleges: { cu: "students", u: "College", tag: "Degree, Professional & Autonomous Colleges", mIN: "₹1.8L Cr", mGL: "$1.9T", cg: "12%", cnt: "45,000+", ad: 81, kw: "college", f: ["Counselling Season|Admission counselling queries spike 10x post-results", "Placement Proof|Placement statistics drive more enquiries than infrastructure", "Parent + Student|Two audiences research separately and must both be convinced"], nm: ["Pinnacle Degree College", "Northfield College", "Scholars Institute"] },
  universities: { cu: "students", u: "University", tag: "Private, Deemed & State Universities", mIN: "₹1.2L Cr", mGL: "$2.2T", cg: "13%", cnt: "1,100+", ad: 84, kw: "university", f: ["National Reach|Out-of-state enrolment depends entirely on digital presence", "Program SEO|Each course needs its own ranking page and content", "Virtual Tours|Campus video tours lift application rates sharply"], nm: ["Vertex University", "Crestwood University", "NextGen University"] },
  edtech: { cu: "learners", u: "EdTech Company", tag: "Online Courses, Test Prep & Upskilling Platforms", mIN: "₹35,000 Cr", mGL: "$400B", cg: "24%", cnt: "9,000+", ad: 95, kw: "edtech", f: ["CAC Pressure|Rising ad costs make organic and referral channels critical", "Trial-to-Paid|Free demo to paid conversion is the metric that matters", "Creator Proof|Educator personal brands outperform brand ads"], nm: ["LearnSpark", "SkillBridge Academy", "BrightPath Learning"] },
  coaching: { cu: "students", u: "Coaching Institute", tag: "JEE/NEET, UPSC, Banking & Skill Coaching", mIN: "₹70,000 Cr", mGL: "$120B", cg: "15%", cnt: "3 Lakh+", ad: 83, kw: "coaching institute", f: ["Result Season|Topper results content drives the entire admission year", "Batch Deadlines|Urgency campaigns around batch start dates convert best", "YouTube Funnel|Free lecture content is the strongest enrolment funnel"], nm: ["Target Academy", "Concept Classes", "RankUp Institute"] },
  propcon: { cu: "buyers", u: "Property Consultancy", tag: "Residential & Commercial Property Consultants", mIN: "₹65,000 Cr", mGL: "$300B", cg: "18%", cnt: "2 Lakh+", ad: 88, kw: "property consultant", f: ["Portal Dependence|99acres and MagicBricks commissions eat margins", "Project Pages|Dedicated project landing pages convert 4x portal listings", "WhatsApp Site Visits|Instant WhatsApp follow-up doubles site-visit rates"], nm: ["KeyStone Realty", "UrbanNest Properties", "TrueValue Estates"] },
  construction: { cu: "clients", u: "Construction Company", tag: "Builders, Contractors & Infrastructure Firms", mIN: "₹12L Cr", mGL: "$13T", cg: "10%", cnt: "7 Lakh+", ad: 58, kw: "construction company", f: ["Portfolio Proof|Project galleries with timelines win big-ticket trust", "B2B Search|Developers and architects search contractors on Google", "Site Videos|Drone and progress videos outperform brochures"], nm: ["BuildRight Constructions", "Foundation Infra", "SolidCore Builders"] },
  architecture: { cu: "clients", u: "Architecture Firm", tag: "Architects, Planners & Design Studios", mIN: "₹18,000 Cr", mGL: "$390B", cg: "12%", cnt: "1.2 Lakh+", ad: 76, kw: "architecture firm", f: ["Visual Discovery|Instagram and Pinterest drive premium project enquiries", "Niche Authority|Specialising (villas, hospitality, offices) wins better briefs", "Process Content|Design-journey reels build trust before the first call"], nm: ["Studio Meraki", "FormSpace Architects", "Axis Design Studio"] },
  interior: { cu: "clients", u: "Interior Design Studio", tag: "Residential & Commercial Interior Designers", mIN: "₹40,000 Cr", mGL: "$150B", cg: "19%", cnt: "2.5 Lakh+", ad: 85, kw: "interior designer", f: ["Before-After Power|Transformation reels are the highest-converting content", "Budget Anchoring|Transparent per-sqft pricing content filters serious leads", "Livspace Pressure|Branded chains outspend independents on every channel"], nm: ["Casa Interiors", "DwellCraft Studio", "Aura Spaces"] },
  retail: { cu: "shoppers", u: "Retail Store", tag: "Multi-Brand, Department & Specialty Retail", mIN: "₹70L Cr", mGL: "$30T", cg: "10%", cnt: "1.5 Cr+", ad: 74, kw: "retail store", f: ["Hyperlocal Search|'Near me' searches decide footfall for every category", "Catalog on WhatsApp|WhatsApp catalogs turn browsers into walk-ins", "Festive Spikes|Festival campaigns drive 40% of annual revenue"], nm: ["UrbanMart", "StyleHub Retail", "ValueBazaar"] },
  fashion: { cu: "customers", u: "Fashion Brand", tag: "D2C Labels, Boutiques & Ethnic Wear Brands", mIN: "₹8L Cr", mGL: "$1.8T", cg: "13%", cnt: "5 Lakh+", ad: 91, kw: "fashion brand", f: ["Reel Commerce|Outfit reels with shop links are the #1 sales driver", "UGC Trust|Customer try-on content converts 3x studio shoots", "Drop Culture|Limited drops with countdown campaigns sell out fast"], nm: ["Threadline", "Vastra Studio", "NoirEdit"] },
  apparel: { cu: "buyers", u: "Apparel Manufacturer", tag: "Garment Export, B2B & Private-Label Manufacturing", mIN: "₹6L Cr", mGL: "$1.7T", cg: "9%", cnt: "80,000+", ad: 62, kw: "apparel manufacturer", f: ["B2B Discovery|Brands and importers source manufacturers via Google and LinkedIn", "MOQ Clarity|Clear MOQ and capability pages filter quality enquiries", "Factory Proof|Audit certificates and factory videos close export deals"], nm: ["StitchWorks Apparels", "FabriCore Exports", "WeaveCraft Garments"] },
  jewelry: { cu: "customers", u: "Jewelry Store", tag: "Gold, Diamond & Silver Jewellers", mIN: "₹4.5L Cr", mGL: "$350B", cg: "11%", cnt: "6 Lakh+", ad: 79, kw: "jewellery store", f: ["Wedding Season|Bridal campaigns drive half of annual revenue", "Trust First|Hallmark, buyback and transparency content wins new families", "Try-At-Home|Video calls and home trials convert premium buyers"], nm: ["Swarna Jewels", "Ratna Mahal", "Aurelia Diamonds"] },
  beauty: { cu: "customers", u: "Beauty Brand", tag: "Cosmetics, Skincare & Personal Care Brands", mIN: "₹1.6L Cr", mGL: "$580B", cg: "17%", cnt: "4,000+", ad: 93, kw: "beauty brand", f: ["Influencer ROI|Micro-influencer seeding beats celebrity ads on ROI", "Ingredient Content|Ingredient-education reels build D2C trust fast", "Review Velocity|Marketplace review count decides ranking and sales"], nm: ["GlowTheory", "Aarya Naturals", "VelvetCare"] },
  salons: { cu: "clients", u: "Salon", tag: "Unisex Salons, Hair Studios & Nail Bars", mIN: "₹35,000 Cr", mGL: "$220B", cg: "16%", cnt: "7 Lakh+", ad: 82, kw: "salon", f: ["Transformation Reels|Hair makeover reels fill appointment books", "Slot Reminders|WhatsApp reminders cut no-shows by half", "Membership Revenue|Package memberships stabilise monthly income"], nm: ["Mirror Mirror Salon", "The Hair Loft", "Velvet Touch Studio"] },
  spas: { cu: "guests", u: "Spa", tag: "Day Spas, Ayurveda & Wellness Centers", mIN: "₹12,000 Cr", mGL: "$130B", cg: "14%", cnt: "60,000+", ad: 77, kw: "spa", f: ["Gift Vouchers|Voucher campaigns drive corporate and festive revenue", "Calm Content|Ambience video tours convert premium bookings", "Weekday Offers|Targeted weekday offers fix occupancy dips"], nm: ["Serenity Spa", "Tattva Wellness Studio", "Bliss Body Spa"] },
  fitness: { cu: "members", u: "Fitness Center", tag: "Fitness Studios, CrossFit & Functional Training", mIN: "₹16,000 Cr", mGL: "$110B", cg: "18%", cnt: "90,000+", ad: 86, kw: "fitness center", f: ["Transformation Proof|Member before-after stories drive trial signups", "January + Monsoon|Two enrolment spikes need pre-built campaigns", "Trial Funnel|Free trial to membership conversion is the core metric"], nm: ["IronCore Fitness", "FlexZone Studio", "PulseFit Arena"] },
  gyms: { cu: "members", u: "Gym", tag: "Commercial Gyms & Strength Training Centers", mIN: "₹14,000 Cr", mGL: "$100B", cg: "17%", cnt: "1.2 Lakh+", ad: 84, kw: "gym", f: ["Local 2km Radius|90% of members live within 2km — hyperlocal ads win", "Retention Leak|Month-4 dropouts are the silent revenue killer", "Trainer Brands|Trainer reels recruit members better than gym ads"], nm: ["Titan Gym", "RepForce Fitness", "SteelHouse Gym"] },
  yoga: { cu: "students", u: "Yoga Studio", tag: "Yoga Studios, Teacher Training & Online Classes", mIN: "₹5,000 Cr", mGL: "$110B", cg: "15%", cnt: "50,000+", ad: 80, kw: "yoga studio", f: ["Online + Offline|Hybrid class models double the addressable audience", "Teacher Authority|Instructor credibility content drives premium pricing", "Corporate Tie-ups|B2B corporate wellness contracts stabilise revenue"], nm: ["Pranam Yoga Studio", "Asana House", "ZenFlow Yoga"] },
  sports: { cu: "parents", u: "Sports Academy", tag: "Cricket, Football, Badminton & Multi-Sport Academies", mIN: "₹9,000 Cr", mGL: "$80B", cg: "16%", cnt: "40,000+", ad: 75, kw: "sports academy", f: ["Parent Decision|Parents choose academies; kids choose sports", "Trial Camps|Holiday camps are the biggest enrolment funnel", "Achievement Walls|Player selection news converts fence-sitters"], nm: ["ChampZone Academy", "PlayPro Sports", "Victory Sports Academy"] },
  hotels: { cu: "guests", u: "Hotel", tag: "Business Hotels, Boutique Stays & Hotel Chains", mIN: "₹1.1L Cr", mGL: "$1.5T", cg: "13%", cnt: "3 Lakh+", ad: 89, kw: "hotel", f: ["OTA Commissions|MakeMyTrip and Booking.com take 18-25% per booking", "Direct Booking|Owned-channel bookings need rate-parity + remarketing", "Review Score|0.3 rating points swing occupancy meaningfully"], nm: ["The Grand Orchid", "CityNest Hotel", "Palm Court Residency"] },
  resorts: { cu: "guests", u: "Resort", tag: "Leisure Resorts, Weekend Getaways & Destination Stays", mIN: "₹45,000 Cr", mGL: "$900B", cg: "14%", cnt: "25,000+", ad: 90, kw: "resort", f: ["Drive-To Market|3-hour-drive city audiences are the core target", "Experience Reels|Property reels sell stays better than photos", "Event Revenue|Weddings and offsites fill weekday occupancy"], nm: ["WildSprings Resort", "Casa Verde Retreat", "Hilltop Haven Resort"] },
  homestays: { cu: "guests", u: "Homestay", tag: "Homestays, Villas & Vacation Rentals", mIN: "₹8,000 Cr", mGL: "$120B", cg: "21%", cnt: "1.5 Lakh+", ad: 92, kw: "homestay", f: ["Airbnb Fees|Platform fees and ranking volatility hurt margins", "Direct Repeat|Repeat guests booked direct are pure profit", "Local SEO|'Villa in [destination]' searches convert at high intent"], nm: ["Cedar House Stays", "Mistwood Villa", "The Courtyard Homestay"] },
  restaurants: { cu: "diners", u: "Restaurant", tag: "Casual Dining, Fine Dine & QSR", mIN: "₹4.2L Cr", mGL: "$3T", cg: "11%", cnt: "70 Lakh+", ad: 88, kw: "restaurant", f: ["Zomato/Swiggy Cut|Aggregator commissions of 22-30% crush margins", "Food Reels|Dish reels drive weekend table bookings", "Repeat Diners|A WhatsApp list of regulars is printing money"], nm: ["Spice Route Kitchen", "The Brass Plate", "Tandoor Tales"] },
  cafes: { cu: "customers", u: "Cafe", tag: "Coffee Shops, Bakeries & Dessert Cafes", mIN: "₹35,000 Cr", mGL: "$450B", cg: "15%", cnt: "2 Lakh+", ad: 90, kw: "cafe", f: ["Instagrammability|Aesthetic corners generate free UGC marketing", "Footfall Hours|Offers targeting dead hours lift daily revenue", "Community Events|Open mics and workshops build loyal regulars"], nm: ["Brew & Bloom", "The Daily Grind", "Butter & Crumb Cafe"] },
  cloudkitchen: { cu: "customers", u: "Cloud Kitchen", tag: "Delivery-Only Brands & Virtual Restaurant Groups", mIN: "₹30,000 Cr", mGL: "$120B", cg: "25%", cnt: "30,000+", ad: 97, kw: "cloud kitchen", f: ["Listing Rank|Aggregator ranking algorithms decide daily orders", "Own-Channel Orders|WhatsApp direct ordering rescues margin", "Multi-Brand Play|One kitchen, many brands — each needs its own identity"], nm: ["BowlBox Kitchens", "Midnight Bites Co", "CurryCraft Kitchen"] },
  catering: { cu: "clients", u: "Catering Service", tag: "Wedding, Corporate & Event Caterers", mIN: "₹40,000 Cr", mGL: "$300B", cg: "12%", cnt: "2.5 Lakh+", ad: 71, kw: "catering service", f: ["Wedding Season|Nov-Feb bookings decide the entire year", "Tasting Content|Plating and live-counter videos win premium events", "Corporate Retainers|Office meal contracts smooth seasonality"], nm: ["Annapurna Caterers", "Feast Affairs", "Royal Rasoi Catering"] },
  travel: { cu: "travellers", u: "Travel Agency", tag: "Holiday Packages, Visa & Corporate Travel", mIN: "₹1.5L Cr", mGL: "$1.4T", cg: "14%", cnt: "3 Lakh+", ad: 91, kw: "travel agency", f: ["Itinerary Content|Destination guides rank and convert for years", "Group Departures|Fixed-departure campaigns fill fast with urgency", "WhatsApp Quotes|Same-hour quote replies win price shoppers"], nm: ["WanderWise Travels", "GlobeTrail Holidays", "SkyBridge Tours"] },
  tour: { cu: "travellers", u: "Tour Operator", tag: "Inbound, Adventure & Pilgrimage Tour Operators", mIN: "₹60,000 Cr", mGL: "$600B", cg: "13%", cnt: "1 Lakh+", ad: 87, kw: "tour operator", f: ["Niche Routes|Owning one route or theme beats selling everything", "Traveller UGC|Past-group videos are the strongest converters", "Season Calendars|Pre-season campaigns capture early planners"], nm: ["TrailBlazer Tours", "Himalayan Routes", "Sacred Journeys"] },
  events: { cu: "clients", u: "Event Management Company", tag: "Corporate Events, Exhibitions & Activations", mIN: "₹35,000 Cr", mGL: "$900B", cg: "16%", cnt: "1.2 Lakh+", ad: 78, kw: "event management", f: ["Portfolio Reels|Aftermovies win the next pitch before it starts", "Corporate LinkedIn|Decision-makers discover agencies on LinkedIn", "Vendor Network|Showcasing execution scale reassures big clients"], nm: ["Spotlight Events", "Mosaic Experiences", "GrandStage Events"] },
  wedding: { cu: "couples", u: "Wedding Planning Company", tag: "Wedding Planners & Destination Wedding Specialists", mIN: "₹4.7L Cr", mGL: "$400B", cg: "15%", cnt: "60,000+", ad: 94, kw: "wedding planner", f: ["Pinterest + Insta|Couples shortlist planners from saved inspiration", "Real Weddings|Full wedding films close premium clients", "WedMeGood Rank|Marketplace profile strength drives enquiries"], nm: ["Forever Knots", "Saath Weddings", "Ivory Aisle Events"] },
  photo: { cu: "clients", u: "Photography Studio", tag: "Wedding, Product & Portrait Photography", mIN: "₹15,000 Cr", mGL: "$45B", cg: "13%", cnt: "3 Lakh+", ad: 92, kw: "photography studio", f: ["Portfolio SEO|Geo-tagged galleries rank for '[city] photographer'", "Reel Teasers|Same-day teasers create referral storms", "Album Upsells|Print and album upsells double per-client value"], nm: ["LensCraft Studios", "Golden Hour Films", "Frame Story Studio"] },
  mfg: { cu: "buyers", u: "Manufacturing Company", tag: "OEMs, Component & Contract Manufacturers", mIN: "₹28L Cr", mGL: "$15T", cg: "9%", cnt: "6 Lakh+", ad: 59, kw: "manufacturer", f: ["IndiaMART Beyond|Owned websites convert better than marketplace listings", "Capability Pages|Machine lists and certifications win RFQs", "Export Search|Global buyers find suppliers via Google and LinkedIn"], nm: ["PrecisionWorks Mfg", "IndoFab Industries", "CoreMach Engineering"] },
  industrial: { cu: "buyers", u: "Industrial Equipment Company", tag: "Machinery, Tools & Industrial Supplies", mIN: "₹3.5L Cr", mGL: "$700B", cg: "10%", cnt: "1.5 Lakh+", ad: 60, kw: "industrial equipment", f: ["Spec Sheets|Downloadable spec PDFs capture qualified B2B leads", "Demo Videos|Machine demo videos shorten sales cycles", "Dealer Locator|Dealer-network pages drive channel sales"], nm: ["MaxTorque Equipments", "ProLine Machinery", "TitanGear Industries"] },
  auto: { cu: "buyers", u: "Automobile Dealership", tag: "Car & Two-Wheeler Dealerships", mIN: "₹7L Cr", mGL: "$4T", cg: "8%", cnt: "25,000+", ad: 90, kw: "car dealership", f: ["Lead Speed|First-responder dealers win the test drive", "Exchange Offers|Exchange-bonus campaigns drive showroom visits", "Delivery Reels|Customer delivery moments are free advertising"], nm: ["DriveLine Motors", "AutoHub Dealers", "Velocity Wheels"] },
  autoservice: { cu: "customers", u: "Auto Service Center", tag: "Car Service, Detailing & Repair Workshops", mIN: "₹80,000 Cr", mGL: "$800B", cg: "12%", cnt: "5 Lakh+", ad: 81, kw: "car service center", f: ["Service Reminders|Automated due-date reminders fill weekday bays", "Transparency Videos|Repair videos kill the trust problem", "AMC Plans|Annual maintenance plans lock in repeat revenue"], nm: ["GearUp Auto Care", "MotorMedic Garage", "ShineWorks Detailing"] },
  logistics: { cu: "clients", u: "Logistics Company", tag: "Freight, 3PL & Last-Mile Logistics", mIN: "₹14L Cr", mGL: "$9T", cg: "11%", cnt: "2 Lakh+", ad: 66, kw: "logistics company", f: ["Lane Authority|Owning specific routes in search wins contracts", "Tracking Trust|Live-tracking demos close enterprise deals", "Case Numbers|On-time % and cost-saved stats convert CFOs"], nm: ["SwiftHaul Logistics", "CargoLink Express", "BlueRoute 3PL"] },
  transport: { cu: "clients", u: "Transportation Company", tag: "Fleet, Staff & Goods Transportation", mIN: "₹5L Cr", mGL: "$2T", cg: "10%", cnt: "4 Lakh+", ad: 62, kw: "transport service", f: ["Corporate Contracts|Employee-transport tenders are won on safety proof", "Fleet Showcase|GPS-enabled fleet content builds confidence", "Local Intent|'Transporter near me' searches signal urgent need"], nm: ["RoadStar Transports", "FleetOne Movers", "SafeWay Carriers"] },
  warehouse: { cu: "clients", u: "Warehousing Company", tag: "Storage, Fulfilment & Cold Chain", mIN: "₹1.2L Cr", mGL: "$450B", cg: "15%", cnt: "50,000+", ad: 64, kw: "warehousing", f: ["Location Pages|Per-city facility pages capture 3PL searches", "Walkthroughs|Facility video tours pre-qualify serious clients", "Ecom Wave|D2C brands constantly hunt fulfilment partners"], nm: ["StoreSafe Warehousing", "GridSpace Fulfilment", "ColdChain Hub"] },
  banks: { cu: "customers", u: "Bank", tag: "Banks, Small Finance & Cooperative Banks", mIN: "₹240L Cr", mGL: "$180T", cg: "9%", cnt: "100+", ad: 86, kw: "bank", f: ["Product Search|Loan and FD rate searches are pure intent", "Branch Local SEO|Every branch is a local-search opportunity", "Trust Content|Financial-literacy content builds deposits"], nm: ["Unity Capital Bank", "Pragati Finance Bank", "Sahyog Cooperative Bank"] },
  insurance: { cu: "customers", u: "Insurance Agency", tag: "Life, Health & General Insurance", mIN: "₹9L Cr", mGL: "$6T", cg: "12%", cnt: "5 Lakh+", ad: 84, kw: "insurance", f: ["Comparison Intent|'Best policy' searches need calculator content", "Claim Stories|Settled-claim stories beat any ad", "Renewal Nurture|WhatsApp renewal flows stop policy lapses"], nm: ["SecureShield Insurance", "TrustCover Advisors", "JeevanSure Services"] },
  fintech: { cu: "users", u: "FinTech Startup", tag: "Payments, Lending & WealthTech", mIN: "₹6L Cr", mGL: "$310B", cg: "22%", cnt: "10,000+", ad: 96, kw: "fintech", f: ["Trust Barrier|Security and RBI-compliance content unlocks signups", "CAC Discipline|Organic content keeps blended CAC sane", "App Store SEO|ASO drives compounding installs"], nm: ["PayVista", "CredNova", "WealthRing"] },
  invest: { cu: "investors", u: "Investment Firm", tag: "PMS, AIF & Wealth Management", mIN: "₹4L Cr", mGL: "$120T", cg: "14%", cnt: "8,000+", ad: 82, kw: "investment firm", f: ["HNI LinkedIn|Decision-makers consume insights on LinkedIn", "Performance Pages|Compliant track-record pages convert", "Webinar Funnel|Market-outlook webinars fill the pipeline"], nm: ["Meridian Wealth", "Compound Capital", "NorthStar Investments"] },
  accounting: { cu: "clients", u: "Accounting Firm", tag: "Bookkeeping, Payroll & Compliance Services", mIN: "₹45,000 Cr", mGL: "$650B", cg: "11%", cnt: "2 Lakh+", ad: 73, kw: "accounting firm", f: ["Deadline Spikes|GST and ITR deadlines create search surges", "Fixed-Fee Clarity|Transparent pricing pages filter quality leads", "SMB Education|Compliance explainers earn long-term clients"], nm: ["LedgerWise Associates", "ClearBooks & Co", "Astute Accounting"] },
  ca: { cu: "clients", u: "CA Firm", tag: "Chartered Accountants & Tax Advisors", mIN: "₹30,000 Cr", mGL: "$250B", cg: "10%", cnt: "1.5 Lakh+", ad: 75, kw: "CA firm", f: ["Local Authority|'CA near me' is a daily high-intent search", "Niche Practice|Startup, NRI or GST niches command premiums", "Referral Digital|Old referrals now Google you before calling"], nm: ["S. Mehta & Associates", "Kapoor Jain & Co", "Verma Tax Advisors"] },
  law: { cu: "clients", u: "Law Firm", tag: "Corporate, Civil & Family Law Practices", mIN: "₹25,000 Cr", mGL: "$900B", cg: "9%", cnt: "15 Lakh+", ad: 77, kw: "law firm", f: ["Practice Pages|Each practice area needs its own ranking page", "Bar-Safe Content|Educational content markets within BCI rules", "Consult Booking|Online consult booking captures urgent matters"], nm: ["Lex Chambers", "Nyaya Legal Partners", "Veritas Law Offices"] },
  legal: { cu: "clients", u: "Legal Consultancy", tag: "Legal Consultants, Documentation & Compliance", mIN: "₹12,000 Cr", mGL: "$340B", cg: "12%", cnt: "80,000+", ad: 79, kw: "legal consultant", f: ["Process Clarity|Step-by-step service pages convert confused searchers", "Fixed Packages|Productised legal packages sell like services", "Startup Demand|Founder audiences need recurring legal help"], nm: ["LegalEase Consultants", "DocuRight Advisors", "CompliancePro Services"] },
  itco: { cu: "clients", u: "IT Company", tag: "IT Services, Consulting & Managed Services", mIN: "₹20L Cr", mGL: "$5T", cg: "10%", cnt: "50,000+", ad: 88, kw: "IT company", f: ["Case-Study Engine|Outcome-led case studies win enterprise deals", "LinkedIn ABM|Account-based campaigns reach CTOs directly", "Niche Stack|Owning one stack or vertical beats generalism"], nm: ["CodeHarbor Technologies", "NetPrime IT Solutions", "Stackline Systems"] },
  software: { cu: "clients", u: "Software Development Company", tag: "Custom Software, Web & Mobile Development", mIN: "₹3L Cr", mGL: "$700B", cg: "13%", cnt: "40,000+", ad: 90, kw: "software development", f: ["Clutch + SEO|Directory reviews plus organic rank fill pipelines", "Portfolio Depth|Detailed build stories beat logo walls", "Discovery Offer|Paid discovery sprints qualify serious buyers"], nm: ["BitForge Labs", "CraftCode Studios", "DevSpring Technologies"] },
  saas: { cu: "users", u: "SaaS Company", tag: "B2B SaaS & Product-Led Software", mIN: "₹1.2L Cr", mGL: "$350B", cg: "24%", cnt: "8,000+", ad: 97, kw: "SaaS", f: ["Comparison Keywords|'X vs Y' pages capture switching intent", "Free-Tool Funnel|Free calculators and tools compound signups", "Churn Content|Onboarding email flows protect retention"], nm: ["FlowMetric", "LeadLoop HQ", "Stackly"] },
  cyber: { cu: "clients", u: "Cybersecurity Company", tag: "Security Audits, SOC & Compliance Services", mIN: "₹40,000 Cr", mGL: "$300B", cg: "18%", cnt: "5,000+", ad: 85, kw: "cybersecurity", f: ["Breach News-jacking|Timely threat advisories build authority", "Compliance Demand|ISO/SOC2 searches signal budget-ready buyers", "CISO Trust|Technical depth content earns enterprise calls"], nm: ["ShieldGrid Security", "CipherWall Labs", "SentryOps"] },
  digitalagency: { cu: "clients", u: "Digital Marketing Agency", tag: "Performance, SEO & Full-Service Agencies", mIN: "₹50,000 Cr", mGL: "$700B", cg: "16%", cnt: "60,000+", ad: 95, kw: "digital marketing agency", f: ["Own Results First|An agency's own rankings are its best pitch", "Niche Positioning|Industry-specialist agencies charge 2x", "Productised Offers|Fixed-scope packages shorten sales cycles"], nm: ["GrowthCrate Agency", "RankRise Digital", "Clickwell Media"] },
  adagency: { cu: "clients", u: "Advertising Agency", tag: "Creative, Brand & Media Agencies", mIN: "₹90,000 Cr", mGL: "$800B", cg: "10%", cnt: "30,000+", ad: 88, kw: "advertising agency", f: ["Showreel SEO|Campaign showreels rank and pitch simultaneously", "Award Proof|Recognition content justifies premium fees", "Founder Voice|Creative-leader POV content attracts briefs"], nm: ["BoldType Advertising", "Maven & Markle", "RedCanvas Agency"] },
  media: { cu: "audiences", u: "Media Company", tag: "Production Houses, OTT & Digital Media", mIN: "₹2.3L Cr", mGL: "$2.5T", cg: "12%", cnt: "20,000+", ad: 93, kw: "media company", f: ["Distribution First|Owned audience channels de-risk every launch", "Sponsor Decks|Audience-data pages attract brand deals", "Format Bets|Short-form spinoffs multiply content ROI"], nm: ["StoryForge Media", "PrimeReel Studios", "Vistaar Media House"] },
  news: { cu: "readers", u: "News & Publishing House", tag: "Digital News, Magazines & Publishers", mIN: "₹45,000 Cr", mGL: "$350B", cg: "7%", cnt: "1 Lakh+", ad: 91, kw: "news publisher", f: ["Google Discover|Discover traffic dwarfs search for news", "Newsletter Moat|Email lists survive every algorithm change", "Topic Authority|Beats owned deeply outrank wire copy"], nm: ["MetroWire News", "The Daily Lens", "Praja Post"] },
  telecom: { cu: "customers", u: "Telecommunications Company", tag: "ISPs, Broadband & Enterprise Connectivity", mIN: "₹9L Cr", mGL: "$1.7T", cg: "8%", cnt: "3,000+", ad: 89, kw: "broadband provider", f: ["Area Pages|Locality coverage pages capture switch intent", "Speed Proof|Real speed-test content beats claims", "B2B Leased Lines|Enterprise connectivity has fat margins"], nm: ["FiberLink Broadband", "ConnectSphere Telecom", "SwiftNet ISP"] },
  ngo: { cu: "donors", u: "NGO", tag: "NGOs & Social Impact Organisations", mIN: "₹2L Cr", mGL: "$300B", cg: "10%", cnt: "30 Lakh+", ad: 72, kw: "NGO", f: ["Impact Proof|Outcome numbers convert one-time donors to monthly", "Google Grants|$10k/month free ads most NGOs never claim", "Story Films|Beneficiary stories drive campaign virality"], nm: ["Udaan Foundation", "Asha Roots Trust", "Sahara Seva Sansthan"] },
  nonprofit: { cu: "donors", u: "Non-Profit Organization", tag: "Foundations, Trusts & Community Organisations", mIN: "₹1.5L Cr", mGL: "$250B", cg: "9%", cnt: "10 Lakh+", ad: 70, kw: "non-profit", f: ["Recurring Giving|Monthly-giving programs need nurture funnels", "CSR Visibility|Corporate CSR teams discover partners online", "Transparency Pages|Financial transparency unlocks large gifts"], nm: ["Jyoti Welfare Foundation", "GreenHands Trust", "Sankalp Society"] },
  govcon: { cu: "clients", u: "Government Contractor", tag: "Infrastructure, Supply & Services Contractors", mIN: "₹8L Cr", mGL: "$11T", cg: "9%", cnt: "2 Lakh+", ad: 55, kw: "government contractor", f: ["Credential Pages|Completed-project proof wins private work too", "Tender Alerts|Content around tender processes attracts JV partners", "Compliance Trust|Certifications displayed clearly reduce friction"], nm: ["NationBuild Contractors", "InfraServe Projects", "SupplyLine GovWorks"] },
  renewable: { cu: "clients", u: "Renewable Energy Company", tag: "Solar, Wind & Clean Energy Solutions", mIN: "₹2.5L Cr", mGL: "$1.1T", cg: "20%", cnt: "15,000+", ad: 78, kw: "renewable energy", f: ["Subsidy Content|Policy and subsidy explainers capture demand", "ROI Calculators|Savings calculators convert sceptics", "B2B PPA Deals|Commercial PPAs are the margin engine"], nm: ["GreenVolt Energy", "SuryaTech Renewables", "EcoGrid Power"] },
  solar: { cu: "customers", u: "Solar Company", tag: "Rooftop Solar, EPC & Solar Products", mIN: "₹1.2L Cr", mGL: "$300B", cg: "23%", cnt: "20,000+", ad: 81, kw: "solar company", f: ["Bill-Savings Hook|Electricity-bill savings is the only hook that matters", "Install Timelapse|Installation videos build instant credibility", "Subsidy Window|PM Surya Ghar campaigns ride policy waves"], nm: ["SunShakti Solar", "RaysWorth Energy", "HelioGrid Solutions"] },
  electrical: { cu: "clients", u: "Electrical Contracting Company", tag: "Electrical Contractors & Turnkey Projects", mIN: "₹1.8L Cr", mGL: "$250B", cg: "11%", cnt: "3 Lakh+", ad: 63, kw: "electrical contractor", f: ["Project Galleries|Industrial project proof wins commercial bids", "Safety Cred|Compliance and safety content reassures buyers", "AMC Recurring|Maintenance contracts stabilise cash flow"], nm: ["VoltEdge Electricals", "PowerLine Contractors", "Sparkwell Projects"] },
  electronics: { cu: "buyers", u: "Electronics Manufacturer", tag: "Consumer & Industrial Electronics Manufacturing", mIN: "₹6L Cr", mGL: "$3T", cg: "14%", cnt: "25,000+", ad: 68, kw: "electronics manufacturer", f: ["Make-in-India|PLI-era buyers actively seek Indian suppliers", "OEM Pages|Capability and certification pages win OEM deals", "D2C Channel|Direct online sales build margin and brand"], nm: ["CircuitCore Electronics", "Voltaic Devices", "NexBoard Technologies"] },
  homeserv: { cu: "customers", u: "Home Services Company", tag: "Repairs, Renovation & On-Demand Home Services", mIN: "₹60,000 Cr", mGL: "$500B", cg: "17%", cnt: "8 Lakh+", ad: 85, kw: "home services", f: ["Urban Company Gap|Independents win on price and relationships", "Same-Day Intent|'Near me now' searches need instant response", "Before-After Proof|Job photos drive referral chains"], nm: ["FixIt Brothers", "HomeSquad Services", "RenovateRight"] },
  cleaning: { cu: "customers", u: "Cleaning Services Company", tag: "Deep Cleaning, Commercial & Facility Cleaning", mIN: "₹25,000 Cr", mGL: "$350B", cg: "15%", cnt: "2 Lakh+", ad: 82, kw: "cleaning service", f: ["Satisfying Content|Cleaning transformation reels go viral organically", "B2B Contracts|Office and society contracts beat one-off jobs", "Festive Rush|Diwali deep-clean season needs early campaigns"], nm: ["SparkleSquad Cleaning", "FreshNest Services", "PureSpace Cleaners"] },
  pest: { cu: "customers", u: "Pest Control Company", tag: "Residential & Commercial Pest Control", mIN: "₹9,000 Cr", mGL: "$28B", cg: "12%", cnt: "50,000+", ad: 80, kw: "pest control", f: ["Seasonal Surges|Monsoon and summer spikes are predictable goldmines", "AMC Model|Annual contracts turn one job into twelve", "Safety Messaging|Child-and-pet-safe positioning wins families"], nm: ["BugShield Pest Control", "SafeNest Pest Solutions", "ProGuard Pest Care"] },
  security: { cu: "clients", u: "Security Services Company", tag: "Guards, Surveillance & Facility Security", mIN: "₹1.5L Cr", mGL: "$350B", cg: "13%", cnt: "1.5 Lakh+", ad: 65, kw: "security services", f: ["Compliance Proof|PSARA licensing content filters serious buyers", "Society Contracts|RWA decision cycles need patient nurture", "Tech + Manpower|CCTV-plus-guards bundles raise deal size"], nm: ["IronGate Security", "Sentinel Force Services", "SafeZone Securities"] },
  recruit: { cu: "clients", u: "Recruitment Agency", tag: "Staffing, Executive Search & RPO", mIN: "₹85,000 Cr", mGL: "$650B", cg: "14%", cnt: "40,000+", ad: 87, kw: "recruitment agency", f: ["LinkedIn Authority|Recruiter personal brands source clients and candidates", "Niche Desks|Specialist desks command higher fees", "Speed Proof|Time-to-fill stats win retained mandates"], nm: ["TalentBridge Consultants", "HirePath Solutions", "PeoplePro Search"] },
  hrconsult: { cu: "clients", u: "HR Consulting Firm", tag: "HR Strategy, Policy & Compliance Consulting", mIN: "₹20,000 Cr", mGL: "$250B", cg: "12%", cnt: "25,000+", ad: 80, kw: "HR consulting", f: ["Founder Audience|SMB founders need HR but search late at night", "Template Magnets|Policy templates capture qualified leads", "Retainer Path|Audits convert into monthly retainers"], nm: ["PeopleFirst Consulting", "WorkWise HR Advisors", "Crest HR Partners"] },
  staffing: { cu: "clients", u: "Staffing Company", tag: "Temp Staffing, Payroll & Workforce Solutions", mIN: "₹1.2L Cr", mGL: "$550B", cg: "13%", cnt: "20,000+", ad: 78, kw: "staffing company", f: ["Volume Verticals|Logistics and retail staffing scale fastest", "Compliance Edge|PF/ESI compliance content reassures CFOs", "Deployment Speed|48-hour deployment claims need proof stories"], nm: ["WorkForce One", "RapidStaff Solutions", "PrimeCrew Staffing"] },
  bizcon: { cu: "clients", u: "Business Consulting Firm", tag: "Strategy, Operations & Growth Consulting", mIN: "₹50,000 Cr", mGL: "$1T", cg: "11%", cnt: "60,000+", ad: 83, kw: "business consultant", f: ["Framework Content|Proprietary frameworks build authority fast", "Diagnostic Offer|Paid audits qualify and convert", "Niche Verticals|Industry-specific consultants win premium fees"], nm: ["Stratagem Advisors", "ScaleSmith Consulting", "Vantage Growth Partners"] },
  bpo: { cu: "clients", u: "BPO Company", tag: "Customer Support, Back-Office & KPO Services", mIN: "₹3L Cr", mGL: "$400B", cg: "10%", cnt: "5,000+", ad: 84, kw: "BPO", f: ["Global SEO|International buyers search for India delivery", "Quality Metrics|CSAT and SLA dashboards close deals", "Domain Pods|Industry-trained teams beat generic seats"], nm: ["GlobeServe BPO", "ClearVoice Outsourcing", "TaskBridge Solutions"] },
  callcenter: { cu: "clients", u: "Call Center", tag: "Inbound, Outbound & Omnichannel Contact Centers", mIN: "₹80,000 Cr", mGL: "$340B", cg: "9%", cnt: "8,000+", ad: 82, kw: "call center", f: ["Vertical Scripts|Industry-specific calling proof wins pilots", "Tech Stack Pages|Dialer and CRM stack content filters leads", "Pilot Offers|Small paid pilots convert to annual contracts"], nm: ["DialEdge Solutions", "ConnectFirst Center", "VoiceHub BPM"] },
  franchise: { cu: "investors", u: "Franchise Business", tag: "Franchise Brands & Franchise Development", mIN: "₹5.4L Cr", mGL: "$3T", cg: "14%", cnt: "5,000+", ad: 88, kw: "franchise", f: ["Investor Funnels|Franchise-enquiry funnels need ROI calculators", "Unit Economics|Transparent payback content attracts serious investors", "Franchisee Stories|Owner success videos sell the dream credibly"], nm: ["BrandBloom Franchising", "QuickBite Franchise Co", "UrbanKart Retail Franchise"] },
  agri: { cu: "buyers", u: "Agriculture Company", tag: "Agri Inputs, Equipment & Agritech", mIN: "₹22L Cr", mGL: "$12T", cg: "8%", cnt: "10 Lakh+", ad: 57, kw: "agriculture company", f: ["Vernacular Reach|Regional-language content unlocks rural demand", "Dealer Networks|Dealer locator pages drive channel sales", "Demo Plots|Field-result videos convert sceptical farmers"], nm: ["KisanGrow Agro", "HarvestLine Agritech", "BhoomiSeva Agro"] },
  dairy: { cu: "customers", u: "Dairy Farm", tag: "Dairy Farms, Milk Brands & Dairy Products", mIN: "₹11L Cr", mGL: "$900B", cg: "10%", cnt: "7.5 Cr+", ad: 60, kw: "dairy farm", f: ["Farm-to-Home|Subscription delivery models need app-style funnels", "Purity Proof|Farm hygiene videos justify premium pricing", "Local Radius|5km delivery zones make hyperlocal ads perfect"], nm: ["Gokul Fresh Dairy", "MooMagic Farms", "Amrut Dairy Co"] },
  poultry: { cu: "buyers", u: "Poultry Farm", tag: "Broiler, Layer & Specialty Poultry", mIN: "₹2.5L Cr", mGL: "$350B", cg: "11%", cnt: "30 Lakh+", ad: 55, kw: "poultry farm", f: ["B2B Buyers|Hotels and retailers source via WhatsApp and search", "Quality Certs|FSSAI and farm-standard content wins contracts", "D2C Eggs|Branded farm eggs command 2x market price"], nm: ["FarmFresh Poultry", "GoldenEgg Farms", "VitalBird Poultry Co"] },
  foodproc: { cu: "buyers", u: "Food Processing Company", tag: "Packaged Foods, Spices & Processing Units", mIN: "₹15L Cr", mGL: "$4T", cg: "12%", cnt: "40,000+", ad: 67, kw: "food processing", f: ["Private Label|Retail chains hunt private-label partners online", "Marketplace Sales|Amazon/BigBasket listings need ranking work", "Certs Forward|FSSAI/ISO/Export cert content closes B2B deals"], nm: ["SpiceRoot Foods", "AnnPurna Processing", "FreshFold Foods"] },
  chemical: { cu: "buyers", u: "Chemical Company", tag: "Specialty, Industrial & Agro Chemicals", mIN: "₹13L Cr", mGL: "$5T", cg: "9%", cnt: "80,000+", ad: 58, kw: "chemical company", f: ["Technical SEO|CAS-number and spec pages capture procurement search", "Export Enquiries|Global buyers verify Indian suppliers digitally", "Safety Docs|MSDS libraries build credibility and links"], nm: ["ChemCore Industries", "Spectrum Chemicals", "IndoSynth Labs"] }
};

export function hsh(s) { let h = 0; for (let i = 0; i < s.length; i++)h = (h * 31 + s.charCodeAt(i)) % 997; return h; }

export function buildIndustry(id, sd) {
  const m = SUBMAP[id]; if (!m) return null;
  const n = m.name, color = m.cat.color, icon = m.icon;
  const { cu, u, tag, mIN, mGL, cg, cnt, ad, kw, f, nm } = sd;
  const F = f.map(x => x.split("|"));
  const h = hsh(id), lu = u.toLowerCase(), ln = n.toLowerCase();
  const Cu = cu.charAt(0).toUpperCase() + cu.slice(1);
  const Words = ["3,400+", "3,200+", "3,100+", "3,000+", "2,900+", "2,800+"];
  const overview = `India's ${ln} market is valued at ${mIN} and compounding at ${cg} a year, with ${cnt} players competing for the same ${cu}. ${F[0][1]}, and ${ad}% of ${cu} now research online before ever making contact — making digital presence the single biggest growth lever in this sector. ${F[1][1]}. The businesses investing in search visibility, social proof and direct-response campaigns today are capturing market share their offline-only competitors never even see.`;
  const stats = [{ n: cnt, l: `${n} in India` }, { n: mIN, l: "Indian Market Size" }, { n: cg, l: "Annual CAGR" }, { n: `${ad}%`, l: `${Cu} Research Online First` }, { n: mGL, l: "Global Market Size" }, { n: `${55 + h % 30}%`, l: "Still Lack a Real Digital Strategy" }];
  const didYouKnow = [`${ad}% of ${cu} look up a ${lu} online before making first contact.`, `${F[0][1]}.`, `${F[2][1]}.`, `Players in this sector with 100+ Google reviews receive ${2 + h % 3}x more enquiries than those without.`];
  const challenges = [
    { t: F[0][0], d: `${F[0][1]}. Businesses without a deliberate plan here leave their fastest-growing channel to competitors.` },
    { t: F[1][0], d: `${F[1][1]}. We build this into every ${ln} engagement from day one.` },
    { t: F[2][0], d: `${F[2][1]}. Done right, this alone changes the revenue curve.` },
    { t: "Crowded Local Competition", d: `With ${cnt} ${ln} in India, most ${cu} never scroll past the top 3 Google results. Page-2 visibility is invisibility.` },
    { t: "Word-of-Mouth Ceiling", d: `Referrals alone plateau quickly. Without digital acquisition, growth stays capped by your existing network of ${cu}.` },
    { t: "No Retention System", d: `One-time ${cu} never hear from you again. WhatsApp and email retention is the cheapest revenue most ${ln} ignore.` },
  ];
  const services = [
    { s: "SEO", d: `Rank for '${kw} near me' and 'best ${kw} in [city]' — the searches high-intent ${cu} type every single day.` },
    { s: "Google Business Profile", d: `Dominate the local map pack with an optimised profile, weekly posts and a steady stream of 5-star reviews.` },
    { s: "Meta Ads", d: `Hyper-targeted Facebook & Instagram campaigns that put your ${lu} in front of the exact ${cu} you want.` },
    { s: "Google Ads", d: `Capture ready-to-act searches instantly with tightly managed campaigns at 18% of ad spend.` },
    { s: "Social Media Management", d: `A premium, consistent feed — education, proof and personality content that turns followers into ${cu}.` },
    { s: "Website Development", d: `A fast, mobile-first website with WhatsApp capture, built to convert visitors into enquiries.` },
    { s: "WhatsApp Marketing", d: `Broadcasts, reminders and re-activation campaigns on the channel ${cu} actually open — 90%+ open rates.` },
    { s: "Reels & Video", d: `Hook-first short video built around ${F[2][0].toLowerCase()} — the format with the highest organic reach in this niche.` },
  ];
  const benefits = [
    { icon: "📈", t: `${2 + h % 2}–${4 + h % 2}x More Enquiries`, d: `${n} working with us see ${2 + h % 2}–${4 + h % 2}x enquiry growth within 90 days through local search and paid social.` },
    { icon: "⭐", t: "Top-Rated in Your Area", d: `Systematic review collection makes you the most trusted ${lu} ${cu} find when they compare options.` },
    { icon: "💰", t: "Lower Acquisition Cost", d: `Digital CAC runs 50–60% below print, hoardings and aggregator commissions — and it compounds.` },
    { icon: "🗺️", t: "#1 on Google Maps", d: `Own the map pack for '${kw} near me' so you appear first at the exact moment of need.` },
    { icon: "💬", t: `Repeat-${Cu} Engine`, d: `WhatsApp flows bring ${cu} back again and again — typically a 25–40% lift in repeat business.` },
    { icon: "🏆", t: "Premium Positioning", d: `Authority content and a polished digital presence let you charge what your work is actually worth.` },
  ];
  const chT = [`New ${lu} with zero digital presence in a crowded locality`, `Heavy dependence on referrals with no predictable flow of new ${cu}`, `${F[0][1]} — but no strategy to capitalise on it`, `Strong offline reputation yet invisible on Google search and Maps`, `${F[1][1]} — and competitors were exploiting it first`, `Seasonal demand swings leaving long off-peak gaps`, `Bigger competitors outspending them on every channel`, `Healthy footfall but no system to bring ${cu} back`, `A tired brand and outdated website that no longer reflected the quality of their work`, `Plenty of website traffic but very few of those visitors ever turned into enquiries`, `An expansion into a second location with no awareness in the new catchment`, `Ad budget being burned on broad, untargeted campaigns with no tracking in place`];
  const stT = [`Google Business Profile overhaul + hyper-local Meta Ads + review generation sprint`, `SEO for '${kw}' keywords + conversion-focused website rebuild`, `Instagram reels strategy around ${F[2][0].toLowerCase()} + Meta retargeting funnels`, `Local SEO + citation building + weekly GBP posts and Q&A`, `Google Ads on high-intent keywords + landing page CRO`, `WhatsApp broadcast list building + seasonal offer campaigns`, `Long-tail SEO content cluster + authority blog + digital PR`, `WhatsApp retention automation + loyalty offers + referral engine`, `Full rebrand + new mobile-first website + launch campaign across search and social`, `Conversion-rate optimisation: rebuilt landing pages, faster load times and clearer calls-to-action`, `Geo-fenced Meta & Google Ads around the new location + local launch offers`, `Restructured ad account with audience segmentation, conversion tracking and weekly optimisation`];
  const reT = [`${130 + (h % 7) * 10}% increase in ${cu} enquiries in 90 days; 4.8★ rating with ${120 + h % 80} reviews`, `Page-1 rankings for ${6 + h % 5} target keywords; ${28 + h % 25} organic enquiries monthly`, `Top reel crossed ${60 + h % 80}K organic views; ${35 + h % 40} direct enquiries in a single month`, `#1 in the local map pack; walk-in enquiries up ${45 + h % 30}%`, `Cost per lead down ${30 + h % 20}%; ₹${3 + h % 5}.${h % 9}L revenue attributed in one quarter`, `${24 + h % 18}% lift in off-peak business; opted-in list of ${(2 + h % 3)},${(h % 9)}00+ ${cu}`, `Organic traffic up ${210 + (h % 9) * 20}%; now the most-cited ${lu} content in the region`, `Repeat business up ${28 + h % 20}%; referral enquiries doubled in two quarters`, `Brand relaunch drove ${40 + h % 30}% more enquiries in the first month and a far stronger close rate`, `Conversion rate ${2 + h % 2}.${h % 9}x higher; the same traffic now produces ${60 + h % 40}% more enquiries`, `New location hit profitability in ${3 + h % 3} months with ${20 + h % 30}+ enquiries a week from day one`, `Cost per acquisition cut by ${35 + h % 25}% while total leads rose ${50 + h % 40}% on the same budget`];
  const teT = [`'We went from invisible to fully booked. The team treats our ${lu} like their own business.'`, `'The first agency that showed us numbers, not excuses. Every rupee is accounted for.'`, `'Their reels strategy did more in one month than our last agency did in a year.'`, `'We now rank above competitors twice our size. The map-pack work alone paid for everything.'`, `'Lead quality improved the moment they rebuilt our campaigns. Genuine, specific, accountable.'`, `'The WhatsApp system quietly became our most profitable channel.'`, `'Their content made us the authority in our niche — ${cu} arrive already convinced.'`, `'Professional, fast, and honest about what works. We have recommended them to three other ${ln}.'`, `'The rebrand finally made us look as good as our work actually is. The response was instant.'`, `'Same traffic, far more enquiries. They found the leaks we never knew we had.'`, `'Opening our second branch felt risky until their launch plan filled it from week one.'`, `'They stopped the budget bleed and turned our ads into a reliable lead machine.'`];
  const tacticsT = [
    [`Rebuilt Google Business Profile with categories, services & geo-tagged photos`, `Launched radius-targeted Meta lead ads`, `Ran a 30-day 5-star review collection sprint`, `Set up WhatsApp enquiry capture`],
    [`Keyword + competitor research for '${kw}' intent terms`, `On-page SEO and a faster, mobile-first site`, `Built location and service landing pages`, `Earned local citations and backlinks`],
    [`Hook-first reels around ${F[2][0].toLowerCase()}`, `Weekly content calendar with trends`, `Meta retargeting of video viewers`, `Influencer & UGC collaborations`],
    [`Map-pack optimisation and weekly GBP posts`, `Structured Q&A and review responses`, `NAP citation cleanup across directories`, `Local link building`],
    [`High-intent Search & Performance Max campaigns`, `Landing-page CRO and A/B testing`, `Call & form conversion tracking`, `Negative-keyword and bid management`],
    [`Built and segmented a WhatsApp broadcast list`, `Seasonal and festival offer campaigns`, `Automated reminders and re-activation flows`, `Click-to-WhatsApp ads`],
    [`Topic-cluster content strategy`, `Authority blog and pillar pages`, `Digital PR and guest features`, `Internal linking and schema markup`],
    [`Loyalty and referral program design`, `Automated win-back journeys`, `Personalised offer segments`, `Review and feedback loops`],
    [`Brand identity, logo and visual system`, `New mobile-first website build`, `Cross-channel launch campaign`, `Press and social announcement push`],
    [`Heatmap and funnel analysis`, `Rebuilt high-converting landing pages`, `Speed and Core Web Vitals fixes`, `Clearer CTAs and trust signals`],
    [`Catchment research for the new location`, `Geo-fenced Meta & Google Ads`, `Grand-opening offer funnel`, `Local directory and map listings`],
    [`Full ad-account restructure`, `Audience segmentation and exclusions`, `Conversion tracking and dashboards`, `Weekly optimisation cadence`],
  ];
  const durations = ["3 months", "4 months", "90 days", "6 months", "2 months", "5 months", "6 months", "4 months", "3 months", "2 months", "3 months", "4 months"];
  const beforeAfter = [
    ["~8 enquiries/mo", `${40 + h % 30} enquiries/mo`], ["Page 3 on Google", "Page 1, top 3"], ["1.2K followers", `${18 + h % 40}K followers`],
    ["Not in map pack", "#1 in map pack"], ["₹${} CPL high", "CPL down 40%"], ["Flat off-season", "+25% off-peak"],
    ["Low domain authority", "Category authority"], ["8% repeat rate", `${28 + h % 18}% repeat rate`], ["Dated brand", "Premium brand"],
    ["1.1% conversion", `${2 + h % 2}.${1 + h % 8}% conversion`], ["0 awareness, new area", "Profitable in months"], ["Untracked ad spend", "Full attribution"],
  ];
  const citiesCount = 12;
  const caseStudies = Array.from({ length: citiesCount }, (_, i) => ({
    title: `${i < 3 ? nm[i] : `${PRE[(h + i) % 8]} ${u}`}, ${CITIES[(h + i * 5) % 12]}`,
    challenge: chT[i], strategy: stT[i], result: reT[i],
    roi: `${(5 + ((h + i * 13) % 85) / 10).toFixed(1)}x`,
    spend: `₹${[12, 18, 22, 28, 35, 16, 25, 30, 20, 15, 32, 26][i]},000/mo`,
    duration: durations[i],
    tactics: tacticsT[i],
    before: beforeAfter[i][0],
    after: beforeAfter[i][1],
    testimonial: teT[i],
  }));
  const blogs = [
    { title: `Digital Marketing for ${n} in India: The Complete 2026 Guide`, keyword: `digital marketing for ${kw} India`, words: "3,400+", desc: `The definitive playbook — SEO, ads, social and WhatsApp strategies built specifically for ${ln}.`, pillar: true },
    { title: `How to Get More ${Cu} for Your ${u}: A Step-by-Step Growth Plan`, keyword: `get more ${cu} for ${kw}`, words: "3,200+", desc: `A practical, channel-by-channel plan to grow ${cu} predictably — with budgets and timelines.`, pillar: true },
    { title: `${u} SEO: How to Rank #1 for ${kw.charAt(0).toUpperCase() + kw.slice(1)} Keywords in Your City`, keyword: `${kw} SEO India`, words: Words[h % 6], desc: `Local and national SEO tactics tailored to how ${cu} actually search in this sector.` },
    { title: `Google Business Profile for ${n}: The Local Search Domination Guide`, keyword: `Google Business Profile ${kw}`, words: Words[(h + 1) % 6], desc: `Profile optimisation, reviews and posts that put you in the map pack.` },
    { title: `Meta Ads for ${n}: Campaign Structures That Actually Convert`, keyword: `Meta Ads for ${kw}`, words: Words[(h + 2) % 6], desc: `Audience, creative and retargeting frameworks proven in this industry.` },
    { title: `30 Days of Instagram Content Ideas for ${n}`, keyword: `${kw} Instagram content ideas`, words: Words[(h + 3) % 6], desc: `A ready-to-use content calendar with hooks, formats and caption templates.` },
    { title: `WhatsApp Marketing for ${n}: The Retention & Repeat-Business Playbook`, keyword: `WhatsApp marketing ${kw}`, words: Words[(h + 4) % 6], desc: `Broadcasts, automations and campaigns on the channel ${cu} actually open.` },
    { title: `${u} Website Essentials: Features That Turn Visitors into ${Cu}`, keyword: `${kw} website design India`, words: Words[(h + 5) % 6], desc: `Conversion-first website anatomy with examples and benchmarks.` },
    { title: `Reels & Video Strategy for ${n}: What Works in 2026`, keyword: `video marketing ${kw}`, words: Words[(h + 2) % 6], desc: `Hook formulas and formats — including ${F[2][0].toLowerCase()} — that earn organic reach.` },
    { title: `How to Build a 5-Star Online Reputation for Your ${u}`, keyword: `${kw} reputation management`, words: Words[(h + 1) % 6], desc: `Ethical review-generation systems and response protocols that compound trust.` },
  ];
  const faqs = [`How much does digital marketing cost for a ${lu}?`, `How quickly can I get new ${cu} through digital marketing?`, `What is the ROI of digital marketing for ${ln}?`, `Which social media platform works best for ${ln}?`, `How do I rank my ${lu} on Google Maps?`, `Do Facebook and Instagram ads work for ${ln}?`, `How do I get more Google reviews for my ${lu}?`, `What content should a ${lu} post on Instagram?`, `Is SEO worth it for a small ${lu}?`, `How long does SEO take for ${kw} keywords?`, `Should I use Google Ads or Meta Ads for my ${lu}?`, `How can WhatsApp marketing help my ${lu}?`, `What is the best way to market a newly opened ${lu}?`, `How do I compete with bigger ${ln} on a small budget?`, `What makes a good website for a ${lu}?`, `How do I handle negative reviews for my ${lu}?`, `Is video and reels content important for ${ln}?`, `How do I generate ${cu} leads online?`, `What digital marketing budget should a ${lu} start with?`, `Can I run festival and seasonal campaigns for my ${lu}?`, `How do I measure the success of my marketing campaigns?`, `What is local SEO and does my ${lu} need it?`, `How do I retain ${cu} and increase repeat business?`, `Does influencer marketing work for ${ln}?`, `Why choose Business Volunteers for ${kw} marketing?`];
  return {
    name: n, icon, color,
    seoTitle: `Digital Marketing for ${n} in India | Business Volunteers`,
    metaDesc: `Grow your ${lu} with expert digital marketing — SEO, Google & Meta Ads, social media and WhatsApp campaigns that bring more ${cu}. Trusted across India.`,
    tagline: tag, marketSize: `${mIN} (India)`, globalSize: `${mGL} (Global)`, growth: `${cg} CAGR`,
    digitalAdoption: `${ad}% of ${cu} research a ${lu} online before deciding`,
    overview, stats, didYouKnow, challenges, services, benefits, caseStudies, blogs, faqs,
    metrics: { roi: `${6 + h % 5}.${h % 9}x avg`, retention: `${88 + h % 6}%`, completion: `${96 + h % 3}%`, growth: `${180 + (h % 18) * 10}% avg lead increase`, satisfaction: `4.${7 + h % 3}/5` },
  };
}
Object.keys(SEEDS).forEach(id => { if (!INDUSTRY_DATA[id]) { const d = buildIndustry(id, SEEDS[id]); if (d) INDUSTRY_DATA[id] = d; } });
CATEGORIES.forEach(c => c.sub.forEach(s => { if (INDUSTRY_DATA[s.id]) s.ready = true; }));

// ── BLOG SYSTEM: 12 articles per industry + dedicated article pages ──────────

export const HAND_CTX = { hospitals: { cu: "patients", u: "Hospital", kw: "hospital" }, clinics: { cu: "patients", u: "Clinic", kw: "clinic" }, dental: { cu: "patients", u: "Dental Clinic", kw: "dental clinic" } };

export const NAME2ID = {}; Object.entries(INDUSTRY_DATA).forEach(([id, d]) => { NAME2ID[d.name] = id; });
Object.entries(INDUSTRY_DATA).forEach(([id, d]) => {
  if (d.blogs.length < 20) {
    const k = (SEEDS[id] && SEEDS[id].kw) || (HAND_CTX[id] && HAND_CTX[id].kw) || d.name.toLowerCase();
    const nm = d.name, lo = d.name.toLowerCase();
    const extra = [
      { title: `The 2026 ${nm} Marketing Calendar: Festivals, Seasons & Campaign Timing`, keyword: `${k} marketing calendar 2026`, words: "3,000+", desc: `Month-by-month campaign planning for ${lo} — festivals, peak seasons and budget pacing.` },
      { title: `AI Search Optimisation for ${nm}: Getting Cited by ChatGPT, Gemini & Perplexity`, keyword: `AI search optimisation ${k}`, words: "3,200+", desc: `How ${lo} can structure content, FAQs and schema to get cited by AI search engines.` },
      { title: `Local SEO for ${nm}: Dominating 'Near Me' Searches in Your City`, keyword: `local SEO ${k}`, words: "3,100+", desc: `A complete local-search playbook for ${lo} — map pack, citations, geo pages and reviews.` },
      { title: `Lead Generation for ${nm}: Turning Clicks into Qualified Enquiries`, keyword: `lead generation ${k}`, words: "3,000+", desc: `Funnels, landing pages and follow-up systems that convert traffic into ${lo} enquiries.` },
      { title: `Branding & Identity for ${nm}: Standing Out in a Crowded Market`, keyword: `${k} branding`, words: "2,800+", desc: `Positioning, visual identity and messaging that make ${lo} memorable and premium.` },
      { title: `Email & WhatsApp Marketing for ${nm}: The Retention Engine`, keyword: `WhatsApp marketing ${k}`, words: "2,900+", desc: `Broadcast, automation and re-engagement campaigns that drive repeat business for ${lo}.` },
      { title: `Conversion Rate Optimisation for ${nm} Websites`, keyword: `${k} website conversion`, words: "2,900+", desc: `Page-by-page CRO tactics that turn existing ${lo} traffic into more enquiries.` },
      { title: `Content Marketing for ${nm}: A Year of Ideas That Rank & Convert`, keyword: `content marketing ${k}`, words: "3,100+", desc: `Topic clusters, formats and a publishing rhythm built for ${lo} growth.` },
      { title: `Performance Marketing for ${nm}: Scaling Ads Profitably`, keyword: `performance marketing ${k}`, words: "3,000+", desc: `Budget structure, bidding and creative testing to scale paid ads for ${lo} without waste.` },
      { title: `Reputation Management for ${nm}: Building Trust That Converts`, keyword: `${k} reputation management`, words: "2,800+", desc: `Review generation, response protocols and trust signals tailored to ${lo}.` },
      { title: `The Complete Social Media Strategy for ${nm} in 2026`, keyword: `social media for ${k}`, words: "3,200+", desc: `Platform-by-platform strategy, content pillars and a posting cadence for ${lo}.` },
      { title: `Video & Reels Marketing for ${nm}: Hooks, Formats & Distribution`, keyword: `video marketing ${k}`, words: "2,900+", desc: `Short-form video frameworks proven to earn reach and enquiries for ${lo}.` },
      { title: `Website Design Essentials for ${nm}: Built to Convert`, keyword: `${k} website design`, words: "2,800+", desc: `The pages, structure and features every high-performing ${lo} website needs.` },
      { title: `Google Ads vs Meta Ads for ${nm}: Where to Spend First`, keyword: `Google Ads vs Meta Ads ${k}`, words: "2,900+", desc: `A budget-led decision framework for ${lo} choosing between search and social ads.` },
      { title: `Marketing Budgets for ${nm}: How Much to Spend & Where`, keyword: `${k} marketing budget`, words: "2,800+", desc: `Benchmark budgets, channel allocation and ROI expectations for ${lo}.` },
      { title: `Competitor Analysis for ${nm}: Win Share Without Outspending`, keyword: `${k} competitor analysis`, words: "2,900+", desc: `How to audit rivals' keywords, offers and content to find your ${lo} edge.` },
      { title: `Festival & Seasonal Campaigns for ${nm} That Actually Sell`, keyword: `${k} festival campaigns`, words: "2,800+", desc: `Timing, creative and offer structures for peak-season ${lo} campaigns.` },
      { title: `Analytics & KPIs for ${nm}: Measuring What Matters`, keyword: `${k} marketing analytics`, words: "2,900+", desc: `The dashboards and metrics that tell ${lo} owners whether marketing is working.` },
      { title: `Scaling a ${d.name.replace(/s$/, "")} Brand: From Local to Multi-City`, keyword: `scaling ${k} brand`, words: "3,000+", desc: `The marketing systems that let ${lo} expand into new locations profitably.` },
    ];
    for (const b of extra) { if (d.blogs.length >= 20) break; if (!d.blogs.some(x => x.title === b.title)) d.blogs.push(b); }
  }
  if (d.blogs.length < 40) {
    const k = (SEEDS[id] && SEEDS[id].kw) || (HAND_CTX[id] && HAND_CTX[id].kw) || d.name.toLowerCase();
    const nm = d.name, lo = d.name.toLowerCase(), sg = d.name.replace(/s$/, "");
    const extra2 = [
      { title: `Instagram Growth for ${nm}: From Zero to a Lead-Generating Profile`, keyword: `Instagram marketing ${k}`, words: "3,000+", desc: `A step-by-step Instagram growth system for ${lo} — profile, content pillars and DMs that convert.` },
      { title: `Facebook Marketing for ${nm}: Pages, Groups & Paid Reach in 2026`, keyword: `Facebook marketing ${k}`, words: "2,900+", desc: `How ${lo} use Facebook pages, communities and ads to reach local buyers.` },
      { title: `YouTube Marketing for ${nm}: Long-Form Video That Builds Authority`, keyword: `YouTube marketing ${k}`, words: "3,000+", desc: `Channel strategy, video ideas and SEO that turn ${lo} into trusted experts.` },
      { title: `Google Business Profile Optimisation for ${nm}: The Map-Pack Playbook`, keyword: `Google Business Profile ${k}`, words: "2,900+", desc: `Every field, post and review tactic that gets ${lo} into the local map pack.` },
      { title: `Landing Page Design for ${nm}: Pages That Turn Ad Clicks into Leads`, keyword: `${k} landing page`, words: "2,800+", desc: `Layout, copy and proof elements that make ${lo} landing pages convert.` },
      { title: `Copywriting for ${nm}: Words That Sell Without Sounding Salesy`, keyword: `${k} copywriting`, words: "2,800+", desc: `Headline, offer and CTA frameworks for persuasive ${lo} marketing copy.` },
      { title: `Retargeting & Remarketing for ${nm}: Winning Back Lost Visitors`, keyword: `retargeting ${k}`, words: "2,900+", desc: `Pixel setup, audiences and creative that re-engage ${lo} prospects who didn't convert.` },
      { title: `Marketing Automation for ${nm}: Save Time, Lose No Leads`, keyword: `marketing automation ${k}`, words: "3,000+", desc: `Workflows, follow-ups and CRM basics that scale ${lo} marketing without more staff.` },
      { title: `Influencer & Creator Marketing for ${nm}: Partnerships That Pay`, keyword: `influencer marketing ${k}`, words: "2,900+", desc: `Finding, briefing and measuring creators to grow ${lo} reach and trust.` },
      { title: `Online Reviews for ${nm}: Getting More 5-Star Ratings Ethically`, keyword: `${k} online reviews`, words: "2,800+", desc: `Review-request systems and response scripts that build ${lo} credibility.` },
      { title: `Mobile Marketing for ${nm}: Reaching Buyers on the Device They Use Most`, keyword: `mobile marketing ${k}`, words: "2,900+", desc: `Mobile-first sites, SMS, WhatsApp and app strategies for ${lo}.` },
      { title: `SEO Content Writing for ${nm}: Articles That Rank and Convert`, keyword: `SEO content ${k}`, words: "3,100+", desc: `Keyword research, structure and on-page tactics for ${lo} blog content.` },
      { title: `Technical SEO for ${nm} Websites: Speed, Structure & Schema`, keyword: `technical SEO ${k}`, words: "2,900+", desc: `Core Web Vitals, crawlability and schema fixes that lift ${lo} rankings.` },
      { title: `Lead Nurturing for ${nm}: Turning 'Maybe' into 'Yes'`, keyword: `lead nurturing ${k}`, words: "2,900+", desc: `Sequenced follow-up across WhatsApp, email and calls that closes ${lo} enquiries.` },
      { title: `Pricing & Offer Strategy for ${nm} Campaigns`, keyword: `${k} offer strategy`, words: "2,800+", desc: `Designing offers, bundles and urgency that boost ${lo} campaign conversions.` },
      { title: `Crisis & Reputation Defence for ${nm}: Handling Negative Feedback`, keyword: `${k} reputation defence`, words: "2,800+", desc: `Response protocols and prevention systems that protect ${lo} brand trust.` },
      { title: `Customer Retention Strategy for ${nm}: The Loyalty Playbook`, keyword: `customer retention ${k}`, words: "3,000+", desc: `Loyalty, referral and re-engagement programs that lift ${lo} repeat revenue.` },
      { title: `Digital PR for ${nm}: Earning Coverage, Backlinks & Authority`, keyword: `digital PR ${k}`, words: "2,900+", desc: `Outreach and story angles that win ${lo} press, mentions and links.` },
      { title: `Omnichannel Marketing for ${nm}: One Brand Across Every Touchpoint`, keyword: `omnichannel marketing ${k}`, words: "3,000+", desc: `Aligning search, social, web and messaging into one seamless ${lo} experience.` },
      { title: `The Founder's Guide to Marketing a ${sg} on a Tight Budget`, keyword: `${k} marketing budget guide`, words: "3,100+", desc: `A practical, low-budget marketing roadmap for ${lo} founders doing it lean.` },
    ];
    for (const b of extra2) { if (d.blogs.length >= 40) break; if (!d.blogs.some(x => x.title === b.title)) d.blogs.push(b); }
  }
});

export function getCtx(indId) { return (indId && (SEEDS[indId] || HAND_CTX[indId])) || null; }

export function blogMeta(b) {
  const h = hsh(b.title);
  const MO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const wNum = Math.min(3500, Math.max(2500, parseInt(String(b.words).replace(/[^0-9]/g, "")) || 2800));
  return { date: `${1 + (h % 26)} ${MO[h % 6]} 2026`, read: `${Math.max(12, Math.round(wNum / 240))} min read`, words: `${wNum.toLocaleString("en-IN")}+` };
}

export let _openBlog = () => { };

export function registerOpenBlog(fn) { _openBlog = fn; }

export function openBlogGlobal(b) { _openBlog(b); }

export const ANCHORS = ["Business Volunteers Advertising Agency", "Digital Marketing Experts", "SEO Agency", "Performance Marketing Agency", "Lead Generation Specialists", "Website Development Experts"];

export const FBSTATS = [{ n: "82 Cr+", l: "Internet Users in India" }, { n: "₹55,000 Cr", l: "Indian Digital Ad Market" }, { n: "21%", l: "Digital Ad Spend CAGR" }, { n: "88%", l: "Buyers Research Online First" }, { n: "90%+", l: "WhatsApp Open Rates" }, { n: "5.4x", l: "Avg Digital ROI vs Print" }];

export function articleFaqs(ctx, name, kw) {
  const lu = ctx.u.toLowerCase(), cu = ctx.cu;
  return [
    [`How much does digital marketing cost for a ${lu} in India?`, `Plans at Business Volunteers start at ₹3,499/month for social media management, with Google Ads managed at 18% of ad spend and Meta Ads at 15%. Most ${name.toLowerCase()} see meaningful traction with ₹15,000–₹40,000 total monthly investment.`],
    [`How long does SEO take to show results for ${kw} keywords?`, `Typically 3–6 months for notable ranking movement and 6–9 months for compounding lead flow. Local map-pack improvements often arrive faster — within 60–90 days of profile and review work.`],
    [`Should I hire an agency or do digital marketing myself?`, `DIY works for posting; strategy, ads and SEO punish inexperience with wasted budget. A founder-led partner like Business Volunteers gives senior attention at a fraction of an in-house team's cost.`],
    [`Which platform matters most for reaching ${cu}?`, `Google captures existing demand ('${kw} near me'); Instagram and Facebook create it; WhatsApp retains it. The mix depends on your ticket size — we map this in a free strategy session.`],
    [`How do I rank in the Google map pack?`, `Three levers: a fully optimised Business Profile, review velocity with replies, and local relevance signals (citations, geo-pages). Most clients reach top-3 within 90–120 days.`],
    [`What budget should I start ads with?`, `₹15,000/month media spend is the practical floor for statistically useful data. We'd rather you start focused on one campaign than spread thin across five.`],
    [`How often should a ${lu} publish content?`, `12–20 social posts plus 2–4 SEO articles monthly is the sweet spot — enough for momentum without quality collapse. Consistency beats bursts every time.`],
    [`Can AI search engines like ChatGPT really send ${cu}?`, `Yes — AI engines cite sources with clear structure, direct answers and FAQ schema. This article's format is exactly what gets referenced; we build the same into client sites.`],
    [`How do I measure whether marketing is actually working?`, `Track enquiries, cost per lead and revenue attributed — not likes. Our KPI dashboards (from ₹2,000) put these numbers in front of you in real time.`],
    [`What are the biggest mistakes ${name.toLowerCase()} make online?`, `Ignoring reviews, boosting posts instead of running structured ads, no WhatsApp follow-up system, and websites without clear enquiry capture. All four are fixable within a month.`],
    [`How do I retain ${cu} and drive repeat business?`, `An opted-in WhatsApp list with monthly value broadcasts typically lifts repeat business 25–40%. It is the cheapest revenue most businesses never build.`],
    [`Why choose Business Volunteers for ${kw} marketing?`, `Founder-led execution, transparent pricing from ₹149 deliverables to full retainers, no lock-in contracts, and 2,200+ clients across 89 industries. Visit businessvolunteers.online or WhatsApp us for a free consultation.`],
  ];
}

export const KPI_SERVICE = {
  icon: "📊", n: "Dashboard & KPI Management Systems", p: "₹2,000–₹15,000",
  d: "Turn your business data into clear insights, actionable reports, and real-time performance tracking. Custom dashboards and KPI systems that help owners, managers and teams make faster, smarter decisions.",
  builds: ["Executive & CEO Dashboards", "Sales Performance Dashboards", "Lead Tracking Systems", "Marketing Performance Dashboards", "Revenue & Profit Tracking", "Employee Performance Dashboards", "HR & Recruitment Dashboards", "Inventory Management Systems", "Financial Reporting Dashboards", "Customer Support Analytics", "Project Management Dashboards", "Franchise Performance Dashboards", "Operations Monitoring Systems", "Business Intelligence Reports"],
  features: ["Custom KPI Tracking", "Automated Reporting", "Real-Time Performance Monitoring", "Excel & Google Sheets Solutions", "Interactive Visual Dashboards", "Department-wise Analytics", "Monthly & Weekly Reports", "Goal vs Achievement Tracking", "Data Consolidation from Multiple Sources", "Custom Alerts & Performance Indicators"],
};

// Real brand social icons (inline SVG, no external CDNs)

export const SERVICES = [
  {
    id: "graphic-design", icon: "🎨", n: "Graphic Design", p: "₹150 onwards",
    seoTitle: "Graphic Design Services in India – Posters, Logos, Branding & Presentations | Business Volunteers",
    meta: "Affordable professional graphic design: social posters from ₹150, visiting cards ₹280, multi-page decks ₹130/page, logos ₹850–₹3,500, plus packaging, large-format and corporate branding. Serving 89+ industries from Noida, India.",
    d: "From social media posts and logos to packaging, presentations and large-format branding — transparent per-design pricing with fast turnaround across 89+ industries.",
    pain: ["Inconsistent, off-brand creatives that don't convert", "Designers who quote vague, unpredictable prices", "Slow turnaround that misses campaign and festival deadlines"],
    del: ["Social & digital creatives from ₹150", "Visiting cards, certificates & menus from ₹280", "Multi-page decks & catalogues at ₹130/page", "Logo design & full brand guidelines", "Large-format: standees, flex, hoardings & shop branding", "Packaging, labels & product mockups", "Restaurant menus & hospitality design", "Infographics, photo retouching & custom illustration"],
    approach: "Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with revisions. Transparent per-design pricing means you know the cost before we start — no surprises.",
    result: "Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats — at a fraction of typical agency rates.",
    faqs: [["How is graphic design priced?", "Per design, by category. Standard social creatives are ₹150 each, structured designs like visiting cards and certificates are ₹280, multi-page documents are ₹130 per page, and large-format or corporate branding starts at ₹499. The full price list is below."], ["Do you offer logo design?", "Yes — logo design ranges from ₹850 to ₹3,500 depending on complexity, and complete brand guidelines are available from ₹2,999."], ["How fast is delivery?", "Most standard creatives are delivered within 24–48 hours. Multi-page and large-format projects are scheduled based on scope."], ["Do prices include revisions and final files?", "Yes — each design includes revisions and you receive print- and web-ready files. GST applies as per norms and prices are subject to change."], ["Which industries do you design for?", "We serve 89+ industries — healthcare, education, real estate, restaurants, retail, D2C and more."]],
    priceTable: [
      { cat: "Standard Creatives — ₹150 each", note: "Single-page social & digital formats.", items: [["Poster Design", "₹150"], ["Flyer Design", "₹150"], ["Pamphlet Design", "₹150"], ["Leaflet Design", "₹150"], ["Social Media Post Design", "₹150"], ["Festival Post Design", "₹150"], ["Promotional Post Design", "₹150"], ["Product Post Design", "₹150"], ["Offer Post Design", "₹150"], ["Event Poster Design", "₹150"], ["School Admission Creative", "₹150"], ["Food Promotion Poster", "₹150"], ["Meta Ad Creative", "₹150"], ["Google Display Ad", "₹150"], ["Google Banner Ad", "₹150"], ["WhatsApp Marketing Creative", "₹150"], ["App Promotion Creative", "₹150"]] },
      { cat: "Structured Designs — ₹280 each", note: "Layout complexity — cards, certificates, menus.", items: [["Visiting Card Design", "₹280"], ["Letterhead Design", "₹280"], ["ID Card Design", "₹280"], ["Certificate Design", "₹280"], ["Quotation Design", "₹280"], ["Carousel Design", "₹280"], ["Menu Card Design", "₹280"], ["YouTube Banner Design", "₹280"], ["Event Invitation Design", "₹280"]] },
      { cat: "Multi-Page Documents — ₹130 / page", note: "Billed per page or per slide.", items: [["PPT / Presentation Design", "₹130/slide"], ["Investor Pitch Deck", "₹130/slide"], ["Sales Presentation", "₹130/slide"], ["Business Proposal Design", "₹130/slide"], ["Training Presentation", "₹130/slide"], ["Catalogue Design", "₹130/page"], ["School Magazine Design", "₹130/page"], ["Prospectus Design", "₹130/page"], ["Annual Report Design", "Custom Quote"]] },
      { cat: "Large-Format & Corporate Branding — ₹499+", note: "Outdoor, packaging & corporate identity.", items: [["Standee Design", "₹649"], ["Flex Banner Design", "₹649"], ["Roll-Up Banner Design", "₹649"], ["Hoarding Design", "₹1,149"], ["Billboard Design", "₹1,149"], ["Shop Branding Design", "₹1,649 onwards"], ["Vehicle Branding Design", "₹1,149 onwards"], ["Wall Branding Design", "₹1,149 onwards"], ["Product Packaging Design", "₹1,649"], ["Box Packaging Design", "₹2,149"], ["Company Profile Design", "₹1,999 onwards"], ["Brand Guidelines", "₹2,999 onwards"], ["Logo Design", "₹850 – ₹3,500"]] },
      { cat: "Packaging & Product Design", note: "", items: [["Product Label Design", "₹649"], ["Product Tag Design", "₹430"], ["Shopping Bag Design", "₹649"], ["Product Mockup Design", "₹430"]] },
      { cat: "Restaurant & Hospitality", note: "", items: [["Restaurant Menu Design", "₹649"], ["Room Service Menu Design", "₹649"], ["Hotel Brochure Design", "₹1,149"], ["Tent Card Design", "₹430"]] },
      { cat: "Custom & Creative Services", note: "", items: [["Infographic Design", "₹649"], ["Vector Tracing", "₹649"], ["Photo Retouching", "₹430"], ["Photo Manipulation", "₹649"], ["AI Image Enhancement", "₹150"], ["Merchandise Design", "₹649"], ["T-Shirt Design", "₹649"], ["Landing Page Graphics", "₹649"], ["Custom Illustration", "Custom Quote"], ["Custom Artwork", "Custom Quote"]] }
    ]
  },
  {
    id: "ugc", icon: "🎥", n: "UGC Reels & Creator Marketing", p: "₹2,100–₹5,100/campaign",
    seoTitle: "UGC Reels & Creator Marketing – Authentic Videos Posted to Your Accounts | Business Volunteers",
    meta: "Our trained models create authentic UGC-style reels promoting your service and post them directly to your social accounts. ₹2,100–₹5,100.",
    d: "Our models authentically promote your service through scroll-stopping UGC-style reels — scripted, filmed, edited and posted directly to your Instagram & Facebook accounts.",
    pain: ["No real person to front your brand on camera", "Generic ads that look like ads — not authentic content", "Competitor brands growing on UGC while you stay invisible"],
    del: ["UGC-style reel scripted for your service", "Model films authentic 'user' style content", "Professional editing with captions & trending audio", "Posted directly to your Instagram/Facebook", "Hashtag & caption strategy included", "Multiple formats: Story + Reel + Feed"],
    approach: "We brief, script and produce creator-style content that feels organic — not like an ad. Our models authentically showcase your product or service the way a real customer would, posted on your own account to build trust and reach.",
    result: "UGC content earns 4–8x more organic reach than branded posts, and converts at 3x the rate of studio-produced ads.",
    faqs: [["What is UGC?", "User Generated Content — videos that look and feel like real customer experiences. Our models create this style of content professionally for your brand."], ["Will the reel be posted on MY account?", "Yes — we get temporary access, post, then hand back. You own all content and the post stays on your page."], ["Can I choose the model?", "We match the model to your target audience. You can specify gender, age range and tone (energetic, calm, professional, etc)."], ["How many reels are included?", "₹2,100 = 1 reel; ₹3,500 = 3 reels; ₹5,100 = 6 reels. Bulk pricing available for monthly plans."], ["What services/products work best?", "Clinics, salons, fitness, food, fashion, coaching, apps, skincare, homestays — any service where a real person showing results builds trust fast."]]
  },
  {
    id: "kpi", icon: "📊", n: "Dashboard & KPI Management Systems", p: "₹2,000–₹15,000", isFirst: true,
    seoTitle: "KPI Dashboard & Business Intelligence Systems | Business Volunteers",
    meta: "Custom KPI dashboards, sales trackers, and real-time performance systems from ₹2,000.",
    d: "Turn business data into clear insights, automated reports and real-time tracking — so owners and teams make faster, smarter decisions.",
    pain: ["No visibility into real business performance — decisions made on gut, not data", "Multiple spreadsheets, no single source of truth", "Team doesn't know their KPIs or how they're tracking"],
    del: KPI_SERVICE.builds,
    approach: "Discovery call → metric mapping → tool selection (Excel / Google Sheets / Looker Studio) → build → team training → monthly refresh. Features include custom KPI tracking, automated reporting, real-time monitoring, goal-vs-achievement views, multi-source data consolidation and custom alerts.",
    result: "Clients make 40% faster decisions; managers save 6+ hours every week on manual reporting.",
    faqs: [["What software do you build dashboards in?", "Excel, Google Sheets or Looker Studio depending on your team's comfort — all with live formulas, interactive views and mobile-friendly layouts."], ["How long does a dashboard take to build?", "Simple trackers ship in 3–5 days; multi-department systems with automation take 2–3 weeks including training."], ["Can it pull live data from Google Ads and Meta?", "Yes — via Looker Studio connectors or scheduled syncs, your spend, leads and ROAS update automatically."], ["Do you train our team to use it?", "Always. Every build includes a recorded walkthrough, a live training session and an SOP document."], ["What's the difference between the ₹2,000 and ₹15,000 dashboards?", "₹2,000 covers a focused single-purpose tracker; ₹15,000 buys a multi-department BI system with automated reporting, alerts and consolidation from multiple data sources."]]
  },
  {
    id: "seo", icon: "🔍", n: "SEO Services", p: "₹4,000–₹12,000/mo",
    seoTitle: "SEO Services – Rank #1 on Google with Business Volunteers",
    meta: "Professional SEO services in India. Increase organic traffic and generate leads with Business Volunteers' data-driven SEO strategies.",
    d: "Rank at the top and get organic leads 24/7 with data-driven search engine optimisation.",
    pain: ["Competitors outrank you for your own service keywords", "Website traffic exists but doesn't convert into enquiries", "Dependence on paid ads with rising cost-per-lead"],
    del: ["Complete technical SEO audit & fixes", "Keyword research & content mapping", "On-page optimisation (titles, metas, schema)", "Authority link-building & digital PR", "Google Business Profile optimisation", "Monthly ranking & traffic reports"],
    approach: "We start with a deep audit, build a keyword-to-page map, then execute on-page, technical and authority work in monthly sprints — with transparent dashboards showing rankings, traffic and leads.",
    result: "Clients typically see notable ranking improvements in 3–6 months and 2–4x organic lead growth by month 9.",
    faqs: [["How long before I see SEO results?", "Typically 3–6 months for notable improvements. We set milestones and report progress regularly so you always know where your campaign stands."], ["Do you guarantee #1 rankings?", "No ethical agency can guarantee specific positions. We guarantee process, transparency and measurable month-on-month growth."], ["What's included in the monthly fee?", "Audit fixes, content optimisation, link-building, GMB management and a detailed monthly report with a strategy call."]]
  },
  {
    id: "google-ads", icon: "🎯", n: "Google Ads Management", p: "18% of Monthly Ad Spend",
    seoTitle: "Google Ads Management India – Certified PPC Experts | Business Volunteers",
    meta: "Google Search, Display & YouTube campaigns engineered for ROI. Certified management at 18% of ad spend (e.g. ₹50,000 budget = ₹9,000 fee).",
    d: "Capture high-intent searches the moment customers look for you — Search, Display & YouTube.",
    pain: ["Burning budget on broad keywords with no conversions", "No conversion tracking, so ROI is invisible", "Agency reports clicks, not revenue"],
    del: ["Full account & conversion tracking setup", "Keyword + negative keyword architecture", "Ad copy A/B testing & extensions", "Landing page CRO recommendations", "Remarketing & YouTube campaigns", "Weekly optimisation + monthly ROI report"],
    approach: "Conversion tracking first, then tightly themed ad groups, ruthless negative keywords and weekly bid optimisation — every rupee is mapped to a lead.",
    result: "Average client cost-per-lead drops 30–50% within 60 days of takeover.",
    faqs: [["What is the minimum ad spend?", "We recommend a minimum of ₹15,000/month media budget for meaningful data, though we tailor to your market."], ["Do you charge setup fees?", "One-time setup is included for accounts on 3-month+ engagements."], ["Who owns the ad account?", "You do — always. Full transparency, full access."]]
  },
  {
    id: "meta-ads", icon: "📣", n: "Meta Ads Management", p: "15% of Ad Spend",
    seoTitle: "Meta Ads Management (Facebook & Instagram) | Business Volunteers",
    meta: "Facebook & Instagram ads that generate real leads. Targeting, creatives, retargeting and weekly reporting by Business Volunteers.",
    d: "Facebook & Instagram campaigns engineered for real leads — targeting, creative and retargeting.",
    pain: ["Boosted posts that bring likes but no business", "Creative fatigue — same ad, rising costs", "No retargeting of warm audiences"],
    del: ["Pixel & Conversions API setup", "Audience research & lookalike building", "Scroll-stopping creative & copy", "A/B testing framework", "Retargeting funnels", "Weekly performance reports"],
    approach: "We build full-funnel campaigns: cold awareness, warm engagement, hot retargeting — with fresh creative cycles every 2 weeks to beat fatigue.",
    result: "Clients average 4–8x ROAS on lead-gen campaigns within the first quarter.",
    faqs: [["Which is better — Meta or Google Ads?", "Google captures demand; Meta creates it. Most businesses need both — we'll recommend the right split on your free audit."], ["Do you make the creatives?", "Yes — static posts, carousels and reels are all produced in-house."], ["Can you run ads for healthcare?", "Yes, with full NMC/Meta policy compliance built into copy and targeting."]]
  },
  {
    id: "smm", icon: "📱", n: "Social Media Marketing", p: "₹3,499–₹8,999/mo", isFirst: true,
    seoTitle: "Social Media Marketing Services India – Instagram, Facebook & LinkedIn | Business Volunteers",
    meta: "Grow your brand on Instagram, Facebook & LinkedIn with premium content calendars, branded posting, reels and analytics. Plans from ₹3,499/mo. No lock-in.",
    d: "Grow on Instagram, Facebook & LinkedIn with content calendars, posting and analytics.",
    pain: [
      "Posting randomly with zero strategy — content that gets likes but no leads or enquiries",
      "A dead or inconsistent page that makes potential customers question your credibility",
      "No time to plan, design, caption, schedule and analyse every single month",
      "Competitor brands growing their following and filling their DMs while you stay stuck",
      "Boosted posts wasting budget with nothing to show for it — no calls, no walk-ins",
      "No idea what content is actually working or why reach keeps dropping",
    ],
    del: [
      "Monthly content calendar (planned 30 days ahead)",
      "Branded post design — carousels, single posts, stories",
      "Reels scripted, edited & posted (2–8/mo by plan)",
      "Captions written with SEO + hashtag strategy",
      "Festival, trend & occasion creatives",
      "Community management — comment & DM replies",
      "Instagram & Facebook page optimisation",
      "Monthly analytics report with growth insights",
      "Competitor tracking & content benchmarking",
      "Story highlights design & organisation",
    ],
    approach: `We start with a 7-day brand audit: your existing content, competitors, audience behaviour and industry scroll-stopping formats. Then we build a content system — not just random posts. Every month follows a proven mix: 40% Education (build trust and authority), 30% Proof (results, reviews, transformations), 20% Personality (behind the scenes, team, culture) and 10% Offer (promotions, CTAs). This is the same formula behind pages that grow from 0 to 10K followers and from 10 DMs a month to 100+. Reels are scripted with hook-first structures, designed to stop the scroll in the first 2 seconds. Festival creatives are never generic — every design is branded. And every decision is backed by monthly analytics: what got saves, what got shares, what got enquiries — and we double down on what works.`,
    result: "Clients average 3–5x engagement growth, 2–4x follower growth and a consistent inbound DM flow within 90 days of starting.",
    faqs: [
      ["What platforms are covered?", "Instagram and Facebook are included in all plans. LinkedIn is added from the Growth plan. We focus on the 2–3 platforms that matter most for your industry rather than spreading thin."],
      ["How many posts and reels per month?", "Starter: 12 posts + 2 reels. Growth: 20 posts + 8 reels. Pro: 30 posts + 12 reels. All plans include stories and festival creatives."],
      ["Do you write the captions too?", "Yes — fully written, brand-voice captions with hashtag research included in every plan. You approve before anything goes live."],
      ["Will you manage comments and DMs?", "Community management (replies to comments and DMs) is included in Growth and Pro plans."],
      ["What if I don't like a post?", "You get a content calendar shared 5–7 days before posting. Request changes, give feedback — nothing goes live without your nod."],
      ["Do I need to give you my login?", "We use a shared access method (Meta Business Suite) — secure, no password sharing required."],
      ["How quickly will I see results?", "Most clients see clear engagement improvement in 30 days. Meaningful follower and DM growth typically builds from month 2–3 onwards as content compounds."],
      ["Can you handle a brand-new page with 0 followers?", "Absolutely — we've launched pages from zero that hit 5K followers in 90 days. A new page just needs the right content mix, consistency and a small ads boost to accelerate."],
      ["Is this different from running Meta Ads?", "Yes — Social Media Marketing (this service) is organic content: posts, reels, stories. Meta Ads is paid promotion. Both work best together, but each can run independently."],
      ["What's included in the monthly analytics report?", "Reach, impressions, follower growth, engagement rate, top-performing posts, reel views, saves and shares — plus our recommendations for next month."],
    ],
  },
  {
    id: "webdev", icon: "💻", n: "Website Development", p: "₹6,500–₹18,000",
    seoTitle: "Website Development – Fast, SEO-Ready Business Websites | Business Volunteers",
    meta: "Modern, fast, SEO-ready websites with WhatsApp integration, SSL and 1-year support. From ₹6,500.",
    d: "Modern, fast, SEO-ready websites with WhatsApp integration, SSL and 1-year support.",
    pain: ["Outdated site that loses mobile visitors", "No enquiry capture or WhatsApp integration", "Slow load times killing Google rankings"],
    del: ["Mobile-first responsive design", "SEO-ready structure & schema", "WhatsApp + form lead capture", "Speed optimisation & SSL", "Content upload & training", "1 year of support"],
    approach: "Design for conversion first: clear CTAs, trust signals and sub-3-second loads — then layer in SEO architecture so the site earns traffic from day one.",
    result: "Client websites average 90+ mobile speed scores and 2–3x enquiry rates vs. their old sites.",
    faqs: [["How long does a website take?", "Typically 2–4 weeks depending on pages and content readiness."], ["Do you provide hosting?", "We set up affordable hosting in your name — you own everything."], ["Can you redesign my existing site?", "Yes — redesigns and migrations are a specialty."]]
  },
  {
    id: "ecom", icon: "🛒", n: "E-commerce Marketing", p: "₹8,000–₹20,000/mo",
    seoTitle: "E-commerce Marketing – Scale Your Online Store | Business Volunteers",
    meta: "Full-funnel e-commerce growth: catalog ads, marketplace optimisation, retargeting and conversion rate optimisation.",
    d: "Full-funnel growth for online stores: catalog ads, marketplace SEO, retargeting & CRO.",
    pain: ["High traffic, low add-to-cart and checkout rates", "Marketplace listings buried under competitors", "Ad spend scaling faster than revenue"],
    del: ["Catalog & dynamic product ads", "Amazon/Flipkart listing optimisation", "Abandoned-cart recovery flows", "Conversion rate optimisation", "Review generation systems", "ROAS-focused reporting"],
    approach: "We optimise the whole funnel — traffic, product page, checkout and retention — so every campaign compounds instead of leaking.",
    result: "Stores typically see 25–60% revenue lift in the first quarter from CRO + retargeting alone.",
    faqs: [["Do you work with Shopify and WooCommerce?", "Yes, plus custom stores and marketplace-only sellers."], ["What ROAS can I expect?", "Healthy stores target 4x+ blended ROAS; we'll benchmark yours on the audit."], ["Can you manage Amazon ads?", "Yes — Sponsored Products, Brands and Display."]]
  },
  {
    id: "crm", icon: "🤝", n: "CRM & Automation", p: "₹12,000–₹65,000",
    seoTitle: "CRM & Marketing Automation Solutions | Business Volunteers",
    meta: "Custom CRM setup, WhatsApp automation, lead pipelines and appointment reminders that stop leads from leaking.",
    d: "Custom CRM, WhatsApp automation, lead pipelines and appointment reminders.",
    pain: ["Leads lost in WhatsApp chats and spreadsheets", "No follow-up system — enquiries go cold", "Zero visibility on pipeline and conversion"],
    del: ["CRM selection & custom setup", "Lead pipeline & stage design", "WhatsApp/email automation flows", "Appointment reminder systems", "Team training & SOPs", "Pipeline dashboards"],
    approach: "Map your sales journey, then automate every follow-up touchpoint — so no lead is ever forgotten and managers see the pipeline live.",
    result: "Clients recover 20–35% of previously lost leads through automated follow-up alone.",
    faqs: [["Which CRM do you recommend?", "Depends on size and budget — we work with Zoho, HubSpot, and custom Sheets-based systems."], ["Can it integrate with my website forms?", "Yes — every enquiry source flows into one pipeline."], ["Is training included?", "Full team training and SOP documents are part of every build."]]
  },
  {
    id: "leadgen", icon: "🧲", n: "Lead Generation", p: "Custom / Pay-per-lead",
    seoTitle: "Lead Generation Services – Qualified Leads on Demand | Business Volunteers",
    meta: "Performance lead generation across Google, Meta and LinkedIn. Pay for qualified leads that meet agreed criteria.",
    d: "Performance-driven lead programs across Google, Meta & LinkedIn — pay for outcomes.",
    pain: ["Unqualified leads wasting your sales team's time", "Unpredictable lead flow month to month", "No clear cost-per-qualified-lead number"],
    del: ["Offer & funnel design", "Multi-channel campaign execution", "Lead qualification framework", "CRM handoff integration", "Weekly lead quality reviews", "Cost-per-lead optimisation"],
    approach: "We agree on what a 'qualified lead' means for you, then build funnels and feedback loops that optimise toward that definition — not vanity volume.",
    result: "Defined cost-per-qualified-lead within 30 days; most clients scale 2–3x by month three.",
    faqs: [["What is pay-per-lead?", "You pay only for leads that meet agreed criteria — budget, location, intent — defined upfront."], ["Which industries does this work for?", "High-ticket services shine: healthcare, real estate, education, B2B."], ["How fast can leads start?", "Paid funnels typically deliver first leads within 7–10 days of launch."]]
  },
  {
    id: "content", icon: "✍️", n: "Content Marketing", p: "₹5,000–₹15,000/mo",
    seoTitle: "Content Marketing Services – Blogs, Guides & Authority | Business Volunteers",
    meta: "SEO blogs, pillar guides and thought-leadership content that builds topical authority and inbound leads.",
    d: "SEO blogs, pillar guides and thought-leadership that build authority and inbound leads.",
    pain: ["Blog exists but brings zero traffic", "No content strategy — random topics", "Competitors cited by AI search, you're invisible"],
    del: ["Topic cluster & pillar strategy", "2–4 SEO articles per month", "FAQ & AI-answer optimisation", "Internal linking architecture", "Content refresh of old posts", "Performance tracking"],
    approach: "Pillar-and-cluster strategy aligned to your services and industries — written for humans, structured for Google and AI Overviews.",
    result: "Compounding organic growth: clients average 3–6x blog traffic within 6–9 months.",
    faqs: [["Who writes the content?", "In-house writers + your subject expertise via short interviews — never generic filler."], ["Do you optimise for AI search?", "Yes — structured Q&A, schema and direct-answer formatting for AI Overviews and LLMs."], ["Can you write for healthcare?", "Yes, with compliance-aware, citation-backed drafting."]]
  },
  // Email Marketing service removed per client request.
  {
    id: "localseo", icon: "📍", n: "Local SEO", p: "₹3,500–₹9,000/mo",
    seoTitle: "Local SEO Services – Dominate 'Near Me' Searches | Business Volunteers",
    meta: "Google Business Profile optimisation, reviews and local citations that put you #1 on the map pack.",
    d: "Own the Google map pack: GBP optimisation, reviews, citations and local content.",
    pain: ["Invisible in 'near me' searches", "Competitors with more reviews stealing walk-ins", "Inconsistent name/address/phone across the web"],
    del: ["Google Business Profile optimisation", "Review generation system", "Local citation building", "Geo-targeted landing pages", "Local schema markup", "Map-pack rank tracking"],
    approach: "Optimise the profile, systematise reviews, and build local relevance signals — the three levers that decide map-pack rankings.",
    result: "Most clients reach top-3 map pack for primary keywords within 90–120 days.",
    faqs: [["How do you get more reviews ethically?", "Automated post-service requests via WhatsApp/SMS to genuinely happy customers — never fake reviews."], ["I have multiple locations — can you handle that?", "Yes, with per-location profiles, pages and tracking."], ["What if I have a bad review?", "We implement response protocols and bury-it-with-volume strategies."]]
  },
  {
    id: "whatsapp", icon: "💬", n: "WhatsApp Marketing", p: "₹2,500–₹6,000/mo",
    seoTitle: "WhatsApp Marketing Services India | Business Volunteers",
    meta: "India's most powerful channel: 90%+ open rates. Broadcasts, automation and catalog selling on WhatsApp.",
    d: "India's most powerful channel — 90%+ open rates. Broadcasts, automation & catalogs.",
    pain: ["Customer numbers sitting unused in your phone", "Manual replies eating your team's day", "No way to broadcast offers compliantly"],
    del: ["WhatsApp Business API setup", "Broadcast list building & segmentation", "Automated replies & chatbots", "Catalog & payment setup", "Campaign calendars", "Delivery & response analytics"],
    approach: "Build an opted-in list, automate the routine, broadcast the valuable — turning WhatsApp into your highest-ROI retention channel.",
    result: "Clients see 90%+ open rates and 25–40% repeat-purchase lift from monthly campaigns.",
    faqs: [["Is bulk WhatsApp legal?", "Via the official Business API with opt-ins, yes — we set it up compliantly."], ["Can it reduce no-shows?", "Automated reminders cut no-shows by 60%+ for clinics and salons."], ["What does the API cost?", "Conversation-based pricing; we'll estimate from your volumes."]]
  },
  {
    id: "branding", icon: "✒️", n: "Logo & Branding", p: "₹850–₹3,500",
    seoTitle: "Logo Design & Brand Identity | Business Volunteers",
    meta: "Memorable logos and brand identities with all vector files and brand guidelines included.",
    d: "Memorable logos & brand identities. All vector files + brand guidelines included.",
    pain: ["A logo that looks dated next to competitors", "No consistent colours, fonts or voice", "Files missing — can't print or scale"],
    del: ["3 logo concepts + revisions", "Full vector file pack (AI, SVG, PNG)", "Colour & typography system", "Mini brand guidelines", "Social profile kit", "Print-ready formats"],
    approach: "Strategy before style: we learn your positioning, then design marks that are simple, memorable and built to scale across every medium.",
    result: "A complete identity delivered in 5–7 days, ready for web, print and social.",
    faqs: [["How many revisions do I get?", "Up to 3 rounds on the chosen concept — most clients finalise in 2."], ["Do I own the logo?", "100% — full copyright transfer with all source files."], ["Can you refresh my existing logo?", "Yes — modernisation while keeping brand recognition."]]
  },
  {
    id: "poster", icon: "🎨", n: "Poster Design", p: "From ₹149/design",
    seoTitle: "Poster & Creative Design from ₹149 | Business Volunteers",
    meta: "Eye-catching social media graphics, festival posters and print-ready creatives from just ₹149.",
    d: "Eye-catching social graphics, festival posters and print-ready creatives.",
    pain: ["Canva-template look that blends in", "Festival posts always last-minute", "Inconsistent visual identity across posts"],
    del: ["Custom branded designs", "Festival & occasion creatives", "Story + post + print sizes", "Quick 24–48h turnaround", "Source files on request", "Bulk monthly packs"],
    approach: "On-brand, scroll-stopping design with your colours and fonts — delivered fast enough to never miss a moment.",
    result: "From ₹149 per design with bulk packs that keep your feed premium all month.",
    faqs: [["What's the turnaround?", "Standard 24–48 hours; same-day rush available."], ["Do you do print sizes?", "Yes — flex, standee, brochure and visiting card formats."], ["Is there a monthly pack?", "Bulk packs start at 10 designs/month with priority delivery."]]
  },
  {
    id: "reels", icon: "🎬", n: "Reels & Video Production", p: "From ₹380/video",
    seoTitle: "Reels & Short Video Editing from ₹380 | Business Volunteers",
    meta: "Scripted, edited, trend-ready reels for Instagram and YouTube Shorts. All formats delivered.",
    d: "Scripting, editing, trending audio — reels that actually reach.",
    pain: ["Raw footage sitting unedited for weeks", "Reels with zero hook in the first 2 seconds", "No idea which trends fit your brand"],
    del: ["Hook-first scripting", "Professional editing & captions", "Trending audio matching", "Brand intro/outro templates", "All aspect ratios delivered", "Monthly reel calendars"],
    approach: "Hook, value, CTA — every reel follows the retention formula, edited with captions and pacing tuned for the algorithm.",
    result: "Client reels average 3–8x the reach of their static posts; viral hits regularly cross 1 lakh views.",
    faqs: [["Do you shoot or just edit?", "Both — remote editing from your footage, or guided shoot kits."], ["How fast is delivery?", "48–72 hours per reel; bulk calendars delivered weekly."], ["Can you make doctor/educational reels?", "A specialty — compliant, clear and engaging."]]
  },
];

// ── MINDSET / WHY / TEAM / COMPARE / TESTIMONIALS ─────────────────────────────

export const MINDSET = [
  { icon: "🤝", t: "Client-First Ownership", d: "We treat your business as our own. Customers don't trust faceless brands — they trust people. Our founder-led, hands-on approach means you always know who's driving your project." },
  { icon: "📊", t: "Data-Driven Decisions", d: "Every campaign is backed by analytics. We set measurable KPIs and iterate for real growth — not vanity metrics." },
  { icon: "🏆", t: "Results Over Ideas", d: "We focus on tangible ROI. Instead of flashy concepts, our creativity solves problems — like boosting conversions and lowering cost-per-lead." },
  { icon: "🔍", t: "Transparent Communication", d: "No hidden fees or confusion. We share progress openly through dashboards and reports so clients stay in the loop." },
  { icon: "🌱", t: "Ethical & Long-Term", d: "We believe in sustainable growth, not burnout tactics. 100% satisfaction with no lock-ins means we earn your trust — never force it." },
  { icon: "🎥", t: "UGC Reels & Creator Marketing", d: "Our trained models promote your services through authentic, scroll-stopping UGC-style reels — posted directly to your social accounts. ₹2,100–₹5,100 per campaign." },
  { icon: "💛", t: "Empathy & Care", d: "We listen first. 72% of consumers feel a deeper connection to a brand when they see real people behind it — so we show up as real partners, not vendors." },
];

export const DIFFS = [
  { icon: "🎯", t: "Result-Driven, Not Vanity-Driven", d: "We prove ROI with case metrics — leads, revenue and rankings, not just likes and impressions." },
  { icon: "🏛️", t: "Full-Service Under One Roof", d: "SEO, ads, design, web, video, CRM and dashboards — one accountable team saves you time and cost." },
  { icon: "🇮🇳", t: "Pan-India, Local Focus", d: "National reach with regional insight. Noida roots, multi-city success stories across 89 industries." },
  { icon: "👑", t: "Founder-Led Team", d: "Decision-makers stay on your account — your project is never passed down to juniors." },
];

export const COMPARE = [
  ["Cost Efficiency", "✓ Scalable pay-as-you-go plans (min. ₹3,500)", "✓ Low hourly rates", "✕ High retainer / lock-in", "⚠ High salary overhead"],
  ["Expertise Breadth", "✓ Full team (SEO, dev, design, ads)", "✕ Single skill set", "✓ Full service", "⚠ Limited bandwidth"],
  ["Results Accountability", "✓ Transparent dashboards, ROI focus", "✕ Varies widely", "✕ Possible agency fluff", "⚠ Less marketing expertise"],
  ["Communication", "✓ Direct access to founders / project leads", "✕ Often less reliable", "✕ Many layers", "⚠ No strategy expert"],
  ["Personalization", "✓ High-touch, founder involvement", "✓ Highly flexible", "✕ Cookie-cutter", "⚠ Risk of groupthink"],
  ["Focus on Growth", "✓ Strategic, long-term growth mindset", "✕ Short-term gigs", "✕ Standardized claims", "⚠ Reactive / habitual"],
];

export const TEAM_FUNCTIONS = [
  { icon: "🔍", t: "SEO & Content Studio", d: "Keyword strategists and writers building topical authority and AI-search visibility for every client vertical." },
  { icon: "📣", t: "Performance Marketing", d: "Google & Meta certified specialists obsessed with cost-per-lead, ROAS and weekly optimisation cycles." },
  { icon: "🎨", t: "Design & Creative", d: "Brand designers and reel editors producing premium creatives — from ₹149 posters to full identity systems." },
  { icon: "💻", t: "Web & Dashboards", d: "Developers and analysts building fast websites, CRMs and the KPI dashboards that run our clients' businesses." },
];

export const TESTIMONIALS = [
  { name: "Dr. Rajesh Mehta", role: "Director, Metro Heart Hospital", text: "Business Volunteers transformed our digital presence completely. Our cardiac department is now fully booked 3 weeks in advance. The team's professionalism is unmatched.", rating: 5, tag: "Healthcare" },
  { name: "Priya Sharma", role: "Founder, SmileCraft Dental", text: "One reel about our smile makeover went viral and our cosmetic bookings haven't stopped since. 13x ROI in the first quarter alone — extraordinary work.", rating: 5, tag: "Dental" },
  { name: "Amit Verma", role: "CEO, EdVantage Coaching", text: "From posters to a full website and Meta Ads — everything delivered on time, every time. The post-pay option showed real confidence in their own work.", rating: 5, tag: "Education" },
  { name: "Sneha Kapoor", role: "Owner, Bloom Salon & Spa", text: "Their KPI dashboard changed how we run the business. We finally see daily revenue, staff performance and repeat-client rates at a glance. Worth every rupee.", rating: 5, tag: "Wellness" },
  { name: "Vikram Singh", role: "MD, Singh Realty Group", text: "Professional, responsive and genuinely invested in our growth. Lead quality from their campaigns is far better than any agency we've worked with before.", rating: 5, tag: "Real Estate" },
  { name: "Dr. Kavita Rao", role: "ENT Specialist, Hyderabad", text: "The pre-monsoon campaign was perfectly timed. We were booked solid for two months. They understand Indian healthcare marketing deeply.", rating: 5, tag: "Clinics" },
  { name: "Rohan Desai", role: "Founder, Crave Cloud Kitchen", text: "Our weekend orders doubled within two months of their festival creatives and Meta Ads. The cost-per-order is the lowest we've ever seen.", rating: 5, tag: "Food & Restaurant" },
  { name: "Anjali Nair", role: "Director, BrightPath Academy", text: "Admissions season used to be stressful. Now our enquiry forms fill up weeks in advance thanks to their landing pages and ad funnels.", rating: 5, tag: "Education" },
  { name: "Karan Malhotra", role: "Co-founder, UrbanNest Interiors", text: "The portfolio reels they produced made us look like a national brand. Premium leads started coming in almost immediately.", rating: 5, tag: "Interior Design" },
  { name: "Fatima Sheikh", role: "Owner, Zariya Boutique", text: "From a tiny Instagram page to a proper online store with daily orders — they handled design, ads and the website end to end.", rating: 5, tag: "Fashion & Retail" },
  { name: "Suresh Iyer", role: "MD, Pinnacle Realtors", text: "Lead quality is what sold me. Their site-visit campaigns bring serious buyers, not just clicks. ROI has been consistently strong.", rating: 5, tag: "Real Estate" },
  { name: "Neha Joshi", role: "Founder, GreenLeaf Organics", text: "They turned our D2C brand around with sharp packaging design and retargeting ads. Repeat purchases are up 60% this quarter.", rating: 5, tag: "D2C & E-commerce" },
  { name: "Arjun Reddy", role: "Director, Apex Fitness Studios", text: "Our membership enquiries tripled after the reels and local ads went live. The team genuinely cares about the numbers.", rating: 5, tag: "Fitness & Wellness" },
  { name: "Meera Pillai", role: "Partner, Lex & Co. Advocates", text: "Professional, discreet and effective. Our firm's credibility online now matches our reputation offline. Highly recommended.", rating: 5, tag: "Professional Services" },
  { name: "Imran Qureshi", role: "Owner, AutoShine Detailing", text: "The WhatsApp marketing setup keeps our bays booked all week. Simple, affordable and it just works.", rating: 5, tag: "Automotive" },
];

export const GENERAL_BLOGS = [
  { title: "The Ultimate Guide to Local SEO in 2026", keyword: "local SEO guide 2026", words: "3,400+", desc: "Pillar guide: map pack ranking factors, reviews, citations and geo-pages.", tag: "SEO", pillar: true },
  { title: "AI Overviews & LLM Search: How to Get Your Business Cited", keyword: "AI search optimisation", words: "3,100+", desc: "Structuring content, FAQs and schema so ChatGPT and Google AI cite you.", tag: "AI Search", pillar: true },
  { title: "WhatsApp Marketing Playbook for Indian SMBs", keyword: "WhatsApp marketing India", words: "2,900+", desc: "Broadcasts, automation and compliance for India's #1 channel.", tag: "WhatsApp" },
  { title: "Meta Ads in 2026: Creative Strategies That Beat Rising CPMs", keyword: "Meta ads strategy 2026", words: "2,800+", desc: "Hook formulas, testing frameworks and retargeting funnels that hold ROAS.", tag: "Paid Ads" },
  { title: "How to Build a KPI Dashboard Your Team Will Actually Use", keyword: "KPI dashboard business", words: "2,700+", desc: "From metric selection to Excel/Sheets builds — a practical walkthrough.", tag: "Dashboards" },
];

// ── SOCIAL ICONS (real brand SVGs) ────────────────────────────────────────────

export const SOCIAL_LINKS = [
  {
    n: "Facebook", url: "https://www.facebook.com/people/BusinessVolunteers/61579138254807/",
    color: "#1877F2",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" /></svg>
  },
  {
    n: "Instagram", url: "https://www.instagram.com/thebusinessvolunteers/",
    color: "#E1306C",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.13a5.9 5.9 0 0 0 2.13 1.39c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" /></svg>
  },
  {
    n: "LinkedIn", url: "https://www.linkedin.com/company/business-volunteers1",
    color: "#0A66C2",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
  },
  {
    n: "YouTube", url: "https://www.youtube.com/@TheBusinessVolunteers",
    color: "#FF0000",
    svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z" /></svg>
  },
];

export const SEO_META = {
  home: { t: "Business Volunteers – Digital Marketing Agency India | 89 Industries", m: "Pan-India digital marketing agency delivering SEO, ads, design, websites & KPI dashboards for 2,200+ businesses across 89 industries." },
  "about-overview": { t: "About Business Volunteers – Mission, Culture & Leadership", m: "Business Volunteers is a pan-India digital marketing agency. Explore our mission, transparent approach, and founder-led team delivering growth for 2,200+ businesses." },
  founder: { t: "Harsh Chaudhary – Founder & CEO, Business Volunteers", m: "Meet Harsh Chaudhary, digital marketing strategist and founder of Business Volunteers. Learn his vision and expertise in SEO, social media, and lead generation." },
  cofounder: { t: "Khwahish Sahai – Co-Founder & Creative Lead, Business Volunteers", m: "Discover Khwahish Sahai's journey in branding and digital design. Read how she creates compelling campaigns for clients of Business Volunteers." },
  why: { t: "Why Business Volunteers – Result-Driven Marketing Partner", m: "Compare Business Volunteers vs freelancers, big agencies and in-house teams. Founder-led, transparent, ROI-obsessed digital marketing." },
  team: { t: "Meet Our Team – Experts in SEO, Ads & Design | Business Volunteers", m: "Get to know the marketing experts at Business Volunteers – from strategists and designers to developers, dedicated to driving your growth." },
  services: { t: "Digital Marketing Services & Pricing | Business Volunteers", m: "SEO, Google & Meta Ads, social media, websites, CRM, dashboards and more — transparent pricing, no lock-ins." },
  industries: { t: "Industries We Serve – 89 Sectors | Business Volunteers", m: "Tailored digital marketing for hospitals, clinics, dental, education, real estate and 80+ more industries across India." },
  casestudies: { t: "Marketing Case Studies – Results by Business Volunteers", m: "See how Business Volunteers helped clients across industries achieve growth. Real results from SEO, ads and social media campaigns." },
  blog: { t: "Business Volunteers Blog – Marketing Insights & Tips", m: "Stay updated on the latest digital marketing trends, SEO tips, and success stories from Business Volunteers' industry experts." },
  pricing: { t: "Pricing – Digital Marketing Packages & ROI Models", m: "Transparent digital marketing pricing: flexible plans and pay-as-you-go options. High ROI without lock-in contracts." },
  contact: { t: "Contact Business Volunteers – Start a Project", m: "Talk to the Business Volunteers team. Free strategy consultation, 2-hour response time, Noida Sector 62 & pan-India." },
};

// ── SCHEMA SNIPPETS ───────────────────────────────────────────────────────────

export const SCHEMA_FOUNDER = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Harsh Chaudhary",
  "jobTitle": "Founder & CEO",
  "worksFor": { "@type": "Organization", "name": "Business Volunteers", "url": "https://businessvolunteers.online" },
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "AAFT - Film City" },
  "image": "https://businessvolunteers.online/images/harsh-photo.jpg",
  "sameAs": ["https://www.linkedin.com/in/heyharsh2026", "https://instagram.com/thebusinessvolunteers"]
}`;

export const SCHEMA_COFOUNDER = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khwahish Sahai",
  "jobTitle": "Co-Founder & Creative Director",
  "worksFor": { "@type": "Organization", "name": "Business Volunteers", "url": "https://businessvolunteers.online" }
}`;

export const SCHEMA_ORG = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Volunteers",
  "url": "https://businessvolunteers.online",
  "logo": "https://businessvolunteers.online/logo.png",
  "foundingDate": "2025",
  "founder": { "@type": "Person", "name": "Harsh Chaudhary" },
  "address": { "@type": "PostalAddress", "streetAddress": "Sector 62, Noida", "addressLocality": "Noida", "addressRegion": "UP", "postalCode": "201309", "addressCountry": "IN" },
  "contactPoint": { "@type": "ContactPoint", "telephone": "+918586989832", "contactType": "customer service" }
}`;

export const SCHEMA_LOCAL = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Volunteers",
  "url": "https://businessvolunteers.online",
  "logo": "https://businessvolunteers.online/logo.png",
  "image": "https://businessvolunteers.online/logo.png",
  "description": "Pan-India digital marketing agency delivering SEO, ads, design, websites & KPI dashboards for 2,200+ businesses across 89 industries.",
  "telephone": "+918586989832",
  "email": "contact.businessvolunteers@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 62, Noida",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201309",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.6272, "longitude": 77.3719 },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "₹₹",
  "sameAs": [
    "https://www.facebook.com/people/BusinessVolunteers/61579138254807/",
    "https://www.instagram.com/thebusinessvolunteers/",
    "https://www.linkedin.com/company/business-volunteers1",
    "https://www.youtube.com/@TheBusinessVolunteers"
  ]
}`;

export const SCHEMA_FAQ = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What makes Business Volunteers different from other agencies?",
      "acceptedAnswer": { "@type": "Answer", "text": "We are a founder-led team focused on measurable growth. Our pay-as-you-go model (starting at ₹3,500/mo) and transparent reporting ensure you only pay for real results." } },
    { "@type": "Question", "name": "How long before I see SEO results?",
      "acceptedAnswer": { "@type": "Answer", "text": "Typically, clients see notable improvements in 3–6 months. We set milestones and report progress regularly so you always know where your campaign stands." } },
    { "@type": "Question", "name": "Is post-pay available at Business Volunteers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, post-pay is optionally available at Business Volunteers. Selected projects can begin before full payment. You review initial deliverables first and only pay after satisfaction. This is available on request during onboarding — our way of putting the financial risk on us, not you." } },
    { "@type": "Question", "name": "Is there a lock-in contract at Business Volunteers?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Business Volunteers operates on a zero lock-in, month-to-month model. We retain 91%+ of clients because results keep them — not paperwork." } },
    { "@type": "Question", "name": "How much does digital marketing cost at Business Volunteers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Plans at Business Volunteers start at ₹3,499/month for social media management. Google Ads are managed at 18% of ad spend and Meta Ads at 15%. Poster design starts at ₹149, reels from ₹380, and KPI dashboards from ₹2,000." } },
    { "@type": "Question", "name": "What industries does Business Volunteers serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Business Volunteers serves 89 industries including hospitals, clinics, dental clinics, schools, colleges, real estate, restaurants, salons, gyms, IT companies, law firms, logistics, agriculture and more across India." } }
  ]
}`;

// ── HELPERS ───────────────────────────────────────────────────────────────────

export const btnDark = { background: T.ink, color: "#fff", borderRadius: 50, padding: "13px 28px", fontWeight: 700, fontSize: 13.5, display: "inline-block", letterSpacing: .4, border: "none", cursor: "pointer" };

export const btnGold = { background: T.gradGold, color: T.ink, borderRadius: 50, padding: "13px 28px", fontWeight: 800, fontSize: 13.5, display: "inline-block", letterSpacing: .4 };

export const btnGhost = { background: "transparent", color: T.ink, borderRadius: 50, padding: "13px 28px", fontWeight: 700, fontSize: 13.5, border: `1.5px solid ${T.ink}`, cursor: "pointer", display: "inline-block" };

// ── NAV ───────────────────────────────────────────────────────────────────────

export const ABOUT_PAGES = [
  { k: "about-overview", l: "About Business Volunteers" },
  { k: "founder", l: "Founder — Harsh Chaudhary" },
  { k: "cofounder", l: "Co-Founder — Khwahish Sahai" },
  { k: "why", l: "Why Business Volunteers" },
  { k: "team", l: "Our Team" },
];

export const GH = "https://cdn.jsdelivr.net/gh/harshkianimation-eng/bv-portfolio@main";

export const LOGO = "/img0.png";

export const IMG = (n) => `${GH}/${n}.jpg`;

export const IMGS = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img14.jpg",
  "/img15.jpg",
  "/img16.jpg",
  "/img17.jpg",
  "/img18.jpg",
  "/img19.jpg",
  "/img20.jpg",
  "/img21.jpg",
  "/img22.jpg",
  "/img23.jpg",
  "/img24.jpg",
  "/img25.jpg",
  "/img26.jpg",
  "/img27.jpg",
];

export const SMM_PORTFOLIO = [
  {
    id: 1, title: "Flourish Counselling", category: "Mental Health & Wellness",
    desc: "Pastel-themed emotional wellness content with hand-drawn illustrations driving therapy conversations.",
    bg: "linear-gradient(135deg,#FFE4E1,#E0BBE4,#957DAD)",
    img: IMGS[0]
  },
  {
    id: 2, title: "Jewelry House", category: "Luxury Jewellery",
    desc: "Editorial fashion-magazine aesthetic with model photography on signature blue backdrops.",
    bg: "linear-gradient(135deg,#4A6B8A,#1C2840,#0F1825)",
    img: IMGS[1]
  },
  {
    id: 3, title: "Sanghvi Jewellers", category: "Premium Jewellery",
    desc: "Modern lifestyle campaign featuring power-pink palette and aspirational brand positioning.",
    bg: "linear-gradient(135deg,#FFB6C1,#C71585,#8B0045)",
    img: IMGS[2]
  },
  {
    id: 4, title: "Gold Jewellers", category: "Traditional Jewellery",
    desc: "Soft-cream traditional jewellery showcase with elegant script typography and rose accents.",
    bg: "linear-gradient(135deg,#FAF0E6,#F5DEB3,#D2B48C)",
    img: IMGS[3]
  },
  {
    id: 5, title: "Spectrum Defence Academy", category: "Education & Coaching",
    desc: "NDA/CDS/CAPF coaching content blending exam tips, current affairs and motivational visuals.",
    bg: "linear-gradient(135deg,#1E3A8A,#0F172A,#020617)",
    img: IMGS[4]
  },
  {
    id: 6, title: "NdecorNbeyond", category: "Interior Design",
    desc: "Modern interior design portfolio with luxury home renders, mood boards and brand consistency.",
    bg: "linear-gradient(135deg,#1A1A1A,#2D2D2D,#0A0A0A)",
    img: IMGS[5]
  },
  {
    id: 7, title: "Vishwa Aahar", category: "Restaurant & Food",
    desc: "Authentic vegetarian restaurant marketing with festival-ready creatives and price-driven CTAs.",
    bg: "linear-gradient(135deg,#FFA500,#FF4500,#8B0000)",
    img: IMGS[6]
  },
  {
    id: 8, title: "Aurix Perfumes", category: "Fragrance & Beauty",
    desc: "Premium black-and-gold perfume brand with cinematic product photography on beach locations.",
    bg: "linear-gradient(135deg,#000000,#1A1A1A,#2D2D2D)",
    img: IMGS[7]
  },
  {
    id: 9, title: "HeyHarsh2026 — Personal Brand", category: "Founder Personal Branding",
    desc: "Newspaper-collage personal branding content stack for LinkedIn and Instagram thought leadership.",
    bg: "linear-gradient(135deg,#F5F5DC,#2D2D2D,#000000)",
    img: IMGS[8]
  },
  {
    id: 10, title: "Metro Square Realty", category: "Real Estate",
    desc: "Greater Noida property campaigns featuring Godrej Arden, Verdantia and premium project listings.",
    bg: "linear-gradient(135deg,#1E3A8A,#0F766E,#064E3B)",
    img: IMGS[9]
  },
  {
    id: 11, title: "Trylokaa Saree", category: "Fashion & Apparel",
    desc: "Editorial saree campaigns blending tradition and modernity with celebrity-style model photography.",
    bg: "linear-gradient(135deg,#FF6347,#8B4513,#2F1B14)",
    img: IMGS[10]
  },
  {
    id: 12, title: "Parshi Waffles", category: "Bakery & Desserts",
    desc: "Bold red-cream healthy waffle brand combining product close-ups, ingredient stories and CTAs.",
    bg: "linear-gradient(135deg,#DC143C,#8B0000,#5B0808)",
    img: IMGS[11]
  },
  {
    id: 13, title: "Bharat Battery House", category: "Electronics & Power",
    desc: "Exide inverter battery campaigns combining product hero shots with everyday-use lifestyle scenes.",
    bg: "linear-gradient(135deg,#DC2626,#7F1D1D,#1F2937)",
    img: IMGS[12]
  },
  {
    id: 14, title: "Automaven Smart Home", category: "Smart Home & Tech",
    desc: "Premium dark-theme smart-home product photography across locks, sensors, MCBs and switches.",
    bg: "linear-gradient(135deg,#000000,#1A1A1A,#0A0A0A)",
    img: IMGS[13]
  },
  {
    id: 15, title: "TechEye Secure CCTV", category: "Security & Surveillance",
    desc: "Festival sale campaigns and recruitment posters blended into a single consistent brand voice.",
    bg: "linear-gradient(135deg,#1E40AF,#7F1D1D,#1E3A8A)",
    img: IMGS[14]
  },
  {
    id: 16, title: "RdsBundi Jewellers", category: "Traditional Gold Jewellery",
    desc: "Rajasthani heritage jewellery campaigns with rich velvet backdrops and bokeh lighting.",
    bg: "linear-gradient(135deg,#B8860B,#8B4513,#3D2817)",
    img: IMGS[15]
  },
  {
    id: 17, title: "Genix Fertility Care", category: "Healthcare & Fertility",
    desc: "Sensitive fertility-care content with pastel pink palette, infographics and lifestyle illustrations.",
    bg: "linear-gradient(135deg,#FFB6C1,#FF1493,#C71585)",
    img: IMGS[16]
  },
  {
    id: 18, title: "Jhumka Earrings", category: "E-commerce Jewellery",
    desc: "Price-driven catalogue and lifestyle content for affordable oxidized earring D2C brand.",
    bg: "linear-gradient(135deg,#708090,#2F4F4F,#1C1C1C)",
    img: IMGS[17]
  },
  {
    id: 19, title: "Design & Build Architecture", category: "Architecture Firm",
    desc: "DBA architecture firm content blending project shots, team imagery and design philosophy quotes.",
    bg: "linear-gradient(135deg,#1E3A8A,#0F172A,#1F2937)",
    img: IMGS[18]
  },
  {
    id: 20, title: "The Fifth Note Perfumes", category: "Premium Fragrance",
    desc: "Bold-red signature palette perfume brand with seasonal launches, new year campaigns and CTAs.",
    bg: "linear-gradient(135deg,#DC143C,#8B0000,#1C0808)",
    img: IMGS[19]
  },
  {
    id: 21, title: "Elepha Sneakers", category: "Footwear & Streetwear",
    desc: "Bold red-and-black sneaker brand campaigns with elite-only positioning and street-culture energy.",
    bg: "linear-gradient(135deg,#DC143C,#1A1A1A,#0A0A0A)",
    img: IMGS[20]
  },
  {
    id: 22, title: "Wappx WhatsApp Marketing", category: "SaaS & Marketing Tech",
    desc: "WhatsApp Business API SaaS brand showcasing automation, chatbots and conversion-driven campaigns.",
    bg: "linear-gradient(135deg,#25D366,#128C7E,#075E54)",
    img: IMGS[21]
  },
  {
    id: 23, title: "GrowMate — Supply Chacha", category: "Marketing Agency & B2B Supply",
    desc: "Bilingual Hindi-English campaigns combining marketing agency content with Jodhpur B2B stationery delivery brand.",
    bg: "linear-gradient(135deg,#1E88E5,#0D47A1,#FFD600)",
    img: IMGS[22]
  },
  {
    id: 24, title: "Sindhu Enterprises", category: "Silk & Saree Boutique",
    desc: "Editorial silk saree campaigns showcasing rich colours, draped photography and luxury crafted-by-hands narrative.",
    bg: "linear-gradient(135deg,#4B0082,#8B0000,#D2691E)",
    img: IMGS[23]
  },
  {
    id: 25, title: "Flourish Counselling — Green", category: "Mental Health (Green Series)",
    desc: "Calming green-palette counselling series with consistent hand-drawn illustrations driving emotional engagement.",
    bg: "linear-gradient(135deg,#A8D5A8,#4CAF50,#1B5E20)",
    img: IMGS[24]
  },
  {
    id: 26, title: "Flourish Counselling — Lavender", category: "Mental Health (Lavender Series)",
    desc: "Soft lavender-palette counselling content series — same illustration system, fresh emotional tonality.",
    bg: "linear-gradient(135deg,#E1BEE7,#9C27B0,#4A148C)",
    img: IMGS[25]
  },
  {
    id: 27, title: "Flourish Counselling — Blue", category: "Mental Health (Blue Series)",
    desc: "Trust-led blue-palette counselling series — completing the multi-tone Flourish content ecosystem.",
    bg: "linear-gradient(135deg,#90CAF9,#1976D2,#0D47A1)",
    img: IMGS[26]
  },
];

export const FOUNDER_IMG = "/img28.jpg";

export const COFOUNDER_IMG = "/img29.jpg";

export const SHOTS = {
  vasoo: "/img30.jpg",
  vihaara: "/img31.jpg",
  decorem: "/img32.jpg",
  rahi: "/img33.jpg",
  dailymob: "/img34.jpg",
  layers: "/img35.jpg",
};

export const WEB_PORTFOLIO = [
  {
    id: "vasoo", title: "Vasoo Bamboo Arts", url: "https://www.vasoobambooarts.in/",
    desc: "Sustainable handcrafted bamboo products e-commerce with rich product storytelling, artisan profiles, and seamless shopping experience for eco-conscious buyers.",
    tags: ["E-commerce", "Sustainable", "D2C"],
    color1: "#8B4513", color2: "#228B22", color3: "#D2691E",
    mockup: "ecom", img: SHOTS.vasoo,
    nav: "VASOO BAMBOO ARTS",
    hero: "Handcrafted by Nature, Loved by You",
    sub: "Sustainable bamboo creations from skilled Indian artisans",
    cta: "Shop Collection",
    products: ["🎋 Lamps", "🧺 Baskets", "🪴 Planters", "🎍 Decor"]
  },
  {
    id: "vihaara", title: "Vihaara", url: "https://vihaara.org/",
    desc: "Spiritual wellness organisation website featuring meditation programs, retreats and community engagement — calm UI with serene typography and high credibility.",
    tags: ["Non-Profit", "Wellness", "Spiritual"],
    color1: "#D4AF37", color2: "#8B4789", color3: "#F5E6D3",
    mockup: "nonprofit", img: SHOTS.vihaara,
    nav: "VIHAARA",
    hero: "A Journey Inward",
    sub: "Discover meditation, mindfulness and inner peace",
    cta: "Begin Your Journey",
    products: ["🧘 Meditation", "🌸 Retreats", "📿 Programs", "💛 Community"]
  },
  {
    id: "decorem", title: "Decorem by Sonya Mehta", url: "https://decorembysonyamehta.com/",
    desc: "Premium interior design studio portfolio showcasing luxury residential projects, design philosophy and consultation booking with editorial-grade visual storytelling.",
    tags: ["Interior Design", "Portfolio", "Premium"],
    color1: "#1A1A1A", color2: "#D4AF37", color3: "#F5F5F0",
    mockup: "portfolio", img: SHOTS.decorem,
    nav: "DECOREM",
    hero: "Where Vision Meets Space",
    sub: "Crafting timeless interiors for discerning homeowners",
    cta: "Start a Project",
    products: ["🏠 Residential", "🪑 Furniture", "💡 Lighting", "🎨 Bespoke"]
  },
  {
    id: "rahi", title: "Rahi Homes", url: "https://rahi-homes.vercel.app/",
    desc: "Premium real estate listings platform with property search, virtual tours, project showcases and lead capture — designed for modern home buyers in India.",
    tags: ["Real Estate", "Property", "Modern"],
    color1: "#0F766E", color2: "#FFA500", color3: "#1F2937",
    mockup: "realestate", img: SHOTS.rahi,
    nav: "RAHI HOMES",
    hero: "Find Your Forever Home",
    sub: "Curated luxury residences across India's top cities",
    cta: "Explore Properties",
    products: ["🏙️ Apartments", "🏡 Villas", "🌆 Penthouses", "📍 Plots"]
  },
  {
    id: "dailymob", title: "Daily Mob Design", url: "https://dailymobdesign.com/",
    desc: "Creative design agency portfolio site featuring case studies, services, and bold visual identity — built to convert visitors into design clients.",
    tags: ["Agency", "Design", "Portfolio"],
    color1: "#FF4500", color2: "#000000", color3: "#FFFF00",
    mockup: "agency", img: SHOTS.dailymob,
    nav: "DAILY MOB",
    hero: "Design That Demands Attention",
    sub: "Brand identity, web & creative direction for ambitious brands",
    cta: "View Our Work",
    products: ["🎨 Branding", "💻 Web", "📱 Mobile", "🎬 Motion"]
  },
  {
    id: "layers", title: "Layers Clothing", url: "https://www.layersclothing.in/",
    desc: "Premium fashion e-commerce brand with curated collections, lookbook galleries, size guides and seamless checkout — built for modern Indian shoppers.",
    tags: ["E-commerce", "Fashion", "D2C"],
    color1: "#1C1C1C", color2: "#C9963B", color3: "#F5F5F5",
    mockup: "fashion", img: SHOTS.layers,
    nav: "LAYERS",
    hero: "Wear Your Story",
    sub: "Premium contemporary fashion crafted for everyday confidence",
    cta: "Shop New Arrivals",
    products: ["👕 Tees", "👖 Bottoms", "🧥 Outerwear", "👗 Dresses"]
  },
];

// Website browser mockup component

export const LOCATIONS = [
  { id: "mumbai", name: "Mumbai", type: "domestic" },
  { id: "delhi", name: "Delhi", type: "domestic" },
  { id: "bangalore", name: "Bangalore", type: "domestic" },
  { id: "hyderabad", name: "Hyderabad", type: "domestic" },
  { id: "chennai", name: "Chennai", type: "domestic" },
  { id: "kolkata", name: "Kolkata", type: "domestic" },
  { id: "ahmedabad", name: "Ahmedabad", type: "domestic" },
  { id: "pune", name: "Pune", type: "domestic" },
  { id: "noida", name: "Noida", type: "domestic" },
  { id: "gurgaon", name: "Gurgaon", type: "domestic" },
  { id: "jaipur", name: "Jaipur", type: "domestic" },
  { id: "dehradun", name: "Dehradun", type: "domestic" },
  { id: "uttarakhand", name: "Uttarakhand", type: "domestic" },
  { id: "chandigarh", name: "Chandigarh", type: "domestic" },
  { id: "lucknow", name: "Lucknow", type: "domestic" },
  { id: "surat", name: "Surat", type: "domestic" },
  { id: "indore", name: "Indore", type: "domestic" },
  { id: "nagpur", name: "Nagpur", type: "domestic" },
  { id: "kochi", name: "Kochi", type: "domestic" },
  { id: "coimbatore", name: "Coimbatore", type: "domestic" },
  { id: "ghaziabad", name: "Ghaziabad", type: "domestic" },
  { id: "faridabad", name: "Faridabad", type: "domestic" },
  { id: "thane", name: "Thane", type: "domestic" },
  { id: "navi-mumbai", name: "Navi Mumbai", type: "domestic" },
  { id: "bhopal", name: "Bhopal", type: "domestic" },
  { id: "visakhapatnam", name: "Visakhapatnam", type: "domestic" },
  { id: "patna", name: "Patna", type: "domestic" },
  { id: "bhubaneswar", name: "Bhubaneswar", type: "domestic" },
  { id: "vadodara", name: "Vadodara", type: "domestic" },
  { id: "rajkot", name: "Rajkot", type: "domestic" },
  { id: "ludhiana", name: "Ludhiana", type: "domestic" },
  { id: "amritsar", name: "Amritsar", type: "domestic" },
  { id: "kanpur", name: "Kanpur", type: "domestic" },
  { id: "varanasi", name: "Varanasi", type: "domestic" },
  { id: "agra", name: "Agra", type: "domestic" },
  { id: "nashik", name: "Nashik", type: "domestic" },
  { id: "mysuru", name: "Mysuru", type: "domestic" },
  { id: "mangalore", name: "Mangalore", type: "domestic" },
  { id: "goa", name: "Goa", type: "domestic" },
  { id: "guwahati", name: "Guwahati", type: "domestic" },
  { id: "raipur", name: "Raipur", type: "domestic" },
  { id: "ranchi", name: "Ranchi", type: "domestic" },
  { id: "jodhpur", name: "Jodhpur", type: "domestic" },
  { id: "udaipur", name: "Udaipur", type: "domestic" },
  { id: "vijayawada", name: "Vijayawada", type: "domestic" },
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", type: "domestic" },
  { id: "madurai", name: "Madurai", type: "domestic" },
  { id: "meerut", name: "Meerut", type: "domestic" },
  { id: "moradabad", name: "Moradabad", type: "domestic" },
  { id: "prayagraj", name: "Prayagraj", type: "domestic" },
  { id: "jammu", name: "Jammu", type: "domestic" },
  { id: "gwalior", name: "Gwalior", type: "domestic" },
  { id: "usa", name: "USA", type: "intl" },
  { id: "australia", name: "Australia", type: "intl" },
  { id: "uk", name: "UK", type: "intl" },
  { id: "canada", name: "Canada", type: "intl" },
  { id: "dubai", name: "Dubai", type: "intl" },
];



// ---- routing + blog helpers (added for Next.js) ----
export const PATHS = {
  home: "/", "about-overview": "/about", founder: "/founder",
  cofounder: "/co-founder", why: "/why", team: "/team", services: "/services",
  portfolio: "/portfolio", industries: "/industries", casestudies: "/case-studies",
  blog: "/blog", pricing: "/pricing", contact: "/contact"
};
export function pathToKey(p) {
  if (!p || p === "/") return "home";
  if (p.startsWith("/industries")) return "industries";
  if (p.startsWith("/blog")) return "blog";
  const map = {
    "/about": "about-overview", "/founder": "founder", "/co-founder": "cofounder",
    "/why": "why", "/team": "team", "/services": "services", "/portfolio": "portfolio",
    "/case-studies": "casestudies", "/pricing": "pricing", "/contact": "contact"
  };
  const clean = "/" + p.split("/").filter(Boolean)[0];
  return map[clean] || "";
}
export function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
export function getAllBlogs() {
  const out = GENERAL_BLOGS.map(b => ({ ...b }));
  Object.entries(INDUSTRY_DATA).forEach(([id, d]) => { (d.blogs || []).forEach(b => { out.push({ ...b, tag: d.name, indId: id }); }); });
  return out;
}
export function getBlogBySlug(slug) { return getAllBlogs().find(b => slugify(b.title) === slug) || null; }

// ---- case study helpers (openable like blogs) ----
export function getAllCaseStudies() {
  const out = [];
  Object.entries(INDUSTRY_DATA).forEach(([id, d]) => {
    (d.caseStudies || []).forEach(cs => { out.push({ ...cs, ind: d.name, indId: id, color: d.color }); });
  });
  return out;
}
export function getCaseStudyBySlug(slug) { return getAllCaseStudies().find(cs => slugify(cs.title) === slug) || null; }

let _openCS;
export function registerOpenCaseStudy(fn) { _openCS = fn; }
export function openCaseStudyGlobal(cs) { if (_openCS) _openCS(cs); }
