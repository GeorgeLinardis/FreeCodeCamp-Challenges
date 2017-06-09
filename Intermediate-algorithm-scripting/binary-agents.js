/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Check if the predicate (second argument) is truthy on all elements of a collection
 * (first argument).
 *
 * Remember, you can access object properties through either dot notation or [] notation.
 *
 * -------------------------
 */

function truthCheck(collection, pre) {
    return collection.every(function(element){
        return element.hasOwnProperty(pre) && Boolean(element[pre]);


    });
}

truthCheck([{"single": "yes"}], "single");