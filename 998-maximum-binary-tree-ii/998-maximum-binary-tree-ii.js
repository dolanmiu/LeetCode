/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
let arr;
var insertIntoMaxTree = function(root, val) {
    arr = [];
    
    inOrderTraversal(root);
    
    arr.push(val); // [2,1,5,3,4]
    
    const newRoot = dfs(arr, 0, arr.length - 1);
    return newRoot;
};

// Time: O(n^2)
// Space: O(n)
const dfs = (arr, left, right) => {
    if (left > right) {
        return null;
    }
    
    if (left === right) {
        return new TreeNode(arr[left], null, null);
    }
    
    const pivot = findMaxIndex(arr, left, right);

    const leftNode = dfs(arr, left, pivot - 1);
    
    const rightNode = dfs(arr, pivot + 1, right);
    
    return new TreeNode(arr[pivot], leftNode, rightNode);
    
}

// Time: O(n)
// Space: O(1)
const findMaxIndex = (arr, left, right) => {
    let max = 0;
    let maxIndex = left;
    
    for (let i = left; i <= right; i++) {
        if (arr[i] > max) {
            max = Math.max(max, arr[i]);
            maxIndex = i;
            
        }
    }

    return maxIndex;
    
}


// Time: O(n)
// Space: O(n)
const inOrderTraversal = (node) => {
    if (node === null) {
        return;    
    }
    
    inOrderTraversal(node.left);
    
    arr.push(node.val)
    
    inOrderTraversal(node.right);
}

