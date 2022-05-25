# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

check and see which number is smaller
set the smaller number as the first number
set the larger number as the last number
sum up the numbers in between

## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop


  npm test sumAll.spec.js

ex 1

  def sum_between(first, second):
    nums_between = range(first, second+1)  # Generates a list [first, first+1, first+2, ..., second]
    sum_between = 0  # initialize the sum between as 0
    for num in nums_between:  # count through every number from first to second...
        sum_between += num    # ...and add them together
    return sum_between   # return the sum of all of that


ex 2 (fails test 3)

const sumAll = function(min, max) {
    return ((max-min)+1) * (min + max) / 2;
};



mine

const sumAll = function(min, max) {
    var list = [min,max];
for (var i = lowEnd; i <= highEnd; i++) {
    list.push(i);
}
    return list;
};




