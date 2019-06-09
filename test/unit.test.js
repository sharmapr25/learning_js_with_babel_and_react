import Unit from '../src/unit';

test('return 1 meter for 100 cm', () => {
  const convertedValue = Unit.CENTIMETER.convertTo(100, Unit.METER);
  expect(convertedValue).toBe(1);
});
