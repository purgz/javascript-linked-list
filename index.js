class LinkedList {
  constructor() {
    this.nodes = [];
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value, null);

    if (this.size() != 0) {
      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.setNextNode(newNode);
    } else {
      this.head = newNode;
    }

    this.nodes.push(newNode);
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    this.nodes.push(newNode);
  }

  size() {
    return this.nodes.length;
  }

  tail() {
    let currentNode = this.head;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.head;

    if (index < 0 || index > this.size()) {
      console.log("Index out of bounds");
      return null;
    }

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;

    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    return this.nodes.pop();
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode.nextNode) {
      if (currentNode.value == value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode.nextNode) {
      if (currentNode.value == value) {
        return i;
      } else {
        currentNode = currentNode.nextNode;
        i++;
      }
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let output = "";

    if (this.size() != 0) {
      while (currentNode.nextNode) {
        //console.log(currentNode.getValue());
        output += `(${currentNode.getValue()}) -> `;
        currentNode = currentNode.nextNode;
      }
      output += `(${currentNode.getValue()}) -> `;
    }
    return output + " null";
  }

  insertAt(value, index) {
    let currentNode = this.head;

    if (index < 0 || index > this.size()) {
      console.log("Index out of bounds");
      return null;
    }

    //if you try to insert at the start it just calls prepend method
    if (index == 0) {
      list.prepend(value);
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      let newNode = new Node(value, currentNode.nextNode);
      currentNode.nextNode = newNode;
      this.nodes.push(newNode);
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.log("index out of bounds");
      return null;
    }

    let currentNode = this.head;

    if (index != 0) {
      //find the previous node
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }

      //remove the requested node from array
      let nodeIndex = this.nodes.indexOf(currentNode.nextNode);
      this.nodes.splice(nodeIndex, 1);

      currentNode.nextNode = currentNode.nextNode.nextNode;
    } else {
        //if removing the first element, then just update head by one and delete first node from array
        let nodeIndex = this.nodes.indexOf(currentNode);
        this.nodes.splice(nodeIndex,1);
        this.head = currentNode.nextNode;
    }

    return currentNode;
  }
}

class Node {
  constructor(value, nextNode) {
    this.nextNode = nextNode;
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  getValue() {
    return this.value;
  }
}

list = new LinkedList();
list.append(10);
list.append(12);
list.append(13);
list.append(14);
list.append(1);
console.log(list.toString());

list.insertAt(70, 0);
console.log(list.toString());

/*
list.prepend(42);
list.prepend(32);
console.log(list.toString());


list.pop();
console.log(list.toString());

console.log(list.contains(42));
console.log(list.contains(3));
console.log(list.tail())
console.log(list.at(2));

*/
