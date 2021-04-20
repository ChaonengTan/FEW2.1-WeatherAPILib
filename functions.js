// function getWeather(apiKey, zip, units = 'imperial', callback) {
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     fetch(path)
//       .then(res => res.json())
//       .then(json => {
//         callback(json)
//       })
//       .catch(err => console.log(err.message))
// }
// function getWeather(apiKey, zip, units = 'imperial') {
//   const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//   return fetch(path)
//     .then(res => res.json())
// }
async function getWeather(apiKey, zip, units = 'imperial') {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  try{
    console.log(path)
    const response = await fetch(path)
    const json = await response.json()
    return json
  }catch{
    return err
  }
}
export {
  getWeather
}