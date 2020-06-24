const mongoose = require('mongoose');
const contact98 = mongoose.Schema({
    
    fname: String,
    lname: String,
    email:String,
    subject: String
});

const contact981 = mongoose.model('contact98', contact98);
module.exports = contact981;