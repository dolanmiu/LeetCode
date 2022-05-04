/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const pointsWithDistance = points.map((point) => {
        const distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        return {
            point: point,
            distance,
        }
    });
    
    pointsWithDistance.sort((a, b) => a.distance - b.distance);
    
    return pointsWithDistance.splice(0, K).map((data) => data.point);
};