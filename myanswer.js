//  var array2 =['potato','carrot','onion','leek','cabbage']
//  var ANSWER = array2[1];
// console.log(ANSWER);

// let ANSWER = [array2[0], array2[array2.length - 1]].join('-');
//  console.log(ANSWER)


//  var array2 =['potato','carrot','onion','leek','cabbage']
//  let array22 = array2.map(array2 => array2.toUpperCase())
//  console.log(array22)


// let array12 = array1.filter(array1 => array1 >= 0);
// console.log(array12)
/**
 * Exercise 1.8 (1 points)
 *
 * Create a function `arrayAverage()` that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using `array1` and answer with the rounded integer
 * result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

// const initialValue = 0
// const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// const ANSWER = sum / array1.length
// console.log(ANSWER)

/**
 * Exercise 2.1 (1 points)
 *
 * Create a new array `myArray` and make it a copy of `array1`. Switch place
 * on the first and the last element, with the help of built-in
 * array-functions.
 * Use the array-functions `pop(), push(), shift() and unshift()`.
 *
 * Answer with `myArray`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let array1 = [47,98,-13,0,-412,499,3,1200]
let myArray = array1.slice();
myArray.pop()
myArray.push()
console.log(myArray)

