/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward
 * and backward, ignoring punctuation, case, and spacing.
 *
 * Note
 * You'll need to remove all non-alphanumeric characters (punctuation,
 * spaces and symbols) and turn everything lower case in order to check for
 * palindromes.
 *
 * We'll pass strings with varying formats, such as "racecar", "RaceCar",
 * and "race CAR" among others.
 *
 * We'll also pass strings with special symbols, such as "2A3*3a2",
 * "2A3 3a2", and "2_A3*3#A2".
 *
 * -------------------------
 * @param {string} str
 *
 * @return {boolean}
 *
 */
"use strict";

function palindrome(str) {
    // Good luck

    let phrase = str.toLowerCase().replace(/[\W_]/g,"");
    // \W in all non word characters
    // _ adds underscore to the characters searched for
    //g is the modifier that tells it not to stop at the first match

    for (let i=0;i<phrase.length;i++){
        if(phrase[i] !== phrase[phrase.length-1-i]){
            return false;
        }
    }
    return true;
}


//second solution


function isPalindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[\W_]/g,"");
  return str === str.split("").reverse("").join("");
}



isPalindrome("eye");










