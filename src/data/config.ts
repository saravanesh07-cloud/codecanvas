// ============================================================
// CodeCanvas — Central Business Configuration
// Edit this file to update all business information site-wide
// ============================================================

export const BUSINESS_CONFIG = {
  name: 'CodeCanvas',
  tagline: 'Your Ideas. Professionally Designed.',
  description:
    'CodeCanvas creates professional presentations, posters, project materials and academic documents for students, teams, clubs and technical events.',

  // ─── Contact ─────────────────────────────────────────────
  contact: {
    // Replace with your actual WhatsApp number (include country code, no + or spaces)
    whatsappNumber: '919345219076',
    whatsappDisplay: '+91 93452 19076',
    whatsappMessage:
      "Hi CodeCanvas! I'm interested in your services. I'd like to know more about pricing and availability.",
    email: 'saravaneshds03@gmail.com',
    googleFormUrl: 'https://forms.gle/QbEAZ3omyezW22AY6',
    googleFormEmbedUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfZCoZeX30EmzZEbjrkC9DItdAoH4K58Ywer8hGWgVcZNP7QQ/viewform?embedded=true',
    instagram: 'https://instagram.com/codecanvas',
    linkedin: 'https://linkedin.com/company/codecanvas',
  },

  // ─── Social & Navigation ─────────────────────────────────
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

// ─── Services ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'ppt',
    icon: 'presentation',
    title: 'PPT Creation',
    description:
      'Professional presentations for seminars, subjects, projects, hackathons and technical events.',
    tags: ['Seminars', 'Projects', 'Hackathons', 'Technical Events'],
  },
  {
    id: 'poster',
    icon: 'palette',
    title: 'Poster Design',
    description:
      'Eye-catching posters for symposiums, workshops, hackathons, college events and announcements.',
    tags: ['Symposiums', 'Workshops', 'College Events', 'Hackathons'],
  },
  {
    id: 'typing',
    icon: 'file-text',
    title: 'Typing & Data Entry',
    description:
      'Convert PDFs, images and handwritten notes into clean, professionally formatted digital documents.',
    tags: ['PDF Conversion', 'Handwritten Notes', 'Data Entry'],
  },
  {
    id: 'formatting',
    icon: 'file-edit',
    title: 'Document Formatting',
    description:
      'Clean formatting for assignments, project reports, records and academic documents.',
    tags: ['Assignments', 'Reports', 'Records', 'Submissions'],
  },
  {
    id: 'project-pack',
    icon: 'layers',
    title: 'Project Presentation Pack',
    description:
      'Complete project materials including PPT, poster, diagrams, cover page and presentation resources.',
    tags: ['PPT', 'Poster', 'Diagrams', 'Cover Page'],
    featured: true,
  },
  {
    id: 'certificates',
    icon: 'award',
    title: 'Certificates & Invitations',
    description:
      'Professional certificates, invitations and event materials for clubs and college organizations.',
    tags: ['Certificates', 'Invitations', 'Club Events', 'Workshops'],
  },
];

// ─── Why Choose Us ─────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    icon: 'sparkles',
    title: 'Professional Quality',
    description: 'Clean and polished designs that make your work stand out.',
  },
  {
    icon: 'graduation-cap',
    title: 'Student Focused',
    description: 'Services designed around real college and academic needs.',
  },
  {
    icon: 'sliders',
    title: 'Custom Designs',
    description: 'Every project can be customized according to your requirements.',
  },
  {
    icon: 'zap',
    title: 'Fast Delivery',
    description: 'Get your work completed within the agreed timeline.',
  },
  {
    icon: 'badge-percent',
    title: 'Affordable',
    description: 'Professional results at student-friendly pricing.',
  },
  {
    icon: 'check-circle',
    title: 'Easy Process',
    description: 'Simply share your requirements and let us handle the design.',
  },
];

// ─── Project Pack Steps ────────────────────────────────────
export const PROJECT_PACK_ITEMS = [
  { step: '01', label: 'Project PPT' },
  { step: '02', label: 'Project Poster' },
  { step: '03', label: 'Diagrams' },
  { step: '04', label: 'Cover Page' },
  { step: '05', label: 'Supporting Materials' },
];

// ─── How It Works ──────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Tell Us What You Need',
    description:
      'Share your topic, requirements, reference files and deadline.',
    icon: 'message-square',
  },
  {
    step: 2,
    title: 'We Create',
    description: 'Our team designs your requested materials professionally.',
    icon: 'pen-tool',
  },
  {
    step: 3,
    title: 'Review',
    description: 'Check the design and request revisions if needed.',
    icon: 'eye',
  },
  {
    step: 4,
    title: 'Final Delivery',
    description: 'Receive your completed files in the required format.',
    icon: 'download',
  },
];

