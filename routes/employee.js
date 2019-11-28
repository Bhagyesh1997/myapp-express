const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = `select id, name, email, address from employee`
    connection.query(statement,(error, data)=>{
        connection.end()
        if(error == null)
        {
            response.send(JSON.stringify(data));
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    })
})

module.exports = router