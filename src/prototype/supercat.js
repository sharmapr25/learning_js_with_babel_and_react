import Cat from './cat';

export default class Supercat extends Cat {
  supermeow() {
    return `${this.name} can do super meow!`;
  }
}
