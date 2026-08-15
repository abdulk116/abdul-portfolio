import { siteConfig } from "@/config/site";

export default function PersonJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,

    jobTitle: "Frontend Developer",

    description: siteConfig.description,

    url: siteConfig.url,

    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Router",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Responsive Design",
      "SEO Optimization",
      "Component Architecture",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}