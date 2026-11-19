export type Technology = {
  name: string;
  category: string;
  detail: string;
};

export const technologies: Technology[] = [
  { name: "JavaScript", category: "Language", detail: "The language behind interactive web interfaces and application logic." },
  { name: "TypeScript", category: "Language", detail: "Typed JavaScript for clearer application code and data models." },
  { name: "React", category: "Frontend", detail: "Component-based interfaces built from reusable pieces." },
  { name: "Next.js", category: "Frontend", detail: "React applications with routing and static site generation." },
  { name: "Node.js", category: "Backend", detail: "JavaScript runtime for server-side applications and services." },
  { name: "Express", category: "Backend", detail: "A framework for building web services and API endpoints." },
  { name: "PHP", category: "Backend", detail: "Server-side development for web applications." },
  { name: "CodeIgniter", category: "Backend", detail: "A PHP framework for structured web application development." },
  { name: "MongoDB", category: "Database", detail: "Document database for flexible application data." },
  { name: "Mongoose", category: "Database", detail: "MongoDB object modeling for Node.js applications." },
  { name: "MySQL", category: "Database", detail: "Relational database for structured, data-driven systems." },
  { name: "REST APIs", category: "Integration", detail: "HTTP interfaces that connect applications and services." },
  { name: "CRM integrations", category: "Integration", detail: "Connecting business applications with customer-management systems." },
  { name: "Google Sheets", category: "Integration", detail: "Spreadsheet-based workflows and connected business data." },
  { name: "VICIdial", category: "Integration", detail: "Telephony and contact-center platform integrations." },
];