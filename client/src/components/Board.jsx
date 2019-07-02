import React from 'react';
import Pin from './Pin.jsx';
import css from '../styles.css';

const Board = ({ pins }) => {
  return (
    <div className="board">
      <div>
        <Pin state={pins[0]} />
        <Pin state={pins[1]} />
        <Pin state={pins[2]} />
        <Pin state={pins[3]} />
      </div>
      <div>
        <Pin state={pins[4]} />
        <Pin state={pins[5]} />
        <Pin state={pins[6]} />
      </div>
      <div>
        <Pin state={pins[7]} />
        <Pin state={pins[8]} />
      </div>
      <div>
        <Pin state={pins[9]} />
      </div>
    </div>
  );
};

export default Board;
