* Intuition is that we find the mid, then check the right of mid, to check the slope.
* If the right value is positive, then its obviously a positive slope
* If the right value is negative, then its a negative slope
​
# Issues
* There will be issues if the recursive function uses the same inverval in the next recursion
* E.g. using mid in the left, and mid in the right too
* This will lead to an infinite loop at end - start = 2;
* So either, use mid and mid + 1, or check for a 2 length.