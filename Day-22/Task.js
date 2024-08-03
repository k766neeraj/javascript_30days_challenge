// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// • Create a few test cases with linked lists and log the sum as a linked list.

class ListNode {
    constructor(val = 0, next=null) {
        this.val = val
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {
    let addl = new ListNode()
    let temp = addl
    let carry=0
    while(l1!=null && l2!=null){
        let sumi = l1.val+l2.val+carry
        if(sumi<9){
            temp.next=new ListNode(sumi)
            carry=0
        }else{
            let lastD = sumi%10
            let firstD = Math.floor(sumi/10)
            carry = firstD
            temp.next = new ListNode(lastD)
        }
        temp=temp.next
        l1=l1.next
        l2=l2.next
    }
    while(l1!=null){
        sumi=l1.val+carry
        if(sumi<9){
            temp.next=new ListNode(sumi)
            carry=0
        }else{
            let lastD = sumi%10
            let firstD = Math.floor(sumi/10)
            carry = firstD
            temp.next = new ListNode(lastD)
        }
        temp=temp.next
        l1=l1.next
    }
    while(l2!=null){
        sumi = l2.val+carry
        if(sumi<9){
            temp.next=new ListNode(sumi)
            carry=0
        }else{
            let lastD = sumi%10
            let firstD = Math.floor(sumi/10)
            carry = firstD
            temp.next = new ListNode(lastD)
        }
        temp=temp.next
        l2=l2.next
    }
    if(carry>0){
        temp.next=new ListNode(carry)
    }
    return addl.next
};

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(8)

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

function display(li){
    temp = li
    while(li!=null){
        console.log(li.val)
        li=li.next
    }
}

add = addTwoNumbers(l1,l2)


console.log("Result:1 is:")
display(add)

l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

add = addTwoNumbers(l1,l2)


console.log("Result:2 is:")
display(add)



// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.


var lengthOfLongestSubstring = function(str) {
    let hasub = new Map()
    maxlen=0
    sp=0
    ep=0
    while(ep<str.length){
        if(!hasub.has(str[ep])){
            hasub.set(str[ep],1)
            if(ep-sp+1>maxlen){
                maxlen=ep-sp+1
            }
            ep+=1
        }
        else{
            while(str[sp]!=str[ep]){
                hasub.set(str[sp],hasub.get(str[sp])-1)
                if(hasub.get(str[sp])==0){
                    hasub.delete(str[sp])
                }
                sp+=1
            }
        sp+=1
        ep+=1
        }
    }
    return maxlen

};

console.log("Result for abcabcbb",lengthOfLongestSubstring("abcabcbb"))
console.log("Result for pwwkew",lengthOfLongestSubstring("pwwkew"))



// Activity 3: Container With Most Water
// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// • Log the maximum amount of water for a few test cases.


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


// Activity 4: 3Sum
// • Task 4: Solve the "3Sum" problem on LeetCode.
// • Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// • Log the triplets for a few test cases, including edge cases.


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


// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases

var groupAnagrams = function(strs) {
    let hs = new Map()
    for(let i=0;i<strs.length;i++){
        let temp = strs[i].split('')
        let st = temp.sort().join('')
        if(!hs.has(st)){
            hs.set(st,[])
        }
    }
    let res=[]
    for(let st of strs){
        let temp = st.split('')
        let litost = temp.sort().join('')
        if(hs.has(litost)){
            hs.get(litost).push(st)
        } 
    }
    let fians=[]
    for(let key of hs){
    
        fians.push(key[1])
    }
    return fians
};


console.log('Result of ["eat","tea","tan","ate","nat","bat"] is:',groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log('Result of ["a","aa"] is:',groupAnagrams(["a","aa"]))