$(document).ready(function(){
    "use strict";
    const basicUrl = "https://wind-bow.gomix.me/twitch-api/";
    const noLogo = "https://www.dropbox.com/s/2nqt2cgiwdi3u1i/x-mark-3-xxl.png?raw=1";
    let users = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp", "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];
    let $broadcastList = $("#users-list");
    let $userLogo = $("#user-logo");
    let $userDescription = $("#user-description");
    let $userStatus = $("#user-status");
    let usersData = {};


    function User(data){
        this.username = data.name;
        this.description = data.bio;
        this.status = "offline";
        this.logo = data.logo || noLogo;
        this.url = "href='https://www.twitch.tv/"+this.username;

    }

    function createListElement(user){
        let element = "<a class='btn btn-default btn-block' ";
        element+="id='"+user.username+"' ";
        element+=user.url+"' target='_blank'>";
        element+="<img src='"+user.logo+"'>"+user.username;
        element+="</a>";

        return element;

    }

    //begin getting and setting data for each entry
    users.forEach(function(username){
        $.ajax({
            url: basicUrl + "users/" + username,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                let userData = new User(data);
                usersData[username]=userData;
                $broadcastList.append(createListElement(userData));
            }
        });

    });

    $("body").on("mouseover",".btn", function(event){
        (usersData[event.target.id].description!==null)?$userDescription.text(usersData[event.target.id].description):$userDescription.text("User has no description");
        $userLogo.attr("src",usersData[event.target.id].logo);
        $userStatus.text(usersData[event.target.id].status);
    });


    //begin getting and setting data for each entry
    users.forEach(function(username){
        $.ajax({
            url: basicUrl + "streams/" + username,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                let status = data.stream;
                usersData[username].status=(status===null)?"offline":"online";


            }
        });

    });


});