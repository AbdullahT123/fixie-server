const mongoose = require('mongoose');
const recruiterschema = mongoose.Schema({
    companyName: { type: String },
    password: String,
    appliedPeople:[Object],
    profileimage: { type: String },
    companyMail: String,
    industryType: String,
    yearsofExp: Number,
    About: String,
    driver: String,
    customeraddress: String
});

const recruitermodel = mongoose.model('recruiter', recruiterschema);
module.exports = recruitermodel;