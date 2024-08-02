// 2. Reverse Integer Script: Create a script that includes a function to reverse an integer and handles
// edge cases.

var reverse = function(x) {
    let rev =1;
    if(x<0){
        rev=0;
        Math.abs(x)   
    }
    x=x+''
    let temp = (x).split('')
    temp.reverse()
    x=parseInt(temp.join(''))
    if(x>= -2147483648 && x<= 2147483647){
        if(rev==0){
            return -(x)
        }
        return x
    }
   
    return 0
    
   
};


console.log("reversed Integer",reverse(121))
console.log("reversed Integer",reverse(-452))
