// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and
//  log an object with methods and computed property names.


let Titles = "Ratan Tata A Complete Biography"
let Author =  "A.K. Gandhi"
let Year = 2021

let bookDetails = function(){
    return this.Titles+" by "+this.Author
}

let book1 = {Titles,Author,Year,bookDetails}

console.log("Book1 Object",book1)
console.log("Books Details",book1.bookDetails())



let building_name = "building"
let tower_name = "tower"
let flat_no = "flat"

let address = {
    [building_name]:"Florida Tower",
    [tower_name]:"Nightangle",
    [flat_no]:"56a",
    
}

console.log("Object is:",address)


