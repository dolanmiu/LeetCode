/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
let visited;
let bankSet;
var minMutation = function(start, end, bank) {
    bankSet = new Set(bank);
    visited = new Set([start]);
    
    return bfs(start, end, bank);
    
};

function bfs(start, end, bank) {
    const queue = [{
        dna: start,
        level: 0
    }];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node.dna === end) {
            return node.level;
        }
        
        const neighbours = getNeighbours(node.dna, bank);
        
        for (const neighbour of neighbours) {
            if (visited.has(neighbour)) {
                continue;
            }
            
            queue.push({
                dna: neighbour,
                level: node.level + 1
            });
            
            visited.add(neighbour);
        }
    }
    
    return -1;
}

function getNeighbours(dna, bank) {
    const neighbours = [];
    
    for (const currDna of bank) {
        let errors = 0;
        
        for (let i = 0; i < dna.length; i++) {
            const currNucleotide = dna[i];
            
            if (currNucleotide !== currDna[i]) {
                errors++;
            }
        }
        
        if (errors === 1) {
            neighbours.push(currDna);
        }
    }
    
    return neighbours;
}


