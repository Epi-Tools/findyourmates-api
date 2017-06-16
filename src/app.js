const express = require('express')
const helmet = require('helmet')
const roomsAPI = require('./api/rooms')
const matesAPI = require('./api/mates')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const wesh = console.log

const port = process.env.PORT || 3000

app.use('/api/rooms/', roomsAPI)
app.use('/api/mates/', matesAPI)

app.listen(port, () => wesh(`listen on ${port}`))
