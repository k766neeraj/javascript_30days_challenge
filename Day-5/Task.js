// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function chechEvenOdd(num){
    if(num%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

chechEvenOdd(10)

// Task 2: Write a function to calculate the square of a number and return the result.

function calSquare(num){
    return num*num
}

console.log("Square of number",calSquare(16))

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function maxNumber(num1,num2){
    console.log("Maximum NUmber",Math.max(num1,num2))
}

max(133,234)

// Task 4: Write a function expression to concatenate two strings and return the result.

function concatString(str1,str2){
    return str1+" "+str2
}

console.log("String:-",concatString("Chai","Code"))


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumNumber = (num1,num2)=>{
    return num1+num2
}

console.log("Sum is :",sumNumber(34,78))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkString = (str,tar)=>{
    return str.includes(tar)
}

console.log("Character Exist",checkString("ChaiAurCode",'C'))

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function prodNumber(num1,num2=1){
    return num1*num2
}

console.log("Product is:",prodNumber(12))

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetMessage(name,age=20){
    return `Hello ${name}, Good Morning!`
}

console.log(greetMessage("Raju",26))

// Activity 5: Higher-Order Functions

    // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

    function main(callFunc,times){
        for (let i = 0; i < times; i++) {
            callFunc(i+1) 
        }
    }

    function callingFunc(tm){
        console.log(`I have called ${tm} times`)
    }

    main(callingFunc,4)


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the 
// value, and then applies the second function to the result.



function Super(func1,func2,val){
    console.log(func2(func1(val)))
}

function func1(val){
    return val*2
}

function func2(val){
    return val*4
}

Super(func1,func2,12)



