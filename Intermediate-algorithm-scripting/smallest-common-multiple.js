/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Find the smallest common multiple of the provided parameters that can be
 * evenly divided by both, as well as by all sequential numbers in the range
 * between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be in
 * numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that
 * is evenly divisible by all numbers between 1 and 3.
 * -------------------------
 */

function smallestCommons(arr) {
    arr.sort();
    let max=arr[1];
    let min=arr[0];

    let totalArray = [];
    for (let i = max; i >= min; i--) {
        totalArray.push(i);
    }

    let lcm,n = 0;
    let loop = 1;


    while (n !== totalArray.length) {
        lcm = totalArray[0] * loop * totalArray[1];
        for (n = 2; n < totalArray.length; n++) {
            if (lcm % totalArray[n] !== 0) {
                break;
            }
        }loop++;
    }

    return lcm;
}

smallestCommons([1,5]);