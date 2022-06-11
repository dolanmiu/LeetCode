# Intuition
Have a bucket based system to keep track of the current nest level
It is a kind of linear traversal, keeping track of only the "next line", which could be any nest level! (Not quite, any nest level backwards, but only one forwards)
​
We then simply slice the array up to the specified point and join the buckets together