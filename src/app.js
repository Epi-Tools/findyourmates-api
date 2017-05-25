const express = require('express')
const helmet = require('helmet')
const roomsAPI = require('./api/rooms')
const app = express()

app.use(helmet())

const wesh = msg => console.log(msg)
const port = process.env.PORT || 8000

app.use('/api/rooms/', roomsAPI)

app.listen(port, () => wesh(`listen on ${port}`))
