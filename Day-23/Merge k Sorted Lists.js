// 2. Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists
// and logs the merged list.

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
