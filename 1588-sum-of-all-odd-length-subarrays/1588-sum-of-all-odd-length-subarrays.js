/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const amount = ((i + 1) * (arr.length - i));
        const withoutEven = Math.ceil(amount / 2);
        total += arr[i] * withoutEven;
    }
        
    return total;
};