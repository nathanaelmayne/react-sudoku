import './Cell.css';

import React, { Component } from 'react';

import { Digit } from '../../models/Digit';

export interface CellProps {
  digit?: Digit;
  selected: boolean;
  onCellSelected: () => void;
};

export class Cell extends Component<CellProps> {

  constructor(props: CellProps) {
    super(props);

    this.onCellClick = this.onCellClick.bind(this);
  }

  handleKeyDown(event: KeyboardEvent){
    if(event.keyCode === 97) {
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  onCellClick() {
    this.props.onCellSelected();
  }

  render() {
    return (
      <div className={`Cell${this.props.selected ? " Selected" : ""}`} onClick={this.onCellClick}>
        <div className="Digit">{this.props.digit?.number}</div>
      </div>
    );
  }
}
