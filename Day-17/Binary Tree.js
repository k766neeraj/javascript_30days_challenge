// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.



class TreeNode {
    constructor(val, left = null, right = null) {
        this.value = val
        this.left = left
        this.right = right
    }
}


class BinaryTree {
    constructor() {
        this.head = null
    }
    insertInTree(val) {
        if (this.head == null) {
            this.head = new TreeNode(val)
        } else {
            let temp = this.head
            while (true) {
                if (temp.value > val) {
                    if (temp.left == null) {
                        temp.left = new TreeNode(val)
                        return
                    }
                    else {
                        temp = temp.left
                    }
                } else {
                    if (temp.right == null) {
                        temp.right = new TreeNode(val)
                        return
                    } else {
                        temp = temp.right
                    }
                }
            }
        }
    }
    #helperinorder(root){
        if(root!=null){
            this.#helperinorder(root.left)
            console.log(root.value)
            this.#helperinorder(root.right)
        }
    }
    inorderTraversal(){
        let temp = this.head
        this.#helperinorder(temp)
    }
}

let bt1 = new BinaryTree()

bt1.insertInTree(10)
bt1.insertInTree(8)
bt1.insertInTree(4)
bt1.insertInTree(9)
bt1.insertInTree(13)
bt1.inorderTraversal()

