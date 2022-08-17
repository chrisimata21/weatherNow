function showWeather() {
    let cityList = document.querySelector("#city-list");
    let cityInput = document.querySelector("#city-name");
    let listItem = document.createElement("li");
    listItem.textContent = cityInput;
    element.appendChild(cityList);
    console.log(listItem);
}
let lat = "37.338207"
let lon = "121.88330"

var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=ff22cce05ddb83c3402fd5ac3516da43";
fetch(apiUrl) 
    .then((Response) => Response.json())
    .then((data) => console.log(data));