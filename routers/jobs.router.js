const express=require('express');
const router=express.Router();
const jobsmodel = require('../models/jobs.model');
const empmodel = require('../models/employee.model');
const recmodel = require('../models/recruiter.model');
const drimodel = require('../models/driver.model');
const jobscntrl=require('../controllers/jobs.cntrl');
router.post('/postjob',jobscntrl.postnewjob);
router.get('/getjobs',jobscntrl.getjobs);
router.get('/jobsdate',jobscntrl.getjobsBydate);
router.get('/getjobs/:name',jobscntrl.getjobsbyname);
router.post('/updaterepairer', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairer : req.body.repairer} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updaterepairers', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairer : req.body.repairer} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.get('/getcustomer', function(req, res){
    
	recmodel.find({}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})
router.get('/getrepairer', function(req, res){
    
	empmodel.find({}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})
router.get('/getdriver', function(req, res){
    
	drimodel.find({}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.post('/updatedri', function(req, res){
    empmodel.updateOne({_id : req.body._id},{driver : req.body.driver} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updaterecdri', function(req, res){
    recmodel.updateOne({_id : req.body._id},{driver : req.body.driver} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});


router.post('/postedjob', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{postedjobs : req.body.postedjobs} , function(err, data){
        console.log(data)
        return res.status(200).json({status : 200, data: data});
    });
});


router.get('/getRepairer', function(req, res){
    
	jobsmodel.find({repairer : "true"}, function(err, data){
        
        
        return res.status(200).json({
            status : 200,
            data: data
        
        });
    });
   
})
router.get('/getrepJobs', function(req, res){
    
	jobsmodel.find({repairer : "true"}, function(err, data){
        
        
        return res.status(200).json({
            status : 200,
            data: data
        
        });
    });
   
})

router.get('/getdrivers', function(req, res){
    
	jobsmodel.find({drivers : "true"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.get('/getpaymentJobs', function(req, res){
    
	jobsmodel.find({driverpayment : "true"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.get('/getalljobs', function(req, res){
    
	jobsmodel.find({}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.get('/getaddress/:id', function(req, res){
    
	recmodel.find({}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.get('/address/:id', function(req, res){
   
    
	recmodel.find({_id: req.body._id}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})

router.get('/getcustomeradd', function(req, res){
    
	recmodel.find({customeraddress : "true"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})
router.get('/getapply', function(req, res){
    
	jobsmodel.find({repairaccept : "true"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})
router.get('/completed', function(req, res){
    
	jobsmodel.find({repairerdone : "true"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})


router.post('/donejob', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairaccept : req.body.repairaccept} , function(err, data){
        console.log(data)
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/repairerdone', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairerdone : req.body.repairerdone} , function(err, data){
        console.log(data)
        return res.status(200).json({status : 200, data: data});
    });
});

router.get('/applydrijobs', function(req, res){
    
	jobsmodel.find({driverappacc : "Accepted"}, function(err, data){
        console.log(data)
        return res.status(200).json({
            status : 200,
            data: data,

        });
	});
})


router.post('/updaterepusername', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{username : req.body.username} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updateuser', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{user : req.body.user}, function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updatephone', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{phone : req.body.phone}, function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updatedriname', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driname : req.body.driname}, function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updatealluser', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{mobile : req.body.mobile}, function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updaterepacc', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{repairaccept : req.body.repairaccept} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updaterepaddress', function(req, res){
    empmodel.updateOne({_id : req.body._id},{repaireraddress : req.body.repaireraddress} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updatedrivers', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{drivers : req.body.drivers} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});
router.post('/updatedriapply', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driverappacc : req.body.driverappacc} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});


router.post('/updatecustomer', function(req, res){
    recmodel.updateOne({_id : req.body._id},{customeraddress : req.body.customeraddress} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});


router.post('/updatedelpayment', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driverpayment : req.body.driverpayment} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});


router.post('/updatecompanyname', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{industryType : req.body.industryType} , function(err, data){
        console.log(data);
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updatedriverspayment', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{driverpayment : req.body.driverpayment} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});

router.post('/updatedripayment', function(req, res){
    jobsmodel.updateOne({_id : req.body._id},{drivers : req.body.drivers} , function(err, data){
        return res.status(200).json({status : 200, data: data});
    });
});




router.delete('/:id', (req ,res ,next)=>{
    jobsmodel.findByIdAndRemove({_id : req.params.id}, (err, msg) => {
        if (err) {
            
            return res.status(500).json({
                title: "An Internal Server Error Occured",
                error: err
            })
        }else{
            return res.status(200).json({status : 200});
        }
    })
});

router.delete('/customer/:id', (req ,res ,next)=>{
    recmodel.findByIdAndRemove({_id : req.params.id}, (err, msg) => {
        if (err) {
            
            return res.status(500).json({
                title: "An Internal Server Error Occured",
                error: err
            })
        }else{
            return res.status(200).json({status : 200});
        }
    })
});
router.delete('/repairer/:id', (req ,res ,next)=>{
    empmodel.findByIdAndRemove({_id : req.params.id}, (err, msg) => {
        if (err) {
            
            return res.status(500).json({
                title: "An Internal Server Error Occured",
                error: err
            })
        }else{
            return res.status(200).json({status : 200});
        }
    })
});

router.delete('/driver/:id', (req ,res ,next)=>{
    drimodel.findByIdAndRemove({_id : req.params.id}, (err, msg) => {
        if (err) {
            
            return res.status(500).json({
                title: "An Internal Server Error Occured",
                error: err
            })
        }else{
            return res.status(200).json({status : 200});
        }
    })
});

module.exports=router;
