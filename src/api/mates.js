const express = require('express')
const router = express.Router()
const matesInfo = require('../utils/matesInfo')
const { sendJson } = require('../utils/sender')

router.get('/', (req, res) => sendJson(res.json.bind(res))(matesInfo))

module.exports = router