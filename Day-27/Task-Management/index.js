
// Activity 2: Creating Tasks
// Task 4: Write a script to handle form submission, creating a new task object and adding it to an array of tasks. Display the new task in the task list.

let tasks = []
let exist = new Set() 

let showNote = document.getElementsByClassName("addnote")

showNote[0].addEventListener("click", () => {
    console.log("clicked")
    let form = document.getElementById("mform")
    if (form.style.visibility == "hidden") {
        form.style.visibility = "visible"
    } else {
        form.style.visibility = "hidden"
    }
})


let close = document.getElementById("close")
close.addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }
})

let length = 0
let form = document.getElementById("mform")
form.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let title = document.getElementById("title")
    let desciption = document.getElementById("description")
    let dueDate = document.getElementById("dueDate")
    let id = document.getElementById("number")
    let task = {
        id: id.value.length!=0?parseInt(id.value):length,
        title: title.value,
        desciption: desciption.value,
        dueDate: dueDate.value
    }
    if(exist.has(task.id)){
        let tid = findid(task.id)
        tasks[tid]=task
        alert("Task edit Successfully")
    }else{
        tasks.push(task)
        length += 1
        console.log("Added Task is:", task)
        exist.add(task.id)
    }
    title.value=''
    desciption.value=''
    dueDate.value=''
    id.value=''
    displayList()
})


let findid = function(id){
    let tid = 0
    for (let i=0;i<tasks.length;i++) {
        if(tasks[i].id==id){
            tid=i
            break
        }
    }
    return tid
}

// Activity 4: Updating Tasks
// Task 7: Add an "Edit" button to each task item in the task list. Write a function to populate the form with the
// task details when the "Edit" button is clicked.
// Task 8: Write a function to update the task object in the array and refresh the task list display after editing a task.

// Activity 5: Deleting Tasks
// Task 9: Add a "Delete" button to each task item in the task list. Write a function to remove the task from the array and refresh the task list display when the "Delete" button is clicked.
// Task 10: Add a confirmation dialog before deleting a task to prevent accidental deletions.

let updateTask = function(id){
    form.style.visibility="visible"
    let title = document.getElementById("title")
    let desciption = document.getElementById("description")
    let dueDate = document.getElementById("dueDate")
    let number = document.getElementById("number")
    let tid = findid(id)
    console.log("Edit Task",JSON.stringify(tasks[tid]))
    title.value=tasks[tid].title
    desciption.value=tasks[tid].desciption
    dueDate.value=tasks[tid].dueDate
    number.value=id
    displayList()
}

let deleteTask = function(id){
    let tid = findid(id)
    let deltask = tasks.splice(tid,1)
    alert(`Task Deleted Successfully : ${JSON.stringify(deltask)}`)
    displayList()
}

// Activity 3: Reading and Displaying Tasks
// Task 5: Write a function to iterate over the array of tasks and display each task in the task list. Include task details like title, description, and due date.
// Task 6: Style the task list using CSS to make it visually appealing.
let displayList = function () {

    let taskList = document.getElementById("task-list")
    taskList.innerHTML=""
    if (tasks.length > 0) {
        for (const task of tasks) {
            let div = document.createElement("div")
            div.classList.add("taskBox")

            let title = document.createElement("div")
            title.classList.add("tit")
            title.innerText = task.title
            div.appendChild(title)

            let desciption = document.createElement("div")
            desciption.classList.add("desc")
            desciption.innerText = task.desciption
            div.appendChild(desciption)


            let dueDate = document.createElement("div")
            dueDate.classList.add("due")
            dueDate.innerText = task.dueDate
            div.appendChild(dueDate)

            let update = document.createElement("div")
            update.id="update"
            update.innerText="Edit"
            update.addEventListener("click", function() {
                updateTask(task.id);
            });
            div.appendChild(update)
            
            let deleteT = document.createElement("div")
            deleteT.id="delete"
            deleteT.innerText="Delete"
            deleteT.addEventListener("click", function() {
                deleteTask(task.id);
            });
            div.appendChild(deleteT)



            taskList.appendChild(div)

        }
    }else{
        let div = document.createElement("div")
        div.classList.add("nothing")
        div.innerText="Nothing to display"
        taskList.appendChild(div)
    }
}

displayList()