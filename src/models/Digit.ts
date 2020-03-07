import { CellLocation } from "./CellLocation";

export interface Digit {
  location: CellLocation;
  index: number;
  number?: number;
}