// 3. Queue Script: Write a script that implements a queue and simulates a printer queue. 


class Queue {
    constructor() {
        this.que = []
    }
    enqueue(val) {
        this.que.push(val)
    }
    dequeue() {
        if (this.que.length == 0) {
            console.log("Queue is Empty")
        } else {
            return this.que.shift()
        }
    }
    front() {
        if (this.que.length == 0) {
            return "Queue is Empty"
        } else {
            return this.que[0]
        }
    }
}


let q1 = new Queue()

q1.enqueue(12)
q1.enqueue(14)
q1.enqueue(18)
q1.enqueue(20)
console.log("Deleted Element:", q1.dequeue())
console.log("Deleted Element:", q1.dequeue())
console.log("Peek element is:", q1.front())


let printer = new Queue()

printer.enqueue("Title")
printer.enqueue("Description")
printer.enqueue("Table")
printer.enqueue("Paragraph")
console.log("Deleted Element:", printer.dequeue())
console.log("Deleted Element:", printer.dequeue())
