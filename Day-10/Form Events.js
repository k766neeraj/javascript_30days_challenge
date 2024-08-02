// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown. 


let form = document.getElementById("mform")
form.addEventListener("submit", (eve) => {
<<<<<<< HEAD
    eve.preventDefault()
    
>>>>>>> bf440ea1b97c9334cca010ae727f84f20ff19ab7
    const formData = new FormData(eve.target);
    const formdetails = Object.fromEntries(formData);

    console.log(formdetails);
})


let para3 = document.getElementById("para3")
let course = document.getElementById("course")
course.addEventListener("change", (eve) => {
    para3.innerHTML = eve.target.value
})


