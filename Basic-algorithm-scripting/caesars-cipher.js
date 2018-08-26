/**
 * FreeCodeCamp Challenge
 * -------------------------
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the
 * letters are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and
 * returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic
 * character (i.e. spaces, punctuation), but do pass them on.
 *
 * -------------------------
 * @param {string} str
 *
 * @returns {string}
 */

function rot13(str) {
    let results = [];
    let result = str.split("");
    result.forEach(function(letter){
        let currentPosition = letter.charCodeAt();
        if (currentPosition < 65 || currentPosition > 90){
            results.push(String.fromCharCode(currentPosition));
        }
        else if (currentPosition < 78){
            results.push(String.fromCharCode(currentPosition + 13));
        } else {
            results.push(String.fromCharCode(currentPosition - 13));
        }
    });

    return results.join("");

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
