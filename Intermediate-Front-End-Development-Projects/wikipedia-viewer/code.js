$(document).ready(function(){
    "use strict";
    console.log("lock and loaded")
    let $randomButton = $("#button-random");
    let $searchButton = $("#button-search");
    let basicUrl = "https://en.wikipedia.org/w/api.php?";
    let $queryResults = $("#query-results");
    let $queryList = $("#query-list");
    let queryDesc = {};


    function setData(element,title,description,link){
        $("<a href="+"'"+link+"'"+";><li>"+title+"</li></a>").appendTo(element).addClass("query-list-item");
        queryDesc[title]=description;

    }

    function getData(query){
        basicUrl+="action=opensearch";
        basicUrl+="&search="+query;
        basicUrl+="&format=json";

        $.ajax({
            url:basicUrl,
            dataType:"jsonp",
            type:"GET",
            success: function(data){
                $('.query-list-item').remove();
                data[1].forEach(function(element,iter){
                    setData($queryList,element,data[2][iter],data[3][iter]);
                });
            }
        }).done(function(){
            $(".query-list-item").hover(function(event){
                $("#result-description").text(queryDesc[event.target.text]);
            });
        })
    }


    $randomButton.click(function(){        window.open('http://en.wikipedia.org/wiki/Special:Random',"_blank");
    });

    $searchButton.click(function(){
        $("#main-container").addClass("main-container-top");
        $("#query-results").addClass("query-expanded");
        let query = $("#text-input").val();
        getData(query);
    });


});