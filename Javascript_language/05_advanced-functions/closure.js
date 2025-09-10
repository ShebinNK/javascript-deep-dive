//task1

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // Hi pete

//task2

{
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); //pete
}

//task3

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?  will return 0
alert( counter2() ); // ?  will return 1


//task6

function sum(a){
    return function sum(b){
        return a+b;
    }
}
sum(-1)(2) //  1  :first sum(1) calls and it returns a function and then the sum(2) will occur and the result will be returned because of the closure a will be remembered


//task7

function inBetween(start,end){
    return function(x){
        return x>=start && x<=end;
    }
}

function inArray(arr){
    return function(x){
        return arr.includes(x);
    }   
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


//task8
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
users.sort(byField('name'));
users.sort(byField('age'));

//ans 
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}


//task10
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j=i;
    let shooter = function() { // create a shooter function,
      alert( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.