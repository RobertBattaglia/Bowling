import React from 'react';
import Pin from './Pin.jsx';

const Board = ({ pins }) => {
  return (
    <React.Fragment>
      {pins.map((pin, index) => {
        if (pin) {
          return <Pin key={index} state={1} />;
        } else {
          return <Pin key={index} state={0} />;
        }
      })}
    </React.Fragment>
  );
};

export default Board;
