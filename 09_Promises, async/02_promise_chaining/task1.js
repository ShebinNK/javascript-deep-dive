promise.then(f1).catch(f2);//stm1

promise.then(f1, f2);//stm2

//both stament are different 
//The difference is that if an error happens in f1, then it is handled by .catch here:

promise
  .then(f1)
  .catch(f2);
// …But not here:

promise
  .then(f1, f2);

//That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.