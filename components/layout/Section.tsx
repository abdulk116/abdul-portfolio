import type { ReactNode } from "react";
import PageContainer from "./PageContainer";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${className}`}
    >
      <PageContainer>{children}</PageContainer>
    </section>
  );
}