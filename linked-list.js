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
  //returns the first node in the list
  printHead() {
    return console.log(`The head of the linked list is ${this.head.value}`);
  }
  // returns the last node in the list
  printTail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    console.log("The tail of the linked list is: " + tail.value);
  }
  //returns the value of the node at the given index
  at(index) {
    let current = this.head;
    let currentPosition = 0;
    while (current) {
      if (currentPosition === index) {
        console.log("The node at index " + index + " is " + current.value);
        return;
      }
      current = current.next;
      currentPosition++;
    }
    return console.log("No element was found at index " + index);
  }
  //removes the last node in the list and sets it to null
  pop() {
    let pointer = this.head;
    let previous;
    while (pointer.next !== null) {
      previous = pointer;
      pointer = pointer.next;
    }
    previous.next = null;
    this.size--;
    console.log("The last node in list is now deleted");
  }
  //check the list to see whether the value exists in the list
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log("The value was found in the list");
        return;
      }
      current = current.next;
    }
    return console.log("The value was not found");
  }
  //checks the linked list to find a value and their current index
  find(value) {
    let current = this.head;
    let currentPosition = 0;
    while (current) {
      if (current.value === value) {
        console.log("The value was found at index " + currentPosition);
        return;
      }
      current = current.next;
      currentPosition++;
    }
    return console.log("The value " + value + " was not found at any index");
  }
  //converts the node elements to strings
  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value.toString());
      current = current.next;
    }
  }
}
const list = new LinkedList();
list.append(5);
list.append(100);
list.append(6);
list.append(2);
list.prepend(12);
list.printSize();
list.printHead();
list.printTail();
list.at(3);
list.pop();
list.printSize();
list.contains(5);
list.find(6);
list.toString();
