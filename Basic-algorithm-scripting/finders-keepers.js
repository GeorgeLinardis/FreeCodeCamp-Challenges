/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Create a function that looks through an array (first argument)
 * and returns the first element in the array that passes a truth test
 * (second argument). If no element passes the test, return undefined.
 * -------------------------
 * @param {Array} arr
 *         contains number to be checked from func function
 * @param {function} func
 *         function checks if number provided is divided by 2
 * @returns {number}
 *         returns first number in the arr array which passes the test of func
 *
 */

function findElement(arr, func) {
  let num;
  for(let i=0; i < arr.length; i++) {
      num = func(arr[i]) && arr[i];
      if (num){
          return num;
      }
  };
  return;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

