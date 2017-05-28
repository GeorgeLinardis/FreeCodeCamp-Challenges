/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is
 * the product of all positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 * Only integers greater than or equal to zero will be supplied to the function.
 *
 * -------------------------
 * @param {number} num
 *        number to be factorialized
 * @return {number}
 *
 */

"use strict";

function factorialize(num) {
    let result=1;
    if(num>=0){

        if (num===0){
            return 1;
        }else{

            for(let i=1;i<=num;i++){
                result*= i;
            }
        }return result;
    }
    else {
        // alert("Sorry this factorialize function allows only numbers greater or equal to zero");
    }


}

console.log(factorialize(5));