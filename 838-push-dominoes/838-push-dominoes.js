/**
 * @param {string} dominoes
 * @return {string}
 */
// Time: O(3n^2)
// Space: O(n)
var pushDominoes = function(dominoes) {   
    let prevState = dominoes;
    let currState = stepTime(prevState);
    
    while(prevState !== currState) {
        prevState = currState;
        currState = stepTime(prevState);
    }
    
    return currState;
    
};

function stepTime(strState) {
    const state = strState.split('');
    const newState = [...state];
    
    for (let i = 0; i < state.length; i++) {
        const domino = state[i];
        
        if (domino === '.') {
            const left = state[i - 1];
            const right = state[i + 1];
            
            let force = 0;
            
            if (right === 'L') {
                force--;
            }
            
            if (left === 'R') {
                force++;
            }
            
            if (force > 0) {
                newState[i] = 'R';
            }
            
            if (force < 0) {
                newState[i] = 'L';
            }
        }
    }
    
    console.log(newState.join(''))
    
    return newState.join('');
}