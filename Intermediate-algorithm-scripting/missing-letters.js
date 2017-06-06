/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 * -------------------------
 * @param {string} str
 * @return {string}
 *
 */
"use strict";


function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let finish = alphabet.indexOf(str[str.length-1]);
    let result="";


    str.split("").forEach(function(letter,iter){

        if(letter!==alphabet[start+iter]){
            result+=alphabet[start+iter];
            start+=1;
        }
    });
    return result.length?result:undefined;
}
(fearNotLetter("bcd"));