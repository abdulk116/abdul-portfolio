import SkillGroup from "./SkillGroup";

import { skillGroups } from "@/data/skills";

export default function SkillGroups() {
  return (
    <div>
      {skillGroups.map((group) => (
        <SkillGroup
          key={group.id}
          group={group}
        />
      ))}
    </div>
  );
}