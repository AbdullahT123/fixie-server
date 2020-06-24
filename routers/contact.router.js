const express = require('express');
const router = express.Router();
const contact981 = require('../models/contact');
myObj = new Object();

router.post('/create', (req ,res ,next)=>{
    myObj.fname =req.body.fname;
    myObj.lname=req.body.lname;
    myObj.email = req.body.email;
    myObj.subject = req.body.subject;
    let employee = new contact981(myObj);
    return employee.save();
});

router.get('/getcontact', (req ,res ,next)=>{
    console.log("enter");
    contact981.find({}, function(err, data){
        
        return res.status(200).json({
            status : 200,
            data: data
        
        });
	});
});

router.delete('/:id', (req ,res ,next)=>{
    contact981.findByIdAndRemove({_id : req.params.id}, (err, msg) => {
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
module.exports = router;