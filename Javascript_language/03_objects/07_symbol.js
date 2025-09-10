let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] );

//why
// As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.


//

//symbol are skipped for in
let id1 = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id1]: 123 //here what inside [] will be  calculated then the assignment will happen
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123


//golbal symbol
// read from the global registry
let id2 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id"); //Symbol.for("id") checks a global symbol registry. If there's already a symbol for "id", it returns that same one; if not, it creates it and stores it globally.

// the same symbol
alert( id2 === idAgain ); // true