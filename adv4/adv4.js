import {
    data1 as testData,
    data1Rand as testDataRandom,
} from './input4.js'

function countUnmarked(ary) {
    let temp = 0
    for (let j = 0; j < 5; j++) {
        for (let jj = 0; jj < 5; jj++) {
            if (typeof ary[j][jj] !== 'string')
                temp = temp + ary[j][jj]
        }
    }
    return temp
}


function nr1() {
    let done = false
    let lastRand = 0
    let unMarkedSum = 0
    testDataRandom.forEach((rand) => {
        for (let i = 0; i < testData.length; i++) {
            for (let ver = 0; ver < 5; ver++) {
                for (let hor = 0; hor < 5; hor++) {
                    if (rand === testData[i][ver][hor]) {
                        testData[i][ver][hor] = rand.toString()
                    }
                    if (!done) {
                        let consist = 0
                        for (let horCheck = 0; horCheck < 5; horCheck++) {
                            if (typeof testData[i][ver][horCheck] === 'string') {
                                consist = consist + 1
                                if (consist === 5) {
                                    lastRand = rand
                                    done = true
                                }
                            }
                        }
                        consist = 0
                        for (let verCheck = 0; verCheck < 5; verCheck++) {
                            if (typeof testData[i][verCheck][hor] === 'string') {
                                consist = consist + 1
                                if (consist === 5) {
                                    lastRand = rand
                                    done = true
                                }
                            }
                        }
                    } else if (unMarkedSum === 0) {
                        unMarkedSum = countUnmarked(testData[i])
                    }
                }
            }

        }
    })
    console.log(unMarkedSum, "*", lastRand, "=", lastRand * unMarkedSum)


}
function nr2() {
    let lastRand = 0
    let unMarkedSum = 0
    testDataRandom.forEach((rand) => {
        for (let i = 0; i < testData.length; i++) {
            for (let ver = 0; ver < 5; ver++) {
                for (let hor = 0; hor < 5; hor++) {
                    if (testData[i]?.length > 0) {
                        if (rand === testData[i][ver][hor]) {
                            testData[i][ver][hor] = rand.toString()
                        }
                    }
                    if (testData[i]?.length > 0) {
                        let consist = 0
                        for (let horCheck = 0; horCheck < 5; horCheck++) {
                            if (typeof testData[i][ver][horCheck] === 'string') {
                                consist = consist + 1
                                if (consist === 5) {
                                    lastRand = rand
                                    if (testData.filter(elem => elem).length === 1) {
                                        unMarkedSum = countUnmarked(testData[i])
                                    }
                                    testData[i] = null
                                }
                            }
                        }
                        consist = 0
                        if (testData[i]?.length > 0) {
                            for (let verCheck = 0; verCheck < 5; verCheck++) {
                                if (typeof testData[i][verCheck][hor] === 'string') {
                                    consist = consist + 1
                                    if (consist === 5) {
                                        lastRand = rand
                                        if (testData.filter(elem => elem).length === 1) {
                                            unMarkedSum = countUnmarked(testData[i])
                                        }
                                        testData[i] = null
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }

    })
    console.log(unMarkedSum, "*", lastRand, "=", lastRand * unMarkedSum)
}

// nr1()
 nr2()