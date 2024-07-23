// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.


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


promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"First")
})

promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"Second")
})

Promise.race([promise1,promise2]).then((val)=>{
    console.log("Winner",val)
}).catch((err)=>{
    console.log(err)
})
