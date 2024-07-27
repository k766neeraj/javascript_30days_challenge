// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.


let func1 = () => {
    let greeting = "Hello"
    function inner() {
        greeting += " World"
        return greeting
    }
    return inner
}

let inner = func1()
console.log("Greeting", inner())
