/**
 * @param {string} p
 * @return {number}
 */
let mem;
var findSubstringInWraproundString = function(p) {
    mem = Array(26).fill(0);
    
    dfs(p, p.length - 1);
    
    return mem.reduce((acc, curr) => acc + curr);
}

function dfs(p, currIndex) {
    if (currIndex === 0) {
        mem[getCharCode(p[currIndex])] = 1;
        return 1;
    }
    
    const prev = dfs(p, currIndex - 1);
    
    const prevCharCode = getCharCode(p[currIndex - 1]);
    const currCharCode = getCharCode(p[currIndex]);
    
    if (currCharCode - prevCharCode === 1 || currCharCode - prevCharCode === -25) {
        mem[currCharCode] = Math.max(mem[currCharCode], prev + 1);
        return prev + 1;
        
    } else {
        mem[currCharCode] = Math.max(mem[currCharCode], 1);
        return 1;
    }
}

function getCharCode(char) {
    return char.charCodeAt(0) - 97;
}


// O(2^n + s + p)
// O(2^n)
// const s = "abcdefghijklmnopqrstuvwxyz";
// let mem;
// let cache;
// var findSubstringInWraproundString = function(p) {
//     mem = new Map();
//     cache = new Set();
//     dfs(p, 0, p.length - 1);
    
//     const sMap = new Map();
//     const visitedStarts = new Set([p.charAt(0)]);
    
//     for (let i = 0; i < s.length; i++) {
//        sMap.set(s.charAt(i), i);
//     }
    
//     let output = 0;
    
//     outer:
//     for (const item of cache) {
//         const firstChar = item.charAt(0);
//         let sIndex = sMap.get(firstChar);
        
//         inner:
//         for (let i = 0; i < item.length; i++) {
//             if (s.charAt(sIndex) !== item.charAt(i)) {
//                 continue outer;
//             }
//             sIndex++;
//             sIndex %= s.length;
//         }
//         output++;
//     }
    
//     return output;
// }

// function dfs(p, left, right) {
//     if (mem.has(`${left}-${right}`)) {
//         return;
//     }
    
//     const subString = p.substring(left, right + 1);
    
//     if (left === right) {
//         mem.set(`${left}-${right}`, subString);
//         cache.add(subString)
//         return;
//     }
    
//     const diff = right - left;

//     dfs(p, left + 1, right);
//     dfs(p, left, right - 1);
    
//     mem.set(`${left}-${right}`, subString);
//     cache.add(subString);
//     return;
// }   



// var findSubstringInWraproundString = function(p) {
//     const mem = Array(p.length).fill(undefined).map(() => 0);
//     const sMap = new Map();
//     const visitedStarts = new Set([p.charAt(0)]);
    
//     for (let i = 0; i < s.length; i++) {
//        sMap.set(s.charAt(i), i);
//     }
    
//     let sIndex = sMap.get(p.charAt(0));
//     let total = 0;
//     let i = 0;
    
//     outer:
//     for (let j = 0; j < p.length; j++) {
//         if (s.charAt(sIndex) !== p.charAt(j)) {
//             i = j;
//             if (visitedStarts.has(p.charAt(j))) {
//                 continue outer;
//             }
            
//             sIndex = sMap.get(p.charAt(j));
//         }
//         console.log(j)
//         visitedStarts.add(p.charAt(j));
//         const diff = j - i;
//         const prev = mem[j - 1] ?? 0;
        
//         total = prev + diff + 1;
//         console.log(total)
//         mem[j] = total;
//         sIndex++;
//         sIndex %= s.length;
//     }

//     return total;
// };
