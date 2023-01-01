function StringBuilder(str = '') {
  this.str = str

  this.get = function() {
    return this.str
  }

  this.plus = function(...strings) {
    let newString = this.str
    strings.forEach(s => newString += s);
    this.str = newString
    return this
  }

  this.minus = function(n) {
    this.str = this.str.slice(0, n * -1)
    return this
  }

  this.multiply = function(int) {
    const str = this.str
    for (let i = 1; i < int; i++) {
      this.str += str      
    }
    return this
  }

  this.divide = function(n) {
    this.str = this.str.slice(0, Math.floor(this.str.length / n))
    return this
  }
  this.remove = function(subStr) {
    this.str = this.str.split(subStr).join('');
    return this;
  }
  this.sub = function (from, n) {
    this.str = this.str.slice(from, from + n)
    return this
  }
}



