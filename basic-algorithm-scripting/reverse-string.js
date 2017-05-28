/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 *
 * -------------------------
 * @param {string} str
 *        takes string in order to reverse it
 * @return {string}
 *        returns the reversed string
 */

"use strict";

function reverseString(str) {
    let temp=(str.split("")).reverse();
    return temp.join("");
}

reverseString("hello"); //olleh