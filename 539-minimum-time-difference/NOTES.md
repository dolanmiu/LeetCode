# Intuition
* Bucket solution - 1440 buckets (24 hours * 60 minutes)
* Just whack every number into a bucket, boolean bucket
* Then iterate through every 1440 bucket and count
* Keep track of minimum diff
* Loop through the values, and make it wrap around