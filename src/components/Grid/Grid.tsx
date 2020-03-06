import React from 'react';
import './Grid.css';
import { Cell } from '../Cell/Cell';

function Grid() {
  let cells: any = [];

  for (var i= 0 ; i < 81; i++) {
    // let number = Math.floor(Math.random() * 10);
    let number = Math.floor(Math.random() * 10);
    cells.push(
      <Cell number={number}>
      </Cell>
    )
  }

  return (
    <div className="Grid">
      <div className="Cells">
        {cells}
      </div>
      <div className="RegionBorder">
      </div>
    </div>
  );
}

export default Grid;