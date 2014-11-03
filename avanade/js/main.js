var baseUrl = "http://novatransport.azurewebsites.net/api/";
var apiKey = "a59c8fc125ca463a85433e6ef01190fe";
var vehicles;

function getAllVehicles() {
    var data = {};
    data['apiKey'] = apiKey;
    jQuery.get(baseUrl + "vehicles", data, function(jqXHR) {
        vehicles = data;
    });
}
function start() {
    var map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {credentials: 'AiWyc3qg7x06GyClADS6IMcvlJMeD9TIeuYSf3XFlY5slfeNQUBlxj4yZMIxb1rp'});

    var vehicles = getAllVehicles();
}


function start() {
    var map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {credentials: 'AiWyc3qg7x06GyClADS6IMcvlJMeD9TIeuYSf3XFlY5slfeNQUBlxj4yZMIxb1rp'});


}
