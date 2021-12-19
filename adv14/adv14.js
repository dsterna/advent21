import { data1, testData } from "./input14.js";

const data = data1;
// const startString = "NNCB"
// nr 2 1386066477056 to low (1667185508352 - 281119031296)
const startString = "ONHOOSCKBSVHBNKFKSBK"


const sums = {}
// Object.keys(sums).forEach(elem => sums[elem] = 0)

console.log(data)// rec(startString, 0)
if (startString) {
  for (let i = 0; i < startString.length - 1; i++) {
    let pair = startString[i] + startString[i + 1]
    sums[pair] = 1

  }
}
rec2(0, sums)


function rec(str, count) {
  console.log(count)
  if (count >= 20) {
    countOccurances(str)
    return
  }
  else {
    let tempStr = str
    for (let i = 0; i < str.length - 1; i++) {
      let pair = str[i] + str[i + 1]
      if (pair in data) {
        // sums[pair] = sums[pair] + 1
        tempStr = tempStr.slice(0, i * 2 + 1) + data[pair] + tempStr.slice(i * 2 + 1);
      }
    }
    countOccurances(str)
    rec(tempStr, count + 1)
  }
}


function rec2(count, sums) {
  console.log(count)
  console.log(sums)
  const sums2 = {}
  if (count > 39) {
    countOcc2(sums)
    return
  }
  else {
    Object.entries(sums).forEach(([key, sum]) => {
      for (let index = 0; index < sum; index++) {

        // sums2[key[0] + data[key]] = sums2[key[0] + data[key]] + sum + 1
        // sums2[data[key] + key[1]] = sums2[data[key] + key[1]] + sum + 1
        sums2[key[0] + data[key]] = sums2[key[0] + data[key]] ? sums2[key[0] + data[key]] + 1 : 1
        sums2[data[key] + key[1]] = sums2[data[key] + key[1]] ? sums2[data[key] + key[1]] + 1 : 1
      }
    })
    rec2(count + 1, sums2)
  }
}

function countOccurances(str) {
  const uni = [...new Set(str)].join('');
  const occ = [...uni].map(elem => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === elem)
        sum = sum + 1
    }
    return { sum, elem }
  })
  // 1667185508352 - 281119031296
  occ.sort((a, b) => b.sum - a.sum)
  console.log(occ)
}

function countOcc2(obj) {
  let fistLetters = Object.keys(obj).map(elem => elem[0])
  let temp = []
  fistLetters.forEach(elem => !temp.includes(elem) && temp.push(elem))
  const counts = {}
  temp.forEach(elem => counts[elem] = 0)

  Object.entries(obj).forEach(([key, val]) => {
    const letter = key[0]
    if (letter in counts) {
      counts[letter] = counts[letter] + val
    }
  })
  console.log(counts)
}