$('document').ready(function(){
    "use strict";

    console.log("js is ok")

    $(".num-btn").mousedown(function(event){
        console.log("Number pressed is: ",event.target.innerText)
        $(this).addClass("btn-clicked")
    }).mouseup(function(){
        $(this).removeClass("btn-clicked")
    })



});