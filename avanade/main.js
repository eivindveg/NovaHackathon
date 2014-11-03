
var positions;
var vehicles = [];
var assignments;
var map;

function onLoad() {
    GetMap();
    populateMap();
}


function GetMap()
{   

    map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), 
				     {credentials: "ArN_71lhhNDJN7Nc0zaNI5wX2zFgqkErgfZJTLXNWU78-WYpMD6CK9a2Q25RUpCo",
				      center: new Microsoft.Maps.Location(45.5, -122.5),
				      mapTypeId: Microsoft.Maps.MapTypeId.road,
				      zoom: 7});
}


function sortByProperty(array, propertyName) {
    return array.sort(function (a, b) {
        return a[propertyName] > b[propertyName];
    });
}

function addVehicleToMap(d)
{
    console.log(d);
    var b = new Microsoft.Maps.Location(d.latitude, d.longitude);
    var pin = new Microsoft.Maps.Pushpin(
	b, {text: d.vehicleId}
    );
    map.entities.push(pin);
    map.setView({center: b})
}

function addVehiclePath(id)
{
    var arr = [];
    for(var i=0; i < vehicles[id].length; ++i) {
	arr[i] = new Microsoft.Maps.Location(vehicles[id][i].latitude,
					     vehicles[id][i].longitude);
    }
    
    var l = new Microsoft.Maps.Polyline(arr);
    map.entities.push(l);
}



function populateMap () {
    $.getJSON("http://novatransport.azurewebsites.net/api/vehiclelocations",
	      {apiKey:"a59c8fc125ca463a85433e6ef01190fe",
   	      },
	      function(data) {
		  positions = data;

		  //sortByProperty(data, "time");



		  for(var i=0; i < positions.length; ++i) {
		      id = positions[i].vehicleId; 
		      if(!vehicles[id])
			  vehicles[id] = []
		      vehicles [id].push(positions[i]);
		  }

		  for(var i=0; i < vehicles.length; ++i)
		      if(vehicles[i]) {
			  addVehicleToMap(vehicles[i][0]);
		      }

	      });
    

    
    


}

