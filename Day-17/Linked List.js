// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.


class Node {
    constructor(val, next) {
        this.val = val
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
    }
    addNode(val) {
        if (this.head == null) {
            this.head = new Node(val)
        } else {
            let temp = this.head
            while (temp.next != null) {
                temp = temp.next
            }
            temp.next = new Node(val)
        }
    }
    removeLast() {
        if (this.head == null) {
            console.log("Node is empty")
        } else {
            let temp = this.head
            while (temp.next.next != null) {
                temp = temp.next
            }
            temp.next = null;
        }
    }
    display() {
        if (this.head == null) {
            console.log("Node is Empty")
        }
        let temp = this.head
        while (temp != null) {
            console.log(temp.val)
            temp = temp.next;
        }
    }
}


ll = new LinkedList()
ll.addNode(10)
ll.addNode(8)
ll.addNode(12)
ll.addNode(6)
console.log("Linkded List:")
ll.display()
ll.removeLast()
console.log("Linkded List:")
ll.display()
