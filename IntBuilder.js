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

