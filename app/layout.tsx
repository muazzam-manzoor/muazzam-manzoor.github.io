import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://muazzam-manzoor.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muazzam Manzoor | Full-Stack Developer",
  description:
    "Muazzam Manzoor is a full-stack developer in Lahore, Pakistan, building business applications and API integrations with MERN, React, Node.js, PHP, and MySQL.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Muazzam Manzoor | Full-Stack Developer",
    description:
      "Full-stack development for practical business software, backend services, and API integrations.",
    siteName: "Muazzam Manzoor",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Muazzam Manzoor | Full-Stack Developer",
    description:
      "Full-stack development for practical business software, backend services, and API integrations.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muazzam Manzoor",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  email: "mailto:muazzamkhokhar.mk@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "Pakistan",
  },
  sameAs: [
    "https://github.com/muazzam-manzoor",
    "https://www.linkedin.com/in/muazzam-manzoor/",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PHP",
    "CodeIgniter",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "REST APIs",
    "CRM integrations",
    "Google Sheets",
    "VICIdial",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
