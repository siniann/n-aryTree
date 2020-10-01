// Queue class 
class Queue {
  constructor() {
    // Array is used to implement a Queue
    this.data = [];
  }


  // Adds an element to the queue
  enqueue(item) {
    this.data.unshift(item);
  }
  // remove oldest item from queue
  dequeue() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.data.shift();
  }

  // front function 
  front() {
    // returns the Front element of the queue without removing it. 
    if (this.isEmpty())
      return "No elements in Queue";
    return this.data[0];
  }

  // isEmpty function 
  isEmpty() {
    // return true if the queue is empty. 
    return this.data.length === 0;
  }
}

module.exports = Queue;