//imported express module
const express = require('express');
const cors = require('cors');
//executing express
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
var fs = require('fs');


// //middlewares - function that runs when route is visited
//converting posted data to json
app.use(bodyParser.json());
//allows incoming API calls to not be blocked
app.use(cors());


//importing every route from hope1.js 
const hope1Route = require('./routes/hope1');

//using imported routes
app.use('/hope1', hope1Route)



//creating routes
app.get('/', (req,res) => {
    fs.readFile('./index.html', null, (error, data) =>{
        if (error){
            res.writeHead(404);
            res.write('file not found')
        }
        else{
            res.write(data);
        }
        res.end();
    })
});

app.get('/', (req,res) => {
    fs.readFile('./index.html', null, (error, data) =>{
        if (error){
            res.writeHead(404);
            res.write('file not found')
        }
        else{
            res.write(data);
        }
        res.end();
    })
});

// app.get('/hope1', (req,res) => {
//     res.send('we are on this posts')
// });


//connecting to my database
mongoose.connect('mongodb+srv://tyson-unce:edu3vFuL59NerLj@nodetut.oqzjc.mongodb.net/nodetut', () =>{
    console.log('Successfully connected to DB')
})


//how do we start listening to the server
app.listen(4000, (err) =>{
    if(err){
        console.log('uh oh, there seems to be a problem')
    }
    console.log('All good on port 4000')
});

