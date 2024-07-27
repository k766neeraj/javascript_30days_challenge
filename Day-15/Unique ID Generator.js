// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last
// generated ID.



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

