// 3. Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.



function SaveValues(key,values){
    localStorage.setItem(key,values)

    sessionStorage.setItem(key,values)

    console.log("Data from local storage:",localStorage.getItem(key))
    console.log("Data from Session storage:",sessionStorage.getItem(key))
}

SaveValues("movie","kfgpart4")
