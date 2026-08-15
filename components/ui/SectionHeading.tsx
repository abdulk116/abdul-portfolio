interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-header">
      {eyebrow && (
        <p className="section-eyebrow">
          {eyebrow}
        </p>
      )}

      <h2 className="section-title">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}