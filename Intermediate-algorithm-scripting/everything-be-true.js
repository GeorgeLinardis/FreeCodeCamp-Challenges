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



"use strict";

function truthCheck(collection, pre) {
    let result =  collection.every(function(element){
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });

    return result;
}

truthCheck([{"single": "yes"}], "single");
