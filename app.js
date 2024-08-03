const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12/employees'

const app = express()

mongoose.connect(url, {useNewUrlParser:true}).then(()=>{
    console.log('connected')
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/users')
app.use('/users',alienRouter)

app.listen(5000, () => {
    console.log('Server started')
})