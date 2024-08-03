// 3. Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water.


var maxArea = function(height) {
    
    let res = -Infinity
    let sp=0
    let ep=height.length-1
    while(sp<=ep){
        let ans = (ep-sp)*Math.min(height[sp],height[ep])
        res = Math.max(res,ans)
        if(height[sp]<=height[ep]){
            sp+=1
        }else{
            ep-=1
        }
    }
    return res
};


console.log("Result1 of [1,8,6,2,5,4,8,3,7] is:",maxArea([1,8,6,2,5,4,8,3,7]))
console.log("Result1 of [1,1,3,4,6,7,8] is:",maxArea([1,1,3,4,6,7,8]))
