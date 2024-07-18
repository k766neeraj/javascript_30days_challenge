// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1,2,3,4,5]

console.log("array is:",arr)

// Task 2: Access the first and last elements of the array and log them to the console.

console.log("First Element:",arr[0])

console.log("Last Element:",arr[arr.length-1])

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(10)

console.log("Updated Array after push:",arr)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop()

console.log("Updated Array after pop:",arr)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift()

console.log("Updated Array after shift:",arr)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(11)

console.log("Updated Array after unshift:",arr)

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const arrNew = arr.map((item)=>{
    return item*2
})

console.log("Original Array:",arr)
console.log("New Array:",arrNew)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const arrFilter = arr.filter((item)=> item%2==0)

console.log("Original Array:",arr)
console.log("New Array:",arrFilter)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sum = arr.reduce((a,b,i,arr)=>a+b)

console.log("Original Array:",arr)
console.log("Sum is:",sum)

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
    console.log("Element using for is:",arr[i])    
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((item)=>{
    console.log("Element usinf forEach is:",item)
})

// Activity 5: Multi-dimensional Arrays


// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr2_d=[
    [1,2],
    [2,4],
    [4,5]
]

console.log("2-D Array is",arr2_d)

// Task 13: Access and log a specific element from the two-dimensional array.

console.log("0 row 1 column element:",arr2_d[0][1])

console.log("2 row 1 column element:",arr2_d[2][1])





