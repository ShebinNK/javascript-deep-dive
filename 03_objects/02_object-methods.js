let user = {
    name: "Alice",
    age: 25,
    sayHi: function() {
        console.log("Hello!");
    },
    sayName() {
        console.log(`My name is ${this.name}`);
    }
};

user.sayHi();    // Hello!
user.sayName();  // My name is Alice