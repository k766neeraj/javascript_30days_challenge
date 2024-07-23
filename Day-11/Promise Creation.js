// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both
// resolved and rejected states.

let mpromise = new Promise(function (mresolve, mreject) {
    setTimeout(function () {
        mresolve("Hello dosto");
    }, 2000);
})

mpromise.then(function (val) {
    console.log("The message is:", val)
})


mpromise = new Promise(function (promise, reject) {
    setTimeout(function (params) {
        reject("Got an error")
    }, 2000)
})

mpromise.catch((err) => {
    console.log(err)
})
