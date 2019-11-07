import React from 'react';
import './Calc.scss';
import './Display.scss';

function CalcBtn(props) {
  return (
    <div className="p-calc__cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default CalcBtn;
