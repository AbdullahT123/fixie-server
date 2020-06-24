const drivermodel = require('../models/driver.model');
class Recruiter {
    getRecruiters() {
        return drivermodel.find().exec();
    }
    checkRecruiter(companyname) {
        return drivermodel.findOne({ companyName: companyname }).exec();
    }
    addRecruiter(data) {
        let recruiter = new drivermodel(data);
        recruiter.save();
    }
    searchRecruiter(companyname) {
        return drivermodel.findOne({ companyName: companyname }, { companyId: 1, companyName: 1 }).exec();
    }
    loginrecruiters(companyname) {
        return drivermodel.findOne({ companyName: companyname }).exec();
    }
    updateRecruiter(id, data) {
        return drivermodel.findByIdAndUpdate(id, { $set: data }).exec();
    }
    getRecruiterName(id) {
        return drivermodel.findOne({ _id: id }, { companyName: 1, phone : 1 , _id: 0 }).exec();
    }
    getRecruiterID(id) {
        return drivermodel.findOne({ _id: id }).exec();
    }
    getSeekersList(id) {
        return drivermodel.findOne({ _id: id }, { appliedPeople: 1, _id: 0 }).exec();
    }
}

module.exports = new Recruiter();