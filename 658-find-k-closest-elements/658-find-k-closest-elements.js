/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// Time: O(2n)
// Space: O(n)
var findClosestElements = function(arr, k, x) {
    const diffArr = arr.map(n => Math.abs(n - x));
    
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += diffArr[i];
    }
    
    let minSum = currSum;
    let minIndexes = [0, k - 1];
    
    let j = k;
    for (let i = 1; j < diffArr.length; i++, j++) {
        const sum = minSum - diffArr[i - 1] + diffArr[j];
        
        if (sum < minSum) {
            minSum = sum;
            minIndexes = [i, j];
        }
    }
    
    const output = [];
    
    for (let i = minIndexes[0]; i <= minIndexes[1]; i++) {
        output.push(arr[i]);
    }
    console.log(minIndexes, output)

    return output;
};