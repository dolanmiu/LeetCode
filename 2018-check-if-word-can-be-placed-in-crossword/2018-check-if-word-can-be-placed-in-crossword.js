/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// Time: O(m * n)
var placeWordInCrossword = function(board, word) {
    const boardMap = new Map();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const char = board[i][j];
            if (!boardMap.has(char)) {
                boardMap.set(char, []);
            }
            
            boardMap.get(char).push([i, j]);
        }
    }
    
    const emptySpaces = countEmptySpaces(board);
    if (emptySpaces.has(word.length)) {
        return true;
    }
        
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        const arr = boardMap.get(char);
        
        if (!arr) {
            continue;
        }
        
        for (const [x, y] of arr) {
            const forwardsV = dfs(board, x, y, word, i, 'v', 'forward', false);
            const backwardsV = dfs(board, x, y, word, i, 'v', 'backwards', false);
            const forwardH = dfs(board, x, y, word, i, 'h', 'forward', false);
            const backwardsH = dfs(board, x, y, word, i, 'h', 'backwards', false);
            
            const forwardsVR = dfs(board, x, y, word, i, 'v', 'forward', true);
            const backwardsVR = dfs(board, x, y, word, i, 'v', 'backwards', true);
            const forwardHR = dfs(board, x, y, word, i, 'h', 'forward', true);
            const backwardsHR = dfs(board, x, y, word, i, 'h', 'backwards', true);
            
            if (
                (forwardsV && backwardsV) || 
                (forwardH && backwardsH) ||
                (forwardsVR && backwardsVR) || 
                (forwardHR && backwardsHR)
            ) {
                return true;
            }
        }
    }
        
    return false;
};

function dfs(board, i, j, word, index, type, dir, reverse) {
    if (board[i] === undefined || board[i][j] === '#' || board[i][j] === undefined) {
        if (index === word.length || index === -1) {
            return true;
        } else {
            return false;
        }
        
    }        


    if (word[index] === undefined) {
        return false;
    }
    
    if (word[index] !== board[i][j]) {
        if (board[i][j] !== ' ') {
            return false;
        } 
    }
    const offset = dir === 'forward' ? 1 : -1;
    const path = dfs(board, type === 'v' ? i + (!reverse ? offset : -offset) : i, type === 'h' ? j + (!reverse ? offset : -offset) : j, word, index + offset, type, dir, reverse);

    return path;
    
}

function countEmptySpaces(board) {
    const set = new Set();
    
    for (const row of board) {
        let start = 0;
        let end = 0;
        
        let endScan = false;
        
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== '#' && row[i] !== ' ') {
                endScan = true;
            }
            
            if (row[i] === '#') {
                if (!endScan) {
                    set.add(end - start);
                }
                endScan = false;
                start = i + 1;
            }
            
            end = i + 1;
        }
        
        if (endScan) {
            continue;
        }
        
        set.add(end - start);
    }
    
    for (let i = 0; i < board[0].length; i++) {
        let start = 0;
        let end = 0;
        
        let endScan = false;
        
        for (let j = 0; j < board.length; j++) {
            const cell = board[j][i];
            if (cell !== '#' && cell !== ' ') {
                endScan = true;
            }
            
            if (cell === '#') {
                if (!endScan) {
                    set.add(end - start);
                }
                endScan = false;
                start = j + 1;
            }
            end = j + 1;

        }
        
        if (endScan) {
            continue;
        }

        set.add(end - start);
    }

    return set;
}