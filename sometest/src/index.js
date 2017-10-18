import {getMonthDays,getMonthDaysEdge,calThreeMonth} from './code'


console.log('114r4rr')
// console.log(getMonthDaysEdge())
//[几号，星期几]

describe("data string compare method", function() {
  it("'2012-1-2'>'2012-1-3' should be false", function() {
    expect('2012-1-2'>'2012-1-3').toBe(false);
  });
  it("'2012-01-2'>'2012-1-3' should be false", function() {
    expect('2012-01-2'>'2012-1-3').toBe(false);
  });
  it("'2012-01-2'>'2012-01-3' should be false", function() {
    expect('2012-01-2'>'2012-01-3').toBe(false);
  });
  // it("'2012-1-2'>'2012-01-3' should be false", function() {
  //   expect('2012-1-2'>'2012-01-3').toBe(true);
  // });
  it("'2012-10-2'>'2012-11-3' should be false", function() {
    expect('2012-10-2'>'2012-11-3').toBe(false);
  });
  it("'2012-10-2'>'2012-9-3' should be true", function() {
    expect('2012-10-02'>'2012-09-03').toBe(true);
  });
});


describe("getmonthdays method", function() {
  it("2017.9 firstday should be 1.friday", function() {
    expect(getMonthDays(2017,9)[0]).toEqual([1,5,9,2017]);
  });
  it("2016.2 lastday should be 29.monday", function() {
    expect(getMonthDays(2016,2)[28]).toEqual([29,1,2,2016]);
  });
});

describe("getMonthDaysEdge method", function() {
  it("2017.9 firstcalander should be 27.sunday", function() {
    expect(getMonthDaysEdge(2017,9)[0]).toEqual([27,0,8,2017]);
  });

  it("2016.2 lastday should be 29.monday", function() {
    expect(getMonthDays(2016,2)[28]).toEqual([29,1,2,2016]);
  });

  it("2017.9 lastcalander should be 7.saturday", function() {
    expect(getMonthDaysEdge(2017,9)[41]).toEqual([7,6,10,2017]);
  });

});
describe("calThreeMonth method", function() {
  it("put may at fir", function() {
    expect(calThreeMonth(5,0)).toEqual([5,6,4]);
  });
  it("put may at sec", function() {
    expect(calThreeMonth(5,1)).toEqual([4,5,6]);
  });
  it("put may at thr", function() {
    expect(calThreeMonth(5,2)).toEqual([6,4,5]);
  });

  it("put jan at fir", function() {
    expect(calThreeMonth(1,0)).toEqual([1,2,12]);
  });
  it("put jan at sec", function() {
    expect(calThreeMonth(1,1)).toEqual([12,1,2]);
  });

  it("put jan at thr", function() {
    expect(calThreeMonth(1,2)).toEqual([2,12,1]);
  });

  it("put dec at thr", function() {
    expect(calThreeMonth(12,2)).toEqual([1,11,12]);
  });

  it("put dec at sec", function() {
    expect(calThreeMonth(12,1)).toEqual([11,12,1]);
  });

  it("put dec at fir", function() {
    expect(calThreeMonth(12,0)).toEqual([12,1,11]);
  });



  // it("2016.2 lastday should be 29.monday", function() {
  //   expect(getMonthDays(2016,2)[28]).toEqual([29,1,2,2016]);
  // });



});


if (module.hot) {
  module.hot.accept(['./print.js','./code.js'], function () {
    console.log('Accepting the updated printMe module!');
  })
}
