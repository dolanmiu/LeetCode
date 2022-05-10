/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2 !== 0) {
        return [];
    }
    
    let curr = 0;
    let remaining = finalSum;
    let res = new Set();
    
    while (curr < remaining) {
        curr += 2;
        remaining -= curr;
        
        if (remaining === curr) {
            curr = remaining * 2;
        }
        
        if (res.has(remaining)) {
            return [...res, curr + remaining];
        }
        
        res.add(curr);
    }
    
    return [...res];
}
// var maximumEvenSplit = function(finalSum) {
//     if (finalSum % 2 !== 0) {
//         return [];
//     }
    
//     const output = dfs(finalSum, new Set());
    
//     return output ?? [];
// };

// function dfs(n, visited) {
//     if (n === 0) {
//         return Array.from(visited);
//     }
    
//     if (n < 0) {
//         return undefined;
//     }
        
//     let output = [];
    
//     for (let i = 2; i <= n; i++) {
//         if (i % 2 !== 0) {
//             continue;
//         }
//         if (visited.has(i)) {
//             continue;
//         }
//         output.push(dfs(n - i, new Set([...visited, i])));
//     }
    
//     const arrays = output.filter((a) => !!a);
    
//     if (arrays.length === 0) {
//         return undefined;
//     } else {
//         let maxValue = 0;
//         let maxArr;
//         for (let i = 0; i < arrays.length; i++) {
//             if (arrays[i].length > maxValue) {
//                 maxArr = arrays[i];
//                 maxValue = arrays[i].length;
//             }
//         }
        
//         return maxArr;
//     }
// }