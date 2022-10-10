/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// Time: O(2n + b)
// Space: O(n)
var corpFlightBookings = function(bookings, n) {
    // Space: O(n)
    const delta = Array(n + 2).fill(0);
    
    // Time: O(n)
    for (const [first, last, seats] of bookings) {
        delta[first] += seats;
        delta[last + 1] -= seats;
    }
    
    const output = Array(n + 1).fill(0);
    
    // Time: O(b)
    for (let i = 0; i < output.length; i++) {
        output[i] += (output[i - 1] ?? 0) + delta[i];
    }
    
    // Time: O(n)
    output.shift();
    
    return output;
};