//the actual Node 'element' that we create using the LinkedList class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//the 'list' data structure which controls how nodes are added and placed
class LinkedList {
  constructor(head = null) {
    this.head = null;
    this.size = 0;
  }
  //add element to end of the linked list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let pointer = this.head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    this.size++;
  }
  //adds element to the start of the list
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  // returns the size of the liked list
  printSize() {
    return console.log("The amount of elements in the list: " + this.size);
  }
  //returns the first node element in the list
  printHead() {
    return console.log(`The head of the linked list is ${this.head.value}`);
  }
  printTail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    console.log("The tail of the linked list is: " + tail.value);
  }
}
const list = new LinkedList();
list.append(5);
list.append(6);
list.append(2);
list.prepend(12);
list.printSize();
list.printHead();
list.printTail();
