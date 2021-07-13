'use strict'

const express = require('express')

const app = express()

const routes = require('./routes/app.routes')

require('./configurationdb/configdb')

app.use(express.urlencoded({extended:true}))

app.use('/', routes)







app.listen(3000, ()=>console.log("running in port 3000"))


