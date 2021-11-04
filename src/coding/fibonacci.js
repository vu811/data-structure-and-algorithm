//Given a number n, print n-th Fibonacci number

const fibonacci = (n) => {
  let arr = [1, 1, 2]
  for (let index = 0; index < n - 3; index++) {
    const next = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(next)
  }
  return arr
}

console.log(fibonacci(100))
