export function getMonthDays(year, month) {
  let now=new Date();
  year=year||now.getFullYear();
  month=month||now.getMonth()+1;
  year=Number(year)
  month=Number(month)
  let isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
  let numDaysInMonth = [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // let daysIndex = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };

  let index = (new Date(year, month - 1, 1)).getDay();
  // let index = daysIndex[(new Date(year, month - 1, 1)).toString().split(' ')[0]];

  let daysArray = [];
  for (let i = 0;i < numDaysInMonth[month - 1]; i++) {

    daysArray.push([(i + 1),index]);
    index++
    // daysArray.push((i + 1) + '. ' + daysInWeek[index++]);
    // daysArray.push((i + 1));
    if (index == 7){
      index = 0
    };
  }
  return daysArray;
}

export function getMonthDaysEdge(year, month) {
  let now=new Date();
  year=year||now.getFullYear();
  month=month||now.getMonth()+1;
  year=Number(year)
  month=Number(month)

  let currentMonthdays = getMonthDays(year,month)
  let currentMonthdaysPrev = getMonthDays(year,month-1)
  let currentMonthdaysNext = getMonthDays(year,month+1)

  let firstDay=currentMonthdays[0]
  let lastDay=currentMonthdays.slice(-1)[0]

  let prevDays=7-firstDay[1]
  let nextDays=7-lastDay[1]



  return `${prevDays}:${nextDays}`

}



// export default class Calendar{
//
//
// }

// export default getMonthDays
// export default getMonthDaysEdge
