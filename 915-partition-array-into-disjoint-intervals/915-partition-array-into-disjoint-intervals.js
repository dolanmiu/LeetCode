/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var partitionDisjoint = function(nums) {
    let currMax = nums[0];
    let possibleMax = nums[0];
    let currIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (currMax > nums[i]) {
            currIndex = i;
            currMax = possibleMax;
        }
        possibleMax = Math.max(possibleMax, nums[i]);
    }
    
    // Need to increment 1 because currIndex is the current accepted border
    // Adding one will step into where it needs to be sliced
    return currIndex + 1;
};