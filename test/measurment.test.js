import Measurement from '../src/measurement';
import Unit from '../src/unit';

test('100 centimeter is equal to 1 meter', () => {
  const centimeter = new Measurement(100, Unit.CENTIMETER);
  const meter = new Measurement(1, Unit.METER);

  expect(centimeter.equals(meter)).toBeTruthy();
});

test('1 meter is equal to 100 centimeter', () => {
  const centimeter = new Measurement(100, Unit.CENTIMETER);
  const meter = new Measurement(1, Unit.METER);

  expect(meter.equals(centimeter)).toBeTruthy();
});


test('100 centimeter plus 1 meter is equal to 200 centimeter', () => {
  const hundredCentimeter = new Measurement(100, Unit.CENTIMETER);
  const meter = new Measurement(1, Unit.METER);
  const twoHundredCentimeter = new Measurement(200, Unit.CENTIMETER);

  expect(twoHundredCentimeter.equals(hundredCentimeter.add(meter))).toBeTruthy();
});
