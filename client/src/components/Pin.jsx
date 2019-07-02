import React from 'react';

const Pin = ({ state }) => {
  return state ? (
    <React.Fragment>
      <p>Still Up</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <p>Knoced Down</p>
    </React.Fragment>
  );
};

export default Pin;
