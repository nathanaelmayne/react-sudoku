import "./Grid.css";

import * as React from "react";

import { Puzzle } from "../../models/Puzzle";
import { Cell } from "../Cell/Cell";
import { Digit } from "../../models/Digit";
import { CellLocation } from "../../models/CellLocation";

interface State {
  selectedCellIndex?: number;
}

export default class Grid extends React.Component<{}, State> {
  cells: any;
  puzzle: Puzzle;

  constructor(props: {}) {
    super(props);

    this.cells = [];
    this.puzzle = {
      givens: [],
      solution: [],
      playerChanges: {
        placedDigits: [],
        candidates: []
      }
    };

    this.state = {
      selectedCellIndex: undefined
    };

    this.handleCellSelected = this.handleCellSelected.bind(this);
    this.getPuzzle();
  }

  getPuzzle() {
    this.puzzle.givens = this.getGivens();
  }

  getGivens(): Digit[] {
    return [
      {
        location: {
          row: 1,
          column: 1
        },
        index: 0,
        number: 1,
        selected: false
      },
      {
        location: {
          row: 9,
          column: 9
        },
        index: 80,
        number: 9,
        selected: false
      }
    ];
  }

  handleCellSelected = (digit: Digit) => {
    this.cells.forEach((c: any) => {
      this.setState({selectedCellIndex: digit.index});
    });
  }

  getDisplayedDigits() {
    this.cells = [];
    for (let i = 0; i < 81; i++) {
      let digit = this.getDigitAtGridIndex(i);
      this.cells.push(
        <Cell
          key={i}
          digit={digit}
          selected={this.state.selectedCellIndex === digit.index}
          onCellSelected={() => this.handleCellSelected(digit)}
        ></Cell>
      );
    }
  }

  getDigitAtGridIndex(index: number) {
    let digit =
      this.puzzle.givens.find(g => g.index === index) ||
      this.puzzle.playerChanges.placedDigits.find(g => g.index === index);

    return digit
      ? digit
      : ({
          location: this.calculateLocationFromIndex(index),
          index: index,
          number: undefined 
        } as Digit);
  }

  calculateLocationFromIndex(index: number) {
    return {
      row: this.calculateRowFromIndex(index),
      column: this.calculateColumnFromIndex(index)
    } as CellLocation;
  }

  calculateRowFromIndex(i: number) {
    //TODO: Figure out a better way to do this.
    if (i <= 8) return 1;
    if (i >= 9 && i <= 17) return 2;
    if (i >= 18 && i <= 26) return 3;
    if (i >= 27 && i <= 35) return 4;
    if (i >= 36 && i <= 44) return 5;
    if (i >= 45 && i <= 53) return 6;
    if (i >= 54 && i <= 62) return 7;
    if (i >= 63 && i <= 71) return 8;
    if (i >= 72 && i <= 80) return 9;
  }

  calculateColumnFromIndex(i: number) {
    if (i <= 8) return i - 0;
    if (i >= 9 && i <= 17) return i - 8;
    if (i >= 18 && i <= 26) return i - 17;
    if (i >= 27 && i <= 35) return i - 26;
    if (i >= 36 && i <= 44) return i - 35;
    if (i >= 45 && i <= 53) return i - 44;
    if (i >= 54 && i <= 62) return i - 53;
    if (i >= 63 && i <= 71) return i - 62;
    if (i >= 72 && i <= 80) return i - 71;
  }

  render() {
    this.getDisplayedDigits();

    return (
      <div className="Grid">
        <div className="Cells">{this.cells}</div>
      </div>
    );
  }
}
