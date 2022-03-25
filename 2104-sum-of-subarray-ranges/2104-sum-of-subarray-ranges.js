/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let total = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let smallest = nums[i];
        let largest = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            smallest = Math.min(smallest, nums[j]);
            largest = Math.max(largest, nums[j]);
            
            total += largest - smallest
        }
    }
    
    return total;
};