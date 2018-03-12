/* eslint no-unused-vars: "off" */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-trailing-spaces: "error" */
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

let farmId = [];
let serverId = [];
let id = [];
let secret = [];
let lat = [-25.363];
let lng = [131.044];

let settings = {
  'async': true,
  'crossDomain': true,
  'url': 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c00891e8c7a94168b1a157519978df43&lat=60.2166658&lon=24.8166634&radius=3&extras=geo&format=json&nojsoncallback=1&auth_token=72157665689773538-589ab80888920a86&api_sig=70eba11785f665948f41899faf08f676',
  'method': 'GET',
  'data': true,
  'headers': {}
}

$.ajax(settings).done(function(data) {
  console.log(data);

$('#galleryTitle').append(data.photos.photo[0].title + 'Gallery');
    	$.each( data.photos.photo, function( i, gp ) {
farmId[i] = gp.farm;
serverId[i] = gp.server;
id[i] = gp.id;
secret[i] = gp.secret;
lat[i+1] = gp.latitude;
lng[i+1] = gp.longitude;

// console.log(farmId + ', ' + serverId + ', ' + id + ', ' + secret + ', ' + 
// lat + ', ' + lng);

//  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

$('#flickr').append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
});
});

let count = 0;
let img;
let url = [
    'images/image1.jpg',
    'http://img.avatv.fi/mn_kuvat/mtv3/helmi/minisaitit/kapalakerho/kissat/2012/03/1356549.jpg',
    'http://img.avatv.fi/mn_kuvat/mtv3/helmi/minisaitit/kapalakerho/kissat/2012/05/1406247.jpg',
];


function addImage(link) {
  $( '.imageContainer' ).empty();
    img = $('<img />', {src: link});
    img.appendTo('.imageContainer');
}

$('#showr').on('click', function show() {
    // if (count == 1) {img1.appendTo('div');}
    // if (count == 2) {$('div').empty(),img2.appendTo('div');}
    // if (count == 3) {img3.appendTo('div');}
    // if (count > 3) {count = 3;}
    console.log('farm id :'+ farmId);
    addImage('https://farm' + farmId[count] + '.staticflickr.com/' + serverId[count] + '/' + id[count] + '_' + secret[count] + '.jpg');  
    $( '.imageContainer' ).first().show( 1000, function showNext() {
    // $( this ).next( 'div' ).show( 'slow', showNext );
  });
  count++;
});

$( '#hidr' ).click(function hide() {
  $( '.imageContainer' ).hide( 1000 );
});

$( '#clear' ).click(function clear() {
  $( '.imageContainer' ).empty();
});