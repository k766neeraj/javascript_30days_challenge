// Activity 1: Understanding LocalStorage


// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

localStorage.setItem("userName", "Neerav766@syhy")

console.log("retreve user name", localStorage.getItem("userName"))


// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the
// object, then log it.

let user = {
    name: "suman",
    email: "smans@dot.com",
    phoneNumber: "7846465789",
    location: "37.0902° N, 95.7129° W"
}

localStorage.setItem("userInfo", JSON.stringify(user))

console.log("User details:", localStorage.getItem("userInfo"))


// Activity 2: Using LocalStorage


// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted.
//  Retrieve and display the saved data on page load.

let form = document.getElementById("myform")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    localStorage.setItem("fname", name)
    localStorage.setItem("femail", email)
    displaydata()
})

function displaydata(){
    let para = document.getElementById("para")
    let name = localStorage.getItem("fname")
    let email = localStorage.getItem("femail")   
    if(name && email){

        para.innerHTML = `Name:${name}  Email:${email}`   
    }else{
        para.innerHTML = "Nothing to display"
    }
}

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

userName = localStorage.getItem("userName");
console.log("Before removing userName",userName)

localStorage.removeItem("userName")

userName = localStorage.getItem("userName");
console.log("After removing userName:",userName)

// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

DBName = "Atlaska@123%$"
sessionStorage.setItem("dbname",DBName)

console.log("DBname:",sessionStorage.getItem("dbname"))


// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

let book = {
    title:"Ratan Tata A Complete Biography",
    author:"A.K. Gandhi ",
    year:2021
}

sessionStorage.setItem("book",JSON.stringify(book))

console.log("Book details:",sessionStorage.getItem("book"))


// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

let form2 = document.getElementById("myform2")

form2.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("name2").value
    let email = document.getElementById("email2").value
    sessionStorage.setItem("f2name", name)
    sessionStorage.setItem("f2email", email)
    displaydata2()
})

function displaydata2(){
    let para = document.getElementById("para2")
    let name = sessionStorage.getItem("f2name")
    let email = sessionStorage.getItem("f2email")   
    if(name && email){

        para.innerHTML = `Name:${name}  Email:${email}`   
    }else{
        para.innerHTML = "Nothing to display"
    }
}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

name = sessionStorage.getItem("f2name")
console.log("Before removing Name",name)

sessionStorage.removeItem("f2name")

name = sessionStorage.getItem("f2name")
console.log("After removing Name",name)


// Activity 5: Comparing LocalStorage and SessionStorage


// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage.
//  Retrieve and log the values from both storage mechanisms.

function SaveValues(key,values){
    localStorage.setItem(key,values)

    sessionStorage.setItem(key,values)

    console.log("Data from local storage:",localStorage.getItem(key))
    console.log("Data from Session storage:",sessionStorage.getItem(key))
}

SaveValues("movie","kfgpart4")

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function removeValues(key){
    local = localStorage.removeItem(key)

    session = sessionStorage.removeItem(key)

    if(local==null && session==null){

        console.log("Data from local storage and session storage is removed")
    }else{

        console.log("Data from local storage and session storage is not removed")
    }
}

removeValues("movie")

