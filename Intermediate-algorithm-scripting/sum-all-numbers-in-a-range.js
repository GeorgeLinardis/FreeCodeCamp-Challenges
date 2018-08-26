/**
 * FreeCodeCamp Challenge
 * -------------------------
 * We'll pass you an array of two numbers.
 * Return the sum of those two numbers and all numbers between them.
 *
 * -------------------------
 * @param {Array} arr
 *        includes min and max of the range of numbers added
 * @return {number}
 *        return sum of all numbers
 */

function sumAll(arr) {
    let min, max, result = 0;
    arr = arr[0] > arr[1] ?
      [max = arr[0], min = arr[1]] :
      [max = arr[1], min = arr[0]];
    for (let i = min; i <= max; i++) {
      result += i;
    }
    return result;
}

console.log(sumAll([1, 4]));
