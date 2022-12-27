const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

let users = {
    'rajeev': 'Cartoon123'
}

io.on('connection', (socket) => {
    console.log('Connection with socket id: ', socket.id)

    socket.on('login', (data) => {
        if (users[data.username]) {
            if (users[data.username] == data.password) {
                socket.join(data.username)
                socket.emit('logged_in')
            }
            else {
                socket.emit('login_failed')
            }
        } else {
            users[data.username] = data.password
            socket.join(data.username)
            socket.emit('logged_in')
        }
        console.log(users)
    })

    socket.on('msg_send', (data) => {
        if (data.to) {
            io.to(data.to).emit('msg_reci', data)
        } else {
            socket.broadcast.emit('msg_reci', data)
        }
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(5555, () => {
    console.log('Server started on http://localhost:5555')
})

