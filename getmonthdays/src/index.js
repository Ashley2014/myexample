import {getMonthDays,getMonthDaysEdge} from './code'


console.log('114r4rr')
// console.log(getMonthDaysEdge())
//[几号，星期几]

describe("getmonthdays method", function() {
  it("2017.9 firstday should be 1.friday", function() {
    expect(getMonthDays(2017,9)[0]).toEqual([1,5]);
  });
  it("2016.2 lastday should be 29.monday", function() {
    expect(getMonthDays(2016,2)[28]).toEqual([29,1]);
  });
});


if (module.hot) {
  module.hot.accept(['./print.js','./code.js'], function () {
    console.log('Accepting the updated printMe module!');
  })
}
