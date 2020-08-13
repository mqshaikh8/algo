var Node = function(val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.head = null
    this.size = 0
};

MyLinkedList.prototype.get = function(index) {
    if(this.head === null){
        return -1
    }
    let node = this.head
    let x = 0
    while(true){
        node = node.next
        if(node === null){
            return -1
        }
        if(x === index){
            return node.val
        }
        x++
    }
};
MyLinkedList.prototype.addAtHead = function(val) {
  let dummyNode = new Node(val)
  let previousHead = this.head
  this.head = dummyNode
  this.head.next = previousHead
};

MyLinkedList.prototype.addAtTail = function(val) {
    let dummyNode = new Node(val)
    let node = this.head
    while(node !== null){
      node = node.next
    }
    node.next = dummyNode
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = this.head
    let dummyNode = new Node(val)
    while (true) {
      if(index === 0){
        break
      }      
      node = node.next
      index--
    }
    node.next = dummyNode
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
  let prevNode = null
  let node = this.head
  let futureNode = node.next
  while (true){
    if(index === 0){
      break;
    }
    prev = node
    node = node.next
    futureNode = node.next
    index--
  }
  prev.next = futureNode

};
MyLinkedList.prototype.print = () => {
  let node = this.head
  while(true){
    console.log()
  }
}