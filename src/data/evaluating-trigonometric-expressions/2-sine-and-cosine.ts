import { Question } from "../../model/Question";
import { trig0 } from "./0-sine";
import { trig1 } from "./1-cosine";

/**
 * Evaluating the sine and cosine functions for inputs of npi/6 and npi/4
 */
export const trig2: [Question, ...Question[]] = [...trig0, ...trig1];
