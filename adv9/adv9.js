import { data1, testData } from "./input9.js";

const data = data1;

const OPERATIONS = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
]

const grid = data.map(elem => elem.split(""))
for (let i = 0; i < grid.length; i++) {
  for (let ii = 0; ii < grid[i].length; ii++) {
    grid[i][ii] = parseInt(grid[i][ii])
  }
}
const height = grid.length
const width = grid[0].length


const points = []
const pointCoords = []
for (let i = 0; i < height; i++) {
  for (let ii = 0; ii < width; ii++) {
    let tempSum = 0
    let neighbors = 0;
    OPERATIONS.forEach(([x, y]) => {
      const newi = i + y;
      const newii = ii + x;
      if (newii >= 0 && newii < width && newi >= 0 && newi < height) {
        neighbors += 1;
        if (grid[newi][newii] > grid[i][ii]) {
          tempSum = tempSum + 1
        }
      }
    })
    if (neighbors === tempSum) {
      points.push(grid[i][ii])
      pointCoords.push([i, ii])
    }
  }
}
let sum = 0

points.forEach(elem => { sum = sum + elem + 1 })
const basin = pointCoords.map(([x, y]) => nr2(x, y))
const temp = basin.map(elem => (Object.keys(elem).length))
temp.sort((a, b) => a - b)

console.log(temp[temp.length - 1], temp[temp.length - 2], temp[temp.length - 3])
console.log(temp[temp.length - 1] * temp[temp.length - 2] * temp[temp.length - 3])

function nr2(y, x, obj = {}) {
  OPERATIONS.forEach(([yy, xx]) => {
    const newi = y + yy;
    const newii = x + xx;
    if (newii >= 0 && newii < width && newi >= 0 && newi < height) {
      if (!(`${newi}${newii}` in obj)) {
        if (grid[newi][newii] < 9) {
          obj[`${newi}${newii}`] = grid[newi][newii]
          nr2(newi, newii, obj)
        }
      }
    }
  })
  return obj
}



// 2199943210
// 398X894921
// 9XX6789892
// X767896789
// 9899965678

// { '13': 7, '21': 8, '22': 5, '30': 8 }