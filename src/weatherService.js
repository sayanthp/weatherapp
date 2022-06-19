
export const getWeatherData = (ipAddress) => {
    var api_key = "492531fe77484f9bab7155922221506";
    fetch("https://api.weatherapi.com/v1/forecast.json?key="+api_key+"&q="+ipAddress+"&days=7", {mode: "no-cors"})
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => console.log(err))
}

  