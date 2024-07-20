// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

let numbers = [1,2]

let [first , second] = numbers

console.log("First Number:",first)
console.log("Second Number:",second)



let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021
}

let {title,author} = book

console.log("Books details:-",title,'by',author)
