/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function(obstacles) {
    // jump state
    const state = [
        [
            1,
            0,
            1
        ],
        ...Array(obstacles.length - 1).fill().map(u => Array(3).fill(Number.MAX_VALUE))
    ];
    
    for (let i = 1; i < obstacles.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (obstacleInWay(obstacles, i, j)) {
                continue;
            }
            
            if (obstacleInWay(obstacles, i + 1, j)) {
                continue;
            }
            
            state[i][j] = Math.min(
                Math.min(
                    state[i - 1][(j + 1) % 3] + 1, 
                    state[i - 1][(j + 2) % 3] + 1
                ), 
                state[i - 1][j]
            );
        }
    }    
    
    const lastRow = state[state.length - 1];
    
    return Math.min(Math.min(lastRow[0], lastRow[1]), lastRow[2]);
};

function obstacleInWay(obstacles, i, j) {
    if (obstacles[i] === j + 1) {
        return true;
    }
    
    return false;
}

