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

    daysArray.push([(i + 1),index,month,year]);
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

  let prevDays
  if(firstDay[1]===0){
    //firstday is sunday
    prevDays=7
  }else{
    prevDays=firstDay[1]
  }
//calendar always 6*7=42
  let nextDays=42-prevDays-currentMonthdays.length

  // console.log(prevDays,nextDays)

  let out=currentMonthdaysPrev.slice(-prevDays).concat(currentMonthdays).concat(currentMonthdaysNext.slice(0,nextDays))




  // console.log(out)

  return out

}


export function calThreeMonth(month, index){
  var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  month = parseInt(month);
  index = parseInt(index);
  let monthPass = month >= 1 && month <= 12;
  let indexPass = index >= 0 && index <= 2;
  if (!monthPass) {
    console.error(`require month >= 1 && month <= 12, but got ${month}`);
    return;
  }
  if (!indexPass) {
    console.error(`require index >= 0 && index <= 2, but got ${index}`);
    return;
  }
  let i = months.indexOf(month) + 12;
  let double = [].concat(months, months, months);
  let three = double.slice(i - 1, i + 2); // 获取到被选月份的, [前一个月, 当前月, 后一个月]

  let slide = [].concat(three, three, three);
  let j = index * 2 + 1;
  let ret = slide.slice(j, j + 3); // 当前月份在不同的位置是的排列方式;
  return ret;

}



// export default class Calendar{
//
//
// }

// export default getMonthDays
// export default getMonthDaysEdge
