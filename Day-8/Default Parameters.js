// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.


function defaultSum(first,second=1,third=0){
    return first+second+third
}

console.log("With second & Third parameter",defaultSum(48,5,20))

console.log("Without third parameter",defaultSum(48,20))

console.log("Without Second & Third parameter",defaultSum(48))
