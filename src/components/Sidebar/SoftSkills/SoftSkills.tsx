import { FiUsers } from "react-icons/fi";
import Section from "@/components/Section/Section";
import { softSkills } from "@/data/cv";

export default function SoftSkills() {
  return (
    <Section icon={FiUsers} title="Soft Skills">
      <p>{softSkills.join(" · ")}</p>
    </Section>
  );
}