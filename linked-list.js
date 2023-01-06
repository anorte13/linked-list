//the actual Node 'element' that we create using the LinkedList class
class Node {
    constructor(value = null, next = null){
        this.value = value;
        this.next= next;
    }
}
//the 'list' data structure which controls how nodes are added and placed
class LinkedList {
    constructor(head = null, size) {
        this.head = null;
        this.size = 0;
    }
//add element to end of the linked list
  append(value) {
    const newNode = Node(value);
    if (head === null) {
        head = newNode;
    } else {
        let pointer = head;
        while (pointer.next !== null){
            pointer = pointer.next;
        }
        pointer.next = newNode;
    }
    size++;
  }
  //adds element to the start of the list
  prepend(value){
    const newNode = Node(value);
    head = newNode;
    size++;
  }
  size() {
    console.log('The amount of elements in the list: ' + this.size);
  }
  head() {
    console.log('The head of the linked list is: ' + this.head);
  }
  tail() {
    console.log('The last node in the list is: ' + Node.next);
  }
  at(index) {
    
  }
  pop()
  contains(valye){}
  find(value){}
  toString(){}
}
const list = LinkedList();
list.append(5);
list.append(6);
list.prepend(10);
list.size();

  
  
