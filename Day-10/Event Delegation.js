// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.


let ul1 = document.querySelector("#ul1")
ul1.addEventListener("click", (eve) => {
    if (eve.target.nodeName === 'LI') {
        console.log(eve.target.innerText)
    }
})



let li1 = document.createElement('li')
li1.innerText = "MacOS"

let li2 = document.createElement('li')
li2.innerText = "MS DOS"

ul1.appendChild(li1)
ul1.appendChild(li2)