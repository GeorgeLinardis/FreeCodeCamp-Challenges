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
 * @param {string} str
 * @return {string}
 *
 */
function convertHTML(str) {
    // &colon;&rpar;

    function replacer(char,pos,phras,el4,el5){
        // el1 character el2 position
        switch (char) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "\"":
                return "&quot;";
            case "'":
                return "&apos;";
        }
    }
    return str.replace(/[&<>"']/g,replacer);
}

console.log(convertHTML('Stuff in "quotation marks"'));
