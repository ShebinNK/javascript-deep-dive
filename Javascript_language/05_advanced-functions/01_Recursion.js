//task1
function sumTo(n){
    if(n==1) return 1;
    return n+sumTo(n-1);
}
alert(sumTo(100));


//task2
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) );

//task3
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
printList(list);

function printList(list){
    alert(list.value);
    if(list.next){
        printList(list.next);
    }
}

//task

function printReverseList(list){
    if(list.next){
        printReverseList(list.next);
    }
    alert(list.value);
}