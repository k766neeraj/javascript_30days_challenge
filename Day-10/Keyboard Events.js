// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.

let text = document.getElementById("text")

text.addEventListener("keydown", (eve) => {
    console.log(eve.key)

})


let para2 = document.getElementById("para2")

text.addEventListener("keyup", () => {
    para2.innerHTML = text.value
})