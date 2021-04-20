// function getWeather(apiKey, zip, units = 'imperial', callback) {
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     fetch(path)
//       .then(res => res.json())
//       .then(json => {
//         callback(json)
//       })
//       .catch(err => console.log(err.message))
// }
function getWeather(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  return fetch(path)
    .then(res => res.json())
    .catch(err => console.log(err.message))
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
function obtainWeather(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  return fetch(path)
    .then(res => res.json())
    .then(json => json = {
        'temp': json.main.temp,
        'humidity': json.main.humidity,
        'feelsLike': json.main.feels_like,
        'coord': json.coord,
        'country': json.sys.country,
        'city': json.name,
        'weather': json.weather[0].main,
        'description': json.weather[0].description,
        'windspeed': json.wind.speed
    })
    .catch(err => console.log(err.message))
}
export {
  getWeather,
  obtainWeather,
}