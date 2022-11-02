import React, { Component } from 'react';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>MATH CALCULATOR</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
