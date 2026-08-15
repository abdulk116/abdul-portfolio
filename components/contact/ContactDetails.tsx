import {
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";

import { contact } from "@/data/contact";

import styles from "./ContactDetails.module.scss";

const links = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: contact.linkedin,
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: contact.github,
    icon: ExternalLink,
  },
];

export default function ContactDetails() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Heading */}
          <div className={styles.heading}>
            <span className={styles.eyebrow}>
              Get in touch
            </span>

            <h2>
              The easiest way
              <br />
              to reach me.
            </h2>

            <p>
              Whether it&apos;s a frontend opportunity,
              freelance project or collaboration,
              feel free to reach out.
            </p>
          </div>

          {/* Contact links */}
          <div className={styles.links}>
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={styles.link}
                >
                  <div className={styles.linkContent}>
                    <span className={styles.label}>
                      {link.label}
                    </span>

                    <strong className={styles.value}>
                      {link.value}
                    </strong>
                  </div>

                  <span className={styles.icon}>
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
              );
            })}

            {/* Resume */}
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div className={styles.linkContent}>
                <span className={styles.label}>
                  Resume
                </span>

                <strong className={styles.value}>
                  Download resume
                </strong>
              </div>

              <span className={styles.icon}>
                <Download
                  size={18}
                  strokeWidth={1.5}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}