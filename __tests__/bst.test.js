import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {

  const pbst = new BST();
  const bstRemove = new BST();
  const bstOnlyRootRemove = new BST();

  beforeEach(() => {
    pbst.insert(new BSTNode(4));
    pbst.insert(new BSTNode(2));
    pbst.insert(new BSTNode(6));
    pbst.insert(new BSTNode(1));
    pbst.insert(new BSTNode(3));
    pbst.insert(new BSTNode(5));
    pbst.insert(new BSTNode(7)); 
    bstOnlyRootRemove.insert(new BSTNode(4)); 
    bstRemove.insert(new BSTNode(4));
    bstRemove.insert(new BSTNode(2));
    bstRemove.insert(new BSTNode(6));
    bstRemove.insert(new BSTNode(1));
    bstRemove.insert(new BSTNode(7));
  });

  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test('it should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insert(node);
    expect(bst.root).toEqual(node);
  });

  test('it should add a child node to the left side of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(22);
    bst.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('it should add a child node to the right side of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(48);
    bst.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test('it should add a child to the left of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(22);
    bst.insert(node2);
    let node3 = new BSTNode(11);
    bst.insert(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test('it should add a child to the right of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(48);
    bst.insert(node2);
    let node3 = new BSTNode(73);
    bst.insert(node3);
    expect(rootNode.right.right.data).toEqual(73);
  });

  test('it should add a child to left or right of a node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(22);
    bst.insert(node2);
    let node3 = new BSTNode(33);
    bst.insert(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });

  test('it should not add duplicate nodes', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(36);
    bst.insert(node2);
    expect(rootNode.data).toEqual(36);
    expect(rootNode.left).toEqual(null);
    expect(rootNode.right).toEqual(null);
  });

  test('it should return true if the root node is equal to 4', () => {
    expect(pbst.search(4)).toEqual(true);
  });

  test('it should return false if the root node is not equal to 31', () => {
    expect(pbst.search(31)).toEqual(false);
  });

  test('it should return true if the first child node on the left is equal to 2', () => {
    expect(pbst.search(2)).toEqual(true);
  });

  test('it should return true if the tree includes 7', () => {
    expect(pbst.search(5)).toEqual(true);
  });

  test('it should return true if the tree includes 7', () => {
    expect(pbst.search(7)).toEqual(true);
  });

  test('it should return false if the removedNode not exist in the tree', () => {
    let removedNode = new BSTNode(31);
    expect(pbst.remove(removedNode)).toEqual(false);
  });

  test('it should return true if the removedNode is the root of the tree and tree has only root', () => {
    let removedNode = new BSTNode(4);
    expect(bstOnlyRootRemove.remove(removedNode)).toEqual(true);
  });

  test('it should return true if the removedNode doesnt have a children', () => {
    let removedNode = new BSTNode(1);
    expect(bstRemove.remove(removedNode)).toEqual(true);
  });

  test('it should return true if the removedNode have only right child', () => {
    let removedNode = new BSTNode(6);
    expect(bstRemove.remove(removedNode)).toEqual(true);
  });

  test('it should return true if the removedNode have only left child', () => {
    let removedNode = new BSTNode(2);
    expect(bstRemove.remove(removedNode)).toEqual(true);
  });

  test('it should return true if the removedNode have both children', () => {
    let removedNode = new BSTNode(4);
    expect(bstRemove.remove(removedNode)).toEqual(true);
  });
});