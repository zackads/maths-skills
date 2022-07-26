import { MentalRepresentation } from "./MentalRepresentation";
import { Question } from "./Question";

/**
 * Aggregate root
 */
export interface Skill {
  id: string;
  title: string;
  description: string;
  mentalRepresentations: MentalRepresentation[]; // Value object
  questions: Question[]; // Value object
  prereqs: string[];
}
