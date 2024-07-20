// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Ranveer"
let age = 45

console.log(`My name is:${name} and I am ${age} years old`)

// Task 2: Create a multi-line string using template literals and log it to the console.

let str = `
    Enjoying the JavaScript
    30days challenge
`
console.log("Output:",str)

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [1,2]

let [first , second] = numbers

console.log("First Number:",first)
console.log("Second Number:",second)

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021
}

let {title,author} = book

console.log("Books details:-",title,'by',author)

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr = [1,2,3,4]

let arr1 = [...arr,10,12]

console.log("Original Array:",arr)
console.log("New Array:",arr1)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...a1){
    let sum=0
    for (const ele of a1) {
        sum+=ele
    }
    return sum
}

console.log("Sum is:",sum(1,2,3,4,5,6))

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.
//  Log the result of calling this function with and without the second parameter.


function defaultProduct(first,second=1){
    return first*second
}

console.log("With second parameter",defaultProduct(48,5))

console.log("Without second parameter",defaultProduct(48))

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let Titles = "Ratan Tata A Complete Biography"
let Author =  "A.K. Gandhi"
let Year = 2021

let bookDetails = function(){
    return this.Titles+" by "+this.Author
}

let book1 = {Titles,Author,Year,bookDetails}

console.log("Book1 Object",book1)
console.log("Books Details",book1.bookDetails())

// Task 9: Create an object with computed property names based on variables and log the object to the console.


let building_name = "building"
let tower_name = "tower"
let flat_no = "flat"

let address = {
    [building_name]:"Florida Tower",
    [tower_name]:"Nightangle",
    [flat_no]:"56a"
}

console.log("Object is:",address)
