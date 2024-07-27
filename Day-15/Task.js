// Activity 1: Understanding Closures


// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. 
// Call the inner function and log the result.

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

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

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

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.


let generate = () => {
    let id = 0
    function incId() {
        id += 1
        console.log(id)
    }
    return incId
}

innerfunc = generate()

console.log("Generated ID", innerfunc())
console.log("Generated ID", innerfunc())


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

let CaptureUser = (name) => {
    let Sname = name
    function greetUser() {
        return `Have a nice day ${Sname}`
    }
    return greetUser
}

let capture = CaptureUser("Jannes")
console.log("Greeting", capture())


// Activity 3: Closures in Loops


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

let arr = []
for (let index = 0; index < 5; index++) {
    arr.push(
        ((i) => {
            return () => console.log(i)
        })(index)
    )
}

for (let func of arr) {
    func()
}

// Activity 4: Module Pattern


// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.


let modulelist = () => {
    let list = [];

    function addlist(ele) {
        list.push(ele)
    }
    function removelist(ele) {
        let ind = list.indexOf(ele)
        if (ind == -1) {
            console.log(`${ele} does not exist`)
        } else {
            list.splice(ind,1)
            console.log("Element removed")
        }
    }
    function displayList() {
        console.log("List are:", list)
    }

    return {
        addlist,
        removelist,
        displayList
    }
}

let opt = modulelist()
opt.addlist(10)
opt.addlist(5)
opt.addlist(15)
opt.addlist(12)
opt.addlist(20)
opt.displayList()
opt.removelist(5)
opt.displayList()


// Activity 5: Memoization


// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

let memorise = (func)=>{
    const hash = new Map()
    return (key)=>{
        if(hash.has(key)){
            console.log("Fetching",key)
            return hash.get(key)
        }
        const res = func(key)
        hash.set(key,res)
        return res
    }
}

let multiply = (num)=>{
    console.log("Computing",num)
    return num * 5
}

let memorisefunc = memorise(multiply)

console.log(memorisefunc(10))
console.log(memorisefunc(10))
console.log(memorisefunc(20))
console.log(memorisefunc(20))


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

let memofact = (func)=>{
    let hash = new Map()
    return (key)=>{
        if(hash.has(key)){
            console.log("In memory")
            return hash.get(key)
        }
        let res = func(key)
        hash.set(key,res)
        return res
    }
}

let fact = (num)=>{
    let facto = 1
    for(let ind = num;ind>0;ind--){
        facto*=ind
    }
    return facto
}

let memo = memofact(fact)

console.log(memo(2))
console.log(memo(4))
console.log(memo(2))
