const { io } = require('../app')
const { mates } = require('../utils/config')
const { get, set } = require('../utils/redisfn')

const socket = () => {
    const connections = {}

    io.on('connection', client => {  
        console.log('client connected')
        client.on('join', data => {
            if (data.name === undefined || data.room === undefined) {
                delete connections[ client.id ]
                return
            }
            get(mates).then(e => {
                const redisMate = JSON.parse(e)
                data.id = client.id
                connections[ client.id ] = { socket: client, id: data.id }
                redisMate.push(data)
                set(mates, JSON.stringify(redisMate))
            })
        })

        client.on('disconnect', () => {
            get(mates).then(e => {
                const redisMate = JSON.parse(e)
                const newRedisMate = redisMate.filter(e => e.id !== client.id)
                set(mates, JSON.stringify(newRedisMate))
            })
            delete connections[ client.id ]
            console.log('Client disconnected')
        })
    })
}

module.exports = socket