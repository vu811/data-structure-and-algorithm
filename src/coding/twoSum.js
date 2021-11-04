/**Two sum, input is sorted array */

// 1. normal
function twoSum1(sortedArray, target) {
  for (let i = 0; i < sortedArray.length; i++) {
    let j = i + 1
    while (sortedArray[i] + sortedArray[j] <= target) {
      if (sortedArray[i] + sortedArray[j] === target) return [i + 1, j + 1]
      j++
    }
  }
}

// 2. 2 pointer
function twoSum2(sortedArray, target) {
  let i = 0,
    j = sortedArray.length - 1
  while (sortedArray[i] + sortedArray[j] !== target) {
    sortedArray[i] + sortedArray[j] > target ? j-- : i++
  }
  return [i + 1, j + 1]
}

console.log(twoSum2([2, 3, 7, 11, 19], 18))
