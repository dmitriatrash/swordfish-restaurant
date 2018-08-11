$(document).ready(function() {
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=restaurants&format=json&jsoncallback';

    function displayPhotos(data) {
        var photoHTML = "";
        $.each(data,function(i,photo) {
            photoHTML += '<div class="picbox"><figure><img src="' + photo.url + '" class="frame"><figcaption>' + photo.description + '</figcaption></figure></div>';

        }); // end each

        $('#photos').html(photoHTML);
    };

    $.getJSON(url, displayPhotos);

}); // end ready
