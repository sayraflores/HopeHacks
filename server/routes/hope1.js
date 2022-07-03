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

//getting a specific post, in this case, 'EntryID' will be any value added after localhost4000/hope1
router.get('/:EntryID', async (req, res) => {
    try{
    //this method allows us to find a particular entry by it's id, this is good because each entry is given it's own unique id
    const entry = await Post.findById(req.params.EntryID);
    res.json(entry);
    }
    catch(err){
        res.json({message: err})
    }
})


//deleting a post
router.delete('/:EntryID', async (req, res) =>{
    try{
    //this method removes an entry, we're specifying we want to remove an entry based on the id, which will be the "EntryID"
    const deletedEntry = await Post.remove({_id: req.params.EntryID});
    res.json(deletedEntry)
    }
    catch(err){
        res.json({message: err})
    }

})


//updating a post
router.patch('/:EntryID', async (req, res) =>{
    try{
    //this method allows us to update an entry, it takes an identiier, and the actaul proerties you want to update
    const updatedEntry = await Post.updateOne(
        {_id: req.params.EntryID}, 
        {$set: {Year: req.body.year}});
        res.json(updatedEntry);
    }
    
    catch(err){
            res.json({message: err})
    }
})

module.exports = router;