import { testData, data1 } from "./input5.js";

const data = data1;
// { x1: 0, y1: 9, x2: 5, y2: 9 },

const maxY = Math.max(
  ...data.map((elem) => (elem.y1 > elem.y2 ? elem.y1 : elem.y2))
);
const maxX = Math.max(
  ...data.map((elem) => (elem.x1 > elem.x2 ? elem.x1 : elem.x2))
);

const grid = [...new Array(maxX + 1)].map(() =>
  [...new Array(maxY + 1)].map(() => 0)
);

for (let i = 0; i < data.length; i++) {
  let x1 = data[i].x1;
  let x2 = data[i].x2;
  let y1 = data[i].y1;
  let y2 = data[i].y2;
  let dist = 0;
  let neg;
  if (x1 === x2) {
    //    draw y
    neg = 1;
    dist = y1 - y2;
    if (dist < 0) neg = -1;
    for (let ii = 0; ii < Math.abs(dist) + 1; ii++) {
      grid[y2 + ii * neg][x1] = grid[y2 + ii * neg][x1] + 1;
    }
  } else if (y1 === y2) {
    //   draw x
    neg = 1;
    dist = x1 - x2;
    if (dist < 0) neg = -1;
    for (let ii = 0; ii < Math.abs(dist) + 1; ii++) {
      grid[y2][x2 + ii * neg] = grid[y2][x2 + ii * neg] + 1;
    }
    // console.log(dist);
  } else {
    //  diagonal line

    /**
     * 4 fall
     * nedåt till höger
     * nedåt till vänster
     * uppåt till höger
     * uppåt till vänster
     */
    // upp
    let distX = 0;
    let distY = 0;
    if (y2 > y1) {
      if (x2 > x1) {
        //  * neråt  höger
        // console.log("NH", x1, y1, x2, y2);
        distX = x1 - x2;
        distY = y1 - y2;
        for (let ii = 0; ii < Math.abs(distX) + 1; ii++) {
          grid[y1 + ii][x1 + ii] = grid[y1 + ii][x1 + ii] + 1;
        }
      } else {
        //   neråt vänster
        // console.log("NV", x1, y1, x2, y2);
        distX = x1 - x2;
        distY = y1 - y2;
        for (let ii = 0; ii < distX + 1; ii++) {
          grid[y1 + ii][x1 + ii * -1] = grid[y1 + ii][x1 + ii * -1] + 1;
        }
      }
    } else {
      if (x2 > x1) {
        //  * uppåt  höger
        // console.log("UH", x1, y1, x2, y2);
        distX = x1 - x2;
        distY = y1 - y2;
        for (let ii = 0; ii < distY + 1; ii++) {
          grid[y1 + ii * -1][x1 + ii] = grid[y1 + ii * -1][x1 + ii] + 1;
        }
      } else {
        //   uppåt vänster
        // console.log("UV", x1, y1, x2, y2);
        distX = x1 - x2;
        distY = y1 - y2;

        for (let ii = 0; ii < Math.abs(distY) + 1; ii++) {
          grid[y1 + ii * -1][x1 + ii * -1] =
            grid[y1 + ii * -1][x1 + ii * -1] + 1;
        }
      }
    }

    //   8,0 -> 0
  }
}
grid.forEach((elem, i) => {
  let str = "";
  elem.map((elem2) => (str = str + elem2));
//   console.log(str);
});

let intersections = 0;
grid.forEach((elem, i) => {
  elem.map((elem2) => {
    if (elem2 > 1) {
      intersections = intersections + 1;
    }
  });
});

console.log(intersections);
