import {getHighestNumber, getLowestNumber} from '../../src/high_order_function/functionBasic';

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
