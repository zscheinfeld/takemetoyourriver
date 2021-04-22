


// // homepage videos




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
var intensityarray = [];
var intensityarraycounter = 0; 
var intensity = 0;
var r =[]
var g =[]
var b = []

function preload() {
  siteimg01116500 = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.445057,41.750934,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")

  siteimg0111450 = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.487282,41.858988,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")

  siteimg01115120 = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.608953,41.831488,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")

  siteimg01115170 = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.584508,41.840933,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")

  siteimg01115098 = loadImage("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-71.6061754,41.8525992,14,0,0/1280x1280?access_token=pk.eyJ1IjoienNjaGVpbmZlbGQiLCJhIjoiY2tucWxpM3U3MDA2ajJ2bWsxM3lwdjdpMiJ9.ZxexsYC5Xg-rTB6LlHyWKg")
}


// $("#audio01115098")[0].volume = 0;
// $("#audio01115098").animate({volume: 1}, 3000);

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
  moveParticle(input) {


    theta = noise(this.x * .006,this.y * .004,incr) * (2*PI);
    this.x = this.x + (2*cos(theta)) - (2*input)
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

//get data 

var site;
var vlat;
var vlong; 
var vtime; 
var vdischarge;

var api_path = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites="

var apiKey = "&parameterCd=00060,00065&siteType=ST&siteStatus=all"

var site ="01115170"

let cnv; 
function setup() {
  cnv= createCanvas(1920, 1080).addClass('p5')
  cnv.mouseClicked(fadeOut);
  background(0) 
  
  frameRate(20);
  
    noLoop();
    
function fadeOut (){
  cnv.addClass("fade");
  setTimeout(function(){ $(".p5").css("display", "none"); }, 2000);
  setTimeout(function(){ $(".p5").removeClass("fade"); }, 2000);
  noLoop();
}



// console.log(index + "index")
console.log(r)
}

function loadimage (picture){
  image(picture,0,0)

  picture.loadPixels();
for (var y = 0; y<picture.height; y++){
for (var x = 0; x<picture.width; x++){
  var index = (x + y *picture.width)*4;
  r.push(picture.pixels[index + 0])
  g.push(picture.pixels[index + 1])
  b.push(picture.pixels[index + 2])
}}

}

function loadinput (intensityfactor){
  for(let i = 0;i<(intensityfactor);i++){
    particles.push(new Particle());
  }}
// get data




function draw() {
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    fill(0, g[i], 255*intensity,95)
    particles[i].moveParticle(intensity);
    particles[i].wrapParticle(); 
    }
    background(0,0,0,10) 
    // image(siteimg,0,0,5)
    console.log(intensity)
       
}






// map listener

var clicked = 0

$(document).click(function() {
  clicked = clicked + 1
  if (clicked == 1){
  $("#myVideo").addClass("fade")
  $('.reset').css("display", "block")
  // $("#map").
  $("#map").addClass("mapplay")
  $("#map").css("display", "block")
  $(".visualtitletype").css("display", "flex")
  $(".resetbuttonbutton").css("display", "flex")
  
  }
  if (clicked > 1){
    $("#myVideo").css("display", "none")
    }
});

var infocounter = 0;

