import { data1, testData, testData2, testData3 } from "./input12.js";

const data = data1;

const nodes = {}
data.forEach(elem => {
  const [node, dest] = elem.split("-")
  if (node in nodes) {
    nodes[node] = [...nodes[node], dest]
  }
  else {
    nodes[node] = [dest]
  }
  if (dest in nodes) {
    nodes[dest] = [...nodes[dest], node]
  }
  else {
    nodes[dest] = [node]
  }
});





let tempSum = 0

function rec(nodeArray, nodeName, visitedArray) {
  // console.log(nodeArray)
  // console.log(nodeArray, nodeName, visitedArray, hasVisitedSmall)
  if (nodeName === "end") {
    // break
    tempSum = tempSum + 1
    // console.log([...visitedArray, "end"])
  }
  else {
    nodeArray.forEach(node => {
      let isLowerCase = node === node.toLowerCase()

      if (node === "start") {
        // break
      }
      else {
        if (isLowerCase && visitedArray.includes(node)) {
          // break
        }
        else {
          visitedArray.push(nodeName)
          rec(nodes[node], node, [...visitedArray])
        }
      }
    })
  }
}

rec(nodes.start, "start", [])
console.log("nr1", tempSum)





let tempSum2 = 0
let vistedOnceArray = []
function rec2(nodeArray, nodeName, visitedArray, visitedTwice) {
  // console.log(nodeArray)
  // console.log(nodeArray, nodeName, visitedArray, hasVisitedSmall)
  if (nodeName === "end") {
    // break
    tempSum2 = tempSum2 + 1
    // console.log([...visitedArray, "end"])
  }
  else {
    nodeArray.forEach(node => {
      let isLowerCase = node === node.toLowerCase()
      if (node === "start") {
        // break
      }
      else {
        if (isLowerCase && visitedArray.includes(node)) {
          if (!visitedTwice) {
            visitedArray.push(nodeName)
            rec2(nodes[node], node, [...visitedArray], true)
          }
          else { }
        }
        else {
          visitedArray.push(nodeName)
          rec2(nodes[node], node, [...visitedArray], visitedTwice)
        }
      }
    })
  }
}

rec2(nodes.start, "start", [], false)

console.log("nr2", tempSum2)
