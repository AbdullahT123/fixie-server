var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const trueLog = require('true-log');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const mongoose = require('mongoose');

var app = express();


const publicrouter = require('./routers/publicrouters');
const privaterouter = require('./routers/privaterouters');
const contact = require('./routers/contact.router');
const jobsrouter = require('./routers/jobs.router');
const driverrouter = require('./routers/driver.router');
const adminrouter = require('./routers/admin.router');


//const authorization = require('./middlewares/middle');
var cors= require('cors');
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
  }));
  

app.use(express.static('uploads/'));
app.use(bodyParser.json());
const ws = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a' });
app.use(trueLog({ level: 'full', stream: ws }));
app.use('/public', publicrouter);
app.use('/private', privaterouter);
app.use('/jobs', jobsrouter);
app.use('/contact', contact);
app.use('/driver' , driverrouter);
app.use('/admin' , adminrouter);



//mongodb://localhost:27017/project
mongoose.connect('mongodb+srv://fixieUser:fixieUserPassword@cluster0-it3sl.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
    if (res) {
        console.log('DB1 Connected successfully');
    }
    else {
        console.log("Something error occured");
    }
});
   
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 3000, function () {
    console.log('Server runing on 3000 port');
})