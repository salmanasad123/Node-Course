const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=16c3cad61506aecaf754dbeb390c7d12&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     const data = response.body.current;
//     console.log(
//       `It is currently ${data.weather_descriptions[0]} and ${data.temperature} degrees but feels like ${data.feelslike}`
//     );
//   }
// });

// Geocoding
// Address ->Lat/Long -> Weather

const geoCodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2xtYW4zNjAiLCJhIjoiY2tibHQ3em9pMWIycDJzbXlnYWVidzZuOCJ9.GQldKPtHEUqFEkZHu-Zp9A";

request({ url: geoCodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to geoCoding service");
  } else if (response.body.features.length === 0) {
    console.log("Unable to fetch location");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`Lat: ${latitude} Long: ${longitude}`);
  }
});
