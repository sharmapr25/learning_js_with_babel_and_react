import Supercat from '../../src/prototype/supercat';

test('supercat can meow', () => {
  const supercat = new Supercat('sonarlint');
  expect(supercat.meow()).toBe('sonarlint can meow!');
});

test('supercat can do super meow', () => {
  const supercat = new Supercat('sonarlint');
  expect(supercat.supermeow()).toBe('sonarlint can do super meow!');
});
