export type Project = {
  slug: string; title: string; eyebrow: string; description: string; problem: string; solution: string;
  features: string[]; technologies: string[]; challenges: string[]; learnings: string[]; github?: string; live?: string; thumbnail?: string; tone: string;
};

export const projects: Project[] = [
  {
    slug: "staynest", title: "StayNest", eyebrow: "Property booking & management",
    description: "A full-stack property booking and management platform for browsing properties, checking availability, making reservations, and managing stays.",
    problem: "Guests need an easy way to find and reserve suitable properties, while property managers need a clear view of listings, availability, reservations, and guest communication.",
    solution: "StayNest brings property discovery, availability, booking, and reservation management into one responsive experience with dedicated guest and administrator workflows.",
    features: ["User and admin authentication", "Property management", "Availability calendar", "Online booking", "Payment integration", "Guest messaging", "Role-based access", "REST APIs", "Responsive dashboard", "Mobile app"],
    technologies: ["Next.js", "React Native", "Laravel", "PostgreSQL", "MySQL", "Stripe"],
    challenges: ["Keeping availability accurate while reservations change", "Designing separate guest and administrator journeys", "Coordinating booking and payment states"],
    learnings: ["Booking flows need clear, reliable status communication", "Role-based features are easiest to design from the user journey outward"],
    live: "https://stay-nest-yety.vercel.app", thumbnail: "/projects/staynest.png", tone: "coral"
  },
  {
    slug: "career-ai", title: "CareerAI", eyebrow: "AI career recommendation system",
    description: "A research-based platform that uses a trained LightGBM model to recommend the top three suitable IT career paths from a student's academic background and skills.",
    problem: "Students can find it difficult to connect their academic performance, interests, and technical skills with suitable IT career paths and current market opportunities.",
    solution: "CareerAI guides students through an assessment, produces ranked career recommendations with confidence scores, and makes the reasoning behind results easier to understand.",
    features: ["Student career assessment", "Academic and skills input", "Trained LightGBM model", "Top-3 career recommendations", "Model confidence scores", "SHAP/LIME explainability", "Career information", "Labour-market demand forecasting"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Python", "FastAPI", "LightGBM", "PostgreSQL"],
    challenges: ["Translating mixed student data into useful model inputs", "Presenting recommendations and confidence scores responsibly", "Making model behaviour understandable through explainability insights"],
    learnings: ["Explainability is essential when recommendations affect career decisions", "A strong recommendation experience pairs rankings with practical career context"],
    live: "https://career-ai-orcin-alpha.vercel.app", thumbnail: "/projects/career-ai.png", tone: "blue"
  },
  {
    slug: "brightnest-cleaning", title: "BrightNest Cleaning", eyebrow: "Professional cleaning services website",
    description: "A responsive website for a professional cleaning service, designed to present service offerings, packages, customer feedback, and clear booking or inquiry paths.",
    problem: "Cleaning businesses need a polished online presence that makes their services easy to understand and gives prospective customers a simple way to get in touch.",
    solution: "BrightNest provides a clear, welcoming marketing site that guides visitors from service discovery to an inquiry or booking action on any device.",
    features: ["Home page", "About section", "Residential cleaning", "Commercial cleaning", "Service packages", "Pricing section", "Booking and inquiry form", "Contact page", "Testimonials", "Responsive design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    challenges: ["Making service information easy to scan", "Creating a clear path from browsing to inquiry", "Maintaining a consistent experience across screen sizes"],
    learnings: ["Service websites work best when calls to action are visible throughout", "Clear information hierarchy builds trust before a customer makes contact"],
    live: "https://brightnest-cleaning-virid.vercel.app", thumbnail: "/projects/brightnest-cleaning.png", tone: "teal"
  },
  {
    slug: "infinitwizard", title: "InfinitWizard", eyebrow: "Property management & business platform",
    description: "A live full-stack business platform for property management, CRM, invoicing, document signing, guest verification, payments, and automated communication workflows.",
    problem: "Property and business operations can become fragmented when customer records, invoices, verification, contracts, payments, and communication are handled in separate systems.",
    solution: "InfinitWizard unifies these operational workflows in one platform, with secure guest verification, reusable contract templates, payment processing, and real-time communication.",
    features: ["CRM", "Invoicing", "Document signing", "Single sign-on", "Three-phase guest verification", "Audit logging", "Rate limiting and CAPTCHA", "Stripe payments", "Real-time messaging", "Email and mail integration", "Contract templates", "Automated communication"],
    technologies: ["Next.js", "TypeScript", "TSX", "Laravel", "MySQL", "Stripe API"],
    challenges: ["Securing a multi-step guest-verification flow", "Building reliable payment and communication integrations", "Creating reusable templates for contracts and automated messages"],
    learnings: ["Security controls must be built into critical business workflows", "Reusable workflow templates make complex operational processes more consistent"],
    thumbnail: "/projects/infinitwizard.png", tone: "gold"
  },
  {
    slug: "bookalizer", title: "Bookalizer", eyebrow: "Property rental & booking platform",
    description: "A professional property rental and booking platform enhanced with reliable guest messaging, third-party integrations, and secure real-time communication.",
    problem: "Property booking teams need their guest messages, external platform data, and activity history to stay connected without compromising account or broadcast security.",
    solution: "Bookalizer strengthens the operational messaging layer with Uplisting Message API integration, AirDNA OAuth2 connectivity, activity logs, and secured real-time channels.",
    features: ["Property rental booking", "Guest messaging", "Uplisting Message API integration", "AirDNA OAuth2 integration", "Integration settings panel", "Activity log viewer", "Authentication fixes", "Secured Pusher broadcast channels"],
    technologies: ["Next.js", "TypeScript", "Laravel", "MySQL", "Pusher", "OAuth2"],
    challenges: ["Migrating messaging workflows to a third-party API", "Debugging authentication and API integration issues", "Restricting real-time broadcast channels to authorized users"],
    learnings: ["Third-party integrations need observable settings and activity history", "Real-time systems must apply authorization at the channel level"],
    thumbnail: "/projects/bookalizer.png", tone: "blue"
  },
  {
    slug: "blood-bond", title: "Blood Bond", eyebrow: "AI-driven mobile app · Group project",
    description: "A mobile app that connects blood donors and recipients in real time, using personalised reminders and location-based matching to streamline the donation process.",
    problem: "Finding a compatible donor quickly can be difficult when requests, availability, and location information are disconnected.",
    solution: "Blood Bond combines real-time donor-recipient connections, location-aware matching, and reminders in a focused mobile experience.",
    features: ["Donor and recipient matching", "Real-time connection", "Location-based matching", "Personalised reminders", "Mobile-first experience"],
    technologies: ["React Native", "Firebase", "Python"],
    challenges: ["Designing timely and useful donation reminders", "Making location-based matching understandable", "Coordinating real-time updates for users"],
    learnings: ["Time-sensitive products need concise, action-oriented interfaces", "Mobile notifications are most valuable when paired with clear user control"],
    github: "https://github.com/dhaksha0360/Blood_Bond.git", thumbnail: "/projects/blood-bond.png", tone: "coral"
  },
  {
    slug: "food-ordering", title: "Food Ordering Website", eyebrow: "Real-time food ordering platform",
    description: "A real-time food ordering website with live order tracking, instant status updates, and a streamlined ordering experience.",
    problem: "Customers need visibility after placing an order, while restaurants need a dependable way to share progress without manual status updates.",
    solution: "The platform uses event-driven updates to keep customers informed about order status from checkout through delivery or collection.",
    features: ["Food ordering", "Live order tracking", "Instant status updates", "Real-time notifications", "Responsive ordering experience"],
    technologies: ["Angular.js", "Node.js", "Express", "MySQL", "Socket.io"],
    challenges: ["Synchronising live order status across clients", "Keeping status changes clear for customers", "Maintaining reliable real-time connections"],
    learnings: ["Real-time feedback reduces uncertainty after a customer takes action", "Socket event design benefits from explicit order-state transitions"],
    github: "https://github.com/dhaksha0360/food.git", thumbnail: "/projects/food-ordering.png", tone: "teal"
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
