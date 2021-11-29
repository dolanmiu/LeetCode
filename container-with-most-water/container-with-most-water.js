/**
 * @param {number[]} heights
 * @return {number}
 */
// [1, 1]
var maxArea = function(heights) {
    let left = 0;
    let right = heights.length - 1;
    
    let maxArea = 0;
    
    while (left < right) {
        const area = findMin(heights[left], heights[right]) * findLength(left, right);
        
        if (area > maxArea) {
            maxArea = area;
        }
        
        if (heights[left] > heights[right]) {
            right--;
        } else {
            left++;
        }
    }
    
    return maxArea;
};
    
function findMin(a, b) {
    return a > b ? b : a;
} 

function findLength(a, b) {
    return Math.abs(a - b);
}