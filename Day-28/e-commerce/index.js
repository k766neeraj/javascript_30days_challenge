// Activity 2: Product Listing
// Task 3: Create a JSON file or an array of product objects with details like name, price, description, and image URL.
// Task 4: Write a script to dynamically generate the product listing from the product data and display it on the web page. Style the product cards using CSS.

let products = [
    {
        "id": 0,
        "name": "vivo T2 Pro 5G (Dune Gold, 256 GB)  (8 GB RAM)",
        "price": "₹23,999",
        "description": "The T2 Pro 5G smartphone features a 3D curved AMOLED screen providing a bright display with a peak brightness of 1300 nits.",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
    },
    {
        "id": 1,
        "name": "realme P1 5G (Peacock Green, 128 GB)  (8 GB RAM)",
        "price": "₹16,999",
        "description": "120Hz Refresh Rate, Aspect Ratio: 20:9, Screen-to-Body Ratio: 92.65%, 2200Hz Touch Sampling Rate.",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/b/n/-original-imahyuhfzvybhaat.jpeg?q=70"
    },
    {
        "id": 2,
        "name": "Motorola Edge 50 Fusion (Marshmallow Blue, 128 GB)  (8 GB RAM)",
        "price": "₹22,999",
        "description": "Motorola edge 50 fusion is designed to capture its best shots at night with advanced features.",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70"
    },
    {
        "id": 3,
        "name": "REDMI 12 5G (Moonstone Silver, 128 GB)  (6 GB RAM)",
        "price": "₹13,999",
        "description": "Redmi 12 5G mobile comes with a 90 Hz refresh rate 6.79-inch touchscreen display offering a resolution of 2460x1080 pixels (FHD+).",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70"
    },
    {
        "id": 4,
        "name": "Nothing Phone (2a) 5G (White, 256 GB)  (12 GB RAM)",
        "price": "₹26,999",
        "description": "Phone (2a) is fuelled by the custom Dimesity 7200 Pro chipset. Co-engineered between Nothing and MediaTek to deliver the best performance with optimal power consumption.",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/y/m/-original-imagz7f9hzrahd2z.jpeg?q=70"
    },
    {
        "id": 5,
        "name": "Apple iPhone 15 (Black, 128 GB)",
        "price": "₹45,999",
        "description": "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70"
    }

]


let cart = JSON.parse(localStorage.getItem("cart")) || []


let productList = document.getElementById("productList")


// Activity 3: Shopping Cart
// Task 5: Add an "Add to Cart" button to each product card. Write a function to handle adding products to the shopping cart.
// Task 6: Create a shopping cart section that displays the products added to the cart, including the name, price, and quantity. Update the cart display whenever a product is added.

