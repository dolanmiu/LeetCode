/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    
    const rollingMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        rollingMap.set(s.charAt(i), new Set([...(rollingMap.get(s.charAt(i)) ?? []), i]));
    }
        
    let currRotationSet = rollingMap.get(goal.charAt(0));
    if (!currRotationSet) {
        return false;
    }
    for(const currRotationIndex of currRotationSet) {
        const o = work(rollingMap, goal, currRotationIndex);
        
        if (o === true) {
            return true;
        }
    }
    
    return false;
};

function work(rollingMap, goal, currRotationIndex) {
    for (let i = 1; i < goal.length; i++) {
        const set = rollingMap.get(goal.charAt(i));
        
        if (!set) {
            return false;
        }
        const newIndex = (currRotationIndex + 1) % goal.length;
        if (set.has(newIndex)) {
            currRotationIndex = newIndex;
        } else {
            return false;
        }
    }
    
    return true;
}