const express = require('express')
const chalk = require('chalk')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, '../public')

//set helps us to set a value for a given express controller

app.set('view engine', 'hbs')
//hbs uses the view folder

app.use(express.static(publicPath))
//the render is used to render files from the views folder

app.get('/', (req, res) => {
    res.render("index", {
        title: "Weather-App",
        name: 'Tueloper'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        about: "About Weather-app"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "Weather-App is here to help You"
    })
})
const port = process.env.port || 7000

app.listen(port, () => {
    console.log(chalk.gray('App Server Running On Port: ' + port))
})