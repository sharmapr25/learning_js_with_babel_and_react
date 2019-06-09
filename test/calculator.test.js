import Calculator from '../src/calculator';

test('two plus two is four', () => {
  const sum = Calculator.add(2, 2);
  expect(sum).toBe(4);
});

