// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum
// element of an array. 


let arr = [1, 2, 3, 4]

function sumArray(arr, n) {
    if (n == 0) {
        return arr[0]
    }
    return arr[n] + sumArray(arr, n - 1)
}

console.log("Sum is", sumArray(arr, arr.length - 1))


arr = [12,45,67,89,15]

function maxElement(arr, n) {
    if (n == -1) {
        return 0
    }
    return Math.max(arr[n], maxElement(arr, n - 1))
}

console.log("Max Element", maxElement(arr, arr.length - 1))
