/**
 * @param {number[]} nums
 * @return {number}
 */
// var minIncrementForUnique = function(nums) {
//     const mem = new Map();
    
//     for (const n of nums) {
//         mem.set(n, (mem.get(n) ?? 0) + 1);
//     }
    
//     const keys = Array.from(mem.keys());
    
//     const minKey = keys.reduce((acc, curr) => Math.min(acc, curr));
//     const maxKey = keys.reduce((acc, curr) => Math.max(acc, curr));
    
//     let pointer = minKey;
//     let output = 0;

//     for (let k = 0; k < keys.length; k++) {
//         const i = keys[k];
//         const count = mem.get(i);
//         pointer = i + 1;
        
//         for (let j = 0; j < count - 1; j++) {
//             inner:
//             while (true) {
//                 if (mem.get(pointer) === undefined) {
//                     output += pointer - i;
//                     mem.set(pointer, 1);
//                     pointer++;
//                     break inner;
//                 }
//                 pointer++;
//             }
//         }
        
//     }

//     return output;
// };
var minIncrementForUnique = function(nums) {
    const maxVal = nums.reduce((acc, curr) => Math.max(acc, curr));
    
    const count = Array(nums.length + maxVal).fill(0);
    
    for (const n of nums) {
        count[n]++;
    }
    
    let moves = 0;
    let taken = 0;
    
    for (let x = 0; x < nums.length + maxVal; x++) {
        if (count[x] >= 2) {
            const extra = count[x] - 1;
            taken += extra;
            moves -= x * extra;
        } else if (taken > 0 && count[x] === 0) {
            taken--;
            moves += x;
        }
        console.log(x, moves, taken)
    }
    
    return moves;
}