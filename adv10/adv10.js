import { data1, testData } from "./input10.js";

const data = data1;
const complete = ['()', '[]', '{}', '<>']

let tempArray = []
function nr11(line) {
  complete.forEach(pair => {
    if (line.includes(pair)) {
      line = line.replace(pair, '')
    }
  })
  if (line.includes('()') || line.includes('{}') || line.includes('[]') || line.includes('<>')) {
    nr11(line)
  }
  else {
    tempArray.push(line)
  }
}
data.forEach(str => nr11(str))

let sum1 = 0
let incomplete = []
tempArray.forEach(str => {
  let indexes = [str.indexOf(')'), str.indexOf(']'), str.indexOf('}'), str.indexOf('>')]
  let filtered = indexes.map(ind => ind === -1 ? null : ind)
  if (filtered.every(elem => elem === null)) {
    incomplete.push(str)
  }

  let sum = Infinity
  let bracketPlace = null
  filtered.forEach((bracket, index) => {
    if (bracket !== null)
      if (bracket < sum) {
        sum = bracket
        bracketPlace = index
      }
  })
  if (bracketPlace !== null) {
    switch (bracketPlace) {
      case 0:
        sum1 = sum1 + 3
        break;
      case 1:
        sum1 = sum1 + 57
        break;
      case 2:
        sum1 = sum1 + 1197
        break;
      case 3:
        sum1 = sum1 + 25137
        break;
    }

  }


})
console.log(sum1)

let strings = []
incomplete.forEach(str => {
  let sum2 = 0
  str.split('').reverse().forEach(char => {
    sum2 = sum2 * 5
    switch (char) {
      case '(':
        sum2 = sum2 + 1
        break;
      case '{':
        sum2 = sum2 + 3
        break;
      case '[':
        sum2 = sum2 + 2
        break;
      case '<':
        sum2 = sum2 + 4
        break;
    }

  })
  strings.push(sum2)
})
let half = (strings.length - 1) / 2

console.log(strings.sort((a, b) => a - b)[half])