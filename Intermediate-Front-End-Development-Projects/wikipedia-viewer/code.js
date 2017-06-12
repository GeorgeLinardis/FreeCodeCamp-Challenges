$(document).ready(function(){
    "use strict";
    console.log("lock and loaded")
    let $randomButton = $("#button-random");
    let $searchButton = $("#button-search");




    $randomButton.click(function(){
        console.log("random button clicked");
        window.open('http://en.wikipedia.org/wiki/Special:Random',"_blank");
    });

    $searchButton.click(function(){
        console.log("search button clicked");
          $(".container").addClass("container-top",2000)
    })













});