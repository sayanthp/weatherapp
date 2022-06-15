//call external apis for fetching
// client ip address
// weather data corresponding to that ip


function getIP(){
    fetch("https://api.ipdata.co")
    .then(res => {
        console.log(res.ip);
        return res.ip;
  })
  .catch(err => console.log(err))
}

function getWeatherData(){
    var api_key = "492531fe77484f9bab7155922221506";
    var ipAddress = getIP();
    fetch("https://api.weatherapi.com/v1/forecast.json?key="+api_key+"&q="+ipAddress+"&days=7")
    .then(res => {
        return res;
    })
    .catch(err => console.log(err))
}

  