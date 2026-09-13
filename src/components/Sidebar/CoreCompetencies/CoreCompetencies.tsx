import { FiSettings } from "react-icons/fi";
import Section from "@/components/Section/Section";
import { coreCompetencies } from "@/data/cv";

export default function CoreCompetencies() {
  return (
    <Section icon={FiSettings} title="Core Competencies">
      <p>{coreCompetencies}</p>
    </Section>
  );
}