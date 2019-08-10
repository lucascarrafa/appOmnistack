const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const server = express() //cria um servidor

mongoose.connect('mongodb+srv://lucascarrafa:lucascarrafa@cluster0-8nfrq.mongodb.net/myapp?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())

server.use(routes) //add modulo

server.listen(3333) //define a porta