// unctions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.



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