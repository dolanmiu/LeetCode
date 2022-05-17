/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    let prevBits = 0n;
    const output = [];
    
    for (let i = 0; i < paint.length; i++) {
        const [start, end] = paint[i];
        
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

// TIme: O(n)
function count1s(n) {
    if (n === 0) {
        return 0;
    }
    const match = n.toString(2).match(/1/g);
    
    return match ? match.length : 0;
}