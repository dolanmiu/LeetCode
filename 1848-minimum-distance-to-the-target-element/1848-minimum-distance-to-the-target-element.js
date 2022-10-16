/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var getMinDistance = function(nums, target, start) {
    let min = Number.MAX_VALUE;
    
    // Time: O(n)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            min = Math.min(min, Math.abs(i - start));
        }
    }
    
    return min;
};