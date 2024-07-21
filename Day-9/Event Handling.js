let flag = false;
let btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    if (flag == false) {
        let para = document.getElementById("para")
        para.innerText = "Running the code"
        flag = true
    } else {
        let para = document.getElementById("para")
        para.innerText = "Hello, world! Don't think, just code it!"
        flag = false
    }
})

let para = document.getElementById("para")
para.addEventListener("mouseover", () => {
    para.style.border = "2px solid black"
    para.style.borderColor = "green"
})
para.addEventListener("mouseout", () => {
    para.style.border = ""

})