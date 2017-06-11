/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Return the number of total permutations of the provided string that don't have repeated
 * consecutive letters. Assume that all characters in the provided string are each unique.
 *
 * For example, aab should return 2 because it has 6 total permutations
 * (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same
 * letter (in this case a) repeating
 *
 * -------------------------
 * @param {string} str
 *
 * @return {boolean}
 *
 */
"use strict";
function permAlone(string) {

    let reg = /(.)\1/;

    return HeapAlgorith(string).filter(function(currentPerm) {
        return reg.test(currentPerm)===false;
    }).length;

    function HeapAlgorith(string) {
        let arr = string.split(''),
            results = [];

        function swap(first, second) {
            let temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
        }

        function generator(n) {
            if (n === 1) {
                results.push(arr.join(''));
            } else {
                for (let i = 0; i != n; i++) {
                    generator(n - 1);
                    swap(n % 2 ? 0 : i, n - 1);
                }
            }
        }

        generator(arr.length);
        return results;
    }
}