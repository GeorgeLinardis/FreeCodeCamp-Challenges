/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * Run the tests to see the expected output for each method.
 * The methods that take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the object.
 * -------------and------------
 * @param {string} firstAndLast
 * @return {string}
 *
 */
"use strict";
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let data = firstAndLast.split(" ");
    this.getFullName = function() {
        return data.join(" ");
    };
    this.getFirstName = function(){
        return data[0];
    }
    this.getLastName = function(){
        return data[1];
    }

    this.setFirstName = function(firstName){
        data[0] =  firstName;
        return this.FirstName
    }

    this.setLastName = function(LastName){
        data[1] =  LastName;
        return this.FirstName
    }
    this.setFullName = function(FullName){
        data = FullName.split(" ");
        return this.FirstName
    }
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
