// 1. LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load. 

localStorage.setItem("userName", "Neerav766@syhy")

console.log("retreve user name", localStorage.getItem("userName"))



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


userName = localStorage.getItem("userName");
console.log("Before removing userName",userName)

localStorage.removeItem("userName")

userName = localStorage.getItem("userName");
console.log("After removing userName:",userName)
