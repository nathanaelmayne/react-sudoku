import './Grid.css';

import * as React from 'react';

import { Puzzle } from '../../models/Puzzle';
import { Cell } from '../Cell/Cell';
import { Digit } from '../../models/Digit';
import { CellLocation } from '../../models/CellLocation';

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

    this.handleCellSelected = this.handleCellSelected.bind(this);
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

  handleCellSelected(digit: Digit) {
    digit.number = 8;
    console.log('selected ' + digit.location.row + " " +  digit.location.column);
  }

  getDisplayedDigits() {
    for (var i = 0; i < 81; i++) {
      let digit = this.getDigitAtGridIndex(i);
      this.cells.push(
        <Cell key={i} digit={digit} onCellSelected={() => this.handleCellSelected(digit)}>
        </Cell>
      )
    }
  }

  getDigitAtGridIndex(index: number) {
    let digit = this.puzzle.givens.find(g => g.index === index) 
      || this.puzzle.playerChanges.placedDigits.find(g => g.index === index);
    
    return digit 
      ? digit 
      : {
        location: this.calculateLocationFromIndex(index),
        index: index,
        number: undefined
      } as Digit
  }

  calculateLocationFromIndex(index: number) {
    return {
      row: this.calculateRowFromIndex(index),
      column: this.calculateColumnFromIndex(index)
    } as CellLocation;
  }

  calculateRowFromIndex(index: number) {
    //TODO: Figure out a better way to do this.
    if (index <= 8) return 1;
    if (index >= 9 && index <= 17) return 2;
    if (index >= 18 && index <= 26) return 3;
    if (index >= 27 && index <= 35) return 4;
    if (index >= 36 && index <= 44) return 5;
    if (index >= 45 && index <= 53) return 6;
    if (index >= 54 && index <= 62) return 7;
    if (index >= 63 && index <= 71) return 8;
    if (index >= 72 && index <= 80) return 9;
  }

  calculateColumnFromIndex(index: number) {
    if (index <= 8) return index - 0;
    if (index >= 9 && index <= 17) return index - 8;
    if (index >= 18 && index <= 26) return index - 17;
    if (index >= 27 && index <= 35) return index - 26;
    if (index >= 36 && index <= 44) return index - 35;
    if (index >= 45 && index <= 53) return index - 44;
    if (index >= 54 && index <= 62) return index - 53;
    if (index >= 63 && index <= 71) return index - 62;
    if (index >= 72 && index <= 80) return index - 71;
  }
}