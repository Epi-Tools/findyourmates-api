const express = require('express')
const router = express.Router()
const { mates } = require('../utils/config')
const { sendJson, saveRedisThenRes, getRedisThenRes } = require('../utils/response')

router.get('/', (_, res) => getRedisThenRes(res.json.bind(res))(mates))

module.exports = router