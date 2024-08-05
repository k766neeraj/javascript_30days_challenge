// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// • Log the median for a few test cases, including edge cases.

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



// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and 
// merges all the linked lists into one sorted linked list.
// • Create a few test cases with linked lists and log the merged list.


var mergeKLists = function(lists) {
    let newList = new ListNode()
    let temp = newList
    let n = lists.length
    for(let i=0;i<n;i++){
        temp.next=mergeTwoLists(temp.next,lists[i])
    }
   
    return newList.next
};

var mergeTwoLists = function(li1, li2) {
    list1=li1
    list2=li2
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
    temp = newList.next
    return newList.next
};

// Activity 3: Trapping Rain Water
// • Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, 
// and computes how much water it can trap after raining.
// • Log the amount of trapped water for a few test cases.


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


// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// • Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// • Log the distinct solutions for a few test cases.


let isSatisfied = function(row,col,board,n){
    temprow = row
    tempcol = col
    while(row>=0 && col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        row-=1
        col-=1
    }

    col = tempcol
    row = temprow
    while(col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        col-=1
    }
    row = temprow
    col = tempcol
    while(row<n && col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        row+=1
        col-=1
    }
    return true
}

let column = function(col,board,n,ans){
    if(col==n){
        let te=[]
        for(let i=0;i<n;i++){
            te.push(board[i].join(''))
        }
      
        ans.push(te)
        return 
    }
    for(let row = 0;row<n;row++){
        if(isSatisfied(row,col,board,n)){
            board[row][col]='Q'
            column(col+1,board,n,ans)
            board[row][col]='.'
        }
    }
}

var solveNQueens = function(n) {
      let ans = []
      let board = new Array(n)
      for(let i=0;i<n;i++){
        board[i]= new Array(n);
      }
      for(i=0;i<n;i++){
        board[i].fill('.')
      }
      column(0,board,n,ans)
      return ans
};

console.log("Result for 4 Queen",solveNQueens(4))
console.log("Result for 4 Queen",solveNQueens(1))


// Activity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
// • Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word,
// such that only one letter can be changed at a time and each transformed word must exist in the word list.
// • Log the length of the shortest transformation sequence for a few test cases.



var ladderLength = function(beginWord, endWord, wordList) {
    let que=[]
    let set = new Set(wordList)
    que.push([beginWord,1])
    set.delete(beginWord)
    while(que.length!=0){
     let word = que[0][0]
     let steps = que[0][1]
     if(word==endWord){
         return steps
     }
     que.splice(0,1)
     let seStr = word.split('')
     for(let i=0;i<word.length;i++){
         let origin = seStr[i]
         for(let j=97;j<=122;j++){
             seStr[i]=String.fromCharCode(j)
             if(set.has(seStr.join(''))==true){
                 set.delete(seStr.join(''))
                 que.push([seStr.join(''),steps+1])
             }
         }
         seStr[i]=origin
     }
    }
    return 0
 };


 console.log("Result is :",ladderLength("hit", "cog",["hot","dot","dog","lot","log","cog"]))
 console.log("Result is :",ladderLength("hit", "cog",["hot","dot","dog","lot","log"]))