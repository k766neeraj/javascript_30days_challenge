// 2. Searching Algorithm Script: Create a script that implements linear search and binary search
// algorithms to find values in arrays.

//Linear Search 

arr = [12,34,452,78,33]
let target = 78
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("Target index:",i)
        break
    }
}


// Binary search

arr = [12,14,16,17,20]
target = 12
flag=0
let sp = 0
let ep = arr.length-1
while(sp<=ep){
    let mid = Math.floor(sp+(ep-sp)/2)
    if(arr[mid]==target){
        console.log("Target index:",mid)
        flag=1
        break
    }
    else if(arr[mid]>target){
        ep=mid-1
    }
    else{
        sp=mid+1
    }
}

if(flag==0){
    console.log("Targte not found")
}

