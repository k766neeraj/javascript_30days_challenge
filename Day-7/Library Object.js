// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.


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


console.log("Library Name:-",library.name);

for (const bookTitle of library.books) {
    console.log("Book Title:-",bookTitle.title)
}
