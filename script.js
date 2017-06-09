$(document).ready(function() {

    /* get location */
    $.getJSON("http://freegeoip.net/json/", function(data) {

        var latitude = data.latitude;
        var longitude = data.longitude;


        $("<span>" + latitude + "</span>").appendTo('.location');
        $("<span>" + longitude + "</span>").appendTo('.location');


        var url = "https://api.darksky.net/forecast/196806b6814ca53006c0347e2c052a5e/" + latitude + "," + longitude;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
            },
            xhrFields: {
                withCredentials: false
            }
        })
    });

});

