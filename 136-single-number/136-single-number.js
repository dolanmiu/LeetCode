/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let output = 0;
    for (let i = 0; i < nums.length; i++) {
        output = output ^ nums[i];
    }
    
    return output;
};