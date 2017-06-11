/**
 * FreeCodeCamp Challenge
 * -------------------------
 *
 * Given an array arr, find element pairs whose sum equal the second argument arg and return
 * the sum of their indices.
 *
 * If multiple pairs are possible that have the same numeric elements but different indices,
 * return the smallest sum of indices. Once an element has been used, it cannot be reused to
 * pair with another.
 *
 * For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13]
 * and [9, 11]. We can then write out the array with their indices and values.
 *
 *  Index	0	1	2	3	4
 *  Value	7	9	11	13	15
 *  Below we'll take their corresponding indices and add them.
 *
 *  7 + 13 = 20 → Indices 0 + 3 = 3
 *  9 + 11 = 20 → Indices 1 + 2 = 3
 *  3 + 3 = 6 → Return 6
 *
 * -------------------------
 * @param {string} str
 *
 * @return {boolean}
 *
 */


"use strict";

function pairwise(arr, arg) {
    let total = 0;
    let firstElement = arr.slice(0);
    console.log(firstElement);
    for(let i = 0; i < firstElement.length; i++) {

        for(let j = i + 1; j < firstElement.length; j++) {

            if(firstElement[i] + firstElement[j] === arg) {
                total += i + j;
                firstElement[i] = firstElement[j] = undefined;
            }
        }
    }
    return total;
}

// test here
pairwise([1,4,2,3,0,5], 7);