// ─── Pricing Cards ─────────────────────────────────────────
export const PRICING_CARDS = [
  {
    id: 'quick',
    title: 'Quick Design',
    description: 'For simple PPTs, posters and documents.',
    items: ['Single PPT or Poster', 'Up to 10 slides/pages', 'Standard formatting', '2 revisions'],
  },
  {
    id: 'academic',
    title: 'Academic Project',
    description: 'For project reports, PPTs, posters and diagrams.',
    items: ['Project PPT + Poster', 'Project report formatting', 'Diagrams included', '3 revisions'],
    featured: true,
  },
  {
    id: 'pack',
    title: 'Complete Project Pack',
    description: 'For complete project presentation requirements.',
    items: ['PPT + Poster + Diagrams', 'Cover page design', 'Report formatting', 'Certificates & invitations', 'Unlimited revisions'],
  },
];

// ─── Portfolio Items ────────────────────────────────────────
// Replace placeholder images with actual project screenshots when available
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'PPT',
    title: 'AI & Machine Learning Seminar',
    description: 'Professional 20-slide presentation for a technical seminar.',
    image: null, // Replace with actual image path
    color: '#1e3a5f',
  },
  {
    id: 2,
    category: 'Posters',
    title: 'National Hackathon 2025',
    description: 'Event poster for a national-level student hackathon.',
    image: null,
    color: '#1a3040',
  },
  {
    id: 3,
    category: 'Certificates',
    title: 'Workshop Participation Certificate',
    description: 'Professional certificate design for a technical workshop.',
    image: null,
    color: '#1e2d4a',
  },
  {
    id: 4,
    category: 'Projects',
    title: 'IoT Smart Home Project Pack',
    description: 'Complete project pack including PPT, poster and diagrams.',
    image: null,
    color: '#192840',
  },
  {
    id: 5,
    category: 'Invitations',
    title: 'Tech Symposium Invitation',
    description: 'Elegant invitation design for a college technical symposium.',
    image: null,
    color: '#1b3050',
  },
  {
    id: 6,
    category: 'Documents',
    title: 'Final Year Project Report',
    description: 'Professionally formatted final year project documentation.',
    image: null,
    color: '#162038',
  },
];

export const PORTFOLIO_CATEGORIES = ['All', 'PPT', 'Posters', 'Certificates', 'Invitations', 'Projects', 'Documents'];

// ─── Testimonials ──────────────────────────────────────────
// PLACEHOLDER — Replace with real customer reviews when collected
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aditya R.',
    role: 'Final Year Engineering Student',
    review:
      'CodeCanvas designed our entire project presentation pack. The PPT and poster were exactly what we needed. Professional, clean and delivered on time.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya S.',
    role: 'Hackathon Team Lead',
    review:
      'We needed a poster and certificate design for our college hackathon within 2 days. CodeCanvas delivered perfectly. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karthik M.',
    role: 'Technical Club Coordinator',
    review:
      'Our symposium invitations and event certificates looked so professional thanks to CodeCanvas. The design was clean and well-structured.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha L.',
    role: 'Seminar Presenter',
    review:
      'I had handwritten notes that needed to become a professional PPT in 24 hours. CodeCanvas made it happen perfectly. Great service!',
    rating: 5,
  },
];

// ─── FAQ ───────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    question: 'What services does CodeCanvas provide?',
    answer:
      'CodeCanvas provides PPT creation, poster design, typing & data entry, document formatting, complete project presentation packs, and certificates & invitations for students, clubs, and academic events.',
  },
  {
    question: 'Can I request a custom PPT?',
    answer:
      'Yes. All presentations are fully customized based on your topic, content, theme and requirements. You provide the content and we handle the design.',
  },
  {
    question: 'Can you create posters for college events?',
    answer:
      'Absolutely. We design professional posters for symposiums, workshops, hackathons, club events, seminars and any other college announcements.',
  },
  {
    question: 'Can you format project reports?',
    answer:
      'Yes. We provide professional formatting for assignments, project reports, records and academic documents according to your college or university guidelines.',
  },
  {
    question: 'Can I provide my own content?',
    answer:
      'Yes. You can share your existing content, files, notes, reference materials and design preferences. We will structure and design everything professionally.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Fill in the inquiry form on this page or contact us directly via WhatsApp. Share your requirements, deadline and any reference files. We will confirm the details and get started.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery time depends on the type and complexity of the service. Simple designs may be completed in 24–48 hours. Larger projects like complete project packs may take 3–5 working days. We always confirm the timeline before starting.',
  },
  {
    question: 'Can I request revisions?',
    answer:
      'Yes. We offer revisions based on your feedback. The number of revisions depends on the package selected. Our goal is to deliver work you are completely satisfied with.',
  },
  {
    question: 'Can you create complete project presentation packs?',
    answer:
      'Yes. Our Project Presentation Pack includes the project PPT, poster, diagrams, cover page and any additional supporting materials — all designed with one consistent professional style.',
  },
  {
    question: 'How do I get a price quote?',
    answer:
      'Pricing depends on the type of service, number of pages or slides, complexity and delivery requirements. Fill in the contact form or message us on WhatsApp to get a custom quote for your project.',
  },
];
