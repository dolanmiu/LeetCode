/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    const n1 = nums[0] + k;
    const n2 = nums[nums.length - 1] - k;
    
    if (n1 > n2) {
        return 0;
    } else {
        return n2 - n1;
    }
};