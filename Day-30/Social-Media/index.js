

let posts = JSON.parse(localStorage.getItem("posts")) || [];

// login
let login = document.getElementsByClassName("login")
login[0].addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    } else {
        form.style.visibility = "visible"
    }
})

// signup
let signup = document.getElementsByClassName("signup")
signup[0].addEventListener("click", () => {
    let form = document.getElementById("rform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    } else {
        form.style.visibility = "visible"
    }
})

// sidebar

let side = document.getElementsByClassName("side")
side[0].addEventListener("click", () => {
    let form = document.getElementById("sidebar")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    } else {
        form.style.visibility = "visible"
    }
})



let form = document.getElementById("mform")
form.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[email] && users[email].password===password) {
        
        localStorage.setItem("login",email+"-"+users[email].name)
        form.reset()
        form.style.visibility = "hidden"
        alert("Login Sucessully")
    }else{
        alert("Invalid Email or Password.")
    }

})


let regist = document.getElementById("rform")
regist.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let name = document.getElementById("rtitle").value
    let email = document.getElementById("remail").value
    let password = document.getElementById("rpassword").value
    if (name && email && password) {
        let users = JSON.parse(localStorage.getItem("users")) || {};
        if(users[email]){
            alert("Email already exist")
        }else{
            users[email]={name,password}
            localStorage.setItem("users",JSON.stringify(users))
            regist.reset()
            regist.style.visibility = "hidden"
            alert("Registration successfull. Please Login.")
        }
    }else{
        alert("Fill the Details")
    }

})

let close = document.getElementById("close")
close.addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }
})

let rclose = document.getElementById("rclose")
rclose.addEventListener("click", () => {
    let form = document.getElementById("rform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }
})

let setProfile = function(){
    let imgprof = document.getElementById("profile")
    let users = JSON.parse(localStorage.getItem("users"));
    let email = localStorage.getItem("login").split("-")[0]
    
    if (users[email] && imgprof.files[0]) {
        
         let reader = new FileReader()
         console.log("set")
         reader.onload = function(e){
            let image = e.target.result
            users[email] = {...users[email],image}
            localStorage.setItem("users",JSON.stringify(users))
            displayprofile()
        }
        reader.readAsDataURL(imgprof.files[0])
    }
}

// profile setting
let displayprofile = function(){
    let users = JSON.parse(localStorage.getItem("users"));
    let email = localStorage.getItem("login").split("-")[0]
   
    if (users && users[email]){
        let user = users[email]
        document.getElementsByClassName("user")[0].innerHTML=user.name
        document.getElementsByClassName("email")[0].innerHTML=email
        let display = document.getElementById("disp")
        display.innerHTML=""
        let img = document.createElement("img")
        img.src=user.image?user.image:'./Images/bg3.jpg'
        img.classList.add("imgpr")
        img.alt="Profie Image"
        display.append(img)
        
    }    
}    

document.getElementById("saveProfile").addEventListener("click", function() {
    setProfile();
});

displayprofile()


// edit profile

let edit = document.getElementById("edit");  
edit.addEventListener("click", (eve) => {
    eve.preventDefault();
    
    let form = document.createElement("form");
    form.id = "editForm"; 

    let name = document.createElement("input");
    name.type = "text";
    name.name = "cname";
    name.id = "cname";
    name.placeholder = "Enter new name";
    name.required = true;  
    form.appendChild(name);

   
    let submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Update Name";
    form.appendChild(submitBtn);

   
    document.getElementById("sidebar").appendChild(form);

   
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
       
        let newName = document.getElementById("cname").value;
        
      
        let email = localStorage.getItem("login").split("-")[0];
        let users = JSON.parse(localStorage.getItem("users"));

     
        if (users[email]) {
            users[email].name = newName;
            localStorage.setItem("users", JSON.stringify(users));

            
            document.getElementsByClassName("user")[0].innerText = newName;

           
            alert("Name updated successfully!");
            form.remove();  
        } else {
            alert("User not found. Please try again.");
        }
    });
});


// create post
let createpost = document.getElementById("createPost")

createpost.addEventListener("submit",(eve)=>{
    eve.preventDefault();
    let title = document.getElementById("titlec").value;
    let desc = document.getElementById("description").value;
    let imageInput = document.getElementById("image");
    let tag = document.getElementById("tag").value;
    let time = new Date().toUTCString();
    let like = 0;
    

    if (title && desc && imageInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let image = e.target.result; // Base64 encoded string
            let post = {
                title: title,
                description: desc,
                image: image,
                author:localStorage.getItem("login"),
                tag: tag,
                time: time,
                like: like,
                comment: []
            };
            posts.push(post);
            localStorage.setItem("posts", JSON.stringify(posts));
            createpost.reset()
            displayFeeds();
        };
        reader.readAsDataURL(imageInput.files[0]); // Convert image to base64
    } else {
        alert("Enter all details!");
    }
})

