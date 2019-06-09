export default function getHighestNumber(numbers) {
  return numbers.reduce((num1, num2) => Math.max(num1, num2), 0);
}

