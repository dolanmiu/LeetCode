# Intuition
* Firstly create a scan of the strings, and if it matches, then increment `correct` or `bulls`. This is the easy part
* If they don't match, then collect mismatches in the `secretMap` and `guessMap`. These are just maps which count the letters in the string, nothing special
* Then we iterate through one of the maps, we choose `secretMap`, and do another `.get` on the other map, and then add the min of the two values to cow.
​
It is a simple question