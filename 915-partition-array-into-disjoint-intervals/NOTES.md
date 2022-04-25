* The trick is to keep track of the ceiling value of the current array, working from left to right.
* If a value is less than the current max, then we update the current index. This current index could be the solution
* We then update the current max whenever we update the current index
* We return the `current index + 1` as it is the start of the new array