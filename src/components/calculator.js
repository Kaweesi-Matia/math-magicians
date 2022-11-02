import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <button type="button" className="row-1">0</button>

        <button type="button" className="ac">AC</button>
        <button type="button" className="plus-minus">+/-</button>
        <button type="button" className="percentage">%</button>
        <button type="button" className="signs">÷</button>

        <button type="button" className="seven">7</button>

        <button type="button" className="eight">8</button>
        <button type="button" className="nine">9</button>
        <button type="button" className="signs">x</button>

        <button type="button" className="four">4</button>
        <button type="button" className="five">5</button>
        <button type="button" className="six">6</button>
        <button type="button" className="signs">-</button>

        <button type="button" className="one">1</button>
        <button type="button" className="two">2</button>
        <button type="button" className="three">3</button>
        <button type="button" className="signs">+</button>

        <button type="button" className="zero">0</button>
        <button type="button" className="decimal-point">.</button>
        <button type="button" className="signs">=</button>

      </div>
    );
  }
}
