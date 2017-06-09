/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 * Remember to use Read-Search-Ask if you get stuck. Try to pair program.
 * Write your own code.
 *
 * -------------------------
 * @param {number} num
 * @return {number}
 *
 */

"use strict";

function sumPrimes(num) {
    let sum = 0;

    function isPrime(element) {
        let top = Math.floor(Math.sqrt(element));
        for (let j = 1; j <= top; j+=1) {
            if(element%j===0 && j!==1) {
                return false;
            }
        }
        return true;
    }// end of isPrime

    for(let i=2; i<=num;i++){
        if(isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

sumPrimes(10);