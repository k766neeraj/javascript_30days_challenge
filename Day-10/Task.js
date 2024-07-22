 // Activity 1: Basic Event Handling
        // Task 1: Add a click event listener to a button that changes the text content of a paragraph.
        let para = document.getElementById("para")
        let btn = document.getElementById("btn")
        btn.addEventListener("click", () => {
            para.innerHTML = "Hello challo smartly code kare"
        })


        // Task 2: Add a double-click event listener to an image that toggles its visibility.

        let div0 = document.getElementById("div")
        let img = document.getElementById("img")
        div0.addEventListener("dblclick", () => {
            if (img.style.visibility === "visible") {
                img.style.visibility = "hidden"
            } else {
                img.style.visibility = "visible"
            }

        })

        // Activity 2: Mouse Events

        // Task 3: Add a mouseover event listener to an element that changes its background color.

        let div = document.getElementById("div1")
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "orange"
        })
        // Task 4: Add a mouseout event listener to an element that resets its background color.
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = ""
        })


        // Activity 3: Keyboard Events

        // Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 

        let text = document.getElementById("text")

        text.addEventListener("keydown", (eve) => {
            console.log(eve.key)

        })

        // Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
        let text2 = document.getElementById("text2")
        let para2 = document.getElementById("para2")

        text2.addEventListener("keyup", () => {
            para2.innerHTML = text2.value
        })



        // Activity 4: Form Events


        // Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

        let form = document.getElementById("mform")
        form.addEventListener("submit", (eve) => {
            eve.preventDefault();
            const formData = new FormData(eve.target);
            const formdetails = Object.fromEntries(formData);

            console.log(formdetails);
        })


        // Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
        let para3 = document.getElementById("para3")
        let course = document.getElementById("course")
        course.addEventListener("change", (eve) => {
            para3.innerHTML = eve.target.value
        })


        // Activity 5: Event Delegation


        // Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

        let ul1 = document.querySelector("#ul1")
        ul1.addEventListener("click",(eve)=>{
            if(eve.target.nodeName==='LI'){
                console.log(eve.target.innerText)
            }
        })


        // Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

        let li = document.createElement('li')
        li.innerText="MS DOS"

        ul1.appendChild(li) 