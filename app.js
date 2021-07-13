'use strict'

const express = require('express')

const app = express()

require('./configurationdb/configdb')

const Visitor = require('./models/visitor')

app.use(express.urlencoded({extended:true}))


app.get('/', async (req, res)=>{ 
    let name = req.query.name;
    if (!name || name.length === 0) {
        name = "Anónimo";
    }

    let date = new Date()
    
    let visitors = new Visitor({name: name, date: date})
    await visitors.save(function(err) {
        if (err) return console.error(err);
    });
  
    res.status(200).send(`<h1>El visitante fue almacenado con éxito</h1>`)
        
})







app.listen(3000, ()=>console.log("running in port 3000"))


