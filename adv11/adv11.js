import { data1, testData } from "./input11.js";

/**
 * 1755 to high
 * 1705 to low
 * 1656 to low
 * 
 * 1742 wrong 
 */
const operations = [
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
const data = data1;

let totalFlashes = 0
function print() {
  for (let i = 0; i < 10; i++) {
    let str = ""
    for (let ii = 0; ii < 10; ii++) {
      str = str + data[i][ii].toString()
    }
    console.log(str)
  }
  console.log()
}
function step(params) {
  for (let i = 0; i < 10; i++) {
    for (let ii = 0; ii < 10; ii++) {
      data[i][ii] = data[i][ii] + 1
    }
  }
}

function flash(params) {
  for (let i = 0; i < 10; i++) {
    for (let ii = 0; ii < 10; ii++) {
      if (data[i][ii] >= 10) {
        totalFlashes = totalFlashes + 1
        data[i][ii] = 0
        operations.forEach(([y, x]) => {
          const newY = i + y;
          const newX = ii + x;
          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            if (data[newY][newX] !== 0)
              data[newY][newX] = data[newY][newX] + 1
          }
        })
      }
    }
  }
  if (countFlashes() > 0)
    flash()
}

function countFlashes() {
  let flashes = 0
  for (let i = 0; i < 10; i++) {
    for (let ii = 0; ii < 10; ii++) {
      if (data[i][ii] >= 10) {
        flashes = flashes + 1
      }
    }
  }
  return flashes
}

function chechAll() {
  for (let i = 0; i < 10; i++) {
    for (let ii = 0; ii < 10; ii++) {
      if (data[i][ii] !== 0) {
        return false
      }
    }
  }
  return true
}
for (let index = 0; index < 101; index++) {
  // console.log("after " + index + " steps")
  // print()
  step()
  flash()
  if(chechAll()){
    console.log("nu", index)
  }
}
console.log(totalFlashes)
