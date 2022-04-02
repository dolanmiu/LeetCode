/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split('');
    
    let k = 0;
    while (k < arr.length) {
        
        if (arr[k] === ' ' && arr[k + 1] === ' ') {
            arr.splice(k, 1); // Removes element at index k
            continue;
        }
        
        k++;
    }
    
    if (arr[0] === ' ') {
        arr.shift();
    }
    
    if (arr[arr.length - 1] === ' ') {
        arr.pop();
    }
    

    reverse(arr, 0, arr.length - 1);
    
    arr.push(' ');
    
    let lagPointer = 0;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        
        if (curr === ' ') {
            reverse(arr, lagPointer, i - 1);
            lagPointer = i + 1;
        }
    }
    
    const output = arr.join('');
        
    arr.pop();
    
    return arr.join('');
};

function reverse(arr, start, end) {
    for (let i = start; i <= (start + end) / 2; i++) {
        const swapIndex = end - i + start;
        const leftLetter = arr[i];
        const rightLetter = arr[swapIndex];
        arr[i] = rightLetter;
        arr[swapIndex] = leftLetter;
    }
}


