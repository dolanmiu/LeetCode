/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var singleNumber = function(nums) {
    let total = 0;
    for (let j = 0; j <= 32; j++) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];


            const unit = (num >> j) & 1;
            sum += unit;
        }
        
        const cappedUnit = sum % 3;
        
        if (cappedUnit === 1) {
            const elevatedUnit = cappedUnit << j;
            total |= elevatedUnit;
        }
    }
    
    return total;
};