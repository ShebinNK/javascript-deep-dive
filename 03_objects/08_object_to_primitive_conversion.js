// There are 3 types (hints) of it:

// "string" (for alert and other operations that need a string)
// "number" (for maths)
// "default" (few operators, usually objects implement it the same way as "number")
// The specification describes explicitly which operator uses which hint.

// The conversion algorithm is:

// Call obj[Symbol.toPrimitive](hint) if the method exists,
// Otherwise if hint is "string"
// try calling obj.toString() or obj.valueOf(), whatever exists.
// Otherwise if hint is "number" or "default"
// try calling obj.valueOf() or obj.toString(), whatever exists.

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return `{name: "${this.name}"}`;
        } else {
            return this.money;
        }
    }
};

console.log(String(user)); // {name: "John"}
console.log(+user);        // 1000
console.log(user + 500);   // 1500