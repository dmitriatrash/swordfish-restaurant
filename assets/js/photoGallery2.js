(function() {
    var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?tags=restaurants&format=json&api_key=bc04075a6910784b01c45f7317fc0576"

    $.getJSON(flickerURL)
        .done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 11 ) {
                    return false;
                }
            });
        });
})();