// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021
}

console.log("book object",book)

// Task 2: Access and log the title and author properties of the book object.

console.log("Title:-",book.title)

console.log("Author:-",book["author"])


// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


book.funcBook = function(){
    return this.title+" By "+this.author
}
console.log("book object",book)
console.log("Book Details:-",book.funcBook())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(newYear){
        this.year = newYear
}

console.log("Original Object:-",book)
book.updateYear(2022)
console.log("Updated Object:-",book)

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    name: "Silent Knowledge",
    books:[
        {
            title:"Ratan Tata A Complete Biography",
            author:"A.K. Gandhi ",
            year:2021
        },
        {
            title:"Who Killed Shastri?: The Tashkent Files",
            author:"Vivek Agnihotri",
            year:2020
        }
    ]
} 

console.log("Library Object",library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("Library Name:-",library.name);

for (const bookTitle of library.books) {
    console.log("Book Title:-",bookTitle.title)
}

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.funcTitYear = function(){
    return this.title+" in "+this.year
}

console.log("Book title and year:-",book.funcTitYear());

// Activity 5: Object Iteration


// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

for (const bk in book) {
    console.log(`Property:- ${bk} and value is:- ${book[bk]}`)
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.


console.log("All keys of object book:-",Object.keys(book))

console.log("All Values of Object book:-",Object.values(book))