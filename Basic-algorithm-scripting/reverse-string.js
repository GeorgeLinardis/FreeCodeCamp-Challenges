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

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello"); //olleh