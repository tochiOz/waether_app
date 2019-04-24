const request = require('request')
const axios = require('axios')
const chalk = require('chalk')

const tempUrl = 'https://api.darksky.net/forecast/46142c7bcb43c7e4cbfdd7273312a1d0/37.8267,-122.4233?units=si'
const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVlbG9wZXIiLCJhIjoiY2p1dmhhdnJiMDFtOTRlcXIzam13OW1iayJ9.WZDMLXn5ToFglfiu3NpXmQ'

request({ url: tempUrl }, (err, res) => {
    if (res) {
        const data = JSON.parse(res.body)

        const temp = data.currently.temperature

        console.log(chalk.inverse.green('It is currently ' + temp + ' degrees out. There is a 60% chance of rain'))
    } else {
        console.log(err)
    }
})

request({ url: locationUrl, json: true }, (err, res) => {
    if (res) {

        const location = res.body.features[0].place_name
        const latitude = res.body.features[0].center[1]
        const longitude = res.body.features[0].center[0]

        console.log(chalk.red(location + ', cordinates: ' + latitude + ', ' + longitude))
    } else {
        console.log(err)
    }
})