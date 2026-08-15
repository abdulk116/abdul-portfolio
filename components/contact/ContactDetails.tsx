import {
  ArrowUpRight,
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
          <div className={styles.heading}>
            <span>
              Get in touch
            </span>

            <h2>
              The easiest way
              <br />
              to reach me.
            </h2>
          </div>

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
                  <div>
                    <span>
                      {link.label}
                    </span>

                    <strong>
                      {link.value}
                    </strong>
                  </div>

                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />
                </a>
              );
            })}

            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <div>
                <span>
                  Resume
                </span>

                <strong>
                  Download resume
                </strong>
              </div>

              <Download
                size={18}
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}