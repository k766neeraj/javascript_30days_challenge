// 4. 3Sum Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.


var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res=[]
    for(let i=0;i<nums.length-2;i++){
        if(i!=0 && nums[i]==nums[i-1]){
            continue
        }
        let l = i+1
        let h = nums.length-1
        while(l<h){
            let sumi = nums[i]+nums[l]+nums[h]
            if(sumi==0){
                res.push([nums[i],nums[l],nums[h]])
                l+=1
                while(l<nums.length-1 && nums[l]==nums[l-1]){
                    l+=1
                }
            }else if(sumi>0){
                h-=1
            }else if(sumi<0){
                l+=1
            }
        }
    }
    return res
};

console.log("Result for [-1,0,1,2,-1,-4] is:",threeSum([-1,0,1,2,-1,-4]))
console.log("Result for [0,0,0] is:",threeSum([0,0,0]))
