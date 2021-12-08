import { data1, data2, testData } from "./input8.js";

// 945974 to high
// 945973 to high

const data = data1;

function calcChar(str) {
  console.log(str)
  let temp = 0
  str.split("").forEach(elem => temp = temp + elem.charCodeAt(0))
  return temp
}

let answerSum = 0
function intersect(str1, str2, from) {
  let temp = []
  str1.split('').forEach(elem => {
    if (!str2.split('').includes(elem)) {
      temp.push(elem)
    }
  })
  return temp.join("")
}
function runFunc() {
  for (let i = 0; i < data.length; i++) {
    let [firstHalf, secondHalf] = data[i].split('|')
    let firstArray = firstHalf.split(" ")
    let secondArray = secondHalf.split(" ")
    firstArray.pop()
    secondArray.shift()

    const nums = {}
    const seg = {}
    let done = false
    while ((Object.keys(nums).length < 10) && !done) {
      firstArray.forEach(elem => {
        let len = elem.length
        if (len === 2) {
          nums[1] = elem
        }
        if (len === 4) {
          nums[4] = elem
        }
        if (len === 3) {
          nums[7] = elem
        }
        if (len === 7) {
          nums[8] = elem
        }
        if (len === 6 && "9" in nums) {
          seg["botLef"] = intersect(elem, nums[9], 1)
        }
        if (len === 5 && "top" in seg) {
          let inter = intersect(elem, nums[4] + seg["top"], 2)
          if (inter.length === 1) {
            seg["bot"] = inter
            nums[9] = nums[4] + seg["top"] + seg["bot"]
          }
        }
        if (len === 6 && "3" in nums && "botLef" in seg) {
          let inter = intersect(elem, nums[3] + seg["botLef"], 3)
          seg["topLef"] = inter

        }
        if (len === 5 && "bot" in seg && "8" in nums) {
          let inter = intersect(elem, nums[7] + seg["bot"], 4)
          if (inter.length === 1) {
            seg["mid"] = inter
            nums[3] = seg["mid"] + seg["bot"] + nums[7]
            nums[0] = intersect(nums[8], seg["mid"], 5)
          }
        }
        if ("1" in nums && "7" in nums) {
          seg["top"] = intersect(nums[7], nums[1], 6)
        }

        if (len === 6 && "0" in nums && "9" in nums && "botLef" in seg) {
          let inter = intersect(nums[0], elem, 7)
          if (inter) {
            if (intersect(seg["botLef"], inter, 8)) {
              seg["topRig"] = inter
              nums[6] = intersect(nums[8], seg["topRig"])
              nums[5] = intersect(nums[6], seg["botLef"])
            }
          }
        }
        if (len === 5 && "3" in nums && "5" in nums) {
          let inter3 = intersect(elem, nums[3], 9)
          let inter5 = intersect(elem, nums[5], 10)
          if (inter3 && inter5) {
            nums[2] = elem
          }
        }
      })
    }
    let tempObj = {}
    Object.entries(nums).forEach(([num, str]) => {
      tempObj[calcChar(str)] = num
    })

    let digits = secondArray.map(elem => tempObj[calcChar(elem)])
    
    let sum = parseInt(digits.join(''))
    answerSum = answerSum + sum
    console.log(sum)
  }
}
runFunc()
console.log(answerSum)