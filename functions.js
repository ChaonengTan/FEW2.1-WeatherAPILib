// function getWeather(apiKey, zip, units = 'imperial', callback) {
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     fetch(path)
//       .then(res => res.json())
//       .then(json => {
//         callback(json)
//       })
//       .catch(err => console.log(err.message))
// }
function getWeather(path) {
  return fetch(path)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}
function getWeatherZip(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  getWeather(path);
}
function getWeatherGeo(apiKey, lat, lon, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  getWeather(path);
}
function getWeatherCity(apiKey, city, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=${units}`;
  getWeather(path);
}
// async function getWeather(apiKey, zip, units = 'imperial') {
//   const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//   try{
//     console.log(path)
//     const response = await fetch(path)
//     const json = await response.json()
//     return json
//   }catch{
//     return err
//   }
// }
function formatJson(json) {
  return {
    temp: json.main.temp,
    humidity: json.main.humidity,
    feelsLike: json.main.feels_like,
    coord: json.coord,
    country: json.sys.country,
    city: json.name,
    weather: json.weather[0].main,
    description: json.weather[0].description,
    windspeed: json.wind.speed,
  };
}
function obtainWeather(path) {
  return fetch(path)
    .then((res) => res.json())
    .then((json) => formatJson(json))
    .catch((err) => console.log(err.message));
}
function obtainWeatherZip(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  obtainWeather(path);
}
function obtainWeatherGeo(apiKey, lat, lon, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  obtainWeather(path);
}
function obtainWeatherCity(apiKey, city, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=${units}`;
  obtainWeather(path);
}
export {
  getWeatherZip,
  obtainWeatherZip,
  getWeatherGeo,
  obtainWeatherGeo,
  getWeatherCity,
  obtainWeatherCity,
};
