// 1. Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.



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
