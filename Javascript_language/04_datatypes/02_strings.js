//task1
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); //john->John

//task2
function checkSpam(str){
    let lowstr=str.toLowerCase();
    return lowstr.includes('viagra') || lowstr.includes('XXX');
}
alert( checkSpam('buy ViAgRA now') );


//task3
function truncate(str,maxlength) {
    return (str.length > maxlength) ?
        str.slice(0,maxlength-1) + '...' : str;
}
truncate("What I'd like to tell on this topic is:", 20);
//truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"


//task4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

//alert( extractCurrencyValue('$120') === 120 ); // true