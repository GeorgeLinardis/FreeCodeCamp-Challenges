/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Drop the elements of an array (first argument), starting from the
 * front, until the predicate (second argument) returns true.
 *
 * The second argument, func, is a function you'll use to test the first
 * elements of the array to decide if you should drop it or not.
 *
 * -------------------------
 * @param {array} arr
 * @param {function} func
 *
 * @return {array}
 */

"use strict";


function dropElements(arr, func) {
    if (arr.findIndex(func) >= 0){
        return arr.slice(arr.findIndex(func));
    }
    else {
        return arr.slice(arr.length)
    }
}

dropElements([1, 2, 3], function(n) {return n < 3; });
