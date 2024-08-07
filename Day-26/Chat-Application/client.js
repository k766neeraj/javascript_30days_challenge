
// Activity 3: Establishing WebSocket Connection
// Task 5: Add a script to the HTML file to establish a WebSocket connection to the server.
// Task 6: Write functions to handle sending and receiving messages through the WebSocket connection. Log received messages to the console.

// Activity 4: Building the Chat Interface
// Task 7: Modify the HTML structure to include a chat window and an input area for typing messages. Style the chat window and input area using CSS.
// Task 8: Write a function to display received messages in the chat window. Add event listeners to send messages when the user presses Enter or clicks a send button.




let username = prompt('Enter Your Name :','User');
let userid = null
console.log(username);
const socket = new WebSocket('ws://localhost:8000');

socket.onopen = () => {
    console.log('Connected to the server');
    // send name to server
    socket.send(JSON.stringify({type:'name',username:username}))
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.log(`Message from server: ${event.data}`)
    if(data.type==="welcome"){
        userid = data.userid
        username = data.username
        console.log("Asiign userid",userid)
    }else if (data.type === 'join') {
        console.log(`User ${data.username} (${data.userid}) has joined`);
        displayMessage(`User ${data.username} has joined`,'join')
    }
    else if (data.type === 'disconnection') {
        console.log(`User ${data.username} (${data.userid}) has disconnected`);
        displayMessage(`User ${data.username} has disconnected`,'disconnect')
    } else {
        console.log(`Message from ${data.username}: ${data.message}`);
        displayMessage(`${data.username}: ${data.message}`,data.userid===userid?'self':'other');
    }
};

socket.onclose = () => {
    console.log('Disconnected from the server');
};

socket.onerror = (error) => {
    console.error(`WebSocket error: ${error.message}`);
};


function displayMessage(message,type){
    let windowM = document.getElementsByClassName("messageWindow")
    if(windowM.length>0){
        let div = document.createElement("div")
        div.textContent=message
        if(type=='self'){
            div.classList.add('self-message')
        }else if(type=='other'){
            div.classList.add('other-message')
        }else if(type=='join'){
            div.classList.add('join-message')
        }else if(type=='disconnect'){
            div.classList.add('disconnect-message')
        }else{
            div.classList.add('self-message')
        }
        windowM[0].appendChild(div)
    }else{
        console.error('Message window element not found');
    }
}


function sendMessage(){
    let messageInput = document.getElementById("message")
    let message = messageInput.value
    if(message){
        socket.send(JSON.stringify({ type: 'message', message: message }))
        displayMessage(`You:${message}`)
        messageInput.value=''
    }

}


let sendBtn = document.getElementsByClassName("btn")
if(sendBtn.length>0){
    sendBtn[0].addEventListener("click",sendMessage)
    sendBtn[0].addEventListener("keyPress",(event)=>{
        if(event.key =="Enter"){
            sendMessage()
        }
    })
}else{
    console.error('Send button element not found');
}


