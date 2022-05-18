/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    changed.sort((a, b) => a - b);
    
    const count = new Map();
    
    for (const n of changed) {
        count.set(n, (count.get(n) ?? 0) + 1);
    }
    
    if (count.has(0)) {
        if (count.get(0) % 2 !== 0) {
            return [];
        }
    }
    
    const output = new Map();
    const used = new Map();
    
    for (let i = 0; i < changed.length; i++) {
        const curr = changed[i];
        
        const currCount = count.get(curr);

        if ((used.get(curr) ?? 0) + (output.get(curr) ?? 0) >= currCount) {
            continue;
        }
        
        const double = curr * 2;
        
        if (count.has(double) && (used.get(double) ?? 0) < count.get(double)) {
            used.set(double, (used.get(double) ?? 0) + 1);
            output.set(curr, (output.get(curr) ?? 0) + 1);
            // count.set(double, count.get(double) - 1);
        }
        
        
    }
    
    const res = [];
    
    for (const [key, value] of output) {
        for (let i = 0; i < value; i++) {
            res.push(key);
        }
    }
    
    
    if (res.length !== changed.length / 2) {
        return [];
    }
    
    return res;
    
}

// var findOriginalArray = function(changed) {
//     const count = new Map();
    
//     for (const n of changed) {
//         count.set(n, (count.get(n) ?? 0) + 1);
//     }
    
//     const res = Array(changed.length / 2).fill(0);
//     let index = 0;
    
//     for (const [currKey, value] of count) {
//         let key = currKey;
//         if (key === 0) {
//             const freq = count.get(key);
//             if (freq % 2 === 0) {
//                 // If there are even number of 0s, then its impossible, return blank
//                 return [];
//             }
            
//             for (let i = 0; i < freq / 2; i++) {
//                 res[index] = 0;
//                 index++;
//             }
//         } else if (count.get(key) > 0) {
//             while (key % 2 === 0 && count.has(key / 2)) {
//                 key /= 2;
//             }
            
//             while (count.has(key)) {
//                 const freq = count.get(key);
//                 if (freq > 0) {
//                     if (freq > count.get(key * 2) ?? 0) {
//                         return [];
//                     }
                
//                     for (let i = 0; i < freq; i++) {
//                         res[index] = key;   
//                         index++;
//                     }
//                     count.set(key, 0);
//                     count.set(key * 2, count.get(key * 2) - freq);
//                 }
                
//                 key += key;
//             }
//         }
//     }

//     return res;
// };