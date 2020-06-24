const express = require('express');
const router = express.Router();
const multer = require('multer');
const employeecntrl = require('../controllers/employee.cntrl');
const recruitercntrl = require('../controllers/recruiter.cntrl');
const drivercntrl = require('../controllers/driver.ctrl');
const employeemiddleware = require('../middlewares/middle');



router.post('/addemployee',employeecntrl.addemployees);
router.post('/employee/login', employeecntrl.employeelogin);
router.post('/addrecruiter',recruitercntrl.addrecruiters);
router.post('/adddrivers',drivercntrl.adddriver);
router.post('/recruiter/login', recruitercntrl.loginrecruiter);
router.post('/driver/login', drivercntrl.loginrecruiter);

module.exports = router;