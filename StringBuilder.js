function Es5BaseClass(value) {
  this.value = value

  this.test = function () {
    console.log("Testing parent");
  }
  this.get = function () {
    return this.value
  }
}

function StringBuilder(value) {
  Es5BaseClass.call(this, value)

  this.plus = function(...strings) {
    let newString = this.value
    strings.forEach(s => newString += s);
    this.value = newString
    return this
  }

  this.minus = function(n) {
    this.value = this.value.slice(0, n * -1)
    return this
  }

  this.multiply = function(int) {
    const str = this.value
    for (let i = 1; i < int; i++) {
      this.value += str      
    }
    return this
  }

  this.divide = function(n) {
    this.value = this.value.slice(0, Math.floor(this.value.length / n))
    return this
  }

  this.remove = function(subStr) {
    this.value = this.value.split(subStr).join('');
    return this;
  }

  this.sub = function (from, n) {
    this.value = this.value.slice(from, from + n)
    return this
  }
}




