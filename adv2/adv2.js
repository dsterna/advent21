import { data1, testData } from './input2.js'

const nr1 = (array) => {
    let hor = 0
    let ver = 0
    array.forEach(({ dir, num }, index) => {
        switch (dir) {
            case "down":
                ver = ver + num;

                break;
            case "up":
                ver = ver - num;

                break;
            case "forward":
                hor = hor + num;

                break;
        }
    })
    console.log("hor", hor, "depth", ver, hor * ver)
}

const nr2 = (array) => {
    let hor = 0
    let ver = 0
    let aim = 0
    array.forEach(({ dir, num }, index) => {
        switch (dir) {
            case "down":
                // ver = ver + num;
                aim = aim + num;
                break;
            case "up":
                // ver = ver - num;
                aim = aim - num;
                break;
            case "forward":
                hor = hor + num;
                ver = ver + (num * aim)
                break;
        }
    })
    console.log("hor", hor, "depth", ver, hor * ver)
}

nr1(data1)
nr2(data1)

// nr1(nr2(data1))