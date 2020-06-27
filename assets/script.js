function loadPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

const APIId = "3fc536d25b83466115e518bfbf157b33"

// When search-button clicked, read city name

function getWeather(cityName) {
    var inputVal = document.querySelector('#city-input').value;
        fetch ("https://api.openweathermap.org/data/2.5/forecast?id=" + cityName + "&appid=" + APIId)

        .then(function(response) {
            return response.json();
        })

        .then(function(response) {
            console.log(THEeBADDEST)
})}
}

loadPage()





//fetch ('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat + '&lon=' + lon + '&dt=' + time + '&appid=' + APIId)
//https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={YOUR API KEY}