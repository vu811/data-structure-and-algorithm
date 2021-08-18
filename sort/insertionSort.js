const insertionSort = (arr) => {
  const sortedArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let insertedToSortedArr = false
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] <= sortedArr[j]) {
        for (let k = sortedArr.length; k > j; k--) {
          sortedArr[k] = sortedArr[k - 1]
        }
        sortedArr[j] = arr[i]
        insertedToSortedArr = true
        break
      }
    }
    if (!insertedToSortedArr) {
      sortedArr[sortedArr.length] = arr[i]
    }
  }
  return sortedArr
}

const insertionSortBetter = (arr) => {
  let j, key
  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }
  return arr
}

console.log(insertionSortBetter([2, 5, 9, 3, 6, 3, 11, 0]))
