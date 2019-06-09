export default class Measurement {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  equals(otherMeasurement) {
    if (!otherMeasurement) {
      return false;
    }
    if (!(otherMeasurement instanceof Measurement)) {
      return false;
    }

    const convertedValue = this.unit.convertTo(this.value, otherMeasurement.unit);
    return (convertedValue - otherMeasurement.value) === 0;
  }

  add(otherMeasurement) {
    const convertedValue = otherMeasurement.unit.convertTo(otherMeasurement.value, this.unit);
    return new Measurement(this.value + convertedValue, this.unit);
  }
}