// add notification

let addNotification = function(email, type, postTitle, byUser) {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users[email].notifications) {
        users[email].notifications = [];
    }
    
    let notification = {
        type: type, 
        postTitle: postTitle,
        byUser: byUser,
        timestamp: new Date().toUTCString()
    };
    
    users[email].notifications.push(notification);
    localStorage.setItem("users", JSON.stringify(users));
}

// Display feeds
let feeds = document.getElementById("feeds")
let displayFeeds = function(){
    feeds.innerHTML=""
    if(posts.length>0){
        for (const post of posts) {
            let feedbox = document.createElement("div")
            feedbox.classList.add("feedbox")
            
            let title = document.createElement("div")
            title.classList.add("titlepost")
            title.innerText=post.title+" By:"+post.author
            feedbox.appendChild(title)
            
            let desc = document.createElement("div")
            desc.classList.add("descpost")
            desc.innerText=post.description
            feedbox.appendChild(desc)
            
            
            let img = document.createElement("img")
            img.classList.add("imgpost")
            img.src=post.image==""?"./Images/bg3.jpg":post.image
            img.alt=post.title
            feedbox.appendChild(img)
            
            let timestamp = document.createElement("div")
            timestamp.classList.add("time")
            timestamp.innerText=post.time
            feedbox.appendChild(timestamp)
    
            let interaction = document.createElement("div")
            interaction.classList.add("inter")
    
            let like = document.createElement("div")
            like.classList.add("like")
            
            let icon = document.createElement("span")
            icon.classList.add("material-symbols-outlined");
            icon.innerText = "thumb_up";
            icon.style.cursor = "pointer";
    
            let likeCount = document.createElement("span");
            likeCount.classList.add("likeCount");
            likeCount.innerText = post.like;
            icon.addEventListener("click", () => {
                post.like += 1;
                localStorage.setItem('posts', JSON.stringify(posts)); 
                likeCount.innerText = post.like; 

                let authorEmail = post.author.split("-")[0];
                addNotification(authorEmail, "like", post.title, localStorage.getItem("login").split("-"))
            });
            like.appendChild(icon)
            like.appendChild(likeCount)
            interaction.appendChild(like)
            
            let commForm = document.createElement("form");
            commForm.classList.add("commentForm");
    
            let commInput = document.createElement("input");
            commInput.type = "text";
            commInput.placeholder = "Add a comment...";
            commInput.required = true;
            commForm.appendChild(commInput);
    
            let commSubmit = document.createElement("input");
            commSubmit.type = "submit";
            commSubmit.value = "Post Comment";
            commForm.appendChild(commSubmit);
    
            commForm.addEventListener("submit", (e) => {
                e.preventDefault();
                let comment = commInput.value;
                let username = localStorage.getItem("login") || "Anonymous"; 
                post.comment.push({ username: username, comment: comment });
                
                localStorage.setItem("posts", JSON.stringify(posts));
                let authorEmail = post.author.split("-")[0];

                addNotification(authorEmail, "comment", post.title, username.split("-")[1]);
                displayFeeds();
            });
    
            interaction.appendChild(commForm);
    
            feedbox.appendChild(interaction)
    
            // display comment
            let commSection = document.createElement("div");
            commSection.classList.add("commentsSection");
    
            for (const com of post.comment) {
                let commentDiv = document.createElement("div");
                commentDiv.innerText = `${com.username}:: ${com.comment}`;
                commSection.appendChild(commentDiv);
            }
    
            feedbox.appendChild(commSection);
    
    
            feeds.appendChild(feedbox)
            
        }
    }else{
        let div = document.createElement("div")
        div.classList.add("nothing")
        div.innerText = "Nothing in Cart"
        feeds.appendChild(div)
    }
}

displayFeeds()


// display notification
let displayNotifications = function() {
    let users = JSON.parse(localStorage.getItem("users"));
    let notice = document.getElementById("notification")
    let email = localStorage.getItem("login").split("-")[0]
  
    let notificationDiv = document.createElement("div");
    notificationDiv.classList.add("notifications");
    console.log("notice",users[email])
    if (users[email] && users[email].notifications && users[email].notifications.length > 0) {
        for (const notification of users[email].notifications) {
            let notifElement = document.createElement("div");
            notifElement.classList.add("notification");
            notifElement.innerText = `${notification.byUser} ${notification.type}d your post "${notification.postTitle}" on ${notification.timestamp}`;
            notificationDiv.appendChild(notifElement);
        }
    } else {
        notificationDiv.innerText = "No new notifications.";
    }

    notice.appendChild(notificationDiv);
}


displayNotifications()
