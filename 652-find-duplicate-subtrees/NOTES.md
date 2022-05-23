# Intuition
Post order traversal required
* We have two global varaibles, `snapshots` to store the snapshots of every point in the post order traversal, and `res`, to store the output.
* At every stage of the post order, we take a `snapshot` of what the traversed array is, then store it in a map
* If we find another snapshot later down the line, we add it to the `res`.
* `snapshots` is a map so that we can store the count occurance