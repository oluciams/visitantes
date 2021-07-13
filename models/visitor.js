'use strict'

const mongoose = require('mongoose')


const Schema = mongoose.Schema

const VisitorSchema = new Schema({
    name: String,
    date: String
})

module.exports = mongoose.model('Visitor', VisitorSchema)