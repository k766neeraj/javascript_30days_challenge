// 4. Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.


function removeValues(key){
    local = localStorage.removeItem(key)

    session = sessionStorage.removeItem(key)

    if(local==null && session==null){

        console.log("Data from local storage and session storage is removed")
    }else{

        console.log("Data from local storage and session storage is not removed")
    }
}

removeValues("movie")

