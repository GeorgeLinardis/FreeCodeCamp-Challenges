/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Write a function that splits an array (first argument) into
 * groups the length of size (second argument) and returns them as a
 * two-dimensional array.
 *
 * -------------------------
 * @param {Array} arr
 * @returns {Array}
 *          returns array with pieces of the arr input of size length
 */


"use strict";


function chunkArrayInGroups(arr, size) {
    // Break it up.
    let results = [];

    for(let i=0;i<arr.length;i+=size){
        results.push(arr.slice(i,i+size));
    }
    return results;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // returns [["a", "b"], ["c", "d"]]
