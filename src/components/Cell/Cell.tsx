import './Cell.css';

import React, { Component } from 'react';

import { Digit } from '../../models/Digit';

interface CellProps {
  digit?: Digit;
  onCellSelected: () => void;
};

interface State {
  selected: boolean;
}

export class Cell extends Component<CellProps, State> {

  constructor(props: CellProps) {
    super(props);
    this.state = {
      selected: false
    };

    this.onCellClick = this.onCellClick.bind(this);
  }

  onCellClick(event: React.MouseEvent) {
    this.setState({selected: !this.state.selected});
    this.props.onCellSelected();
  }

  render() {
    return (
      <div className={`Cell${this.state.selected ? " Selected" : ""}`} onClick={this.onCellClick}>
        <div className="Digit">{this.props.digit?.number}</div>
      </div>
    );
  }
}