function initMap() {
  // river 1 
  const river1115170 = { lat: 41.840933, lng: -71.584508 };
  // river 2
  const river1114500 = {lat:41.858988 , lng:-71.487282};
  // river 3 
  const river1115120 = {lat:41.831488 , lng:-71.4872823};
  // river 4
  const river01115098 = {lat:41.8525992 , lng:-71.6061754};
  //river 5
  const river1116500 = {lat:41.750934 , lng:-71.445057};

  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: river1115170,
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
    position: river1115170,
    map: map,
  });

  marker.metadata = {type: "marker1", id: 1};

  var varaudio1115170 = document.getElementById("audio1115170");

  marker.addListener("mouseover", () => {
    $('.picture').prepend('<img src="/takemetoyourriver/Images/1"/>')
    console.log("hover")
  });

  marker.addListener("mouseout", () => {
    $(".picture img:last-child").remove()
    console.log("hover")
  });

  

  marker.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
    audio1115170.play();
    varaudio1115170.volume = 0;
    $("#audio1115170").animate({volume: .3}, 3000)
    $(".visualtitletype").css("display", "none")
    $(".visualinformationtype").css("display", "flex")
    $(".visualinformationtype2").css("display", "flex")
    site = "01115170"
    function loading(){
      var url = api_path + site + apiKey
      loadJSON(url, gotData);
      
      function gotData(data){
        console.log(data);
        var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
        var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
        var vdischarge = data.value.timeSeries[0].values[0].value[0].value
        var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
        var vname = data.value.timeSeries[0].sourceInfo.siteName
        document.getElementById("name").innerHTML = "Site Name: " + vname;
        document.getElementById("discharge").innerHTML = "Discharge: " +   vdischarge + " ft3/s";
        document.getElementById("time").innerHTML = "Last Updated: " + vtime;
        intensity = 1 - ((22.4-vdischarge)/22.4);
        console.log(intensity +"intensity")
        intensityarray.push(intensity + "intensityarray");
        intensityarraycounter= intensityarraycounter + 1
      }
      }
    loading();
    $(".p5").css("display", "block")
    console.log("show p5")
    ;
    setTimeout(function(){loadinput(intensity* 3000); }, 2000);
    loadimage(siteimg01115170); 
    setTimeout(function(){loop(); }, 2000);

    
   
  });

  const marker1115120 = new google.maps.Marker({
    position: river1115120,
    map: map,
  });

  var varaudio1115120 = document.getElementById("audio1115120");

  marker1115120.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker1115120.getPosition());
    audio1115120.play();
    varaudio1115120.volume = 0;
    $("#audio1115120").animate({volume: .5}, 3000)
    $(".visualtitletype").css("display", "none")
    $(".visualinformationtype").css("display", "flex")
    $(".visualinformationtype2").css("display", "flex")
    site = "01115120"
    function loading(){
      var url = api_path + site + apiKey
      loadJSON(url, gotData);
      
      function gotData(data){
        console.log(data);
        var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
        var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
        var vguage = data.value.timeSeries[1].values[0].value[0].value
        var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
        var vname = data.value.timeSeries[0].sourceInfo.siteName
        document.getElementById("name").innerHTML = "Site Name: " + vname;
        document.getElementById("discharge").innerHTML = "Guage Height: " +   vguage + " ft";
        document.getElementById("time").innerHTML = "Last Updated: " + vtime;
        intensity = 1 - ((2-vguage)/2);
        console.log(intensity +"intensity")
        console.log(vguage)
      }
      
    
      }
    loading();
    $(".p5").css("display", "block")
    console.log("show p5")
    ;
    setTimeout(function(){loadinput(intensity* 3000); }, 2000);
    loadimage(siteimg01115120); 
    setTimeout(function(){loop(); }, 2000);
  });

  marker1115120.addListener("mouseover", () => {
    $('.picture').prepend('<img src="/takemetoyourriver/Images/2.jpg"/>')
    console.log("hover")
  });

  marker1115120.addListener("mouseout", () => {
    $(".picture img:last-child").remove()
    console.log("hover")
  });

  const marker1114500 = new google.maps.Marker({
    position: river1114500,
    map: map,
  });

  var varaudio1114500 = document.getElementById("audio1114500");

  marker1114500.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker1114500.getPosition());
    audio1114500.play();
    varaudio1114500.volume = 0;
    $("#audio1114500").animate({volume: .3}, 3000)
    $(".visualtitletype").css("display", "none")
    $(".visualinformationtype").css("display", "flex")
    $(".visualinformationtype2").css("display", "flex")
    site = "01114500"
    console.log("click")
    function loading(){
      var url = api_path + site + apiKey
      loadJSON(url, gotData);
      
      function gotData(data){
        console.log(data);
        var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
        var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
        var vdischarge = data.value.timeSeries[0].values[0].value[0].value
        var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
        var vname = data.value.timeSeries[0].sourceInfo.siteName
        document.getElementById("name").innerHTML = "Site Name: " + vname;
        document.getElementById("discharge").innerHTML = "Discharge: " +   vdischarge + " ft3/s";
        document.getElementById("time").innerHTML = "Last Updated: " + vtime;
        intensity = 1 - ((406-vdischarge)/406);
        console.log(intensity +"intensity")
        console.log(vdischarge);
      }
      
    
      }
    loading();
    $(".p5").css("display", "block")
    console.log("show p5")
    ;
    setTimeout(function(){loadinput(intensity* 3000); }, 2000);
    loadimage(siteimg0111450); 
    setTimeout(function(){loop(); }, 2000);
  });

  marker1114500.addListener("mouseover", () => {
    $('.picture').prepend('<img src="/takemetoyourriver/Images/3.jpg"/>')
    console.log("hover")
  });

  marker1114500.addListener("mouseout", () => {
    $(".picture img:last-child").remove()
    console.log("hover")
  });

  const marker01115098 = new google.maps.Marker({
    position: river01115098,
    map: map,
  });

  var varaudio01115098 = document.getElementById("audio01115098");

  marker01115098.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker01115098.getPosition());
    audio01115098.play();
    varaudio01115098.volume = 0;
    $("#audio01115098").animate({volume: .3}, 3000)
    $(".visualtitletype").css("display", "none")
    $(".visualinformationtype").css("display", "flex")
    $(".visualinformationtype2").css("display", "flex")
    site = "01115098"
    function loading(){
      var url = api_path + site + apiKey
      loadJSON(url, gotData);
      
      function gotData(data){
        console.log(data);
        var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
        var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
        var vdischarge = data.value.timeSeries[0].values[0].value[0].value
        var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
        var vname = data.value.timeSeries[0].sourceInfo.siteName
        document.getElementById("name").innerHTML = "Site Name: " + vname;
        document.getElementById("discharge").innerHTML = "Discharge: " +   vdischarge + " ft3/s";
        document.getElementById("time").innerHTML = "Last Updated: " + vtime;
        intensity = 1 - ((72-vdischarge)/72);
        console.log(intensity +"intensity")
      }
      
    
      }
    loading();
    $(".p5").css("display", "block")
    console.log("show p5")
    ;
    setTimeout(function(){loadinput(intensity* 3000); }, 2000);
    loadimage(siteimg01115098); 
    setTimeout(function(){loop(); }, 2000);
  });

  marker01115098.addListener("mouseover", () => {
    $('.picture').prepend('<img src="/takemetoyourriver/Images/5.jpg"/>')
    console.log("hover")
  });

  marker01115098.addListener("mouseout", () => {
    $(".picture img:last-child").remove()
    console.log("hover")
  });


  var varaudio1116500 = document.getElementById("audio1116500");
  
  const marker1116500 = new google.maps.Marker({
    position: river1116500,
    map: map,
    
  });

  marker1116500.addListener("click", () => {
    map.setZoom(14);
    map.setCenter(marker1116500.getPosition());
    audio1116500.play();
    varaudio1116500.volume = 0;
    $("#audio1116500").animate({volume: .3}, 3000)
    $(".visualtitletype").css("display", "none")
    $(".visualinformationtype").css("display", "flex")
    $(".visualinformationtype2").css("display", "flex")
    site = "01116500"
    function loading(){
      var url = api_path + site + apiKey
      loadJSON(url, gotData);
      
      function gotData(data){
        console.log(data);
        var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
        var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
        var vdischarge = data.value.timeSeries[0].values[0].value[0].value
        var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
        var vname = data.value.timeSeries[0].sourceInfo.siteName
        document.getElementById("name").innerHTML = "Site Name: " + vname;
        document.getElementById("discharge").innerHTML = "Discharge: " +   vdischarge + " ft3/s";
        document.getElementById("time").innerHTML = "Last Updated: " + vtime;
        intensity = 1 - ((2160-vdischarge)/2160);
        console.log(intensity +"intensity")
      }
      
    
      }
    loading();
    $(".p5").css("display", "block")
    console.log("show p5")
    ;
    setTimeout(function(){loadinput(intensity* 3000); }, 2000);
    loadimage(siteimg01116500); 
    setTimeout(function(){loop(); }, 2000);
    
    
  });

  marker1116500.addListener("mouseover", () => {
    $('.picture').prepend('<img src="/takemetoyourriver/Images/4.jpg"/>')
    console.log("hover")
  });

  marker1116500.addListener("mouseout", () => {
    $(".picture img:last-child").remove()
    console.log("hover")
  });
  

  map.addListener("click", () => {
    center: river1115170,
    map.setZoom(10);
    map.setCenter(marker1115120.getPosition());
    $(".visualinformationtype").css("display", "none")
    $(".visualinformationtype2").css("display", "none")
    $(".visualtitletype").css("display", "flex")

    if ( varaudio01115098.volume > 0){
      varaudio01115098.volume = .3;
    $("#audio01115098").animate({volume: 0}, 3000)
    }
    
    if ( varaudio1115170.volume > 0){
      varaudio1115170.volume = .3;
      $("#audio1115170").animate({volume: 0}, 3000)
      console.log("greater")
    }

    if ( varaudio1114500.volume > 0){
      varaudio1114500.volume = .3;
      $("#audio1114500").animate({volume: 0}, 3000)
      console.log("greater")
    }

    if ( varaudio1115120.volume > 0){
      varaudio1115120.volume = .5;
      $("#audio1115120").animate({volume: 0}, 3000)
      console.log("greater")
    }

    if ( varaudio1116500.volume > 0){
      varaudio1116500.volume = .5;
      $("#audio1116500").animate({volume: 0}, 3000)
      console.log("greater")
    }

    noLoop()
  });



}
