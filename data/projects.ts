export type ProjectKind =
  | "Customer project"
  | "Personal project"
  | "MERN learning project";

export type Project = {
  name: string;
  kind: ProjectKind;
  description: string;
  highlights: string[];
  technologies: string[];
  href: string;
  monogram: string;
};

export const projects: Project[] = [
  {
    name: "CIMS",
    kind: "Customer project",
    description:
      "An independently developed customer solution for vehicle inventory, sales, and business financial management.",
    highlights: [
      "Vehicle inventory management",
      "Sales and partial payments",
      "Outstanding balances",
      "Refunds and returns",
      "Vehicle and general expenses",
      "Partner investments and business loans",
      "Loan repayments and financial records",
      "Dashboards and reports",
      "Role-based access and audit logging",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Cloudinary",
    ],
    href: "https://github.com/muazzam-manzoor/CIMS",
    monogram: "C / 01",
  },
  {
    name: "SmartLearn",
    kind: "Personal project",
    description:
      "An independent learning management system with course and lesson management, authentication, and role-based dashboards.",
    highlights: [
      "Course management",
      "Lesson management",
      "Authentication",
      "Role-based dashboards",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/muazzam-manzoor/SmartLearn-AI-LMS",
    monogram: "S / 02",
  },
  {
    name: "AlphaRoom",
    kind: "MERN learning project",
    description:
      "A MERN learning project for hotel browsing, booking management, booking history, and Stripe test-mode payments.",
    highlights: [
      "Hotel browsing",
      "Bookings",
      "Booking history",
      "Stripe test-mode payment",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    href: "https://github.com/muazzam-manzoor/Alpharoom",
    monogram: "A / 03",
  },
];