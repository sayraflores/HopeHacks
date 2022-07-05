//imported express module
const express = require('express');
const cors = require('cors');
//executing express
const app = express();
//installing mongoose package for mongodb
const mongoose = require('mongoose');
//executing dotenv file for security
require('dotenv/config');
//bodyparser allows us to parse all of our posted data and convert it to json
const bodyParser = require('body-parser');
//initializing the port we will be using
var port = process.env.PORT || 8080;
//allows our ejs files to be viewed correctly
app.set('view engine', 'ejs');




// //middlewares - function that runs when route is visited
//converting posted data to json
app.use(bodyParser.json());
//allows incoming API calls to not be blocked
app.use(cors());
//allows the resources for static pages like css and js files to be used in ejs
app.use(express.static("public"));
//for linking our css properly in our ejs files
app.use("/css", express.static(__dirname + "public/css"));



//importing every route from hope1.js 
const hope1Router = require('./routes/hope1');

//using imported routes
app.use('/', hope1Router)




//testing to make sure our route works
app.get('/hope1', (req,res) => {
    res.send('we are on this posts')
});


//connecting to my database
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Successfully connected to DB')
})


//how we initialize our server
app.listen(port, (err) =>{
    if(err){
        console.log('uh oh, there seems to be a problem')
    }
    console.log('All good on port 8080')
});

