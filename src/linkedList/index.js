class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }

  sort() {
    if (this.head === null) return

    let currentNode = this.head
    let compareCurrentNode = null
    let temp = null

    while (currentNode.next !== null) {
      compareCurrentNode = currentNode.next
      while (compareCurrentNode !== null) {
        if (currentNode.data > compareCurrentNode.data) {
          temp = currentNode.data
          currentNode.data = compareCurrentNode.data
          compareCurrentNode.data = temp
        }
        compareCurrentNode = compareCurrentNode.next
      }
      currentNode = currentNode.next
    }
  }
}

let linkedList = new LinkedList()
linkedList.insert(11)
linkedList.insert(5)
linkedList.insert(2)
linkedList.insert(9)
linkedList.insert(1)

linkedList.sort()

console.log(linkedList)
