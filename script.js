$(document).ready(function() {

    /* get location */
    $.getJSON("http://freegeoip.net/json/", function(data) {

        var latitude = data.latitude;
        var longitude = data.longitude;


        $("<span>" + latitude + "</span>").appendTo('.location');
        $("<span>" + longitude + "</span>").appendTo('.location');
    });
});

