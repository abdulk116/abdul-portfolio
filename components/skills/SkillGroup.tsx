import {
  ArrowUpRight,
} from "lucide-react";

import type { SkillGroup as SkillGroupType } from "@/types/skill";

import styles from "./SkillGroup.module.scss";

interface SkillGroupProps {
  group: SkillGroupType;
}

export default function SkillGroup({
  group,
}: SkillGroupProps) {
  return (
    <section className={styles.group}>
      <div className={styles.heading}>
        <span>
          {group.number}
        </span>

        <div>
          <h2>
            {group.title}
          </h2>

          <p>
            {group.description}
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        {group.skills.map((skill) => (
          <article
            key={skill.name}
            className={styles.skill}
          >
            <div className={styles.skillHeader}>
              <h3>
                {skill.name}
              </h3>

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
              />
            </div>

            {skill.level && (
              <span className={styles.level}>
                {skill.level}
              </span>
            )}

            {skill.description && (
              <p>
                {skill.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}