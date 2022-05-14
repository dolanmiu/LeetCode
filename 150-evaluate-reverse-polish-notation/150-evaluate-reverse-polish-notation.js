/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        const firstNum = parseInt(tokens[i - 2]);
        const secondNum = parseInt(tokens[i - 1]);
        let res;
        switch(tokens[i]) {
            case '+':
                res = firstNum + secondNum;
                tokens[i] = res;
                tokens.splice(i - 2, 2);
                i -= 2;
                break;
            case '-':
                res = firstNum - secondNum;
                tokens[i] = res;
                tokens.splice(i - 2, 2);
                i -= 2;
                break;
            case '*':
                res = firstNum * secondNum;
                tokens[i] = res;
                tokens.splice(i - 2, 2);
                i -= 2;
                break;
            case '/':
                res = firstNum / secondNum;
                tokens[i] = res;
                tokens.splice(i - 2, 2);
                i -= 2;
                break;
        }
    }
    return Math.floor(tokens[tokens.length - 1]);
};
    
