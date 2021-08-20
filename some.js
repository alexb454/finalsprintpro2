//treeify used to see tree in console log
const treeify = require('treeify');

//function to grab number inputs, remove comma, put into Tree class then show results
const someThing = async (req, res) => {
    let numbers = await req.body.number
    numbers = numbers.split(',');
        let bst = new Tree();
        for (let t = 0; t < numbers.length; t++) {
            bst.insert(numbers[t]);
        }
        res.send(JSON.stringify(bst, true, "<br>" ));
        console.log(treeify.asTree(bst, true));
};

//starting class 
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
//class to input the numbers and put on top highest number to lowest number thru input
class Tree {
    constructor(root = null) {
        this.root = root;
    }
    insert(value) {
        const recursionHelp = (node) => {
            if(node === null) {
                return new Node(value);
            }else if(value < node.value) {
                node.left = recursionHelp(node.left);
            }else if(value > node.value) {
                node.right = recursionHelp(node.right);
            }else{
                throw new Error("Cannot be equal You!")
            }
            
            if(nodeBalance(node) > 1) {
                return nodeRotateLeft(node);
            }else if(nodeBalance < -1) {
                return nodeRotateRight(node);
            }else{
                return node;
            }
        }
        this.root = recursionHelp(this.root);
        }
            search(value){
            const recursionSearchHelp = (node) => {
                if(node === null) {
                    return false;
                }else if(value < node.value){
                    return recursionSearchHelp(node.left);
                }else if (value > node.value){
                    return recursionSearchHelp(node.right);
                }else{
                    return true;
                }
            }
            return recursionSearchHelp(this.root)
        }
    }
    function nodeHeight(node){
        if(node === null) {
            return -1;
        }else if(node.left === null && node.right === null){
            return 0;
        }else{
            return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
        }
        
    }
    function nodeBalance(node){
        return nodeHeight(node.right) - nodeHeight(node.left);
    }
    function nodeRotateLeft(node){
        if(node === null || node.right === null){
            return node;
        }
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
    function nodeRotateRight(node){
        if(node === null || node.left === null){
            return node;
        }
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
};

//exported to index and the index test
module.exports = {
    someThing,
    Node,
    Tree
}