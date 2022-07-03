const express = require('express');
const HopeDb = require('../models/HopeDb');

const router = express.Router();

const Post = require('../models/HopeDb');
//making routes outside of module for cleanliness to export them into another file


//gets the data from all of the posts I've made
router.get('/', async (req,res) => {
    try{
         //.find is a built in mongoose method that will return all of the posts you've made
        const thisAPI = await Post.find();
        res.json(thisAPI);
    }
    catch(err){
        res.json({message: err})
    }
   
    
});
//submits a post to our database
router.post('/', async (req, res) => {
    const post = new HopeDb({
        year: req.body.year,
        co2: req.body.co2,
        co2_per_capita: req.body.co2_per_capita,
        oil_co2: req.body.oil_co2,
        oil_co2_per_capita: req.body.oil_co2_per_capita,
        co2_growth_prct: req.body.co2_growth_prct
    });
    //trying this block of code, if unsuccessful it will hit the catch block and return error message
    try{
        const savedPost = await post.save();
    res.json(savedPost);
    }
    catch(err){
        res.json({message: err})
    }
});


// router.get('/specific', (req,res) => {
//     res.send('specific post')
// });

router.get('/:')

module.exports = router;