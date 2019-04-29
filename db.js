const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('Connected to db')
})

//create contact table
const createContactTable = () => {
    const queryText =
    `
    CREATE TABLE IF NOT EXISTS
    weatherContact(
        id UUID PRIMARY KEY,
        name   VARCHAR,
        email VARCHAR(200) UNIQUE NOT NULL,
        number VARCHAR(128) NOT NULL,
        message TEXT NOT NULL,
        created_date TIMESTAMP
    )
    `

    pool.query(queryText).then((res) => {
        console.log(res)
        pool.end()
    }).catch(e => {
        console.log(e)
        pool.end()
    })
}

pool.on('remove', () => {
    console.log('Client Removed')
    process.exit(0)
})

module.exports = createContactTable

require('make-runnable')