/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// Time: O(n * m)
// Space: O(n)
// var replaceWords = function(dictionary, sentence) {
//     const words = sentence.split(" ");
    
//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < dictionary.length; j++) {
//             if (words[i].startsWith(dictionary[j])) {
//                 words[i] = dictionary[j];
//             }
//         }
//     }
    
//     return words.join(" ");
// };
// Time: O(n)
// Space: (n)
var replaceWords = function(dictionary, sentence) {
    const trie = createTrie(dictionary);
    const dicSet = new Set(dictionary);
    
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        const traversedWord = checkWordInTrie(trie, words[i], dicSet);
        if (dicSet.has(traversedWord)) {
            words[i] = traversedWord;
        }
    }
    
    return words.join(' ');
}

function checkWordInTrie(trie, word, dicSet) {
    let currWord = '';
    let currNode = trie;
    const letters = word.split('');
    
    while (currNode !== undefined) {
        const letter = letters.shift();
        if (currNode.children[letter]) {
            currWord += letter;
        }
        
        currNode = currNode.children[letter];
        if (dicSet.has(currWord)) {
            return currWord;
        }
    }
    
    return currWord;
}

function createTrie(dictionary) {
    const head = new TrieNode('');
    
    for (const word of dictionary) {
        dfs(head, word.split(''));
    }
    
    return head;
}

function dfs(node, currWord) {
    if (currWord.length === 0) {
        return;
    }
    
    const char = currWord.shift();
    
    if (!node.children[char]) {
        const newNode = new TrieNode(char);
        node.children[char] = newNode;
    }
    
    dfs(node.children[char], currWord);

} 

class TrieNode {
    constructor(val) {
        this.val = val;
        this.children = {};
    }
    
    isLeaf() {
        return this.children.length === 0;
    }
}