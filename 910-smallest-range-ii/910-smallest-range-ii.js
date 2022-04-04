/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var smallestRangeII = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let ans = nums[nums.length - 1] - nums[0];
    
    const endNegativeK = nums[nums.length - 1] - k;
    const startPositiveK = nums[0] + k;
    
    for (let i = 0; i < nums.length - 1; i++) {
       
        const high = Math.max(endNegativeK, nums[i] + k);
        const low = Math.min(startPositiveK, nums[i + 1] - k);
        
        ans = Math.min(ans, high - low);
    }
    
    return ans;
};