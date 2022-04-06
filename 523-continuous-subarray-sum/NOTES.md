* Very clever use of modulus and rolling sum
* Create a map of total sum % k, and assign it to the map, with the value being the index
​
​
* Iterate through nums
* We will attempt to add the current nums[i] to the total sum, and most importantly, mod it.
* This value is then checked in the map
* If that value is there, then we know that there must be a sum in there
* Say if the current value is 3, and then its 3 again, it must mean that its looped back around to 3! (because of the mod).
* This will work for all multiplies of 3 because of the mod