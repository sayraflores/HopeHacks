const mongoose = require('mongoose');

//making our mongoose schema
const hopeHacksSchema = mongoose.Schema({
    TBD: {
            type: String,
            required: true
    },
    TBD_1: {
        type: String,
        required: true
    },
    TBD_2:  {
        type: Date,
        default: Date.now
}
})

module.exports = mongoose.model('hopeHacks', hopeHacksSchema);