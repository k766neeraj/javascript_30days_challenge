// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.


let arr = [19,20,23,49,34]

for (let i = 0; i < arr.length; i++) {
    console.log("Element using for is:",arr[i])
}

arr.forEach((ele)=>{
    console.log("Element using forEach:",ele)
})