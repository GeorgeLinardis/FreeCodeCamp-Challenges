/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Create a function that takes two or more arrays and returns an array of the symmetric
 * difference (△ or ⊕) of the provided arrays.
 *
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical
 * term "symmetric difference" of two sets is the set of elements which are in either
 * of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric
 * difference you take (say on a set D = {2, 3}), you should get the set with elements
 * which are in either of the two the sets but not both
 * (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 *
 *
 * -------------------------
 * @param {array} args
 *
 * @return {array}
 *e
 */

// Δ symmetric difference is the variables that do not exist in both arrays

"use strict";

function sym(data) {
    let symDif = Array.from(arguments).reduce(function(result,first,iter,args) {
        let temp = [];
        //get rid of multiple entries
        result = Array.from(new Set(result));
        first = Array.from(new Set(first));

        result.forEach(function(digit){
            if(first.indexOf(digit)===-1){
                temp.push(digit);
            }
        });
        first.forEach(function(digit){
            if(result.indexOf(digit)===-1){
                temp.push(digit);
            }
        });
        return temp; //end of reduce
    });

    return symDif.sort();
}


console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7] , [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
