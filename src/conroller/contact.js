const moment = require('moment')
const uuidv4 = require('uuid').v4
const pool = require('../routes/db_connect')

 /**
 * 
 * Create a Contact controller
 *  @param {object} req 
 *  @param {object} res
 *  @returns {object} contact object  
 */

const contactCreate = (req, res) => {
    
    const text = `INSERT INTO 
    weather_contact( id, full_name, email, number, message, created_date ) 
    VALUES($1, $2, $3, $4, $5, $6) 
    returning *`
    
    let values = [
        uuidv4(),
        req.body.full_name,
        req.body.email,
        req.body.number,
        req.body.message,
        moment(new Date())
    ]
    // return console.log(req.body)
    // console.log(JSON.stringify(values.req.body.full_name))
    // return console.log(req)   
    
    pool.query(text, values, (e, data) => {
        if (e) {
            res.status(400).send(e.message)
            // return res.redirect('/contact');
        } else {
            
            res.status(200).json({
                status: "Message Sent",
                message: data.rows
            })
        }
        // return res.redirect('/contact')
    })
       
    
}

module.exports = contactCreate