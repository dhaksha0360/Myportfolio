export type Project = {
  slug: string; title: string; eyebrow: string; description: string; problem: string; solution: string;
  features: string[]; technologies: string[]; challenges: string[]; learnings: string[]; github?: string; live?: string; tone: string;
};

export const projects: Project[] = [
  {
    slug: "career-ai", title: "CareerAI", eyebrow: "AI-powered career platform",
    description: "A full-stack platform that recommends the top three suitable IT career roles from a student's academic profile, skills, experience, and preferences.",
    problem: "Students often have fragmented information about technology career paths and little guidance connecting their individual strengths to specific roles.",
    solution: "A guided assessment and ML-backed recommendation experience that turns profile signals into ranked roles, confidence indicators, and useful career context.",
    features: ["Career assessment", "Student profile analysis", "ML prediction", "Top-3 recommendations", "Model confidence", "Recommendation history", "Career information", "Dashboard"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Python", "FastAPI", "LightGBM", "PostgreSQL", "Prisma", "Vercel"],
    challenges: ["Designing a clear input flow for mixed academic and preference data", "Presenting model confidence responsibly", "Connecting a typed frontend to the prediction workflow"],
    learnings: ["Explainability is part of the product experience, not an afterthought", "Recommendation interfaces need context alongside ranked results"], tone: "blue"
  },
  {
    slug: "staynest", title: "StayNest", eyebrow: "Booking & property management",
    description: "A property booking system connecting guests and hosts through availability, payments, messaging, and role-aware management workflows.",
    problem: "Property operations span disconnected workflows, making availability, bookings, payment status, and host communication difficult to coordinate.",
    solution: "A unified booking experience with dedicated guest and host capabilities, reliable availability handling, and clear operational dashboards.",
    features: ["Authentication", "Property management", "Availability calendar", "Online booking", "Payments", "Messaging", "Role-based access", "Dashboard", "REST APIs"],
    technologies: ["Next.js", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "shadcn/ui", "Stripe"],
    challenges: ["Preventing conflicting reservations", "Keeping guest and host workflows coherent", "Coordinating payment and booking states"],
    learnings: ["Transaction states need explicit product language", "Complex permissions benefit from role-first interface design"], tone: "coral"
  },
  {
    slug: "messaging-platform", title: "Real-Time Messaging", eyebrow: "Responsive communication platform",
    description: "A focused messaging experience with real-time delivery, attachments, read states, notifications, and a responsive conversation interface.",
    problem: "Real-time interfaces must keep multiple delivery states understandable while remaining fast across small and large screens.",
    solution: "A conversation-first UI connected to event-driven messaging, with optimistic feedback and clear status indicators.",
    features: ["Private messaging", "Real-time communication", "Read status", "Attachments", "Notifications", "Responsive chat UI"],
    technologies: ["React", "Next.js", "Node.js", "Socket.io", "Database", "Tailwind CSS"],
    challenges: ["Synchronizing client state with socket events", "Handling reconnection and message ordering", "Adapting the conversation layout for mobile"],
    learnings: ["Realtime state needs a deliberate source of truth", "Optimistic UI should always have a recovery path"], tone: "teal"
  },
  {
    slug: "project-management", title: "Project Management", eyebrow: "Collaborative team workspace",
    description: "A team workspace for planning work through boards, tasks, comments, deadlines, permissions, notifications, and useful progress signals.",
    problem: "Teams need enough structure to coordinate ownership and deadlines without turning everyday planning into administrative overhead.",
    solution: "A compact collaborative workspace built around boards and tasks, with contextual communication and permission-aware actions.",
    features: ["Team workspaces", "Kanban boards", "Tasks", "Comments", "Deadlines", "Role permissions", "Notifications", "Analytics"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    challenges: ["Modeling nested team permissions", "Keeping board interactions responsive", "Surfacing useful progress without fake productivity metrics"],
    learnings: ["Good project tools reduce decisions per action", "Permissions should be visible through interface affordances"], tone: "gold"
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
