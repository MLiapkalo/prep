class TreeNode {
    constructor(value = null, l, r) {
        this.value = value;
        this.l = l;
        this.r = r;
    }
}

class BinaryTree {
    constructor(rootValue = null) {
        this.root = new TreeNode(rootValue)
    }

    _preOrder(node, cb) {
        cb(node.value);

        if (node.l) {
            this._preOrder(node.l, cb)
        }

        if (node.r) {
            this._preOrder(node.r, cb)
        }
    }

    _inOrder(node, cb) {
        if (node.l) {
            this._inOrder(node.l, cb)
        }

        cb(node.value);

        if (node.r) {
            this._inOrder(node.r, cb)
        }
    } 

    _postOrder(node, cb) {
        if (node.l) {
            this._postOrder(node.l, cb)
        }

        if (node.r) {
            this._postOrder(node.r, cb)
        }

        cb(node.value);
    }

    traverse(order, cb) {
        switch(order) {
            case -1:
                this._preOrder(this.root, cb);
            case 0:
                this._inOrder(this.root, cb);
                break;
            case 1:
                this._postOrder(this.root, cb);
                break;
            default:
                return;
        }
    }
}

/*
            10
          /   \
        7     11
       / \     \
      6  8     20
    /     \   /  \
   1      9  14  22

*/
const tree = new BinaryTree(10);
const root = tree.root;

const nodeMap = [7, 11, 6, 8, 20, 1, 9, 14, 22].reduce((map, curr) => {
    return { ...map, [curr]: new TreeNode(curr) }
}, {});

// build the tree
root.l = nodeMap[7];
root.r = nodeMap[11];

// left subtree
nodeMap[7].l = nodeMap[6];
nodeMap[7].r = nodeMap[8];

nodeMap[6].l = nodeMap[1];
nodeMap[8].r = nodeMap[9];

// right subtree
nodeMap[11].r = nodeMap[20];

nodeMap[20].l = nodeMap[14];
nodeMap[20].r = nodeMap[22];

const order = 1
tree.traverse(order, console.log);
