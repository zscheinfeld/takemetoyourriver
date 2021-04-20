var api_path = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites="

function gotData(data){
  console.log(data);
}

function setup() {
  createCanvas(1920, 1080)
  image(mapimg,0,0)
}

function preload() {
  mapimg = loadImage("https://maps.googleapis.com/maps/api/staticmap?center=41.833989,-71.6061754&zoom=14&size=640x640&maptype=satellite&key=AIzaSyCxD0bThirEQvKyGhO3kUbhuWZgu2GBccM")
}

function initMap() {
  const river1 = { lat: 41.8525992, lng: -71.6061754 };
  const river1114000 = {lat:41.833989 , lng:-71.41061208 };
  const river1113895 = {lat:41.8884331 , lng:-71.38144467 };
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: river1,
    zoom: 10,
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#212121"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#757575"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#181818"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1b1b1b"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#2c2c2c"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8a8a8a"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#373737"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3c3c3c"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4e4e4e"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f3f2ec"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3d3d3d"
          }
        ]
      }
    ],
  });
   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
    position: river1,
    map: map,
  });

  marker.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });

  const marker1114000  = new google.maps.Marker({
    position: river1114000,
    map: map,
  });

  marker1114000.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker1114000.getPosition());
  });

  const marker1113895 = new google.maps.Marker({
    position: river1113895,
    map: map,
  });

 marker1113895.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker1113895.getPosition());
  });

  $( "#reset" ).click(function() {
    center: river1,
    map.setZoom(10);
    map.setCenter(marker1114000.getPosition());
  });



}
