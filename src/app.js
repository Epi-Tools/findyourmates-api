const express = require('express')
const helmet = require('helmet')
const roomsAPI = require('./api/rooms')
const matesAPI = require('./api/mates')
const bodyParser = require('body-parser')
const cors = require('cors')
const _io = require('socket.io')

require('dotenv').config()

const app = express()
const server = require('http').createServer(app)

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const wesh = console.log

const PORT = process.env.PORT || 3000

app.use('/api/rooms/', roomsAPI)
app.use('/api/mates/', matesAPI)

const handleError = err => {
    wesh(err)
    process.exit(1)
}

const listenServer = app.listen(PORT, err => err ? handleError(err) : wesh(`App listen to ${PORT}`))
const io = _io(server)
module.exports = { io }
require('./socket/index')()