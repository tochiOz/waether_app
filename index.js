const geocode = require('./utils/geocode')
const chalk = require('chalk')
const forcast = require('./utils/forcast')
const yargs = require('yargs')

// console.log(process.argv)

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address in the Terminal')
} else {
    geocode(address , (err, { latitude, longitude, location}) => {
        if (err) {
            return console.log(chalk.red('Error: ', err))
        } 
           
        forcast(latitude, longitude, (err, { summary, temperature, precipation}) => {
            if (err) {
                return console.log('Error: ', err)
            }

            console.log(chalk.green('Data:', 'cordinates: ' + latitude + ', ' + longitude + ', ' + location))
            console.log(chalk.inverse.cyan('Weather Report: ' + summary, 'It is currently ' + temperature + ' degrees out and there is a ' + precipation + '%' + ' of rain.' ))
                            
        }) 
       
    })
}        