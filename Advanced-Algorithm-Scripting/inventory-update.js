/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1). If an item cannot be found,
 * add the new item and quantity into the inventory array. The returned inventory array should be
 * in alphabetical order by item.
 *
 * -------------------------
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 *
 */
"use strict";

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!


    arr2.forEach(function(Element){
        var found=false;
        for(let j=0;j<arr1.length;j++){
            if(Element[1]===arr1[j][1]){
                arr1[j][0]+= Element[0];
                found=true
            }
        }
        if(!found){
            arr1.push(Element)
        }

    });

    //sort array
    arr1.sort(function(a,b){
        return a[1][0]>b[1][0]
    })


    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));