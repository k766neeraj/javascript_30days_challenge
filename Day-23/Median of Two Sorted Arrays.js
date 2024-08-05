// 1. Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median. 



var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    if(n1>n2){
        return findMedianSortedArrays(nums2,nums1)
    }
    let lo = 0
    let hi = n1
    let tot = n1+n2

    while(lo<=hi){
        let m1 = Math.floor((lo+hi)/2)
        let m2 = Math.floor((tot+1)/2)-m1
        let am = (m1==n1)?Infinity:nums1[m1]
        let amm1 = (m1==0)?-Infinity:nums1[m1-1]
        let bm = (m2==n2)?Infinity:nums2[m2]
        let bmm1 = (m2==0)?-Infinity:nums2[m2-1]

        if(bmm1<=am && amm1<=bm){
            if(tot%2!=0){
                return Math.max(amm1,bmm1)
            }else{
                let left = Math.max(amm1,bmm1)
                let right = Math.min(am,bm)
                return (left+right)/2
            }
        }else if(amm1>bm){
            hi=m1-1;
        }else if(bmm1>am){
            lo=m1+1;
        }
     
    }
       return 0;

};

console.log("Result is :",findMedianSortedArrays([1,2],[3,4]))
console.log("Result is :",findMedianSortedArrays([1],[]))
