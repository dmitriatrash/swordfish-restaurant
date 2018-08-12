/*
Created by: Dmitri Atrash
Course Name: ICT-4510, Adv Website Design & Mgmt (Summer 2018)
Final Assignment
This script uses the Flickr API to retrieve photos and display them in grid on the gallery page.
 */

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; //Retrieve JSON via API
$.getJSON(flickerAPI, {
    tags: "restaurants",
    tagmode: "any",
    format: "json"
}).done(function (result, status, xhr) {
    $.each(result.items, function (i, item) {
        $("<img class='sampleImages'>").attr("src", item.media.m).appendTo("#galleryImages"); //Display images
        if (i === 5) {
            return false;
        }
    });
}).fail(function (xhr, status, error) {
    alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
});
