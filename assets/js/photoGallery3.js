/* Put something here  */

var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$.getJSON(flickerAPI, {
    tags: "restaurants",
    tagmode: "any",
    format: "json"
}).done(function (result, status, xhr) {
    $.each(result.items, function (i, item) {
        $("<img class='sampleImages'>").attr("src", item.media.m).appendTo("#galleryImages");
        if (i === 5) {
            return false;
        }
    });
}).fail(function (xhr, status, error) {
    alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
});
