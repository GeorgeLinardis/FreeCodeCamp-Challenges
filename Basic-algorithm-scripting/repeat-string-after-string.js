/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 *
 * Don't use built in repeat method
 * -------------------------
 * @param {string} str
 *        string to be repeated
 * @param {number} num
 *        how many times is the string repeated
 * @return {string}
 *        returns string num times if num is positive
 *
 */

"use strict";


function repeatStringNumTimes(str, num) {

    if(num<0){
        return "";
    }else {
        let results = "";
        for (let i=0; i < num; i++) {
            results += str;
        }
        return results;
    }
}

repeatStringNumTimes("abc", 3); //abcabcabc