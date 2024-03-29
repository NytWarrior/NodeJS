const express = require('express')
const app = express()

function m1(req, res, next){
    console.log('m1 pre-next')
    next()
    console.log('m1 post-next')
}
function m2(req, res, next){
    console.log('m2 pre-next')
    next()
    console.log('m2 post-next')
}
function m3(req, res, next){
    console.log('m3 pre-next')
    next()
    console.log('m3 post-next')
}
function m4(req, res, next){
    console.log('m4 pre-next')
    next()
    console.log('m4 post-next')
}

app.get('/hello', m1, m2, m3, (req, res)=>{
    console.log('pre-send')
    res.send('Hello World')
    console.log('post-send')
})

app.listen(4444, ()=>{
    console.log('Server started on http://localhost:4444')
})