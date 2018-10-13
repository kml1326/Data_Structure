// 1. Implement Stack Data Structure using string data type
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// push(value) - add a new value and returns the size of the storage
// pop() - remove one element and returns the deleted element
// peek() - displays the last pushed element in the storage
// size() - the size of the storage

class StrStack {
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
    this.string += `###${value}`; 
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

// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Write a method named sort() which sorts by value


class ObjStack {
  constructor(capacity) {
    this.capacity = capacity;  
    this.i = Object.keys(this).length;
  }  

  isEmpty() {
    if(this.i - 1 === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(value) {
    if(Object.keys(this).length - 1 > this.capacity) {
      return "Max Capacity Reached.";
    } else
    this[this.i] = value;
    let returnedValue = this[this.i] 
    this.i++;
    return returnedValue;
  }

  pop() {
    let value = this[this.i - 1];
    delete this[this.i - 1];
    this.i--;
    return value;
  }

  peek() {
    return this[this.i - 1]; 
  }

  size() {
    return this.i - 1;
  }

  contains(value) {
    Object.values(this).forEach(objValue => {
      if(objValue === value) {
        return true;
      }
    }); 
    return false;
  }
}

// Use This For Testing

var myStack = new ObjStack(3);
console.log(myStack.isEmpty()) // true
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'Max capacity already reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.size(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.size(), 'should be 2');