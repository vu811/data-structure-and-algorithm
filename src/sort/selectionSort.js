const selectionSort = (arr) => {
  let min, temp
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

console.log(selectionSort([2, 5, 9, 3, 6, 3, 11, 0]))
