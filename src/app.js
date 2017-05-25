const express = require('express')
const helmet = require('helmet')
const roomsAPI = require('./api/rooms')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const wesh = msg => console.log(msg)
const port = process.env.PORT || 8000

app.use('/api/rooms/', roomsAPI)

app.listen(port, () => wesh(`listen on ${port}`))
