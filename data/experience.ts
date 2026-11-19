export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Web Developer",
    company: "TozCall",
    period: "August 2025 – Present",
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Innovation.High Tech",
    period: "May 2023 – July 2025",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "TechLift",
    period: "February – April 2023",
  },
];