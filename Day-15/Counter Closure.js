// 2. Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions. 


outer = () => {
    let counter = 0
    function inner() {
        counter += 1;
        return counter
    }
    return inner
}

let innerfunc = outer()

console.log("Counter:", innerfunc())
console.log("Counter:", innerfunc())
