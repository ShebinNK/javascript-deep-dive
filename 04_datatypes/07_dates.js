//task1
let d1=new Date(2012,1,20,3,12);
alert(d1);

//task2
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

//task

// function getLastDayOfMonth(year, month) that returns the last day of month

function getLastDayOfMonth(year,month){
    let date=new Date(year,month+1,0);
    return date.getDate();
}

//task

//how many seconds passed currently
function getSecondsToday(){
    let now=new Date();
    let today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let diff=now - today;
    return Math.round(diff/1000);//ms->s
}

//task

//format the Relative Date
