/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the lowest index at which a value (second argument) should be
 * inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it
 * is greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the
 * array has been sorted it will look like [3,5,20] and 19 is less than 20
 * (index 2) and greater than 5 (index 1).
 *
 * -------------------------
 * @param {Array} arr
 * @param {number} num
 *          number to add in array if it doesn't already exist
 *
 * @return {number}
 *        returns the location of the number searched
 */
"use strict";

function getIndexToIns(arr, num) {

    let isItInside = arr.findIndex(function(element){
        return element === num;
    });

    //check if number already exists
    if (isItInside===-1){
        arr.push(num);
    }

    arr.sort(function(a,b){
        return a-b;
    });

    return arr.findIndex(function(element){
        return element===num;
    });


}

console.log(getIndexToIns([2, 5, 10], 15));
