const { io } = require('../app')
const { mates } = require('../utils/config')
const { get, set } = require('../utils/redisfn')

const socket = () => {
    //TODO: (carlendev) handle client deconnection
    io.on('connection', client => {  
        console.log('client connected')

        client.on('join', data => {
            //TODO: (carlendev) disconnect the client
            if (data.name === undefined || data.room === undefined) return
            get(mates).then(e => {
                const redisMate = JSON.parse(e)
                if (!redisMate.length) data.id = 1
                else {
                    const id = e.id
                    data.id = ++e.id
                }
                redisMate.push(data)
                set(mates, JSON.stringify(redisMate))
            })
        })
    })
}

module.exports = socket