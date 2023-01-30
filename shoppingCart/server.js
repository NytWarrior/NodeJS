const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)


app.listen(4444, () => {
    console.log("Server started at http://localhost:4444")
})