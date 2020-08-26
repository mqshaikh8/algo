let Node = (val, left = null, right = unde) => {
    this.val = val
    this.left = left
    this.right = right
}
let binaryTree = (val) => {
    this.head = null
}

binaryTree.prototype.add = (val) => {
    const node = new Node(val)
    this.insert(this.head, node)
}

binaryTree.prototype.insert = (node, newNode) => {
    if(this.head === null){
        this.head = newNode
    }
    if(node.val < newNode.val){
        if(node.left === null){
            node.left = newNode
        }
        else{
            this.insert(node.left, newNode)
        }
    } 
    else{ 
        if(node.right === null){
            node.right = newNode; 
        }
        else{
            this.insertNode(node.right,newNode)
        }
    }
}

binaryTree.prototype.remove = (val) => {
    this.root = this.delete(this.head, val)
}
binaryTree.prototype.delete = (node, val) => {

    if(node === null){
        return null
    }
    else if(val < node.val) 
    { 
        node.left = this.removeNode(node.left, val); 
        return node; 
    } 

    else if(val > node.val) 
    { 
        node.right = this.removeNode(node.right, val); 
        return node; 
    } 

    else
    { 
        if(node.left === null && node.right === null) 
        { 
            node = null; 
            return node; 
        } 

        if(node.left === null) 
        { 
            node = node.right; 
            return node; 
        } 
        
        else if(node.right === null) 
        { 
            node = node.left; 
            return node; 
        } 

        var aux = this.findMinNode(node.right); 
        node.val = aux.val; 

        node.right = this.removeNode(node.right, aux.val); 
        return node; 
    } 
}
