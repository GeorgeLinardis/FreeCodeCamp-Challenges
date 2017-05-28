/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Perform a search and replace on the sentence using the arguments provided and return the new
 * sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * NOTE: Preserve the case of the original word when you are replacing it.
 * For example if you mean to replace the word "Book" with the word "dog",
 * it should be replaced as "Dog"
 *
 * -------------------------
 * @param {string} str
 *          This is the phrase in which the replacing will happen
 * @param {string} before
 *          This is the string to search and replace
 * @param {string} after
 *          This is the string to replace with
 * @return {string}
 *          returns the string inserted after replacement has taken place
 *
 */

"use strict";

function myReplace(str, before, after) {

    /**
     * Replaces first letter of inserted string with capital letter
     * @param word
     * @return {string}
     */
    function capitalize(word) {
        return word.toLowerCase().replace(word.charAt(0),word.charAt(0).toUpperCase());
    }

    /**
     * checks for before strings case form
     *
     * @param {string} }beforeWord
     * @param {string} afterWord
     * @return {string}
     */
    function checkCase(beforeWord,afterWord){
        if (beforeWord == beforeWord.toUpperCase()){
            return afterWord.toUpperCase();
        }
        else if (beforeWord == beforeWord.toLowerCase()){
            return afterWord.toLowerCase();
        }
        else{
            return capitalize(after);
        }
    }


    after = checkCase(before,after);
    str = str.replace(before,after);


    return str;
}

myReplace("Let us go to the store", "store", "mall");
