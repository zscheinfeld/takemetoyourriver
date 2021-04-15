var api_path = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites="
var site;
var vlat;
var vlong; 
var vtime; 
var vdischarge;

var apiKey = "&parameterCd=00060,00065&siteType=ST&siteStatus=all"

function setup() {
  let cnv = createCanvas(windowHeight,windowHeight);
  cnv.position(.25*windowWidth, 0, 'fixed');
  background (0)
  bg01115184 = loadImage('Images/01115184.jpg');
  bg01115183 = loadImage('Images/01115183.jpg');
  bg01115170 = loadImage('Images/01115170.jpg');
  bg01115114 = loadImage('Images/01115114.jpg');
  bg01115098 = loadImage('Images/01115098.jpg'); 
  bg01115110 = loadImage('Images/01115110.jpg'); 
  bg01115120 = loadImage('Images/01115120.jpg'); 
  bg01115114 = loadImage('Images/01115114.jpg'); 
  bg01115187 = loadImage('Images/01115187.jpg'); 
  
  
}


function draw() {
  // put drawing code here
}


function checklist() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "Site Number: " + x;
  site = x
  var url = api_path + site + apiKey
  loadJSON(url, gotData);

  function gotData(data){
    console.log(data);
    console.log(discharge + " discharge")
    console.log(data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude + " latitude")
    var vlat = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude
    var vlong = data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude
    var vdischarge = data.value.timeSeries[0].values[0].value[0].value
    var vtime = data.value.timeSeries[1].values[0].value[0].dateTime
    var vname = data.value.timeSeries[0].sourceInfo.siteName
    console.log(data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude + " longitude")
    console.log(data.value.timeSeries[1].values[0].value[0].dateTime+ " last update time")
    console.log("Site Name: " + data.value.timeSeries[0].sourceInfo.siteName) 
    document.getElementById("lat").innerHTML = "Latitude: " + vlat;
    document.getElementById("long").innerHTML = "Longitude: " + vlong;
    document.getElementById("discharge").innerHTML = "Discharge: " + vdischarge + " ft3/s";
    document.getElementById("time").innerHTML = "Last Updated: " + vtime;
    document.getElementById("name").innerHTML = "Site Name: " + vname;
    brightness = map(vdischarge, 0, 25, 0 ,100)
    var currentsite;
    if (site === "01115184"){
      background(bg01115184, brightness)
      
    }
    if (site === "01115183"){
      background(bg01115183, [brightness])
      
    }
    if (site === "01115170"){
      background(bg01115170, [brightness])
      
    }
    if (site === "01115114"){
      background(bg01115114, [brightness])
      
    }
    if (site === "01115098"){
      background(bg01115098, brightness)
      
    }
    if (site === "01115110"){
      background(bg01115110, brightness)
      
    }
    if (site === "01115120"){
      background(bg01115120, brightness)
      
    }
    if (site === "01115114"){
      background(bg01115114, brightness)
    
    }
    if (site === "01115187"){
      background(bg01115187, brightness)

    }
  }

}

