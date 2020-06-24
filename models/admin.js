const mongoose = require('mongoose');
const adminlogin = mongoose.Schema({ 
    username: String,
    password: String
});

const adminlogin11 = mongoose.model('adminlogins', adminlogin);
module.exports = adminlogin11;