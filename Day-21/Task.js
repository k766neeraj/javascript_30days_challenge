// Activity 1: Two Sum
// • Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// • Log the indices for a few test cases.


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
console.log("Index:",twoSum([3,2,4],6))


// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.

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


console.log("reversed Integer",reverse(123))
console.log("reversed Integer",reverse(-452))


// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.


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
console.log("Pallindrome Number:",isPalindrome(0))


// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// • Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next=null) {
        this.val = val
        this.next = null;
    }
}

var mergeTwoLists = function(li1, li2) {
    let list1=li1
    let list2=li2
    let newList = new ListNode()
    let temp = newList;
    while(list1!=null && list2!=null){
        if(list1.val<list2.val){
            temp.next = list1
            list1=list1.next
            temp=temp.next
        }else if(list1.val>list2.val){
            temp.next=list2
            list2=list2.next
            temp=temp.next
        }else{
            temp.next=list1
            list1=list1.next
            temp=temp.next
            temp.next=list2
            list2=list2.next
            temp=temp.next
        }
    }
    while(list1!=null){
        temp.next=list1
        list1=list1.next
        temp=temp.next
    }
    while(list2!=null){
        temp.next=list2
        list2=list2.next
        temp=temp.next
    }
    return newList.next
};

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

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
let dli = mergeTwoLists(l1,l2)
display(dli)


// Activity 5: Valid Parentheses
// • Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters '(', ')', '{', ']', '[' and ']', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

var isValid = function(s) {
    let i=0;
    let st=[]
    while(i<s.length){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            st.push(s[i])
        }else{
            if(s[i]==')'){
                if(st[st.length-1]=='('){
                    st.pop()
                }else{
                    return false
                }
            }else if(s[i]=='}'){
                if(st[st.length-1]=='{'){
                    st.pop()
                }else{
                    return false
                }
            }else{
                if(st[st.length-1]=='['){
                    st.pop()
                }else{
                    return false
                }
            }
        }
        i+=1
    }
    if(st.length==0){
        return true
    }
    return false
};

console.log("valid Parenthesis",isValid('()'))
console.log("valid Parenthesis",isValid('({[{]})'))



