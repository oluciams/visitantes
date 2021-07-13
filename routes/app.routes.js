const router = require ('express').Router()

const Visitor = require('../models/visitor')

router.get('/', async (req, res)=>{ 
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

module.exports = router