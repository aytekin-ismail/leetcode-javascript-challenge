/*
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than 
the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */

/* example in code 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    var functionCallCount = -1;
    return function() {
        functionCallCount++;
        return (n + functionCallCount);
    };
};


