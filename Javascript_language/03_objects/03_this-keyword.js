// functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.




//task1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); //undefined

//example calculator code using this

let calculator={
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    },
    read(){
        this.a=+prompt('a?',0);//+ denotes unary +
        this.b=+prompt('b?',0);
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//task3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0