/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let smallest = arr[i];
        
        for (let j = i; j < arr.length; j++) {
            smallest = Math.min(smallest, arr[j]);
            
            total += smallest;
        }
    }
    
    return total % (Math.pow(10, 9) + 7);
};