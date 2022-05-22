# Intuition
* DFS with memoisation (back-tracking) would work if we memoise the state of the problem (left and right)
* However, it TLEs
* A simplier approach is to use two pointers - sliding window
* If we can take `k` numbers from either left or right hand side, we simply do a sliding window "portal style" by starting with all the picked `k` values from the top, then slowly removing the end values and picking the end of the list.
* Keep track of `currSum` and `maxSum`