const mongoose = require('mongoose');
const driverchema = mongoose.Schema({
    companyName: { type: String },
    password: String,
    appliedPeople:[Object],
    profileimage: { type: String },
    companyMail: String,
    industryType: String,
    yearsofExp: Number,
    About: String,
    phone:String,
    driver: String,
    customeraddress: String
});

const drivermodel = mongoose.model('driver', driverchema);
module.exports = drivermodel;