/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
var visiblePoints = function(points, angle, location) {
    const angles = points
        .filter(([x, y]) => !(location[0] === x && location[1] === y))
        .map((point) => getAngle(location, point))
        .map((a) => a >= 0 ? a : a + 360);
    
    const selfPoints = points.filter(([x, y]) => location[0] === x && location[1] === y);
    
    let maxView = 0;
    
    angles.sort((a, b) => a - b);
    
    let i = 0;
    for (let j = 1; j < angles.length * 2; j++) {
        const diff = (j >= angles.length 
                      ?  angles[j % angles.length] + 360
                      : angles[j])
        - (i >= angles.length ? angles[i % angles.length] + 360 : angles[i]);
        
        if (diff > angle) {
            i++;
        }
        console.log(i, j, j - i + 1)
        maxView = Math.max(maxView, j - i + 1);
    }
        
    console.log(angles, selfPoints);
    return maxView + selfPoints.length;
};

function getAngle([originX, originY], [pointX, pointY]) {
    const x = pointX - originX;
    const y = pointY - originY;
    
    const angle = Math.atan2(x, y) / Math.PI * 180;
    
    return angle;
}