/**
 * Created by carlen on 5/25/17.
 */
const R = require('ramda')

const mockResponse = (data, code=200) => ({ code, data })

const sendJson = fn => R.compose(fn, mockResponse)

module.exports = { sendJson }