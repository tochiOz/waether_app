const geocode = require('./utils/geocode')
const chalk = require('chalk')
const forcast = require('./utils/forcast')
const yargs = require('yargs')

// console.log(process.argv)

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address in the Terminal')
} else {
    geocode(address , (err, response) => {
        if (err) {
            return console.log(chalk.red('Error: ', err))
        } 
           
        forcast(response.latitude, response.longitude, (err, res) => {
            if (err) {
                return console.log('Error: ', err)
            }

            console.log(chalk.green('Data:', 'cordinates: ' + response.latitude + ', ' + response.longitude + ', ' + response.location))
            console.log(chalk.inverse.yellow('Weather Report: ' + res.summary, 'It is currently ' + res.temperature + ' degrees out and there is a ' + res.precipation + '%' + ' of rain.' ))
                            
        }) 
       
    })
}        