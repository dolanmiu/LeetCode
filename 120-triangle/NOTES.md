* Need to DFS by storing the computed values from bottom up.
* Need to collapse the array of sums to pick only the best one.
* Each time the left and right are done, we find the minimum and return that. Collapsing
* E.g. [1,2,6,4,6,4,2,5] => [1]