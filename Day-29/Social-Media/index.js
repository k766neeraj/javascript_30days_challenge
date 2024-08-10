
// Activity 2: User Authentication
// Task 3: Create a simple login form that collects a username and password. Style the form using CSS.
// Task 4: Write a script to handle user login and store the logged-in user's information in localStorage or sessionStorage.

let posts = JSON.parse(localStorage.getItem("posts")) || [];

let login = document.getElementsByClassName("login")
login[0].addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    } else {
        form.style.visibility = "visible"
    }
})

let form = document.getElementById("mform")
form.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let name = document.getElementById("title").value
    let password = document.getElementById("password").value
    if (name && password) {
        localStorage.setItem("login", name + "_" + password)
        form.reset()
        form.style.visibility = "hidden"
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


// Activity 3: Creating Posts
// Task 6: Write a script to handle form submission, creating a new post object and adding it to an array of posts. Display the new post in the feed.

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
            displayFeeds();
        };
        reader.readAsDataURL(imageInput.files[0]); // Convert image to base64
    } else {
        alert("Enter all details!");
    }
})

// Activity 4: Displaying Posts
// Task 7: Write a function to iterate over the array of posts and display each post in the feed. Include post details like text, image, username, and timestamp.
// Task 8: Style the post feed using CSS to make it visually appealing.

// Activity 5: Post Interactions
// Task 9: Add "Like" and "Comment" buttons to each post. Write functions to handle liking a post and adding comments to a post.
// Task 10: Display the number of likes and comments for each post. Update the display when users interact with the posts.


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
                displayFeeds();
            });
    
            interaction.appendChild(commForm);
    
            feedbox.appendChild(interaction)
    
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

