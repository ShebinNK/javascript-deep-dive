Promise (pending)
       |
       v
 resolve(value)  --------------------> reject(error)
       |                                      |
       v                                      v
   .then(onFulfilled) ----------------> .catch(onRejected)
       |
       v
   next .then() -------------------> if error inside → next .catch()
       |
       v
    .finally() (always runs at the end)
