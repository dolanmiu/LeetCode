/**
 * @param {number[]} nums
 * @return {number}
 */
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
    
    return currIndex + 1;
};