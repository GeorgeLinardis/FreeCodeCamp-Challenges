/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Flatten a nested array. You must account for varying levels of nesting.
 * -------------------------
 */

"use strict";

function steamrollArray(arr) {
    // I'm a steamroller, baby
    let result = [];

    function simplify(complexArray){
        if (!Array.isArray(complexArray)){
            result.push(complexArray);
        }else{
            for(let i=0;i<complexArray.length;i++){
                simplify(complexArray[i]);
            }
        }
    }
    arr.forEach(function(element){
        simplify(element);
    });
    return result;

}

steamrollArray([1, [2], [3, [[4]]]]);
