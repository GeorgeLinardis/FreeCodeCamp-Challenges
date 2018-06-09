/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 * -------------------------
 * @param {string} str
 *        takes string to look for longest word
 * @return {string}
 *        returns longest word
 */

function findLongestWordLength(str) {
  let temp=0;
  str.split(" ").forEach((word) => {
      temp = temp < word.length ? word.length : temp; 
  });
	return temp;
}



findLongestWord("The quick brown fox jumped over the lazy dog"); // returns 6