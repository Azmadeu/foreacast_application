
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherApp);
        navigator.geolocation.watchPosition(function (position) {
            },
            function (error) {
                if (error.code == error.PERMISSION_DENIED) {
                    $('.selected-el').after(renderError());
                }
            });
        }
    }
function renderError(){
    return '<div class="error">\
                <ul>\
                     <li>Sorry, but this App doesnt work without your geolocation.<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Frowny.svg/1024px-Frowny.svg.png" >\
                    </li>\
                </ul>\
            </div>';
    }

function renderImages() {
    return '<div class="api-temp">\
                <ul>\
                    <li><img id="icon" src="">\
                    </li><li id="temp"></li>\
                </ul>\
            </div>';
    }

function renderWeather() {
    return '<div class="api-weather">\
                <ul>\
                    <li id="country"></li>\
                    <li id="description"></li>\
                    <li id="wind"></li>\
                </ul>\
            </div>';
    }

function weatherApp(position) {
    var coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    $.ajax({
        url: 'https://fcc-weather-api.glitch.me/api/current?' + $.param(coords)
    }).done(function (data) {
        $('.selected-el').after(renderImages());
        $('.api-temp').after(renderWeather());
        var icon = data.weather[0].icon;
        var temp = data.main.temp;
        var country = data.sys.country;
        var city = data.name;
        var description = data.weather[0].description;
        var wind = data.wind.speed;
        $('#icon').attr("src", icon);
        $('#temp').html(temp + "°C");
        $('#country').html(city + ", " + country);
        $('#description').html(description);
        $('#wind').html("wind: " + wind + " m/s")
    })
}

window.onload = function () {
    getLocation();
};
