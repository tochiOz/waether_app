const request = require('request')
const axios = require('axios')
const chalk = require('chalk')

const url = 'https://api.darksky.net/forecast/46142c7bcb43c7e4cbfdd7273312a1d0/37.8267,-122.4233?units=si'

request({ url: url }, (err, res) => {
    if (res) {
        const data = JSON.parse(res.body)

        const temp = data.currently.temperature

        console.log(chalk.inverse.green('It is currently ' + temp + ' degrees out. There is a 60% chance of rain'))
    } else {
        console.log(err)
    }
})