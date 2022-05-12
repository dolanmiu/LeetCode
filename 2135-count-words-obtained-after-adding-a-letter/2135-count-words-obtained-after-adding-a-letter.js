/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    const binaryStartWords = startWords.map((w) => {
        let n = 0;
        for (let i = 0; i < w.length; i++) {
            let charValue = 1 << w[i].charCodeAt(0) - 97;
            n += charValue;
        }
        return n;
    });
    
    const binaryTargetWords = targetWords.map((w) => {
        let n = 0;
        for (let i = 0; i < w.length; i++) {
            let charValue = 1 << w[i].charCodeAt(0) - 97;
            n += charValue;
        }
        return n;
    });
    
    const binaryStartSet = new Set(binaryStartWords);
    
    let output = 0;
    
    for (const num of binaryTargetWords) {
        for (let i = 0; i < 26; i++) {
            const isGreater = (num & (1 << i)) > 0;
            
            if (isGreater) {
                const diff = num - (1 << i);
                
                if (binaryStartSet.has(diff)) {
                    output++;
                    break;
                }
            }
        }
    }
    
    return output;
    
    // let output = new Set();

    // for (let i = 0; i < binaryStartWords.length; i++) {
    //     for (let j = 0; j < binaryTargetWords.length; j++) {
    //         if (isPowerOf2(binaryTargetWords[j])) {
    //             continue;
    //         }
    //         const diff = binaryTargetWords[j] - binaryStartWords[i];
    //         if (diff <= 0) {
    //             continue;
    //         } else {
    //             if (isPowerOf2(diff)) {
    //                 console.log(diff, binaryTargetWords[j], binaryStartWords[i], startWords[i], targetWords[j])
    //                 output.add(targetWords[j]);
    //             }
    //         }
    //     }
    // }
    
    console.log(output);
    
    return output.size;
    
}

function isPowerOf2(n) {
    if ((n & (n - 1)) === 0) {
        return true;
    } else {
        return false;
    }
}

// var wordCount = function(startWords, targetWords) { 
//     let output = new Set();
    
//     for (const word1 of startWords) {
//         const map1 = toMap(word1);
//         for (const word2 of targetWords) {
//             const map2 = toMap(word2);
            
//             if (hasOneDiff(map1, map2)) {
//                 output.add(word2);
//             }
//         }
//     }
//     return output.size;
// };

// function hasOneDiff(m1, m2) {
//     const s1 = m1.size;
//     const s2 = m2.size;
    
//     if (s1 + 1 !== s2) {
//         return false;
//     }
        
//     for (const key of m1) {
//         if (!m2.has(key)) {
//             return false
//         }
//     }
    
//     return true
// }
    
// function toMap(word) {
//     const map = new Set(word);
//     return map;
// }

// function sizeOfMap(m) {
//     return m.size;
// }