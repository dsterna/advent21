import { data1, testData } from './input3.js'

const data = testData
const len = data[0].length
let gamma = ""

for (let i = 0; i < len; i++) {
    let zeros = 0
    let ones = 0
    for (let ii = 0; ii < data.length; ii++) {
        if (data[ii][i] === 0)
            zeros = zeros + 1
        else {
            ones = ones + 1
        }
    }
    if (zeros > ones)
        gamma = gamma + "0"
    else {
        gamma = gamma + "1"
    }
}
let epsilon = "";
[...gamma].forEach(elem => {
    if (elem === "0") {
        epsilon = epsilon + "1"
    }
    else {
        epsilon = epsilon + "0"
    }
})


console.log("nr1", parseInt(gamma, 2) * parseInt(epsilon, 2))
let OXY = 0
function recursonOxy(array, bit) {
    if (array.length === 1) {
        let str = ""
        array[0].forEach(elem => str = str + elem)
        OXY = parseInt(str, 2)
    }
    else {
        let zeroPositions = []
        let onePositions = []
        for (let i = 0; i < array.length; i++) {
            if (array[i][bit] === 0) {
                zeroPositions.push(i)
            }
            else {
                onePositions.push(i)
            }
        }
        if (zeroPositions.length > onePositions.length) {
            let tempAry = zeroPositions.map(elem => array[elem])
            recursonOxy(tempAry, bit + 1)
        }
        else if (onePositions.length > zeroPositions.length) {
            let tempAry = onePositions.map(elem => array[elem])
            recursonOxy(tempAry, bit + 1)
        }
        else {
            let tempAry = onePositions.map(elem => array[elem])
            recursonOxy(tempAry, bit + 1)
        }
    }
}

let SCR = 0
function recursonScr(array, bit) {
    if (array.length === 1) {
        let str = ""
        array[0].forEach(elem => str = str + elem)
        SCR = parseInt(str, 2)
    }
    else {
        let zeroPositions = []
        let onePositions = []
        for (let i = 0; i < array.length; i++) {
            if (array[i][bit] === 0) {
                zeroPositions.push(i)
            }
            else {
                onePositions.push(i)
            }
        }
        if (zeroPositions.length < onePositions.length) {
            let tempAry = zeroPositions.map(elem => array[elem])
            recursonScr(tempAry, bit + 1)
        }
        else if (onePositions.length < zeroPositions.length) {

            let tempAry = onePositions.map(elem => array[elem])
            recursonScr(tempAry, bit + 1)
        }
        else {
            let tempAry = zeroPositions.map(elem => array[elem])
            recursonScr(tempAry, bit + 1)
        }
    }

}
recursonOxy(data1, 0)
recursonScr(data1, 0)
const answ = OXY * SCR
console.log("nr2", answ)





