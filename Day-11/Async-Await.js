// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.


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
