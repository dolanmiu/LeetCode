# Intuition
Got to learn polish notation
​
* Take the first and second numbers before an operator
* Do the operation
* Replace tokens[i] with the value
* `splice` the numbers off
* Make sure to `index - 2` to re-position the index after splice
* `Math.floor`