/**
 * FreeCodeCamp Challenge
 * -------------------------
 * You will be provided with an initial array (the first argument
 * in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same
 * value as these arguments.
 *
 * -------------------------
 * @param  {Array} arr
 * @return {Array}
 *
 */
function destroyer(arr) {
    // Remove all the values
    let removeValues = Array.from(arguments).slice(1);

    return arguments[0].filter(function(element){
        return removeValues.indexOf(element)===-1;
    });
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
