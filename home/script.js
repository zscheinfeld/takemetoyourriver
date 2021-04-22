// // homepage videos

// $( document ).ready(function() {
//   console.log( "document loaded" );
// });

// window.onload = () => {
// var vidcontainer = $("myVideo")
// var video1 = document.createElement('video');
// video1.src = '/Video/2.mp4'
// video1.autoplay = true;

// // video1.loop = true;
// document.getElementById("myVideo").appendChild(video1);
// }



// $('.myVideo').html(video1);
// // video1.play();

// // var videoArray = new Array();
// // videoArray[0] = video1
// // console.log(videoArray[0]);
// // // imgArray[1] = new Image();
// // // imgArray[1].src = '/Video/2.mp4';
// // // imgArray[2] = new Image();
// // // imgArray[2].src = '/Video/3.mp4';
// // // imgArray[3] = new Video();
// // // imgArray[3].src = '/Video/4.mp4';

// // $(".myVideo").prepend(videoArray[0]);

// p5 

var r =[]
var g =[]
var b = []

function preload() {
  siteimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.6061754,41.8525992,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")
}


let incr = 0; 
var theta; 

class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(5,10);

  }

// creation of a particle.
  createParticle() {
    noStroke();
    this.blue = random(0,155)
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    theta = noise(this.x * .006,this.y * .004,incr) * (2*PI);
    this.x = this.x + (2*cos(theta)) - 2
    this.y = this.y + (2*sin(theta))
    incr +=  .008;
  }

wrapParticle(){
  if (this.x<0){
    this.x= width
  }
  if (this.x>width){
    this.x= 0
  }
  if (this.y<0){
    this.y= height
  }
  if (this.y>height){
    this.y= 0
  }
}

}

let particles = [];

var api_path = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites="

function gotData(data){
  console.log(data);
}

function setup() {
  createCanvas(1920, 1080).addClass('p5')
  background(0) 
  image(siteimg,0,0)
  frameRate(20);
  for(let i = 0;i<5000;i++){
    particles.push(new Particle());
}

siteimg.loadPixels();
for (var y = 0; y<siteimg.height; y++){
for (var x = 0; x<siteimg.width; x++){
  var index = (x + y *siteimg.width)*4;
  r.push(siteimg.pixels[index + 0])
  g.push(siteimg.pixels[index + 1])
  b.push(siteimg.pixels[index + 2])
}}

console.log(index + "index")
console.log(r)
}

function draw() {
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    fill(0, g[i], b[i],90)
    particles[i].moveParticle();
    particles[i].wrapParticle(); 
    }
    background(0,0,0,10) 
    // image(siteimg,0,0,5)
    noLoop();
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
    noLoop()
  });



}
