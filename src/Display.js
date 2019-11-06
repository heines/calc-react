import React from 'react';
import './Display.scss';

function Display(props) {
  return (
    <div className="p-display">
      {props.param}
    </div>
  );
}

export default Display;
