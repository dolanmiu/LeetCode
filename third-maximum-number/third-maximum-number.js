/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    let maxIndex = 0;
    const newNums = Array.from(new Set(nums));
    let origCount = newNums.length;
    
    
    for (let i = 0; i < 2; i++) {
        maxValue = Number.MIN_SAFE_INTEGER;
        maxIndex = 0;
        for (let j = 0; j < newNums.length; j++) {
            if (newNums[j] > maxValue) {
                maxValue = newNums[j];
                maxIndex = j;
                console.log('max', maxValue, maxIndex)
            }
        }
        
        if (origCount <= 2) {
            break;
        }
                console.log(newNums, maxIndex)

        newNums.splice(maxIndex, 1);
    }
    
    maxValue = Number.MIN_SAFE_INTEGER;
    maxIndex = 0;
    
    for (let j = 0; j < newNums.length; j++) {
        if (newNums[j] > maxValue) {
            maxValue = newNums[j];
        }
    }
    
    return maxValue;
};