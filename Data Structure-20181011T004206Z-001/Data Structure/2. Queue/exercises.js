// 1. Implement Queue Data Structure using String
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// enqueue(value) - add a new value and returns the size of the storage
// dequeue() - remove one element and returns the deleted element
// peek() - displays the latest element in the storage
// size() - the size of the storage

class Queue {
  constructor(str) {
    if(typeof(str) == "string") {
      this.string = str;
    } else return;
  }
  isEmpty() {
    if(this.string) {
      return false;
    } else {
      return true;
    }
  }
  push(value) {
    this.string = `###${value}`.concat(this.string);
    return this.string; 
  }
  pop() {
    let lastValue = this.string.lastIndexOf("###");
    let newString = this.string.substring(0, lastValue);
    this.string = newString;
    return this.string;
  }
  peek() {
    let lastValue = this.string.lastIndexOf("###");
    let length = this.string.length;
    let lastStoreValue = this.string.substring(lastValue, length);
    let lastString = lastStoreValue.substring(3, lastStoreValue.length);
    return lastString;
  }
  size() {
    return this.string.length;
  }
}

// Implement all above methods using Object data type
// Additionals:
// Modify your queue to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// queue.contains('hello') - true or false

// Write a method named sort() which sorts by value

