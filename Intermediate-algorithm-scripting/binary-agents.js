/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.cess object properties through either dot notation or [] notation.
 *
 * -------------------------
 */

function binaryAgent(collection, pre) {
  return collection.forEach(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

binaryAgent([{"single": "yes"}], "single");
