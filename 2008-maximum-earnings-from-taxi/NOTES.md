# DFS Top down approach
​
* * Needs binary search for it to not TLE
* My original idea was to find the "neighbours" by iterating from the current index forward until the end, for it all. This would make it at least O(n^2)
​
​
* A better way is to use binary search
* This works by searching through the (sorted) list for the most applicable one. Since its sorted, everything above the found ride is also applicable. **This is important**
​
* Instead of going through and finding every single neighbour, we can use the **DP skip trick**
* The DP skip trick essentially iterates through every combination without the need to iterate a ton of times.
* We recurse for the `current one + profit` and then we do a `skip index without profit`.
* We then find the max for it and set it as the mem
​