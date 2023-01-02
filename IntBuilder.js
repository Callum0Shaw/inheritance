class Es6BaseClass {
  constructor(value) {
    this.value = value
  }

  test() {
    console.log("Testing parent");
  }

  get() {
    return this.value
  }
}


class IntBuilder extends Es6BaseClass {
  constructor(value) {
    super(value);
  }
  
  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from
  }

  plus(...arr) {
    this.value = arr.reduce(((a, c) => a + c), this.value)
    return this
  }

  minus(...arr) {
    this.value = arr.reduce(((a, c) => a - c), this.value)
    return this
  }

  multiply(n) {
    this.value *= n
    return this
  }

  divide(n) {
    this.value /= n
    return this
  }

  mod(n) {
    this.value = this.value % n
    return this
  }
}


