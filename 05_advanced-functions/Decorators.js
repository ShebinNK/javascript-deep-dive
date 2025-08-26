//task1


//qn:Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function spy(func){
    function wrapper(...args){
        wrapper.call.push(args);
        return func.apply(this,args);
    }
    wrapper.calls=[];
    return wrapper;
}