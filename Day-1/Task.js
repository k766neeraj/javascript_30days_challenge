// Task-1 Declare a variable using var, assign it a number, and log the value to the console.
var num1 = 2000
console.log("number",num1)

//Task-2 Declare a variable using let, assign it a string, and log the value to the console.
let str1 = "Javascript"
console.log("string",str1)

//Task-3 Declare a variable using const, assign it a boolean value, and log the value to the console.
const bool1 = true
console.log("boolean",bool1)

//Task-4 Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num2 = 250
console.log("number",typeof(num2))

let str2 = "Chai"
console.log("string",typeof(str2))

let bool2 = false
console.log("boolean",typeof(bool2))

let obj1 = {
    'a':1,
    'b':2
}
console.log("object",typeof(obj1))

let arr = new Array(1,2,3,4,5)
console.log("Array",typeof(arr))

//Task-5 Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let var1 = 1
var1 = 4
console.log("Assign Value",var1)

//Task-6 Try reassigning a variable declared with const and observe the error.
const var2 = 24
var2 = 25
console.log("Const assign",var2) //TypeError: Assignment to constant variable