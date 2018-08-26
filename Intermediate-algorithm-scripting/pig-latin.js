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

function translatePigLatin(str) {
  const reg = /[aeiou]/gi;
  let noVowels = !str.match(reg);

  if (str[0].match(reg)) {
    return `${str}way`;
  } else if (noVowels){
    return `${str}ay`;
  }
  else {
    var firstVowel = str.indexOf(str.match(reg)[0]);
    return str.substr(firstVowel) + str.substr(0, firstVowel) + "ay";
  }
}
console.log(translatePigLatin("glove"));
