// 4. Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.


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
let dli = mergeTwoLists(l1,l2)
display(dli)

