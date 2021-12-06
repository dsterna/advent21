import { data1, testData } from "./input6.js";

const data = testData;

function rec(days, ary) {
  console.log(days, ary.length);
  if (days === 80) {
    console.log("done", ary.length);
  } else {
    const tempChildren = [];
    rec(days + 1, [
      ...ary.map((elem) => {
        if (elem === 0) {
          tempChildren.push(8);
          return 6;
        } else {
          return elem - 1;
        }
      }),
      ...tempChildren,
    ]);
  }
}
rec(0, data);

function newRec(
  days,
  zeros,
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  sevens,
  eights
) {
  if (days === 256) {
    console.log(
      "done",
      zeros + ones + twos + threes + fours + fives + sixes + sevens + eights
    );
  } else {
    newRec(
      days + 1,
      ones,
      twos,
      threes,
      fours,
      fives,
      sixes,
      sevens + zeros,
      eights,
      zeros
    );
  }
}

let ones = data.filter((elem) => elem === 1).length;
let twos = data.filter((elem) => elem === 2).length;
let threes = data.filter((elem) => elem === 3).length;
let fours = data.filter((elem) => elem === 4).length;
let fives = data.filter((elem) => elem === 5).length;
// let sixes = data.filter((elem) => elem === 6).length;

newRec(0, 0, ones, twos, threes, fours, fives, 0, 0, 0);
