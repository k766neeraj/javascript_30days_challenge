// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.


let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021,
    review:'4.5/5'
}

for (const bk in book) {
    console.log(`Property:- ${bk} and value is:- ${book[bk]}`)
}



console.log("All keys of object book:-",Object.keys(book))

console.log("All Values of Object book:-",Object.values(book))