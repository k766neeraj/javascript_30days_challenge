
// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the
// console.

let mpromise = new Promise(function (mresolve, mreject) {
    setTimeout(function () {
        mresolve("Hello dosto");
    }, 2000);
})

mpromise.then(function (val) {
    console.log("The message is:", val)
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

mpromise = new Promise(function (promise, reject) {
    setTimeout(function (params) {
        reject("Got an error")
    }, 2000)
})

mpromise.catch((err) => {
    console.log(err)
})


// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Fetching server 1")
        resolve("Data 1 fetched")
    }, 2000)
})

promise.then((data) => {
    console.log("fetched", data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching server 2")
            resolve("Data 2 fetched")
        }, 2000)
    })
        .then((data) => {
            console.log("fetched", data)
        })
})


// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function Todo() {
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world")
        }, 2000)
    })
    let data = await promise
    console.log("Code run", data)
}

Todo()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function toReject() {
    try {
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Code is Rejected")
            }, 3000)
        })
        data = await promise
    } catch (error) {
        console.log("error", error)
    }
}

toReject()

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

promise = new Promise((resolve, reject) => {
    resolve(fetch('https://dog.ceo/api/breeds/image/random'))
})

promise.then((response) => {
    return response.json()
}).then((data)=>{
    console.log("data",data)
})


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getdata(){
   try {
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    console.log("data",data.message)
   } catch (error) {
    console.log(error)
   }
}

getdata()


// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

let promise1 = Promise.resolve("Chai Aur Code")
let promise2 = 34
let promise3 = new Promise((resolve,reject)=>{
    resolve("Hello Chai Aur Code")
})

Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log("data",val)
}).catch((err)=>{
    console.log(err)
})


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"First")
})

promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Second")
})

Promise.race([promise1,promise2]).then((val)=>{
    console.log("Winner",val)
}).catch((err)=>{
    console.log(err)
})
