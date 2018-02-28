// var KIEV_COORDINATES = {
//     lat: 50.43,
//     lon: 30.52
// };
function weatherApp() {
    $.ajax({
        url: 'https://fcc-weather-api.glitch.me/api/current?lat=50.43&lon=30.52'
    }).done(function (data) {
        var icon = data.weather[0].icon;
        var temp = data.main.temp;
        var country = data.sys.country;
        var city = data.name;
        var description = data.weather[0].description;
        var wind = data.wind.speed;
        $('#icon').attr("src", icon);
        $('#temp').html(temp+"°C");
        $('#country').html(city+", "+country);
        $('#description').html(description);
        $('#wind').html("wind: "+wind+" m/s")
    })
}
window.onload = function () {
    weatherApp();
}
