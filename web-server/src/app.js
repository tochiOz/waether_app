const express = require('express')
const chalk = require('chalk')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

const port = process.env.port || 7000

app.listen(port, () => {
    console.log(chalk.gray('App Server Running On Port: ' + port))
})