/**
 * @param {number} n
 * @return {number[][]}
 */
let currDir;
var generateMatrix = function(n) {
    currDir = 'right';
    const matrix = Array(n).fill(undefined).map(() => Array(n).fill(-1));
    
    matrix[0][0] = 1;
    let currI = 0;
    let currJ = 0;
    
    for (let k = 2; k <= n*n; k++) {
        const [i, j] = getNext(matrix, currI, currJ);
        currI = i;
        currJ = j;
        
        matrix[currI][currJ] = k;
    }
    return matrix;
};

function nextDirection(dir) {
    switch(dir) {
        case 'left':
            return 'up';
        case 'right':
            return 'down';
        case 'up':
            return 'right';
        case 'down':
            return 'left';
    }
}

function getNext(matrix, i, j) {
    switch(currDir) {
        case 'left':
            if (matrix[i][j - 1] === undefined || matrix[i][j - 1] !== -1) {
                 currDir = nextDirection(currDir);
                 return [i - 1, j];
             } else {
                 return [i, j - 1];
             }
        case 'right':
             if (matrix[i][j + 1] === undefined || matrix[i][j + 1] !== -1) {
                 currDir = nextDirection(currDir);
                 console.log(currDir)
                 return [i + 1, j];
             } else {
                 return [i, j + 1];
             }
        case 'up':
            if (matrix[i - 1] === undefined || matrix[i - 1][j] !== -1) {
                 currDir = nextDirection(currDir);
                 return [i, j + 1];
             } else {
                 return [i - 1, j];
             }
        case 'down':
            if (matrix[i + 1] === undefined || matrix[i + 1][j] !== -1) {
                 currDir = nextDirection(currDir);
                 return [i, j - 1];
             } else {
                 return [i + 1, j];
             }
    }
}