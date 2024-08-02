// 3. Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.


var isPalindrome = function(x) {
    x=x+''
    let sp=0
    let ep = x.length-1
    while(sp<=ep){
        if(x[sp]!=x[ep]){
            return false
        }
        sp+=1
        ep-=1
    }
    return true
};

console.log("Pallindrome Number:",isPalindrome(123))
console.log("Pallindrome Number:",isPalindrome(10))
