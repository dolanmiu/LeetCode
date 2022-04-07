/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const index = search(nums, 0, nums.length - 1);
    
    return index;
};

function search(nums, start, end) {
    if (start >= end) {
        return start;
    }
    
    if (end - start === 1) {
        return nums[start] > nums[end] ? start : end;
    }
    
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[mid + 1]) {
        return search(nums, start, mid);
    } else {
        return search(nums, mid, end);
    }
}