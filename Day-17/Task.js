// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(val, next) {
        this.val = val
        this.next = null
    }
}


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
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

// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).


class Stack {
    constructor() {
        this.st = []
    }
    push(val) {
        this.st.push(val)
    }
    pop() {
        if (this.st.length == 0) {
            return ("Stack is empty")
        } else {
            return this.st.pop()
        }
    }
    peek() {
        if (this.st.length == 0) {
            return ("Stack is empty")
        } else {
            return this.st[this.st.length - 1]
        }
    }
}


let st1 = new Stack()

st1.push(5)
st1.push(10)
st1.push(46)
st1.push(13)
st1.push(3)
console.log("Popped element is:", st1.pop())

console.log("Peek element is:", st1.peek())


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

str = new Stack()

str.push('C')
str.push('H')
str.push('A')
str.push('I')
str.push(' ')
str.push('C')
str.push('O')
str.push('D')
str.push('E')
let revStr = ''
while (str.st.length != 0) {
    revStr += str.pop()
}
console.log("Reversed String:", revStr)

// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

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

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

let printer = new Queue()

printer.enqueue("Title")
printer.enqueue("Description")
printer.enqueue("Table")
printer.enqueue("Paragraph")
console.log("Deleted Element:", printer.dequeue())
console.log("Deleted Element:", printer.dequeue())


// Activity 4: Binary Tree


// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(val, left = null, right = null) {
        this.value = val
        this.left = left
        this.right = right
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.head = null
    }
    insertInTree(val) {
        if (this.head == null) {
            this.head = new TreeNode(val)
        } else {
            let temp = this.head
            while (true) {
                if (temp.value > val) {
                    if (temp.left == null) {
                        temp.left = new TreeNode(val)
                        return
                    }
                    else {
                        temp = temp.left
                    }
                } else {
                    if (temp.right == null) {
                        temp.right = new TreeNode(val)
                        return
                    } else {
                        temp = temp.right
                    }
                }
            }
        }
    }
    #helperinorder(root){
        if(root!=null){
            this.#helperinorder(root.left)
            console.log(root.value)
            this.#helperinorder(root.right)
        }
    }
    inorderTraversal(){
        let temp = this.head
        this.#helperinorder(temp)
    }
}

let bt1 = new BinaryTree()

bt1.insertInTree(10)
bt1.insertInTree(8)
bt1.insertInTree(4)
bt1.insertInTree(9)
bt1.insertInTree(13)
bt1.inorderTraversal()


// Activity 5: Graph (Optional)


// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph{
    constructor() {
        this.adjancylist = new Map()
    }
    addVertex(vertex){
        if(!this.adjancylist.has(vertex)){
            this.adjancylist.set(vertex,[])
        }
    }
    addEdges(u,v){
        if(!this.adjancylist.has(u)){
            this.addVertex(u)
        }
        if(!this.adjancylist.has(v)){
            this.addVertex(v)
        }
        this.adjancylist.get(u).push(v)
        this.adjancylist.get(v).push(u)
    }

    bfs(st){
        let que=[]
        let visited = new Set()
        que.push(st)
        visited.add(st)
        let res=[]
        while(que.length!=0){
            let rem = que.shift()
            res.push(rem)
            this.adjancylist.get(rem).forEach((nbh)=>{
                if(!visited.has(nbh)){
                    visited.add(nbh)
                    que.push(nbh)
                }
            })
        }
        return res
    }
    
    
    // Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

    shortestPath(st,ed){
        let vis = new Set()
        let que=[[st]]
        let path=[]
        vis.add(st)
        while(que.length!=0){
            path = que.shift()
            let node = path[path.length-1]
            if(node == ed){
                return path
            }     
            this.adjancylist.get(node).forEach((nbh)=>{
                if(!vis.has(nbh)){
                    vis.add(nbh)
                    let newpath = [...path,nbh]
                    que.push(newpath)
                }    
            })    
        }    
        return null;
    }    
}    


let g1 = new Graph()

g1.addVertex("A")
g1.addVertex("B")
g1.addVertex("C")
g1.addVertex("D")
g1.addVertex("E")

g1.addEdges("A","C")
g1.addEdges("A","B")
g1.addEdges("C","E")
g1.addEdges("B","D")
g1.addEdges("D","E")

console.log("BFS Trversal:",g1.bfs("A"))
console.log("Sortest Path from A to E:",g1.shortestPath("A","E"))


