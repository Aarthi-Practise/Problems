function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
class LinearTree {
    constructor() {
        this.root = null;
        this.parent = null;
    }
    addChild(data) {
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            let queue = [this.root];
            while (queue.length > 0) {
                let currentNode = queue.shift();
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    break;
                }
                else if (currentNode.right == null) {
                    currentNode.right = newNode;
                    break;
                }
                else {
                    queue.push(currentNode.left);
                    queue.push(currentNode.right);
                }
            }
        }
    }
    inOrder(currentNode = this.root,result = []) {
        if(currentNode == null) {
            return "tree has no leaves.";
        }
        if(currentNode != null) {
            this.inOrder(currentNode.left,result);
            result.push(currentNode.data);
            this.inOrder(currentNode.right,result);
        }
        return result;
    }
    preOrder(currentNode = this.root,result = []) {
        if(currentNode == null) {
            return "tree has no leaves.";
        }
        if(currentNode != null) {
            result.push(currentNode.data);
            this.preOrder(currentNode.left,result);
            this.preOrder(currentNode.right,result);
        }
        return result;
    }
    postOrder(currentNode = this.root,result = []) {
        if(currentNode == null) {
            return "tree has no leaves.";
        }
        if(currentNode != null) {
            this.postOrder(currentNode.left,result);
            this.postOrder(currentNode.right,result);
            result.push(currentNode.data);
        }
        return result;
    }
    levelOrder() {
        if (this.root == null) {
            console.log("tree is blank");
        }
        this.result = [];
        this.stack1 = [];
        this.stack1.push(this.root);
        while(this.stack1.length > 0) {
            let currentNode = this.stack1.shift();
            this.result.push(currentNode.data);
            if(currentNode.left != null){
                this.stack1.push(currentNode.left);
            }
            if(currentNode.right != null){
                this.stack1.push(currentNode.right);
            }
        }
        return this.result;
    }
    reversePostOrder(currentNode = this.root,result = []) {
        if(currentNode == null) {
            return "tree has no leaves.";
        }
        if(currentNode != null) {
            this.reversePostOrder(currentNode.right,result);
            this.reversePostOrder(currentNode.left,result);
            result.push(currentNode.data);
        }
        return result;
    }

}


let linearTree = new LinearTree();
linearTree.addChild(10)
linearTree.addChild(5)
linearTree.addChild(15);
linearTree.addChild(2)
linearTree.addChild(7)
linearTree.addChild(11);
linearTree.addChild(25);
linearTree.addChild(1);
console.log(`In Order : ${linearTree.inOrder()}`);
console.log(`Pre Order : ${linearTree.preOrder()}`);
console.log(`Post Order : ${linearTree.postOrder()}`);
console.log(`Reversed Post Order : ${linearTree.reversePostOrder()}`);
console.log(`Level Order: ${linearTree.levelOrder()}`);
