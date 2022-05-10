/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    if (start.replaceAll('X', '') !== end.replaceAll('X', '')) {
        return false;
    }
    
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < start.length - 1 && p2 < end.length - 1) {
        
        while (p1 < start.length && start[p1] === 'X') {
            p1++;
        }
        
        while (p2 < end.length && end[p2] === 'X') {
            p2++;
        }
        
        if (p1 === start.length && p2 === end.length) {
            return true;
        }
        if (p1 === start.length || p2 === end.length) {
            return false;
        }
        
        if (start[p1] !== end[p2]) {
            return false;
        }
        
        if (start[p1] === 'L' && p2 > p1) {
            return false;
        }
        
        if (start[p1] === 'R' && p1 > p2) {
            return false;
        }
        
        p1++;
        p2++;
    }
    return true;
}

// var canTransform = function(start, end) {
//     const queue = [start];
//     const visited = new Set();
    
//     while (queue.length > 0) {
//         const curr = queue.shift();
        
//         if (curr === end) {
//             return true;
//         }
        
//         const neighbours = getNeighbours(curr);
        
//         for (const neighbour of neighbours) {
//             if (!visited.has(neighbour)) {
//                 queue.push(neighbour);
//                 visited.add(neighbour);
//             }
//         }
//     }
//     return false;
// };

// function getNeighbours(s) {
//     const neighbours = [];
    
//     for (let i = 0; i < s.length; i++) {
//         const j = i + 1;
        
//         const ss = s.substring(i, j + 1);
        
//         if (ss === 'XL') {
//             neighbours.push(s.substring(0, i) + "LX" + s.substring(j + 1));
//         }
        
//         if (ss === 'RX') {
//             neighbours.push(s.substring(0, i) + "XR" + s.substring(j + 1));
//         }
//     }
    
//     return neighbours;
// }

