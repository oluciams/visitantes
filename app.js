'use strict'

const express = require('express')
const mongoose = require('mongoose')

const app = express()

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




mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('db connected')})   

app.listen(3000, ()=>console.log("running in port 3000"))


