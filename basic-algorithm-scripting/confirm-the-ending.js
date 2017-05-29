/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Check if a string (first argument, str) ends with the given target string
 * (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method, which was introduced
 * in ES2015. But for the purpose of this challenge, we would like you to use
 * one of the JavaScript substring methods instead.
 *
 * -------------------------
 * @param {string} str
 *        string to search for target
 * @param {string} target
 * @return {boolean}
 *        returns boolean depending if target exists on str or not
 */

"use strict";

function confirmEnding(str, target) {
    return str.slice(str.length-target.length) === target;

}
confirmEnding("Bastian", "n");