//https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let mod, div
  do {
    mod = Math.floor(num % 10)
    div = Math.floor(num / 10)
    num = mod + div
  } while (num >= 10)
  return num
}

/**
 * @param {number} num
 * @return {number}
 */
var addDigitsNoLoopRecursion = function (num) {}

export { addDigits, addDigitsNoLoopRecursion }
