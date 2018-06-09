/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Truncate a string (first argument) if it is longer than the given
 * maximum string length (second argument). Return the truncated
 * string with a ... ending.
 *
 * -------------------------
 * @param {string} str
 * @param {number} num
 *          elements that will be included in truncated string
 *
 * @return {string}
 *        returns the truncated string
 */

function truncateString(str, num) {
  if (num < str.length) {
    if (num > 3) {
    return str.slice(0, num) + "..." ;
  }
    return str.slice(0, num)+"..." ;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


truncateString("Peter Piper picked a peck of pickled peppers", 14);