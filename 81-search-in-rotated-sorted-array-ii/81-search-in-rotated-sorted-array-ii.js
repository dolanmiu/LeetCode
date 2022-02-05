/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const pivot = findPivot(nums, 0, nums.length - 1);
    console.log('pivot', pivot);
    if (target === nums[pivot]) {
        console.log('found', target, nums[pivot], pivot)
        return true;
    }
    
    // if (nums.length === 2) {
    //     return nums[0] > nums[1] ? right : left;
    // }
    
    if (target > nums[pivot] && target <= nums[nums.length - 1]) {
        return binary(nums, pivot + 1, nums.length - 1, target);
    } else {
        return binary(nums, 0, pivot - 1, target);
    }
    
};

function findPivot(nums, left, right) {
    if (right - left === 1) {
        return nums[left] > nums[right] ? right : left;
    }

    if (left >= right) {
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
        return findPivot(nums, mid, right);
    } else if (nums[mid] < nums[right]) {
        return findPivot(nums, left, mid);
    } else {
        // Equal, dont know what to do
        return findPivotSlow(nums, left, right);
    }
}

function binary(nums, left, right, target) {
    console.log('bsearch', left, right)
    if (left > right) {
        return false;
    }
    
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
        return true;
    }
    
    
    if (target > nums[mid] && target <= nums[right]) {
        return binary(nums, mid + 1, right, target);
    } else {
        return binary(nums, left, mid - 1, target);
    }
}

function findPivotSlow(nums, left, right) {
    let prev = nums[left];
    for (let i = left + 1; i <= right; i++) {
        if (prev > nums[i]) {
            return i;
        }
        prev = nums[i];
    }
    
    return nums[left];
}