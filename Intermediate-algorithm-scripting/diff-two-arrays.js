/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Compare two arrays and return a new array with any items only found in one of
 * the two given arrays, but not both. In other words, return the symmetric difference
 * of the two arrays.
 *
 * -------------------------
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 *        contains unique values
 */
"use strict";

function diffArray(arr1, arr2) {
    let newArr = [];
    // Same, same; but different.

        function clean(firstArr,secondArr){
            firstArr.forEach(function(element) {
                if (secondArr.indexOf(element) === -1) {
                    newArr.push(element);
                }
            });
        };

    clean(arr1,arr2);
    clean(arr2,arr1);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [ 2, 3, 4, 5]));
