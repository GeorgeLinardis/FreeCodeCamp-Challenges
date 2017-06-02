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

    return arr.filter(function(element){
        if (Boolean(element)) {
            return element;
        }
    });
}

bouncer([7, "ate", "", false, 9]);