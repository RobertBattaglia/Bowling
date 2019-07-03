import React from 'react';
import { GiBowlingPin } from 'react-icons/gi';

const Pin = ({ state }) => {
  return state ? (
    <React.Fragment>
      <GiBowlingPin size={68} />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <GiBowlingPin size={68} color={'firebrick'} style={{ opacity: '.75' }} />
    </React.Fragment>
  );
};

export default Pin;
