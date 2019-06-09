import { getHighestNumber, getLowestNumber, factorial } from '../../src/high_order_function/functionBasic';
import NegativeNumberError from '../../src/high_order_function/negativeNumberError';

test('getHighestNumber should return 41 from given array', () => {
  const list = [32, 40, 1, 23, 41, 5];
  const highestNumber = getHighestNumber(list);
  expect(highestNumber).toBe(41);
});

test('getHighestNumber should return 40 from given array', () => {
  const list = [32, 40, 1, 23, 5];
  const highestNumber = getHighestNumber(list);
  expect(highestNumber).toBe(40);
});

test('getlowestNumber should return 1 from given array', () => {
  const list = [32, 40, 1, 23, 41, 5];
  const lowestNumber = getLowestNumber(list);
  expect(lowestNumber).toBe(1);
});

test('factorial of 5 is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial of 0 is 1', () => {
  expect(factorial(0)).toBe(1);
});

test('factorial of -1 should throw negative number exception', () => {
  try {
    factorial(-1);
  } catch (error) {
    expect(error).toBeInstanceOf(NegativeNumberError);
  }
});
