/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Make a function that looks through an array of objects (first argument) and returns
 * an array of all objects that have matching property and value pairs (second argument).
 * Each property and value pair of the source object has to be present in the object
 * from the collection if it is to be included in the returned array.
 *
 * -------------------------
 * @param {Array.<object>} collection
 *        array of objects to search  for source object
 * @param {object} source
 *        object to search for inside collection array
 * @return {Array.<object>}
 *        the objects that contain the source object values
 */


"use strict";
function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line


    /**
     * checks if parameters of sourceObject exist in collectionObject
     *
     * @param collectionObject
     * @param sourceObject
     * @return {boolean}
     */
    function checkEquality(collectionObject, sourceObject){
        for (let keys in sourceObject){
            if (sourceObject[keys]!==collectionObject[keys]){
                return  false;
            }
        }return true;

    }



    collection.forEach(function(element){
        if(checkEquality(element,source)){
            arr.push(element);
        };

    });


    // Only change code above this line
    return arr;
}
