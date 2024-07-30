// Activity 1: Sorting Algorithms


//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


let arr = [19,4,25,12,10]
console.log("Original Array:",arr)

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let tmep = arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=tmep
        }
    }
}
console.log("Sorted Array:",arr)


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


arr=[12,5,10,2,8]
console.log("Original Array:",arr)

for(let i=0;i<arr.length-1;i++){
    let mini = arr[i]
    let minidx = i
    for(let j=i+1;j<arr.length;j++){
        if(mini>arr[j]){
            mini=arr[j]
            minidx=j
        }
    }
    let temp = mini
    arr[minidx]=arr[i]
    arr[i]=temp
}
console.log("Sorted Array:",arr)

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function swap(a,b,arr){
    let temp = arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function partition(arr,s,e){
    let p1 = s+1
    let p2 = e
    while(p1<=p2){
        if(arr[p1]<=arr[s]){
            p1+=1
        }else if(arr[p2]>arr[s]){
            p2-=1
        }else{
            swap(p1,p2,arr)
            p1+=1
            p2-=1
        }
    }
    swap(s,p2,arr)
    return p2
}

function quicksort(arr,s,e){
    if(s>=e){return}
    let p = partition(arr,s,e);
    quicksort(arr,s,p-1)
    quicksort(arr,p+1,e)
}


arr = [12,6,10,67,2]
console.log("Original Array:",arr)

quicksort(arr,0,arr.length-1)

console.log("Sorted Array:",arr)


// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.


arr = [12,34,452,78,33]
let target = 78
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("Target index:",i)
        break
    }
}


// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

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


// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

let hastr = new Map()
let str = "fsdfsdpeie"
for (const st of str) {
    if(!hastr.has(st)){
        hastr.set(st,1)
    }else{
        hastr.set(st,hastr.get(st)+1)
    }
}

hastr.forEach((val,key)=>{
    console.log(`Character:${key} occurence is:${val}`)
})

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.


let hasub = new Map()
str = "abcdcbacaebf"
maxlen=0
sp=0
ep=0

while(ep<str.length){
    if(!hasub.has(str[ep])){
        hasub.set(str[ep],1)
       

        if(ep-sp+1>maxlen){
            
            maxlen=ep-sp+1
        }
        ep+=1
    }else{
        while(str[sp]!=str[ep]){
            hasub.set(str[sp],hasub.get(str[sp])-1)
            if(hasub.get(str[sp])==0){
                hasub.delete(str[sp])
            }
            sp+=1
        }
      
        sp+=1
        ep+=1
       

    }
}
console.log("Longest substring with no repeating characters:",maxlen)


// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

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

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.


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


// Activity 5: Dynamic Programming (Optional)


// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

function fibonacci(n,dp){
    if(n==0 || n==1){
        return n
    }
    if(dp[n]!=-1){
        return dp[n]
    }
    let ans = fibonacci(n-1,dp)+fibonacci(n-2,dp)
    dp[n]=ans
    return ans
}
n=6
dp=Array.from({length:n+1}, (_,i)=>-1)

console.log(fibonacci(n,dp))

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained

// N = 3
// W = 4
// values[] = {1,2,3}
// weight[] = {4,5,1}
// Output: 3

function knapsack(val,wt,k,i,dp){
    if(i==-1 || k==0){
        return 0
    }
    if(dp[i][k]!=-1){
        return dp[i][k]
    }
    let leave = knapsack(val,wt,k,i-1,dp)
    let take = 0
    if(k>=wt[i]){
        take = knapsack(val,wt,k-wt[i],i-1,dp)+val[i]
    }
    dp[i][k]=Math.max(take,leave)
    return Math.max(take,leave)
}

let N = 3
let W = 4
let values = [1,2,3]
let weight = [4,5,1]
dp = new Array(N)

for(let i=0;i<N;i++){
    dp[i]=new Array(W+1).fill(-1)
}
console.log("dp",dp)
console.log("Maxmum value",knapsack(values,weight,W,N-1,dp))
