# Two Approaches
The problem with this question is the overflow. My solution does not work with large numbers
​
## Approach 1
​
We create "Buckets", by getting the vertical cuts. This is initially set at 0
Then we iterate through all the cuts, on the horizontal side to get the biggest one
​
## Approach 2
Find the max length from each cut side, then multiply them together. Done.