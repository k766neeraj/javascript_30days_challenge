// 2. SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.


DBName = "Atlaska@123%$"
sessionStorage.setItem("dbname",DBName)

console.log("DBname:",sessionStorage.getItem("dbname"))





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


name = sessionStorage.getItem("f2name")
console.log("Before removing Name",name)

sessionStorage.removeItem("f2name")

name = sessionStorage.getItem("f2name")
console.log("After removing Name",name)


