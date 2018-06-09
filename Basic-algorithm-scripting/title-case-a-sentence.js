/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting
 * words like "the" and "of".
 *
 * -------------------------
 * @param  {string} str
 * @return {string}
 *        returns string with capitalized first letters
 */

function titleCase(str) {

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1,word.length);
  }

  let results=[];
  str.toLowerCase().split(" ").forEach(function(element) {
      element = capitalize(element);
      results.push(element);
  });

  return results.join(" ");
}

titleCase("sHoRt AnD sToUt");