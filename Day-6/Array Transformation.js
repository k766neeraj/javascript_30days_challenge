// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

let arr = [11,22,33,44,55]
const arrNew = arr.map((item)=>{
    return item*2
})

console.log("Original Array:",arr)
console.log("New Array:",arrNew)


const arrFilter = arr.filter((item)=> item%2==0)

console.log("Original Array:",arr)
console.log("New Array:",arrFilter)


const sum = arr.reduce((a,b,i,arr)=>a+b)

console.log("Original Array:",arr)
console.log("Sum is:",sum)

