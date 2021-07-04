class TreeNode{
    constructor(val){
        this.key = val;
        this.left = null;
        this.right = null;
    }

    
}

function printInOrder(node){
    // this is in order traversal.... left traverse->root->right tree traverse
    
    if(!node){
        return;
    }
    printInOrder(node.left)
    console.log(node.key)
    printInOrder(node.right)
}

function PreOrderTraversal(node){
   
    if(!node){
        return;
    }
    console.log(node.key)
    PreOrderTraversal(node.left)
    PreOrderTraversal(node.right)
    
   
}

function PostOrderTraversal(node){
   
    if(!node){
        return;
    }
    PostOrderTraversal(node.left)
    PostOrderTraversal(node.right)
    console.log(node.key)
    
   
}

function findEle(tree, key){
if(tree == null){
    return "Not Found";
}
if(tree.key === key){
    return "Found";
}
if(tree.key < key){
    return findEle(tree.right, key);
}else{
    return findEle(tree.left, key);
}
}

let tree = null; // very imp
tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log(tree)
console.log("In order traversal");
printInOrder(tree);
console.log("Pre order traversal");
PreOrderTraversal(tree);
console.log("Post order traversal");
PostOrderTraversal(tree);


// find an element in binary search  tree

console.log(findEle(3434))