//task1


//using setInterval
function printNumbers(from,to) {
    let current=from;
    let timerId = setInterval(function(){
        alert(current);
        if(current==to){
            clearInterval(timerId);
        }
        current++;
    },1000)
}

function printNumbers(from,to) {
    let current=from;
    setTimeout(function go() {
        alert(current);
        if(current<to) {
            setTimeout(go,1000);
        }
        current++;
    },1000);
}

//task2

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}