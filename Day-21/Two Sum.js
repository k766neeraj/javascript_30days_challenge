// 1. Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.



let twoSum = function(nums, target) {
    let n = nums.length
    let hs = new Map()
    let res = [0,0]
    for(let i=0;i<n;i++){
        if(hs.has(target-nums[i])){
            res[0]=hs.get(target-nums[i])
            res[1]=i
            return res
        }else{
            hs.set(nums[i],i)
        }
    }
    return res
};

console.log("Index:",twoSum([2,7,11,15],9))
console.log("Index:",twoSum([3,2,4],7))
