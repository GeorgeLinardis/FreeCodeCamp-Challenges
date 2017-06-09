"use strict";
const ApiKey = "";
let status = {
    sun : "https://www.dropbox.com/s/dg71w7a4k83217a/sunny-pexels.jpg?raw=1",
    rain : "https://www.dropbox.com/s/7xfmvwsubaabnra/rain-pexels.jpg?raw=1",
    wind : "https://www.dropbox.com/s/n577l0l1ffd9ll0/windy-pexels.jpeg?raw=1",
    cloud : "https://www.dropbox.com/s/n577l0l1ffd9ll0/windy-pexels.jpeg?raw=1" ,
    snow : "https://www.dropbox.com/s/ndspnsfux2i0obk/snow-pexels.jpeg?raw=1" ,
    fog : "https://www.dropbox.com/s/nzccn4li98s8ch7/fog-pexels.jpeg?raw=1"
}
let statusOptions = Object.keys(status);

function GeoLocation(){
    return navigator.geolocation.getCurrentPosition(getLocationData)

}

function getLocationData(position){
    let {latitude,longitude}=position.coords;
    setUrl(latitude,longitude);

}


function setUrl(latitude=15,longitude=5){
    let url = `https://api.apixu.com/v1/current.json?key=${ApiKey}`;
    url+=`&q=${Math.round(latitude)},`;
    url+=`${Math.round(longitude)}`;

    getWeatherData(url);

}
// get Api data
function getWeatherData(url){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.status===200 && this.readyState===4) {
            let data = JSON.parse(request.responseText);
            setWeather(data);
        }
    };
    request.open("GET",url);
    request.send();
}

//set them to page

function setWeather(weatherData) {
    let temperature = document.getElementById("temperature"),
        weatherIcon = document.getElementById("weather-icon"),
        cityName = document.getElementById("city-name"),
        tempType = document.getElementById("temp-sign"),
        weatherStatus = document.getElementById("city-name");


    //set data
    temperature.innerHTML+=weatherData.current.temp_c;
    weatherIcon.setAttribute("src","https://"+weatherData.current.condition.icon);
    cityName.innerHTML+=weatherData.location.name;

    tempType.addEventListener("mouseenter",function(event){
        event.target.innerHTML = "&deg;F";
        temperature.innerHTML=weatherData.current.temp_f;
    })
    tempType.addEventListener("mouseout",function(event){
        event.target.innerHTML ="&deg;C";
        temperature.innerHTML=weatherData.current.temp_c;
    })

    statusOptions.forEach(function(element){
        let target = weatherData.current.condition.text;
        let goal = new RegExp(element,"g");
        if(target.search(goal)!==-1){
            document.body.style.backgroundImage = "url('"+status[element]+"')";
        }
    })
}



GeoLocation();