// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.




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
