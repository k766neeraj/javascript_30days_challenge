// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.


// Bubble Sort
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

// Selection Sort

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

// Quick Sort
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

