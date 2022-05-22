/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    
    if(arr.length <= 1) return 0;
    
    let map = {};
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] in map) {
            map[arr[i]].push(i);
        } else {
            map[arr[i]] = [i];
        }
    }
    
    let currentLayer = [0];
    let visited = new Set();
    let res = 0;
    
    while(currentLayer.length > 0) {
        let nextLayer = [];
        
        for(let idx of currentLayer) {
            if(idx === arr.length - 1) {
                return res;
            }
            
            //Same value
            for(let same of map[arr[idx]]){
                if(!visited.has(same)) {
                    visited.add(same);
                    nextLayer.push(same);
                }
            }
            
            map[arr[idx]] = [];
            
            //Neighbors
            let left = idx - 1;
            let right = idx + 1;
            if(left >= 0 && !visited.has(left)) {
                visited.add(left);
                nextLayer.push(left);
            }
            
            if(right < arr.length && !visited.has(right) ) {
                visited.add(right);
                nextLayer.push(right);
            }
        }
        
        currentLayer = nextLayer; //Change array reference
        res++;
    }
};
// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var minJumps = function(arr) {
//     const indexMap = new Map();
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const n = arr[i];
//         if (!indexMap.has(n)) {
//             indexMap.set(n, []);
//         }
        
//         indexMap.get(n).push(i)
//         // indexMap.set(n, [...(indexMap.get(n) ?? []), i]); - This is slow, will TLE
//     }

//     // Pruning - optimisation
//     for (const [key, value] of indexMap) {
//         const newValue = value.map((index, i) => {
//             if (index - 1 === value[i - 1] && index + 1 === value[i + 1]) {
//                 return undefined;
//             } else {
//                 return index;
//             }
//         }).filter((a) => a !== undefined);
        
//         indexMap.set(key, newValue);
//     }
        
//     const queue = [{ pos: 0, level: 0 }];
//     const visited = new Set([0]);
    
//     while (queue.length > 0) {
//         const curr = queue.shift();
        
//         if (curr.pos === arr.length - 1) {
//             return curr.level;
//         }
        
//         const neighbours = getNeighbours(arr, indexMap, curr);
        
//         for (const neighbour of neighbours) {
//             if (visited.has(neighbour.pos)) {
//                 continue;
//             }
            
//             queue.push(neighbour);
//             visited.add(neighbour.pos);
//         }
//     }
    
//     return -1;
// };

// function getNeighbours(arr, indexMap, node) {
//     const index = node.pos;
//     const left = index - 1;
//     const right = index + 1;
    
    
//     const portalIndexes = indexMap.get(arr[index]);
//     const base = [left, right].filter((i) => i >= 0 && i < arr.length).concat(portalIndexes);

//     const total = base.map((i) => ({ pos: i, level: node.level + 1 }));
    
//     return total;
// }