import { data1, testData } from "./input6.js";

const data = testData;


function rec(days, ary) {
  console.log(days, ary.length )
  if (days === 180) {
    console.log("done", ary.length)
  }
  else {
    const tempChildren = []
    rec(days + 1, [...ary.map(elem => {
      if (elem === 0) {
        tempChildren.push(8)
        return 6
      }
      else {
        return elem - 1
      }
    }), ...tempChildren])
  }
}
rec(0, data)