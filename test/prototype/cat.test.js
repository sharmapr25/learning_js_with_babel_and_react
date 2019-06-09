import Cat from '../../src/prototype/cat';

test('cat should say meow', () => {
  const cat = new Cat('todo');
  expect(cat.meow()).toBe('todo can meow!');
});
