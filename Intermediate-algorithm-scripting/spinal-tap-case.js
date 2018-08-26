/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * -------------------------
 * @param {string} str
 * @return {string}
 *
 */

function spinalCase(str) {
  return str.replace(/[ _]/g,'-'). //replaces spaces and underscore with -
  replace(/([a-z])([A-Z])/g,"$1-$2" ).
  //replaces when finds lowerCase letter and next to it uppercase with a - between them
  toLowerCase();
}

spinalCase('thisIsSpinalTap');

