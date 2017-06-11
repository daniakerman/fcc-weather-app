$(document).ready(function() {

    // render all skycons
    var icons = new Skycons(),
        list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
        ],
        i;
    for(i = list.length; i--; )
        icons.set(list[i], list[i]);
    icons.play();

    $(".icons canvas").hide()

    /* get location */
    $.getJSON("http://freegeoip.net/json/", function(locationData) {

        var latitude = locationData.latitude;
        var longitude = locationData.longitude;


        /* load weather */
        var urlWithLocation = "https://api.darksky.net/forecast/196806b6814ca53006c0347e2c052a5e/"
            + latitude + "," + longitude;

        $.ajax({
            url: urlWithLocation,
            type: "GET",
            dataType: "jsonp",
            success: function (weatherData) {

                $("<span>" + weatherData.currently.temperature + "</span>").appendTo('.temperature');
                $("<span>" + weatherData.currently.summary + "</span>").appendTo('.summary');
                $("<span>" + locationData.country_name + "</span>").appendTo('.location');
                $("<span>" + locationData.city + "</span>").appendTo('.location');
                $("<span>" + locationData.country_code + "</span>").appendTo('.location');


                $("canvas#" + weatherData.currently.icon).show()
            },
            xhrFields: {
                withCredentials: false
            }
        });

    });

});
