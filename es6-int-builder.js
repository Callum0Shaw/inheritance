class IntBuilder {
  constructor(int) {
    this.int = int;
  }
  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from
  }
  plus(...arr) {
    this.int = arr.reduce(((a, c) => a + c), this.int)
    return this
  }
  minus(...arr) {
    this.int = arr.reduce(((a, c) => a - c), this.int)
    return this
  }
  multiply(n) {
    this.int *= n
    return this
  }
  divide(n) {
    this.int /= n
    return this
  }
  mod(n) {
    this.int = this.int % n
    return this
  }
  get() {
    return this.int
  }
}
console.log(IntBuilder.random(10, 100));

let intBuilder = new IntBuilder(10);

intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3)                       

console.log(intBuilder.get());

