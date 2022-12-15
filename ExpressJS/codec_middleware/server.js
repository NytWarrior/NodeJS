const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res, next){


    next()
}

function decodeQueryBase64(req, res, next){
    for(let q in req.query){
        console.log(req.query[q])
        let data = req.query[q]
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQueryParams, decodeQueryBase64, (req, res)=>{
    console.log(req.query)
    res.send('======== eval result ========')
})

app.listen(4545, ()=>{
    console.log('Server started on http://localhost:4545')
})