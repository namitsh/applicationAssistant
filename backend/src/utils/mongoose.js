const mongoose = require('mongoose')
const { MONGO_URI } = require('../../config')

// TODO : ADD IN CONFIG FILE

const connectionURL = MONGO_URI

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("Connected to the database.")
}).catch((e)=>{
    console.log("Error occurred connecting to database:",e)
})

