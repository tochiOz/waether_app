const moment = require('moment')
const uuidv4 = require('uuid').v4
const pool = require('../db_connect')

const contactCreate = {
    /**
     * 
     * Create a Contact controller
     */

    contactConnect(req, res) {
        const text = `INSERT INTO 
        weathercontact( id, name, email, number, message, created_date ) 
        VALUES($1, $2, $3, $4, $5, $6) returning *`

        const values = [
            uuidv4(),
            req.body.name,
            req.body.email,
            req.body.number,
            req.body.message,
            moment(new Date())
        ]

        pool.query(text, values)
        .then((data) => {
            return res.status(200).json({
                status: "Message Sent",
                message: data.rows
            })
        })
        .catch((e) => {
            return res.status(400).send(e.message)
        })
    }
}

module.exports = contactCreate