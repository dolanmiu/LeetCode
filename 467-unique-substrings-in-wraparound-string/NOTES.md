# Bottom up way
* Find the relationship between adding a new character to the string, and the amount of substrings it produces
* "z" = 1, "za" = 3, "zab" = 6, "zabc" = 10, "zabcd" = 15
* Which is getting the previous value and adding the current length of characters!
​
# Top down approach
* Start with an Array mem which is like [0,0,0,0...0], 26 length, which corresponds to the alphabet
* Recursively call downwards of `p.length` until `0`, until the base case, which is set to 1.
* Then as you go up, the next character along is set to the `prev + 1` if its next to each other `(prev - curr === 1)`. This is because: Adding an extra letter onto the string will yield `prev + 1` more substrings.
* If not, then its set it 1.
* We get the max of both of these
* We finally sum everything together to find all the total substrings.