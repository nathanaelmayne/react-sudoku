import { Digit } from './Digit';
import { PlayerChanges } from './PlayerChanges';

export interface Puzzle {
  givens: Digit[];
  solution: Digit[];
  playerChanges: PlayerChanges;
}

export namespace Puzzle {

  export function validate(puzzle: Puzzle): boolean {
    return true; //TODO: Put validate solution logic here.
  }

  export function reset(puzzle: Puzzle): void {
    puzzle.playerChanges = {
      placedDigits: [],
      candidates: []
    }
  }
}