export default class NegativeNumberError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
