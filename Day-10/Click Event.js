// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a
// paragraph. 

let para = document.getElementById("para")
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    para.innerHTML = "Hello challo smartly code kare"
})