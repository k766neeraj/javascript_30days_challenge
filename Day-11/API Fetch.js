// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await,
// and logs the response data.


promise = new Promise((resolve, reject) => {
    resolve(fetch('https://dog.ceo/api/breeds/image/random'))
})

promise.then((response) => {
    return response.json()
}).then((data)=>{
    console.log("data",data)
})



async function getdata(){
   try {
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    console.log("data",data.message)
   } catch (error) {
    console.log(error)
   }
}

getdata()

