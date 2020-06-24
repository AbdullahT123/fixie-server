const mongoose=require('mongoose');
 const jobsschema=mongoose.Schema({
     jobRole:String,
     companyId:String,
     expRequired:String,
     skills:[String],
     educationalQualifications:String,
     jobDescription:String,
     jobType:String,
     repairer:String,
     repairerapplied:String,
     driverapplied:String,
     driver:String,
     drivers:String,
     driverpayment: String,
     location: String,
     phone:String,
     driname:String,
     companyname:String,
     repairerdone:String,
     user:String,
     mobile:String,
     repairaccept:String,
     driverappacc: String,
     username: String,
     postedjobs: String,
     payment:String,
     postedDate:{type:Date,default:Date.now()}

 });

 const jobsmodel=mongoose.model('jobs',jobsschema);
 module.exports=jobsmodel;