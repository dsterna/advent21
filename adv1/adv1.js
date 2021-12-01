import { data1, testData } from './input1.js'

const nr1 = (array) => {
    let before = Infinity
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > before)
            sum = sum + 1
        before = array[i]
    }
    console.log(sum)
}
const nr2 = (data) => {
    let array = []
    for (let i = 0; i < data.length - 2; i++) {
        array.push(data[i] + data[i + 1] + data[i + 2])
    }
    return array
}

nr1(data1)

nr1(nr2(data1))