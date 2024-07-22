// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.


let div = document.getElementById("div1")
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "orange"
})

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "red"
})
