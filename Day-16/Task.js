// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n == 1) {
        return n
    }
    return factorial(n - 1) * n
}


console.log("Factorial of 5:", factorial(5))
console.log("Factorial of 6:", factorial(6))

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("Fibonacci of 5:", fibonacci(5))
console.log("Fibonacci of 3:", fibonacci(3))

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

let arr = [1, 2, 3, 4]

function sumArray(arr, n) {
    if (n == 0) {
        return arr[0]
    }
    return arr[n] + sumArray(arr, n - 1)
}

console.log("Sum is", sumArray(arr, arr.length - 1))


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

arr = []

function maxElement(arr, n) {
    if (n == -1) {
        return 0
    }
    return Math.max(arr[n], maxElement(arr, n - 1))
}

console.log("Max Element", maxElement(arr, arr.length - 1))

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(st, sp, ep) {
    if (sp > ep) {
        return
    }

    let temp = st[ep]
    st[ep] = st[sp]
    st[sp] = temp
    reverseString(st, sp + 1, ep - 1)
}

let str = "aldfd"
arr = str.split('')
reverseString(arr, 0, arr.length - 1)

console.log("Reverse String", arr.join(''))

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPallindrome(arr, sp, ep) {

    if (sp > ep) {
        return true
    }
    if (arr[sp] != arr[ep]) {
        return false
    }
    return checkPallindrome(arr, sp + 1, ep - 1)
}
str = "AlglA"

arr = str.split('')
console.log(`${str} is Pallindrome or not:`, checkPallindrome(arr, 0, arr.length - 1))

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, left, right, target) {
    if (left > right) {
        console.log("Not found")
        return
    }
    let mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] == target) {
        console.log(`index of ${target} is:`, mid)
        return
    }
    else if (arr[mid] > target) {

        binarySearch(arr, left, mid - 1, target)
    }
    else {

        binarySearch(arr, mid + 1, right, target)
    }
}

arr = [11, 24, 27, 28, 30]
target = 19

binarySearch(arr, 0, arr.length - 1, target)

target = 13
binarySearch(arr, 0, arr.length - 1, target)




// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function findOccurence(arr, n, target) {
    if (n == -1) {
        return 0
    }
    if (arr[n] == target) {
        return 1 + findOccurence(arr, n - 1, target)
    }
    return findOccurence(arr, n - 1, target)
}

arr = [1, 2, 3, 3, 4, 2, 5, 4, 6, 2, 5, 7]
target = 2
console.log(findOccurence(arr, arr.length - 1, target))
target = 7
console.log(findOccurence(arr, arr.length - 1, target))


// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function inorderTraversal(root) {
    if (root != null) {
        inorderTraversal(root.left)
        console.log(root.val)
        inorderTraversal(root.right)
    }
}


let t1 = new Node(10)
t1.left = new Node(8)
t1.left.left = new Node(4)
t1.left.right = new Node(9)
t1.right = new Node(13)

console.log("Traversal")
inorderTraversal(t1)

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.




function dephtOfTree(root) {
    if(root==null){
        return 0
    }
    let left = dephtOfTree(root.left)
    let right = dephtOfTree(root.right)

    return 1+Math.max(left,right)
}

console.log("Depth of Tree", dephtOfTree(t1))