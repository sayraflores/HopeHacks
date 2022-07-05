//imported express module
const express = require('express');
const cors = require('cors');
//executing express
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
var fs = require('fs');
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
// app.set('views', __dirname + '/views')

// //middlewares - function that runs when route is visited
//converting posted data to json
app.use(bodyParser.json());
//allows incoming API calls to not be blocked
app.use(cors());


//importing every route from hope1.js 
const hope1Router = require('./routes/hope1');

//using imported routes
app.use('/', hope1Router)





app.get('/hope1', (req,res) => {
    res.send('we are on this posts')
});


//connecting to my database
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Successfully connected to DB')
})


//how do we start listening to the server
app.listen(port, (err) =>{
    if(err){
        console.log('uh oh, there seems to be a problem')
    }
    console.log('All good on port 8080')
});

