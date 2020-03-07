const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/99b648615c459f6d7e2608b43d758ede/' + latitude +','+ longitude + '?units=si&lang=el'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find Location!',undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' Θερμοκρασία: ' + response.body.currently.temperature + 'C , Πιθανότητα βροχής ' + response.body.currently.precipProbability + '% .')
        }
    })
}

module.exports = forecast
