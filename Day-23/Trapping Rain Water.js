// 3. Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.


let prefixmax = function(height){
    let n = height.length
    let prefix = new Array(n)
    prefix.fill(0);
    prefix[0]=height[0]
    for(let i=1;i<n;i++){
        prefix[i]=Math.max(prefix[i-1],height[i])
    }
    return prefix
}
let suffixmax = function(height){
    let n = height.length
    let suffix = new Array(n)
    suffix.fill(0);
    suffix[n-1]=height[n-1]
    for(let i=n-2;i>=0;i--){
        suffix[i]=Math.max(height[i],suffix[i+1])
    }
    return suffix
}
var trap = function(height) {
    let prefix = prefixmax(height)
    let suffix = suffixmax(height)
  
    let n = height.length
    let result =0
    for(let i=0;i<n;i++){
        let contri = Math.min(prefix[i],suffix[i])-height[i]
        if(contri>0){
            result+=contri
        }
    }
    return result
};

console.log("Result is:",trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log("Result is:",trap([4,2,0,3,2,5]))
