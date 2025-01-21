//BST is a binary tree that is sorted

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }

        let temp = this.root;

        while(true){

            if(newNode.value === temp.value){
                return undefined;
            }


            if(newNode.value < temp.value){

                if(temp.left === null) {
                    temp.left = newNode;
                }
                else{
                    temp = temp.left;
                }
            }
            else{
                if(temp.right === null) {
                    temp.right = newNode;
                }
                else{
                    temp = temp.right;
                }
            }
        }
    }
    
    includes(value) {
        if (!this.root) return false;
    
        let temp = this.root;
        while (temp) {
          if (value < temp.value) {
            temp = temp.left;
          } else if (value > temp.value) {
            temp = temp.right;
          } else if (value === temp.value) {
            return true;
          }
        }
        return false;
    }
}

let myBST = new BST();
myBST.insert(5);
myBST.insert(2);
myBST.insert(3);
myBST.insert(6);
myBST.insert(7);
myBST.insert(8);

console.log(myBST);



