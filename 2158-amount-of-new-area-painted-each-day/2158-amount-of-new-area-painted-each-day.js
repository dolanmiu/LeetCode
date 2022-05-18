/**
 * @param {number[][]} paint
 * @return {number[]}
 */
// Time: O(n^2)
// Space: O(n)
var amountPainted = function(paint) {
    let prevBits = 0n;
    const output = [];
    
    for (const [start, end] of paint) {        
        const span = BigInt(end - start);
        const currBits = ((2n << span - 1n) - 1n) << BigInt(start);
        const mergedBits = currBits | prevBits;
        
        const diff = mergedBits - prevBits;
        const count = count1s(diff);
        output.push(count);
        prevBits = mergedBits;
    }
    
    return output;
};

// Time: O(n)
// Stolen from Stack Overflow:
// https://stackoverflow.com/questions/43122082/efficiently-count-the-number-of-bits-in-an-integer-in-javascript
function count1s(n) {
    if (n === 0) {
        return 0;
    }
    const match = n.toString(2).match(/1/g);
    
    return match ? match.length : 0;
}