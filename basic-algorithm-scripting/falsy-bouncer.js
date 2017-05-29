/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 * Hint: Try converting each value to a Boolean.
 * -------------------------
 * @param {Array} arr
 *         contains values to check for falsy ones
 * @returns {Array} arr
 *         returns array without falsy values
 *
 */

"use strict";

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let results = [];
    arr.forEach(function(element){
        if(Boolean(element)){
            results.push(element);
        }
    });
    return results;
}


bouncer([7, "ate", "", false, 9]);