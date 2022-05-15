# Intuition
* Keep adding text until the next one potentially overflows
* If the next one overflows, then we need to justify the current `cache`
* Justifying is interesting because of potentially floating point spaces.
* We tack on one `% spaceLeft` remainder on each space starting from `index 0`
* If the remainder is 0, then we don't need to do any tacking.
* The tacking is done in a `reduce` function in a
* The `reduce` function does most of the work and connects the words to the spaces
​
## Extra condition
* If there is only one word on a line, we cannot do the above logic, but we need to simply tack on remaining space on the end.
* This function can be re-used on the final line too, as per requirements