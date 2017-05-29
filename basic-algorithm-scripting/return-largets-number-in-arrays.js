/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop, and access
 * each member with array syntax arr[i].
 *
 * -------------------------
 * @param {Array} arr
 *        Array in which we search for the largest number
 * @return {Array}
 *        returns array of largest numbers
 *
 */
"use strict";

function largestOfFour(arr) {
    let results = [];

    arr.forEach(function(subArray){
        results.push(Math.max.apply(null,subArray));

    });

    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
