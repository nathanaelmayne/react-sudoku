import './Grid.css';

import * as React from 'react';

import { Puzzle } from '../../models/Puzzle';
import { Cell } from '../Cell/Cell';
import { Digit } from '../../models/Digit';

export default class Grid extends React.Component<{}> {
  cells: any;
  puzzle: Puzzle;

  constructor(props: {}) {
    super(props)

    this.cells = [];
    this.puzzle = {
      givens: [],
      solution: [],
      playerChanges: {
        placedDigits: [],
        candidates: []
      }
    };
  }

  render() {
    this.getPuzzle();
    this.getDisplayedDigits();

    return (
      <div className="Grid">
        <div className="Cells">
          {this.cells}
        </div>
        <div className="">
        </div>
      </div>
    );
  }

  getPuzzle() {
    this.puzzle.givens = this.getGivens();
  }

  getGivens(): Digit[] {
    return [{
      location: {
        row: 1, 
        column: 1
      },
      index: 0,
      number: 1
    }, {
      location: {
        row: 9,
        column: 9
      },
      index: 80,
      number: 9
    }]
  }

  getDisplayedDigits() {
    for (var i = 0; i < 81; i++) {
      let digit = this.getDigitAtGridIndex(i);
      this.cells.push(
        <Cell digit={digit}>
        </Cell>
      )
    }
  }

  getDigitAtGridIndex(index: number) {
    return this.puzzle.givens.find(g => g.index === index) || this.puzzle.playerChanges.placedDigits.find(g => g.index === index);
  }
}