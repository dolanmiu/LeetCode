/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let output = 0;
    
    for (let i = 0; i < items.length; i++) {
        const [type, color, name] = items[i];
        
        switch (ruleKey) {
            case "type":
                if (ruleValue === type) {
                    output++;
                }
                break;
            case "color":
                if (ruleValue === color) {
                    output++;
                }
                break;
            case "name":
                if (ruleValue === name) {
                    output++;
                }
                break;
        }
    }
    
    return output;
};