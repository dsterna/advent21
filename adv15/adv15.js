import { data1, testData } from "./input15.js";

const data = data1;

let leny = data.length - 1
let lenx = data[0].length - 1
let min = 0
for (let y = 0; y < leny - 1; y++) {
    min = min + data[y][0]

}
for (let x = 0; x < lenx - 1; x++) {
    min = min + data[0][x]
}
// 50 för testData 
// 884 för data1
console.log(min)



function rec(y, x, sum) {
    if (sum > min) {
        // break
    }
    else if (y === 0 && x === 0) {
        if (sum < min) {
            min = sum
        }
    }
    else if (y === 0) {
        rec(y, x - 1, sum + data[y][x])

    }
    else if (x === 0) {
        rec(y - 1, x, sum + data[y][x])
    }
    else {

        rec(y - 1, x, sum + data[y][x])
        rec(y, x - 1, sum + data[y][x])
    }
}
rec(leny, lenx, 0)

console.log(min)