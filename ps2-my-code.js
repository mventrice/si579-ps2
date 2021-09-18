/**
 * SI 579: Problem Set 2 - JavaScript Tests
 *
 * Do at least three of the four following problems. Load "ps2-tests.html" in your browser to view the results.
 */

/**
 * Define `addOne` as a function that expects one argument (a number)
 * and returns that argument's value plus one.
 */

function addOne(x) {
  return x+1
}


/**
 * Define `largest` as a function that expects one argument (an array of numbers)
 * and returns the largest item in that array.
 */

function largest(lst) {
let largest = lst[0]
  for (let element of lst){
    if (element > largest)
      largest = element;
  };
  return largest
}

/**
 * The *factorial* of a number n is denoted as: n! === n * (n-1) * (n-2) * ... * 1
 *
 * For example, 4! === 4 * 3 * 2 * 1 === 24
 * Another example: 6! === 6 * 5 * 4 * 3 * 2 * 1 === 720
 *
 * Define a function `fact` that accepts one argument (a positive integer n) and returns n!
 *
 * Note: 0! is 1
 */

function fact(n) {
let answer = 1;
if (n==0) {
  return answer
}
else {
  for(let i = n-1; i>=1; i--) {  // Initializing i as number input - 1; acts as a while loop while i is greater than or equal to 1; subtracts 1 number from 1 each time it goes through while loop
    n = n * i;
}
return n
}
}


/**
  * A Fibonacci sequence is the integer sequence 0, 1, 1, 2, 3, 5, 8...
  * the first two numbers are 0 and 1 and every number thereafter is the sum
  * of the previous two numbers. Write a function named `fib` that accepts
  * one argument (a number n) and returns the n-th element of the Fibonacci sequence.
  * 
  * You should assume that n is zero-indexed (meaning fib(0) == 0).
  * Example calls:
  * 
  * fib(0) === 0
  * fib(1) === 1
  * fib(2) === 1
  * fib(3) === 2
  * fib(4) === 3
  * fib(5) === 5
  * fib(6) === 8
  * ...
  * 
  * You can assume that the argument, n, is a positive integer. Do not worry about efficiency.
  */

function fib(n) {
  if (n === 0) {
    return 0
  }
  else if (n===1){
    return 1
  }
  else{
    let input = n //easier for me to read with semantic meaning
    let x=0, y=1, fibList= [0], next, i //x assigned 0 (first number in sequence),y assigned 1 (second number in list), create list, initiate next number and i for iteration
    for(i=1; i<=input; i++){  // i starts at 1 and will be increased by 1 with each loop while i is less than or equal to input 
    next = x + y; // next number = sume of previous two numbers
    fibList.push(next); //next number added to list
    x = y; //x updated to be y
    y = next; // y updated to be next
    }
    return fibList[input-1] // return list at index -1 bc n is zero indexed.
  }
}