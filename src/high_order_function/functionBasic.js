function getHighestNumber(numbers) {
  return numbers.reduce((num1, num2) => Math.max(num1, num2));
}

function getLowestNumber(numbers) {
  return numbers.reduce((num1, num2) => Math.min(num1, num2));
}


export { getHighestNumber, getLowestNumber };

