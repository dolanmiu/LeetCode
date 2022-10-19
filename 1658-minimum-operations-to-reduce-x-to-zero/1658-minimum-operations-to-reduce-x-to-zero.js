/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let left = -1;
    let right = -1;
    
    // Time: O(n)
    const targetSum = nums.reduce((a, b) => a + b) - x;
    
    if (targetSum < 0) {
        return -1;
    }
    
    const prefixSum = Array(nums.length).fill(0);
    
    // Time: O(n)
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        prefixSum[i] = curr + (prefixSum[i - 1] ?? 0);
    }
    
    
    
    console.log(prefixSum)
    
    let maxWindowSize = 0;
    let hasFound = false;
    
    while (right < nums.length) {
        const currLeft = prefixSum[left] ?? 0;
        const currRight = prefixSum[right] ?? 0;
        const currSum = currRight - currLeft;
        
        if (currSum < targetSum) {
            right++;
        } else if (currSum > targetSum) {
            left++;
        } else {
            maxWindowSize = Math.max(maxWindowSize, right - left);
            right++;
            hasFound = true;
        }
    }
    
    const diff = nums.length - (maxWindowSize);
    
    return hasFound ? diff : -1;
};