const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    console.log('Connection with socket id: ', socket.id)

    socket.on('login', (data) => {
        socket.join(data.username)
        socket.emit('logged_in')
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(5555, () => {
    console.log('Server started on http://localhost:5555')
})

