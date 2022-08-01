# Intuition
Use binary search
​
Search criteria is using the sum formula
If the sum formula brings back a value greater than n, then we know the answer is on the left
If the sum formula brings back a value higher than n, then we know we can maybe make more steps, and we are in the middle of the triangle.
Store this value as a potential output by doing a `Math.max`, then carry on.