* Difficult math problem
* Intuition is that the more numbers there are, the less combinations are possible
* The max amount of digits is 10, because at point: 1234567890, there can't possibly be any more numbers.
​
## So how many numbers could be added at every iteration?
* With 1 digit it is 10, 0,1,2,3,4,5,6,7,8,9
* With 2, it is `10 + 9*9`.
* With 3, it is 10 + `9*9 + 9*9*8`
* With 4 it is `10 + 9*9 + 9*9*8 + 9*9*8*7` etc
​
The curr sum can be stored so prevent repeated calculations
​
​