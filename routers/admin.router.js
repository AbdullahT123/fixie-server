const express = require('express');
const router = express.Router();
const employeecntrl = require('../controllers/employee.cntrl');

const admincntrl=require('../controllers/admincntrl');
router.post('/login', employeecntrl.adminlogin);
router.post('/register', admincntrl.register);



module.exports = router;