function getNumberBasedOn(condition, numbers) {
  return numbers.reduce((num1, num2) => condition(num1, num2));
}

function getHighestNumber(numbers) {
  return getNumberBasedOn(Math.max, numbers);
}

function getLowestNumber(numbers) {
  return getNumberBasedOn(Math.min, numbers);
}


export { getHighestNumber, getLowestNumber };

