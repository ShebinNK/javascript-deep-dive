//task1
let a=+prompt("the first number","");
let b=+prompt("the second number","");
alert(a+b);

//task2
function readNumber(){
    let num;
    do{
        num=prompt("enter a number",'');
    }while(!isFinite(num));
    if(num==null || num=='') return null;
    return +num;
}
alert(`Read:${readNumber()}`);