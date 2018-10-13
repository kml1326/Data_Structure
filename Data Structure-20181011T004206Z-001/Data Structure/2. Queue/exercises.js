// 1. Implement Queue Data Structure using String
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// enqueue(value) - add a new value and returns the size of the storage
// dequeue() - remove one element and returns the deleted element
// peek() - displays the latest element in the storage
// size() - the size of the storage

class StrQueue {
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



class ObjQueue {
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
    let l = Object.values(this).length - 2;
    for(let j = 0 ,k = 1; j < (l / 2); j++, k++) {
      let t = this[this.i]
      this[this.i] = this[k]
      this[k] = t;
    }
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
    let result;
    (Object.values(this)).forEach(objValue => {
      console.log(typeof(objValue))
      if(objValue == value) {
        result = true;
      } else  result = false;
    }); 
    return result;
  }
  sort() {
    return Object.values(this);
  }
}
