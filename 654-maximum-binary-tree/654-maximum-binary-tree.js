/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    
    return dfs(nums, 0, nums.length - 1);
};

function findMaxIndex(arr, start, end) {
    let currMinValue = arr[start];
    let currMinIndex = start;
    
    for (let i = start; i <= end; i++) {
        if (arr[i] > currMinValue) {
            currMinValue = arr[i];
            currMinIndex = i;
        }
    }
    
    return currMinIndex;
}

function dfs(arr, start, end) {
    if (start > end) {
        return null;
    }
    
    const pivotIndex = findMaxIndex(arr, start, end);
    
    const left = dfs(arr, start, pivotIndex - 1);
    const right = dfs(arr, pivotIndex + 1, end);
    
    return new TreeNode(arr[pivotIndex], left, right);
}