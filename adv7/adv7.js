import { data1, testData } from "./input7.js";

const data = testData;


const min = Math.min(...data)
const max = Math.max(...data)

console.log(min, max)
let sum = Infinity
let point = 0
for (let i = 0; i < 16; i++) {
  let diff = 0
  for (let ii = 0; ii < data.length; ii++) {
    diff = diff + Math.abs(i - data[ii])
  }
  if (diff < sum)
    sum = diff
    point = i
}
console.log(sum, point)