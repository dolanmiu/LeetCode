# Intuition
* We have a divider which passes through the whole string
* We count how many `a`'s and `b`'s there are on each side of the divider
* Since we need all `a`'s on the left side of the divider, and vice versa for `b` on the right side, we can simply count the number of `b`'s on the left side, and `a`'s on the right side (counting the "erroneous" letters).
* This count is done as the sliding window passes through
* Pick the minimum.