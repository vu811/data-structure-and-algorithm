/**
 * Check a array is existed on other array
 */
Array.prototype.contains = function contains(arr) {
  return this.every((item) => arr.find((x) => x === item))
}

const arr = [1, 2, 56]
console.log(arr.contains([1, 2, 3, 4]))
