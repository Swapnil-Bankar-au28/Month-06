require('dotenv').config();
const mongoose = require('mongoose')

const DB = "mongodb+srv://SwapnilUser:FG8NLIaSsDaRk57G@cluster0.zzva0.mongodb.net/?retryWrites=true&w=majority"

async function initMongoDB() {
    await mongoose.connect(DB, (err) => {
        if (err) {
            console.log("Error in connecting to DB")
        } else {
            console.log("successfully connected to DB")
        }
    })
}

module.exports =
    initMongoDB