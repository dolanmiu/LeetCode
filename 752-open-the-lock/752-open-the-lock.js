/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
let visited;
var openLock = function(deadends, target) {
    visited = new Set(deadends);
    
    if (visited.has('0000')) {
        return -1;
    }
    
    // const output = dfs([0, 0, 0, 0], target.split('').map((a) => parseInt(a)), target, new Set());
    const output = bfs([0, 0, 0, 0], target);
    console.log(output)
        
    return output;
};

// function dfs(curr, target, targetString, visited) {
//     const currString = curr.join('');
    
//     if (currString === targetString) {
//         return [visited.size];
//     }
    
//     if (deadendSet.has(currString)) {
//         return [];
//     }
        
//     const neighbours = getNeighbours(curr);

//     const output = [];
        
//     for (const neighbour of neighbours) {
//         if (visited.has(neighbour.join(''))) {
//             continue;
//         }
        
//         for (const o of dfs(neighbour, target, targetString, new Set([...visited, currString]))) {
//             output.push(o);
//         }
//     }

//     return output;
// }

function bfs(root, target) {
    const queue = [{ node: root, level: 0 }];
    
    while (queue.length > 0) {
        const payload = queue.shift();

        const currString = payload.node.join('');
        
        if (currString === target) {
            return payload.level;
        }
        
        const neighbours = getNeighbours(payload.node);

        for (const neighbour of neighbours) {
            const neighbourString = neighbour.join('');
            if (!visited.has(neighbourString)) {
                visited.add(neighbourString);
                queue.push({ node: neighbour, level: payload.level + 1 });
            }
        }
    }
    
    return -1;
}

function getNeighbours(curr) {    
    const firstUp = [...curr];
    firstUp[0] = absMod(firstUp[0] + 1, 10);
    
    const firstDown = [...curr];
    firstDown[0] = absMod(firstDown[0] - 1, 10);
    
    const secondUp = [...curr];
    secondUp[1] = absMod(secondUp[1] + 1, 10);
    
    const secondDown = [...curr];
    secondDown[1] = absMod(secondDown[1] - 1, 10);
    
    const thirdUp = [...curr];
    thirdUp[2] = absMod(thirdUp[2] + 1, 10);
    
    const thirdDown = [...curr];
    thirdDown[2] = absMod(thirdDown[2] - 1, 10);
    
    const forthUp = [...curr];
    forthUp[3] = absMod(forthUp[3] + 1, 10);
    
    const forthDown = [...curr];
    forthDown[3] = absMod(forthDown[3] - 1, 10);
    
    return [
        firstUp,
        firstDown,
        secondUp,
        secondDown,
        thirdUp,
        thirdDown,
        forthUp,
        forthDown,
    ];
}

function absMod(num, n) {
  return ((num % n) + n) % n;
};