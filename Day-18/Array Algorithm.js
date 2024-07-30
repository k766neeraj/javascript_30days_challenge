// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.


function reverse(arr,n,m){
    sp=n
    ep=m
    while(sp<=ep){
        let temp = arr[ep]
        arr[ep]=arr[sp]
        arr[sp]=temp
        sp+=1
        ep-=1
    }
}
k=2
arr=[1,2,3,4,5]
console.log("Before Rotation:",arr)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
reverse(arr,0,arr.length-1)

console.log("Array after 2 rotation on left:",arr)



function mergeArray(arr1,arr2){
    let i=0
    let j=0
    let n = arr1.length
    let m = arr2.length
    let res = []
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i])
            i+=1
        }else if(arr1[i]>arr2[j]){
            res.push(arr2[j])
            j+=1
        }else{
            res.push(arr1[i])
            i+=1
            j+=1
        }
    }
    while(i<n){
        res.push(arr1[i])
        i+=1
    }
    while(j<m){
        res.push(arr2[j])
        j+=1
    }
    console.log("Array After merging:",res)
}

let arr1 = [1,5,8,10]
let arr2 = [2,6,12,19,20]
mergeArray(arr1,arr2)
