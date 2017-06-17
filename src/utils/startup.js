const redis = require('./redis')
const { set, send } = require('./redisfn')

const initMates = () => set('mates', JSON.stringify([]))

const flush = () => send('FLUSHALL')

const initializeRedis = () => new Promise((s, f) => flush()
    .then(initMates)
    .then(s)
    .catch(f))

module.exports = { initializeRedis }