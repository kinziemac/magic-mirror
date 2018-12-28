// const request = require('request');

// const weatherText = () => {

//     const apiKey = "7d5c18e19883e2fcac0abc6d64167628";
//     const city = "Vancouver";
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

//     request(url, function (err, response, body) {
//         if(err){
//             res.render('index', {weather: null, error: 'Error, please try again'});

//         } else {
//             const weather = JSON.parse(body)
//             const weatherString = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//             return weatherString
//         }
//     })
// }
class WeatherStore {
    getWeather() {
        const apiKey = "7d5c18e19883e2fcac0abc6d64167628";
        const city = "Vancouver";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

        return new Promise((resolve, reject) => {
        fetch(url)
            .then(results => {
            return results.json()
            })
            .then(data => {
            resolve(data)
            })
            .catch(err => {
            reject(err)
            })
        })
    }

}

const weatherStore = new WeatherStore()
export default weatherStore
