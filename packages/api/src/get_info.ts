export default class GetInfo {
  constructor() { }

  getMessage() {
    return this.hello() + " " + this.world();
  }

  hello() {
    return "Hello";
  }
  world() {
    return "World";
  }
}