const { response } = require('express');
const http = require('http')
const fs = require('fs')
const port = 4000;

const server = http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html' })
    fs.readFile()
    res.write('Hello node')
    res.end()

})

server.listen(port, function(error){
    if (error){
        console.log('uh oh', error)
    }
    console.log(`Server is listening on port ${port}`)
})
