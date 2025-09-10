//task1

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true ->instance of look at the prototype
                                   //here a.__proto__ == B.prototype so return true
