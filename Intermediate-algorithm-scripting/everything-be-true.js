/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Check if the predicate (second argument) is truthy on all elements
 * of a collection (first argument).
 *
 * -------------------------
 * @param {array} collection
 * @param {string} pre
 *
 * @return {array}
 */

function truthCheck(collection, pre) {
  return collection.every(function(element){
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck([{"single": "yes"}], "single");
