// 3. Promise Error Handling Script: Write a script that handles errors in promises using.catch() and try-catch
// within async functions.

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

