const express = require('express');
const router = express.Router();
const driver123 = require('../models/driver.model');
const jobsmodel = require('../models/jobs.model');
const empmodel = require('../models/employee.model');
const recmodel = require('../models/recruiter.model');
const employeecntrl = require('../controllers/employee.cntrl');
myObj = new Object();


router.post('/adddriver', (req ,res ,next)=>{
    myObj.driverusername =req.body.driverusername;
    myObj.password=req.body.password;
    myObj.driveremail = req.body.driveremail;
    myObj.Hometown = req.body.Hometown;
    myObj.status = req.body.status;
    myObj.gender = req.body.gender;
    myObj.Nationality = req.body.Nationality;
    myObj.Language = req.body.Language;
    myObj.currentlocation = req.body.currentlocation;
    let driver = new driver123(myObj);
    return driver.save();
    
});
router.post('/updatedriver', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driver : req.body.driver}, {repairer : req.body.repairer}, function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.get('/getdriver', function(req, res){
    var v1 ="true";
	jobsmodel.find({driver : v1}, function(err, data){
        console.log(data)
        empmodel.find({repaireraddress : v1} , function(err ,data1){
            console.log(data1)
        
            recmodel.find({customeraddress : v1} , function(err ,data2){
                console.log(data2)
        return res.status(200).json({
            status : 200,
            data: data,
            data1: data1,
            data2:data2
            
        });
    })
    })
	});
})



router.post('/updatepayment', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{payment : req.body.payment} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updaterep', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairerapplied : req.body.repairerapplied} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updatedri', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driverapplied : req.body.driverapplied} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.get('/getpayment', function(req, res){
    var v1 ="true";
	jobsmodel.find({payment : v1}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data
        
        });
	});
})



router.post('/login' , employeecntrl.driverlogin);







module.exports = router;