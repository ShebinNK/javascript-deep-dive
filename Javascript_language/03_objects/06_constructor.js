// Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );