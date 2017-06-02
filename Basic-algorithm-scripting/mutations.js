/**
* FreeCodeCamp Challenge
* -------------------------
* Return true if the string in the first element of the array
* contains all of the letters of the string in the second element
* of the array.
*
* For example, ["hello", "Hello"], should return true because all of
* the letters in the second string are present in the first, ignoring case.
*
* The arguments ["hello", "hey"] should return false because the
* string "hello" does not contain a "y".
* Lastly, ["Alien", "line"], should return true because all of the
* letters in "line" are present in "Alien".
*
* -------------------------
* @param {Array} arr
*          contains 2 arrays
* @returns {Boolean}
*          true (letters in second array exist in the first one)
 *         false (letters in second array do not exist in the first one)
*/


"use strict";

function mutation(arr) {


    let target = new Set(arr[0].toLowerCase().split("").sort());
    let lookFor = new Set(arr[1].toLowerCase().split("").sort());

    target = Array.from(target);
    lookFor = Array.from(lookFor);

    for (let i=0;i<lookFor.length;i++){
        if (target.indexOf(lookFor[i])=== -1){
            return false;
        }
    }
    return true;
}

