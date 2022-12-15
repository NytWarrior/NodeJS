const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send('<h1 style = "color:red;">Hello World </h1>')
})

app.get('/greet', (req, res)=>{
    let person = 'Guest'
    if(req.query.person)
        person = req.query.person
    
    res.send('Good Morning '+ person)
})

app.get('/:city/welcome', (req, res)=>{
    res.send('Welcome to ' + req.params.city + '!')
})

app.get('/:city/:greeting', (req, res)=>{
    res.send(req.params.greeting + ' to ' + req.params.city + '!')
})

app.get('/:person/:action', (req, res)=>{
    res.send('Thank You' + req.params.person + ' for ' + req.params.action + '!')
})

app.post('/greet', (req, res)=>{
    let person = 'Guest'
    console.log(req.body)
    if(req.body.person)
        person = req.body.person
    
    res.send('Good Evening '+ person)
})

app.get('/form', (req, res)=>{
    res.sendFile(__dirname + '/files/form.html')
})

app.listen(4444, ()=>{
    console.log('server started on http://localhost:4444')
})