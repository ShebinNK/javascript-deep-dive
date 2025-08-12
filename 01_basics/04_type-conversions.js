let value=true;
alert (typeof value); //bool
//type conv
value = string(value);
alert (typeof value);//string


//num conversion

alert("6"/"2") //return 3

let str = "12";
alert(typeof str); // string
let num = Number(str); // becomes a number 12
alert(typeof num); // number


//boolean conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false




// 0, null, undefined, NaN, ""	becomes false
// any other value	            becomes true