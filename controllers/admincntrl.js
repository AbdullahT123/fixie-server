const adminsvc=require('../services/admin.svc');
const adminlogin11 = require('../models/admin');
const jwt = require('jsonwebtoken');
const admicntrl=
{
   
    register: async function(req,res){
        try{
            let data=req.body;
            let user=await adminsvc.insertdata(data);
            console.log(user);
            if(user){
                res.send("inserted ").stattus(200);
            }

        }
        catch(er){

        }
    },

    adminlogin: async function (req, res) {
        adminlogin11.findOne({username : req.body.username}, (err, user) => {
            if(err){
                return res.status(500).json({
                    title : 'Internal Server Error',
                    error : err
                })
            }
            if(!user){
                return res.status(401).json({
                    status: 0, data: { message: 'Invalid username/password' }
                })
            }
            if(!req.body.password==user.password){
                return res.status(401).json({
                    status: 0, data: { message: 'Invalid username/password' }
                })
            }
            const token = jwt.sign({user : user}, config.secret, {expiresIn : 3600});
             res.status(201).json({
                status: 1, data: { username: req.body.username, token: token }
            })
        })
    },

}

module.exports=admicntrl;