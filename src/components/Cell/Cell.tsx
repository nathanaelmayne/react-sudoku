import React, { Component } from 'react';
import './Cell.css';

type CellProps = {
  number: number
}

export class Cell extends Component<CellProps> {

  render() {
    return (
      <div className="Cell">
        <div className="Number">
          {this.props.number}
        </div>
      </div>
    );
  }
  
}