const LEN = 10
const rand = Math.random()
let rabbitStart = Math.round(rand * LEN)

function iteration(rabbitPos) {
    let rab = Math.random() >= 0.5 ? rabbitPos + 1 : rabbitPos - 1
    if (rab > 10)
        rab = rab - 2
    if (rab < 0)
        rab = rab + 2
    return rab
}

let newPos = rabbitStart
// for (let index = 0; index < 10; index++) {
//     newPos = iteration(newPos)
//     console.log(newPos)
// }


// Starts EVEN
for (let i = 0; i < LEN - 1; i++) {
    // ojämn
    if (i % 2 > 0) {
        i = i + 1
    }
    newPos = iteration(newPos)
    if (i === newPos) {
        console.log("FOUND")
    }
}
console.log()
for (let i = 0; i < LEN - 1; i++) {
    // jämn
    if (i % 2 === 0) {
        i = i + 1
    }
    newPos = iteration(newPos)
    if (i === newPos) {
        console.log("FOUND")
    }
}










// let myPost = 0
// let i = 0
// // startsEven
// while (myPost !== newPos) {
//     console.log("myPost", myPost, "newPos", newPos)
//     console.log(myPost & 2)
//     if (myPost >= LEN)
//         break
//     if (myPost & 2 > 0) {
//         myPost = myPost + 2
//     }
//     else {
//         myPost = myPost + 1
//     }
//     newPos = iteration(newPos)
//     i = i + 1

// }


// myPost = 0
// i = 0
// // startsUnEven
// while (myPost !== newPos) {
//     console.log("myPost", myPost, "newPos", newPos)

//     if (myPost >= LEN)
//         break
//     if (myPost & 2 > 0) {
//         myPost = myPost + 1
//     }
//     else {
//         myPost = myPost + 2
//     }
//     newPos = iteration(newPos)
//     i = i + 1

// }
// if (myPost === newPos) {
//     console.log("Found at ", myPost)
// }
// else { console.log("CRAP") }






/**
Algo
even    = 0,2,4,6,8,10
uneven  = 1,3,5,7,9

startsEven
0 1 2 3 4 5 6 7 8 9


if(startsAtEven){
    i % 2 === 0 {
        next -> uneven
    }
}
if(startsUneven){
    i % 2 !== 0 {
        next -> even
    }
}
*/