/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word,
 * moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Input strings are guaranteed to be English words in all lowercase.
 *
 * -------------------------
 * @param str
 * @return {string}
 *
 */
"use strict";


function translatePigLatin(str) {

    let newArr = str.split("");
    let vowels= ["a","o","e","i"];

    if(vowels.indexOf(newArr[0])!==-1){
        return str+"way";
    }else {
        return (vowels.indexOf(newArr[1])!==-1)?
            (newArr.splice(1,newArr.length).concat(newArr[0]+"ay")).join("")
           :(newArr.splice(2,newArr.length).concat(newArr[0]+newArr[1]+"ay")).join("");
    }

}
console.log(translatePigLatin("glove"));