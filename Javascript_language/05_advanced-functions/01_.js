function cachingDecorator(func){
    let cache=new Map();
    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }
        let result = func(x); // run original function
        cache.set(x, result); // save it for later
        return result;
    }
}

function square(n){
    alert("called with ")
}