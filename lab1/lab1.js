/* eslint no-unused-vars: "off" */
/* eslint linebreak-style: ["error", "windows"] */
/* global google */
/* eslint no-trailing-spaces: "error" */
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

'use strict';

function initAutocomplete() {
    let uluru = new google.maps.LatLng({lat: -25.363, lng: 131.044});
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru,
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

    // Create search box and link to UI element
    let input = document.getElementById('pac_input');
    console.log(input);
    console.log(google.maps);
    console.log(google.maps.places);
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the searchbox results toward map's viewport
    map.addListener('bounds_changed', function() {
       searchBox.setBounds(map.getBounds());
    });

    let markers = [];
    // Listen to the event when the user choose the prediction
     searchBox.addListener('places_changed', function() {
         let places = searchBox.getPlaces();
         if (places.length == 0) {
             return;
            }

        // Clear out the old marker
        markers.forEach(function(marker) {
            marker.setMap(null);
        });

        markers = [];

        // For each place get icon, name and location
        let bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log('Returned place contains no geometry');
            }
            let icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location,
            }));
                        
            if (place.geometry.viewport) {
                // Only geocodes have view ports
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}
