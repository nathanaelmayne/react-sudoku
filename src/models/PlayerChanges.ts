import { Digit } from "./Digit";

export interface PlayerChanges {
  placedDigits: Digit[];
  candidates: Digit[];
}