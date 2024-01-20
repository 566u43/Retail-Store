const mongoose = require('mongoose')

const URL = 'mongodb+srv://kiran@cluster0.1zskgxo.mongodb.net/Retail-Store'
/*change this uRL*/


mongoose.connect(URL)



let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
