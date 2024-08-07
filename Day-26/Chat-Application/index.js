// Activity 2: Setting Up WebSocket Server
// Task 3: Set up a simple WebSocket server using Node.js and the ws library. Write a script to create the server and handle connections.
// Task 4: Test the WebSocket server by logging messages when clients connect and disconnect.


const WebSocket = require("ws")
const {v4:uuidv4} = require("uuid")

const server = new WebSocket.Server({port:8000})

const client = new Map();

server.on("connection",(ws)=>{
    const userid = uuidv4()
    ws.userid = userid

    ws.on("message",(message)=>{
        const parsMessage = JSON.parse(message)
        
        if(parsMessage.type==='name'){
            ws.username = parsMessage.username
            client.set(userid,ws.username)
            console.log(`New Client connected:${userid}_${ws.username}`)
            server.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'join', userid: userid, username: ws.username }));
                }
            });

            ws.send(JSON.stringify({type:"welcome",userid:userid,username:ws.username}))

        }else if (parsMessage.type === 'message'){
            const readableMessage = parsMessage.message
        console.log(`Received message: ${readableMessage}`);

        // Broadcast to all connection
        server.clients.forEach((client)=>{
            if(client.readyState===WebSocket.OPEN && client !== ws){
                client.send(JSON.stringify({type:'message', userid: ws.userid, username: ws.username, message: readableMessage }))
            }
        })

        }
        
    })
   
    ws.on("close",()=>{
        console.log(`Client disconnect: ${userid}_${ws.username}`)
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'disconnection', userid: userid, username: ws.username }));
            }
        })
    })
})

console.log('WebSocket server is running on ws://localhost:8000')
