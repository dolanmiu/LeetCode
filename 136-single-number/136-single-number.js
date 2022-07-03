/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var singleNumber = function(nums) {
    let output = 0;
    for (let i = 0; i < nums.length; i++) {
        output = output ^ nums[i];
    }
    
    return output;
};