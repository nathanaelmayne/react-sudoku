import React from 'react';
import './Cell.css';

function Cell() {

  return (
    <div className="Cell">
      <div className="Number">
          {Math.floor(Math.random() * 10)}
      </div>
    </div>
  );
}

export default Cell;