export default class BST {
  constructor() {
    this.root = null;
    this.leftHeight = 0;
    this.rightHeight = 0;
  }

  insert(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            this.leftHeight++;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            this.rightHeight++;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }

  search(value) {
    if (this.root === null) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode != null) {
        if(currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
            currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      return false;
    }
  }

  remove(removedNode) {
    if(!this.search(removedNode.data)) {
      return false;
    } else {
      let currentNode = this.root;
      while(true) {
        if(currentNode.data === removedNode.data && currentNode.left === null && currentNode.right === null) {
          currentNode = null;
          return true;
        } else if(currentNode.data === removedNode.data && currentNode.left === null) {
          currentNode = currentNode.right;
          return true;
        } else if(currentNode.data === removedNode.data && currentNode.left != null) {
          currentNode = currentNode.left;
          return true;
        } else {
          if(currentNode.data < removedNode.data) {
            currentNode = currentNode.right;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }

}