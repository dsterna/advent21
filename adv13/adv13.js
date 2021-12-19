import { data1, data1Folds, testData, testFolds } from "./input13.js";

const data = data1;
const folds = data1Folds

// 1505 to high


function print(ary) {
  for (let i = 0; i < ary.length; i++) {
    let str = ""
    for (let ii = 0; ii < ary[0].length; ii++) {
      str = str + ary[i][ii]
    }
    console.log(str)
  }
  console.log()
}

const newFolds = folds.map(elem => elem.split("fold along ")[1].split("="))
console.log(newFolds)
// real 447*2+1 = 895, temp 15
const sizeOfY = 895
// real = 655*2+1 = 1311, temp 11
const sizeOfX = 1311


let grid = []
for (let i = 0; i < sizeOfY; i++) {
  const tempArray = []
  for (let ii = 0; ii < sizeOfX; ii++) {
    tempArray.push('.')
  }
  grid.push(tempArray)
}

data.forEach(([x, y]) =>
  grid[y][x] = "#"
)


for (let index = 0; index < 12; index++) {

  if (newFolds[index][0] === 'y')
    foldY(newFolds[index][1])
  else
    foldX(newFolds[index][1])
  console.log(countDots())
}


function foldY(at) {
  grid[at].fill('-')
  print(grid)
  const firstHalf = grid.slice(0, at)
  const secondHalf = grid.slice(-at)
  // print(firstHalf)
  // print(secondHalf)

  // transpose (y)
  const transposed = secondHalf.map((elem, index) => secondHalf[secondHalf.length - index - 1])
  // print(transposed)

  // console.log("merge ")
  // print(firstHalf)
  // console.log("with")
  // print(transposed)


  const newGrid = firstHalf.map((ary, i) => ary.map((elem, ii) => {
    if (elem === '#' && transposed[i][ii] === '#') {
      return "#"
    }
    else if (transposed[i][ii] === '#') {
      return "#"
    }
    else if (elem === "#") {
      return "#"
    }
    else {
      return '.'
    }
  }))
  print(newGrid)
  grid = newGrid
}

function foldX(at) {
  // print(grid)
  // console.log(at)
  const firstHalf = grid.map((ary => ary.filter((elem, index) => index < at)))
  const secondHalf = grid.map((ary => ary.filter((elem, index) => index > at)))

  for (let index = 0; index < grid.length; index++) {
    grid[index][at] = '|'

  }
  print(grid)
  // print(firstHalf)
  // print(secondHalf)
  // transpose(x)
  // print(secondHalf)
  const transposed = secondHalf.map((ary) => ary.map((elem, ii) => ary[ary.length - ii - 1]))
  // print(transposed)
  const newGrid = firstHalf.map((ary, i) => ary.map((elem, ii) => {
    if (elem === '#' && transposed[i][ii] === '#') {
      return "#"
    }
    else if (transposed[i][ii] === '#') {
      return "#"
    }
    else if (elem === "#") {
      return "#"
    }
    else {
      return '.'
    }
  }))
  print(newGrid)
  grid = newGrid
}


function countDots() {
  let sum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let ii = 0; ii < grid[0].length; ii++) {
      if (grid[i][ii] === '#') {
        sum = sum + 1
      }
    }
  }
  return sum
}

