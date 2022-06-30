const express = require('express');
const HopeDb = require('../models/HopeDb');

const router = express.Router();

const Post = require('../models/HopeDb');
//making routes outside of module for cleanliness to export them into another file


router.get('/', (req,res) => {
    res.send('we are on this page')
});
//turning the posts data into a new post, then saving it to our database
router.post('/', (req, res) => {
    const post = new HopeDb({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    //this returns a promsie
    .then(data => {
        //responding with a json
        res.json(data);
    })
    .catch(err => {message: err});
});


// router.get('/specific', (req,res) => {
//     res.send('specific post')
// });

module.exports = router;