interface ProjectJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function ProjectJsonLd({
  title,
  description,
  url,
  image,
}: ProjectJsonLdProps) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    name: title,

    description,

    url,

    ...(image && {
      image,
    }),

    creator: {
      "@type": "Person",
      name: "Abdul Kareem",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectSchema),
      }}
    />
  );
}