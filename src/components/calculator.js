import React, { useState } from 'react';

import calculate from './logic/calculate';

const Calculator = () => {
  const startState = {
    total: 0,
    next: '',
    operation: '',
  };
  const [state, setState] = useState(startState);
  const { total, next, operation } = state;

  const clickFunction = (event) => {
    const TargetValue = event.target.value;
    const updateState = calculate(state, TargetValue);
    setState(updateState);
  };

  return (
    <div className="container">
      <div className="row-1">
        <p>
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </p>
      </div>
      <div className="main-div">
        <button onClick={clickFunction} type="button" className="AC" value="AC">
          AC
        </button>
        <button onClick={clickFunction} type="button" className="plus-minus" value="+/-">
          +/-
        </button>
        <button onClick={clickFunction} type="button" className="division" value="%">
          %
        </button>
        <button onClick={clickFunction} type="button" className="btn signs" value="&#247;">
          &#247;
        </button>
        <button onClick={clickFunction} type="button" className="seven" value="7">
          7
        </button>
        <button onClick={clickFunction} type="button" className="eight" value="8">
          8
        </button>
        <button onClick={clickFunction} type="button" className="nine" value="9">
          9
        </button>
        <button onClick={clickFunction} type="button" className="multiply signs" value="x">
          x
        </button>
        <button onClick={clickFunction} type="button" className="four" value="4">
          4
        </button>
        <button onClick={clickFunction} type="button" className="five" value="5">
          5
        </button>
        <button onClick={clickFunction} type="button" className="six" value="6">
          6
        </button>
        <button onClick={clickFunction} type="button" className="minus signs" value="-">
          -
        </button>
        <button onClick={clickFunction} type="button" className="one" value="1">
          1
        </button>
        <button onClick={clickFunction} type="button" className="two" value="2">
          2
        </button>
        <button onClick={clickFunction} type="button" className="three" value="3">
          3
        </button>
        <button onClick={clickFunction} type="button" className="plus signs" value="+">
          +
        </button>
        <button onClick={clickFunction} type="button" className="zero" value="0">
          0
        </button>
        <button onClick={clickFunction} type="button" className="dot" value=".">
          .
        </button>
        <button onClick={clickFunction} type="button" className="equal signs" value="=">
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
