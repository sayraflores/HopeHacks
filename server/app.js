//imported express module
const express = require('express');
const cors = require('cors');
//executing express
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//allows incoming API calls to not be blocked
app.use(cors());





// //middlewares - function that runs when route is visited
// app.use('/hope1', ()=>{
//     console.log('hello, tthis is a middle ware running')
// })

//converting posted data to json
app.use(bodyParser.json());


//importing every route from hope1.js 
const hope1Route = require('./routes/hope1');

//using imported routes
app.use('/hope1', hope1Route)



//creating routes
app.get('/', (req,res) => {
    res.send('we are on home')
});

// app.get('/hope1', (req,res) => {
//     res.send('we are on this posts')
// });


//connecting to my database
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Successfully connected to DB')
})


//how do we start listening to the server
app.listen(4000, (err) =>{
    if(err){
        console.log('uh oh, there seems to be a problem')
    }
    console.log('All good on port 4000')
});

