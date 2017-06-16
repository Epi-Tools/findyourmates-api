const { io } = require('../app')

const socket = () => {
    io.on('connection', client => {  
        console.lof('Client connected')

        client.on('join', data => {
            //console.log(data)
        })
    })
}

module.exports = socket