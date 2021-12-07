import { data1, testData } from "./input7.js";

const data = testData;

const min = Math.min(...data);
const max = Math.max(...data);

let sum = Infinity;
let point = 0;

let sums = [];
for (let i = min; i < max; i++) {
  let nr1Diff = 0;
  let nr2Diff = 0;
  for (let ii = 0; ii < data.length; ii++) {
    let diffCopy = Math.abs(i - data[ii]);
    nr1Diff = nr1Diff + diffCopy;
    for (let iii = 1; iii < diffCopy + 1; iii++) {
      nr2Diff = nr2Diff + iii;
    }
  }
  sums.push(nr2Diff);
  if (nr1Diff < sum) {
    sum = nr1Diff;
    point = i;
  }
}
console.log(sum)
sums.sort((a, b) => a - b);
console.log(sums[0]);
