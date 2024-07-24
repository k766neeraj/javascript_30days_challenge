// Day 12: Error Handling


// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

try {

    throw new Error("Block is empty")

} catch (error) {
    console.log("Error:", error.message)
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try- catch block to handle this error.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division is not possible by zero");
        }
        let result = a / b;
        console.log("Division:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}


divide(9, 0);



// Activity 2: Finally Block


// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log("The try block is always run")
    throw ("error")
} catch (error) {
    console.log("The catch block run when there is an error in the try block")
}
finally {
    console.log("The finally block always run regardless of the error")
}



// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {

    constructor(message) {
        super(message)
    }
}

function customError() {
    try {
        throw new CustomError("This is the custom error")
    } catch (error) {
        console.log("Error", error.message)
    }
}

customError()

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.


function validates(name, password) {
    try {
        if (name.length == 0 || password.length == 0) {
            throw new Error("Fields are Empty")
        }
        console.log("Details", name, password)
    } catch (error) {
        console.log("Error:", error.message)
    }
}
validates("", "")


// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.


let promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("The code have some error")
    } else {

        resolve("The code run successfully")
    }
})

promise.then((mess) => {
    console.log(mess)
}).catch((err) => {
    console.log(err)
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function randomFunc() {
    try {
        promise = new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
                reject("The code have some error")
            } else {

                resolve("The code run successfully")
            }
        })
        let val = await promise
        console.log("Value:", val)
    } catch (error) {
        console.log("Error", error)
    }
}
randomFunc()

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console. 
async function invalidFetch1() {

   
    fetch('htps://dog.ceo/api/breeds/image/random').then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log("Data:",data)
    }).catch((err)=>{
        console.log("Error:",err.message,":",err.name)
    })
      
   
}

invalidFetch1()

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function invalidFetch2() {

    try {
        const response = await fetch('htps://dog.ceo/api/breeds/image/random')
        let data  = await response.json()
        console.log("Data",data)
    } catch (error) {
        console.log("Error:",error.message)
    }
}

invalidFetch2()
