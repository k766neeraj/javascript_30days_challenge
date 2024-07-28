// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function inorderTraversal(root) {
    if (root != null) {
        inorderTraversal(root.left)
        console.log(root.val)
        inorderTraversal(root.right)
    }
}


let t1 = new Node(10)
t1.left = new Node(8)
t1.left.left = new Node(4)
t1.left.left.left = new Node(2)
t1.right = new Node(13)

console.log("Traversal")
inorderTraversal(t1)



function dephtOfTree(root) {
    if(root==null){
        return 0
    }
    let left = dephtOfTree(root.left)
    let right = dephtOfTree(root.right)

    return 1+Math.max(left,right)
}

console.log("Depth of Tree", dephtOfTree(t1))