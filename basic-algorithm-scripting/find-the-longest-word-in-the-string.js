/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 * -------------------------
 * @param {string} str
 *        takes string to look for longest word
 * @return {string}
 *        returns longest word
 */
"use strict";

function findLongestWord(str) {
    let temp=0;
    str.split(" ").forEach(function(word){
        if(temp<word.length){
            temp = word.length;
        }
    });

    return temp;
}



findLongestWord("The quick brown fox jumped over the lazy dog"); // returns 6