import React from 'react';

import Calculator from './components/calculator';

class ShowCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default ShowCalculator;
