import './Cell.css';

import React, { Component } from 'react';

import { Digit } from '../../models/Digit';

type CellProps = {
  digit?: Digit;
};

export class Cell extends Component<CellProps> {

  render() {
    return (
      <div className="Cell">
        <div className="Digit">{this.props.digit?.number}</div>
      </div>
    );
  }
}
