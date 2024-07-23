// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.



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

