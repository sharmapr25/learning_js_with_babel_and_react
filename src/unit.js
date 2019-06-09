export default class Unit {
  constructor(conversionFactor) {
    this.conversionFactor = conversionFactor;
  }

  convertTo(value, anotherUnit) {
    return value * (anotherUnit.conversionFactor / this.conversionFactor);
  }
}

Unit.CENTIMETER = new Unit(1);
Unit.METER = new Unit(0.01);
