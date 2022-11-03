import Big from 'big.js';

export default function operate(fisrtNum, secondNum, operation) {
  const ONE = Big(fisrtNum);
  const TWO = Big(secondNum);
  if (operation === '+') {
    return ONE.plus(TWO).toString();
  }
  if (operation === '-') {
    return ONE.minus(TWO).toString();
  }
  if (operation === 'x') {
    return ONE.times(TWO).toString();
  }
  if (operation === '÷') {
    try {
      return ONE.div(TWO).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return ONE.mod(TWO).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
