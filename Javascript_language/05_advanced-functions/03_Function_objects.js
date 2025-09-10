//task1
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }
    counter.set = ((value) => {
        count = value;
    })
    counter.decrease = () => {
        count--;
    }
    return counter;
}


let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // set the new count

alert(counter()); // 10

counter.decrease(); // decrease the count by 1

alert(counter()); // 10 (instead of 11)

//task2

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15