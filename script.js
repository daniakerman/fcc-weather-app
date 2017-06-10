$(document).ready(function() {

    /* get location */
    $.getJSON("http://freegeoip.net/json/", function(locationData) {

        var latitude = locationData.latitude;
        var longitude = locationData.longitude;

        /*
        console.log(locationData); */

        /* load weather */
        var urlWithLocation = "https://api.darksky.net/forecast/196806b6814ca53006c0347e2c052a5e/"
            + latitude + "," + longitude;

        $.ajax({
            url: urlWithLocation,
            type: "GET",
            dataType: "jsonp",
            success: function (weatherData) {
                // $('<span/>', {
                //     'text': weatherData.currently.temperature
                // }).appendTo('.temperature');
                $("<span>" + weatherData.currently.temperature + "</span>").appendTo('.temperature');
                $("<span>" + weatherData.currently.summary + "</span>").appendTo('.summary');
                $("<span>" + weatherData.currently.icon + "</span>").appendTo('.icon');
                $("<span>" + locationData.country_name + "</span>").appendTo('.location');
                $("<span>" + locationData.city + "</span>").appendTo('.location');
                $("<span>" + locationData.country_code + "</span>").appendTo('.location');


                // console.log(weatherData);
            },
            xhrFields: {
                withCredentials: false
            }
        });

    });

});
