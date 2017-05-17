var map;
var egglabs = new google.maps.LatLng(55.720846, 53.097929);
var mapCoordinates = new google.maps.LatLng(55.720846, 53.097929);


var markers = [];
var image = new google.maps.MarkerImage(
    '',
    new google.maps.Size(84,56),
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
    icon: image,
      map: map,
      draggable: false
      }));
      
}

function initialize() {
  var mapOptions = {
  backgroundColor: "#ffffff",
    zoom: 15,
  disableDefaultUI: true,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    }
]
    
  };
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
 
}
google.maps.event.addDomListener(window, 'load', initialize);
