// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to
// combine arrays and the rest operator to handle multiple function arguments. 
let arr = [1,2,3,4]

let arr1 = [...arr,10,12]

console.log("Original Array:",arr)
console.log("New Array:",arr1)


function product(...a1){
    let prod = 1
    for (const ele of a1) {
        prod*=ele
    }
    return prod
}

console.log("Sum is:",product(1,2,3,4,5,6))
