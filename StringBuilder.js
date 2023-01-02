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
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder.plus(' all', '!')                         // 'Hello all!'
console.log(strBuilder.get()); 
  strBuilder.minus(4)                                  // 'Hello '
  console.log(strBuilder.get()); 
  strBuilder.multiply(3)                               // 'Hello Hello Hello '
  console.log(strBuilder.get()); 
  strBuilder.divide(4)                                 // 'Hell';
  console.log(strBuilder.get()); 
  strBuilder.remove('l')                               // 'He';
  console.log(strBuilder.get()); 
  strBuilder .sub(1,1)                                  // 'e';
console.log(strBuilder.get()); 