let updateTask = function (id) {
    let exisiting = cart.find(item => item.id == id)
    if (exisiting) {
        exisiting.quantity += 1
    } else {
        let product = { ...products[id], quantity: 1 }
        cart.push(product)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log("Added to cart", id)
}
// Activity 4: Cart Management
// Task 7: Add functionality to update the quantity of products in the cart. Write a function to handle increasing
// and decreasing the quantity of items. 
// Task 8: Add a "Remove" button to each item in the cart. Write a function to handle removing products from the cart and updating the display.

let deleteTask = function (id) {
    cart = cart.filter(item => item.id != id)
    console.log("cart")

    localStorage.setItem("cart", JSON.stringify(cart))
    cartDisplay()
    console.log("Delete", products[id])

}
let displayProduct = function () {
    if (productList) {
        for (const prod of products) {
            let prodBox = document.createElement("div")
            prodBox.classList.add("prodbox")

            let img = document.createElement("img")
            img.classList.add("imgurl")
            img.alt = prod.name
            img.src = prod.imageUrl

            prodBox.appendChild(img)

            let title = document.createElement("div")
            title.classList.add("title")
            title.innerText = prod.name
            prodBox.appendChild(title)


            let description = document.createElement("div")
            description.classList.add("desc")
            description.innerText = prod.description
            prodBox.appendChild(description)

            let price = document.createElement("div")
            price.classList.add("price")
            price.innerText = prod.price
            prodBox.appendChild(price)

            let cardBtn = document.createElement("div")
            cardBtn.id = "btncard"
            cardBtn.innerText = "Add To Cart"
            cardBtn.addEventListener("click", function () {
                updateTask(prod.id);
            });
            prodBox.appendChild(cardBtn)

            productList.appendChild(prodBox)

        }
    }

}


displayProduct()

let cartList = document.getElementById("cart_list")
let cartDisplay = function () {
    if (cartList) {
        cartList.innerHTML = ""
        if (cart.length > 0) {

            for (const prod of cart) {
                let prodBox = document.createElement("div")
                prodBox.classList.add("cartbox")

                let img = document.createElement("img")
                img.classList.add("cartimg")
                img.alt = prod.name
                img.src = prod.imageUrl

                prodBox.appendChild(img)

                let title = document.createElement("div")
                title.classList.add("cartitle")
                title.innerText = prod.name
                prodBox.appendChild(title)


                let description = document.createElement("div")
                description.classList.add("cartdesc")
                description.innerText = prod.description
                prodBox.appendChild(description)

                let price = document.createElement("div")
                price.classList.add("cartprice")
                price.innerText = prod.price
                prodBox.appendChild(price)

                let cardBtn = document.createElement("div")
                cardBtn.id = "remove"
                cardBtn.innerText = "Remove"
                cardBtn.addEventListener("click", function () {
                    deleteTask(prod.id);
                });
                prodBox.appendChild(cardBtn)

                let quantity = document.createElement("div")
                quantity.classList.add("quant")

                let incdiv = document.createElement("div")
                incdiv.classList.add("inc")
                incdiv.innerText = "+"
                incdiv.addEventListener("click", () => {
                    if (prod.quantity + 1 <= 10) {
                        prod.quantity += 1
                        localStorage.setItem("cart", JSON.stringify(cart))
                        cartDisplay()
                    }else{
                        alert("Limit is 10")
                    }
                })
                quantity.appendChild(incdiv)

                let quanD = document.createElement("div")
                quanD.classList.add("quancart")
                quanD.innerText=`Quantity:${prod.quantity}`
                quantity.appendChild(quanD)
                
                let decdiv = document.createElement("div")
                decdiv.classList.add("dec")
                decdiv.innerText = "-"
                decdiv.addEventListener("click", () => {
                    if (prod.quantity - 1 >0) {
                        prod.quantity -= 1
                        localStorage.setItem("cart", JSON.stringify(cart))
                        cartDisplay()
                    }else{
                        alert("Mimumum 1 is allowed")
                    }
                })
                quantity.appendChild(decdiv)



                prodBox.appendChild(quantity)

                cartList.appendChild(prodBox)

            }
        } else {
            let div = document.createElement("div")
            div.classList.add("nothing")
            div.innerText = "Nothing in Cart"
            cartList.appendChild(div)
        }
    }

}

if (document.getElementById("cart_list")) {
    cartDisplay()
}

let form = document.getElementById("mform")
form.addEventListener("submit", (eve) => {
    eve.preventDefault()
    let name = document.getElementById("title").value
    let address = document.getElementById("description").value
    let payment = document.getElementById("payment").value
    let cardNumber = document.getElementById("cardNumber").value
    const order = `
        <h4>Order Confirmation</h4>
        <p>Thank you, ${name}, for your order!</p>
        <p>Order details:</p>
        <ul>
            <li><strong>Address:</strong> ${address}</li>
            <li><strong>Payment Method:</strong> ${payment}</li>
            <li><strong>Card Number:</strong> **** **** **** ${cardNumber.slice(-4)}</li>
        </ul>
    `;
    const orderDetails = document.getElementById("orderDetails");
    orderDetails.innerHTML = order;
    orderDetails.style.display = "block";
    // Clear the form
    document.getElementById("mform").reset();
    form.style.visibility="hidden"
})



let pay = document.getElementById("pay")
pay.addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }else{
        form.style.visibility = "visible"
    }
})
let close = document.getElementById("close")
close.addEventListener("click", () => {
    let form = document.getElementById("mform")
    if (form.style.visibility == "visible") {
        form.style.visibility = "hidden"
    }
})
