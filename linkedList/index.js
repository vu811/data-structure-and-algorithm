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
}

let linkedList = new LinkedList()
linkedList.insert(1)
linkedList.insert(5)
linkedList.insert(7)

console.log(linkedList)
