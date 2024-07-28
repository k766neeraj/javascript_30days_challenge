// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.



function reverseString(st, sp, ep) {
    if (sp > ep) {
        return
    }

    let temp = st[ep]
    st[ep] = st[sp]
    st[sp] = temp
   
    reverseString(st, sp + 1, ep - 1)
}

let str = "san fancisco"
arr = str.split('')
reverseString(arr, 0, arr.length - 1)

console.log("Reverse String", arr.join(''))

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPallindrome(arr, sp, ep) {

    if (sp > ep) {
        return true
    }
    if (arr[sp] != arr[ep]) {
        return false
    }
    return checkPallindrome(arr, sp + 1, ep - 1)
}
str = "animina"

arr = str.split('')
console.log(`${str} is Pallindrome or not:`, checkPallindrome(arr, 0, arr.length - 1))
