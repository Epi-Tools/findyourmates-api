const express = require('express')
const router = express.Router()
const roomsInfo = require('../utils/roomsInfo')
const { sendJson } = require('../utils/sender')

router.get('/', (req, res) => sendJson(res.json.bind(res))(roomsInfo))

module.exports = router