
var Trie = function(val) {
    this.children = {};
    this.val = val;
    this.isTerminus = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const chars = word.split('');
    let currNode = this;
    
    while (chars.length > 0) {
        let currChar = chars.shift();
        
        const child = currNode.children[currChar];
        
        if (!child) {
            const node = new Trie(currChar);
            currNode.children[currChar] = node;
        }
        
        currNode = currNode.children[currChar];
    }
    currNode.isTerminus = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const chars = word.split('');
    let currNode = this;
    
    while (chars.length > 0) {
        let currChar = chars.shift();
        
        const child = currNode.children[currChar];
        
        if (!child) {
            return false;
        }
        
        currNode = currNode.children[currChar];
    }
    if (currNode.isTerminus) {
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const chars = prefix.split('');
    let currNode = this;
    
    while (chars.length > 0) {
        let currChar = chars.shift();
        
        const child = currNode.children[currChar];
        
        if (!child) {
            return false;
        }
        
        currNode = currNode.children[currChar];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */