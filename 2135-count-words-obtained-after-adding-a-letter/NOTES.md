# Intuition
It is essentially turning every word in the startWords, and targetWords into a binary representation and doing a diff with each other. If it is a power of 2, then we know that there is a single extra character. We add this to the count.
​
## Example:
​
Provided during the loop, we check if startWord: ac and targetWord: abc works...
​
```
abcdefgh....
Word A = 10100000...
Word B = 11100000...
```
​
```
b
Difference (A - B) = 0100
```
​
This is a power of 2, so we know its one single character addeded. In this case, its b