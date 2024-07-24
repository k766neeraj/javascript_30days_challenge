// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.


async function invalidFetch() {

    try {
        const response = await fetch('htps://dog.ceo/api/breeds/image/random')
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }
        let data  = await response.json()
        console.log("Data",data)
    } catch (error) {
        console.log("Error:",error.message)
    }
}

invalidFetch()
