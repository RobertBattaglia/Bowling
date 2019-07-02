import React from 'react';
import { GiBowlingPin } from 'react-icons/gi';

const Pin = ({ state }) => {
  return state ? (
    <React.Fragment>
      <GiBowlingPin size={48} />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <GiBowlingPin size={48} color="red" />
    </React.Fragment>
  );
};

export default Pin;
