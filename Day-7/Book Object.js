// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.


let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021
}

console.log("book object",book)



console.log("Title:-",book.title)

console.log("Author:-",book["author"])


book.funcBook = function(){
    return this.title+" By "+this.author
}
console.log("book object",book)
console.log("Book Details:-",book.funcBook())


book.updateYear = function(newYear){
        this.year = newYear
}

console.log("Original Object:-",book)
book.updateYear(2022)
console.log("Updated Object:-",book)


