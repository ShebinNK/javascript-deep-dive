
"use strict";

let promise = Promise.resolve();

promise
.then(() => alert("promise done!"))
.then(alert('hello'));

alert("code finished");

//first 'hello allerted' then 'code finished' then 'promise done'





//romise handling is always asynchronous, as all promise actions pass through the internal “promise jobs” queue, also called “microtask queue” (V8 term).

//So .then/catch/finally handlers are always called after the current code is finished.

//If we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call.