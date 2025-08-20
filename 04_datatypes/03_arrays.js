//task1
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? -> the output will be three elements with last element will be the function

//task2
function sumInput() {
    let numbers=[];
    while(true){
        let value=prompt('A number please',0);
        if(value ==null || value=="" || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum=0;
    for (let number of numbers){
        sum+=number;
    }
    return sum;
}
alert(sumInput());