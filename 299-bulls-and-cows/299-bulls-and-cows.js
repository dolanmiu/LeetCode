/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// Time: O(n)
// Space: O(S + G)
var getHint = function(secret, guess) {
    let correct = 0;
    let cows = 0;
    const secretMap = new Map();
    const guessMap = new Map();
    
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            correct++;
        } else {
            secretMap.set(secret[i], (secretMap.get(secret[i]) ?? 0) + 1);
            guessMap.set(guess[i], (guessMap.get(guess[i]) ?? 0) + 1);
        }
    }
    
    for (const [key, value] of secretMap) {
        if (!guessMap.has(key)) {
            continue;
        }
        
        const guessValue = guessMap.get(key);
        
        cows += Math.min(value, guessValue);
    }
    
    return `${correct}A${cows}B`;
};

// 1x23
// 0x11