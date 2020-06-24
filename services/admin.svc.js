const adminlogin11 = require('../models/admin');
const jwt = require('jsonwebtoken');
const config = require('../config');
class Admin{

    
    getprofile(id) {
        return emplyeemodel.findById(id, {loggeddate: 0 }).exec();
    }
    
    getEmployeelogin(username) {
        return adminlogin11.findOne({ username: username }).exec();
    }
    
    geEmployeeName(id) {
        return adminlogin11.findOne({ _id: id }, { _id: 0 }).exec();
    }
 
    updateEmployee(id, data) {
        return adminlogin11.findByIdAndUpdate(id,{ $set: data}).exec();
    }
    getemployeeByID(id) {
        return adminlogin11.findById(id).exec();
    }
    getAppliedList(name) {
        return adminlogin11.findOne({ username: name }, { appliedjobs: 1 }).exec();
    }
    

}

module.exports = new Admin();