const mongoose = require('mongoose')


const Students = new mongoose.Schema({

    name: { type: String, required: true },
    rollNumber: { type: String, required: true },
    stadard: { type: String, required: true },
    section: { type: String, required: true },
    photoUrl: { type: String, required: true },
    line1: { type: String, required: true },
    line2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },

    parent: [{ name: { type: String, required: true }, phonNumber: { type: String, required: true }, email: { type: String, required: true }, occupation: { type: String, required: true }, designation: { type: String, required: true }, location: { type: String, required: true } }]
})



const StudentsName = mongoose.model('studentDB', Students)

module.exports = StudentsName