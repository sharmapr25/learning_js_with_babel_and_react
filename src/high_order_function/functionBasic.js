import NegativeNumberError from './negativeNumberError';

function getNumberBasedOn(condition, numbers) {
  return numbers.reduce((num1, num2) => condition(num1, num2));
}

function getHighestNumber(numbers) {
  return getNumberBasedOn(Math.max, numbers);
}

function getLowestNumber(numbers) {
  return getNumberBasedOn(Math.min, numbers);
}

function factorial(number) {
  if (number < 0) {
    throw new NegativeNumberError(`${number} is a negative value`);
  }

  function iter(fact) {
    return number === 0 ? fact : number * factorial(number - 1);
  }

  return iter(1);
}


export { getHighestNumber, getLowestNumber, factorial };

